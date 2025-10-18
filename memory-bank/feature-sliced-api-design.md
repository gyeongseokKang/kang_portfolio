# Feature Sliced Api Design

## 1. Standard Roles in FSD Api Directory

```
slice/
  ├── api/
        ├── {name}-facade.ts
        ├── {name}-hooks.ts
        ├── {name}-query-keys.ts
        ├── {name}-raw-api.ts
```

만약 `features/auth` (name은 `auth`)

- `features/auth/api/auth-raw-api.ts`
- `features/auth/api/auth-facade.ts`
- `features/auth/api/auth-hooks.ts`
- `features/auth/api/auth-query-keys.ts`

### {name}-raw-api

Raw API 계층은 외부 또는 내부 리소스에 직접 접근하는 함수들을 포함하는 역할을 담당합니다. 이
계층에서는 axios, ky, 또는 native fetch API와 같은 HTTP 클라이언트 라이브러리를 사용할 수 있습니다.
또는 프로젝트에 통합된 사전 구성된 API 인스턴스(예: 사용자 정의 인터셉터, 기본 URL 또는 헤더)를
사용하는 것이 일반적입니다. 이 계층은 저수준 요청 로직을 추상화하고 상위 계층이 리소스 데이터를
사용할 수 있도록 깔끔한 인터페이스를 제공합니다.

#### 핵심 책임

- **순수한 API 통신**: HTTP/GraphQL 요청만 담당
- **DTO 직접 반환**: 데이터 변환 없이 서버 응답 그대로 반환
- **에러 전파**: 에러 처리는 상위 계층에 위임
- **타입 안전성**: 요청/응답에 대한 TypeScript 타입 정의

#### Example

**✅ Good**

```typescript
export async function fetchChatById({ id }: { id: string }) {
  try {
    const { data, error } = await supabase.from('Chat').select('*').eq('id', id).maybeSingle();

    if (error) {
      throw new ChatSDKError('bad_request:database', `[fetchChatById] ${error.message}`);
    }

    return data as ChatDTO;
  } catch (error) {
    throw new ChatSDKError('bad_request:database', `[fetchChatById] ${error}`);
  }
}
```

**✅ Good**

```ts
import Service from '@/shared/api/service';
import { FeatureListDTO } from '../model/feature.dto';

class FeatureRawApi extends Service {
  // GraphQL 쿼리 예시
  async getFeatureList(projectNo: number): Promise<FeatureListDTO> {
    const query = `
      query getFeatures {
        features(condition: {projectNo: {operator: "==", value: ${projectNo}}}) {
          content { id, name, status }
        }
      }`;
    return await this.graphQlApi<FeatureListDTO>('getFeatures', query, {});
  }
}

const featureRawApi = new FeatureRawApi();
export default featureRawApi;
```

**❌ Bad**

```ts
export async function fetchChatById({ id }: { id: string }) {
  try {
    const { data, error } = await supabase.from('Chat').select('*').eq('id', id).maybeSingle();

    if (error) {
      // ❌ 잘못된 방식: 하위 계층에서 직접 처리
      alert('데이터를 불러오지 못했습니다.'); // UI 처리
      console.error('Supabase 에러:', error); // 직접 출력
      return null; // 상위에 에러 전달 없음
    }

    return data as ChatDTO;
  } catch (error) {
    // ❌ 잘못된 방식: 예외를 숨김
    console.error('예외 발생:', error);
    return null;
  }
}
```

### {name}-facade

Facade 계층은 Raw API와 Hooks 사이의 중간 계층으로, DTO(Data Transfer Object)를 DO(Domain Object)로
변환하고 비즈니스 로직을 추상화하는 역할을 담당합니다. 이 계층은 Raw API의 복잡성을 숨기고, 상위
계층에 깔끔하고 사용하기 쉬운 인터페이스를 제공합니다. 또한 데이터 검증, 에러 핸들링, 그리고 Next.js
Server Actions와 같은 서버 사이드 로직도 처리합니다.

#### 핵심 책임

- **DTO → DO 변환**: 서버 응답을 도메인 객체로 변환
- **비즈니스 로직 추상화**: 복잡한 API 호출 로직을 단순화
- **데이터 검증 및 에러 핸들링**: 안전하고 신뢰할 수 있는 데이터 제공
- **Form Action 처리**: Next.js Server Actions 통합
- **API 응답 정규화**: 일관된 데이터 구조 제공
- **에러 경계**: 모든 에러를 이 계층에서 처리하고 상위로 전파하지 않음

#### 구현 패턴

**기본 데이터 변환 (에러 처리 포함)**

```typescript
import { featureFormSchema } from '../model/feature-schema';
import { FeatureDO } from '../model/feature.do';
import { FeatureDTO } from '../model/feature.dto';
import featureRawApi from './feature-raw-api';

/**
 * Get a list of features for a project converted to Domain Objects
 * @param projectNo Project number
 * @returns List of FeatureDO objects (빈 배열 반환 가능)
 */
const getFeaturesList = async (projectNo: number): Promise<FeatureDO[]> => {
  try {
    // Raw API 호출
    const response = await featureRawApi.getFeatures(projectNo);

    // 응답 구조 검증
    if (!response?.data?.features?.content) {
      console.error('Invalid feature response structure:', response);
      // 에러를 상위로 전파하지 않고 빈 배열 반환
      return [];
    }

    // DTO → DO 변환
    const featureListDO = response.data.features.content.map(
      (dto: FeatureDTO) => new FeatureDO(dto),
    );

    return featureListDO;
  } catch (error) {
    console.error('Error fetching features:', error);
    // ✅ 에러를 상위로 전파하지 않고 안전한 기본값 반환
    return [];
  }
};
```

**안전한 단일 아이템 조회**

```typescript
/**
 * Get a single feature by ID
 * @param featureId Feature ID
 * @returns FeatureDO or null if not found/error
 */
const getFeatureById = async (featureId: number): Promise<FeatureDO | null> => {
  try {
    const response = await featureRawApi.getFeatureById(featureId);

    if (!response?.data) {
      console.warn(`Feature not found: ${featureId}`);
      return null;
    }

    return new FeatureDO(response.data);
  } catch (error) {
    console.error(`Error fetching feature ${featureId}:`, error);
    // ✅ 에러 시 null 반환
    return null;
  }
};
```

**뮤테이션을 위한 성공/실패 명확한 반환**

```typescript
/**
 * Create a new feature
 * @param projectNo Project number
 * @param name Feature name
 * @param description Feature description
 * @returns boolean indicating success/failure
 */
const createFeature = async (
  projectNo: number,
  name: string,
  description?: string,
): Promise<boolean> => {
  try {
    await featureRawApi.createFeature(projectNo, name, description);
    return true;
  } catch (error) {
    console.error('Error creating feature:', error);
    // ✅ 명확한 실패 상태 반환
    return false;
  }
};

/**
 * 더 상세한 결과가 필요한 경우
 */
const createFeatureDetailed = async (
  data: CreateFeatureRequest,
): Promise<{
  success: boolean;
  data?: FeatureDO;
  errorCode?: string;
}> => {
  try {
    const response = await featureRawApi.createFeature(data);
    return {
      success: true,
      data: new FeatureDO(response),
    };
  } catch (error) {
    console.error('Error creating feature:', error);
    return {
      success: false,
      errorCode: 'CREATION_FAILED',
    };
  }
};
```

**Form Action 처리 (Next.js Server Actions)**

```typescript
const createFeatureFormAction = async (
  _: unknown,
  formData: FormData,
): Promise<{
  errors: Record<string, string[]>;
  values: Record<string, string>;
  success?: boolean;
}> => {
  try {
    // Form 데이터 추출
    const formValues = {
      projectNo: Number(formData.get('projectNo')),
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      status: 'active',
    };

    // 복잡한 데이터 파싱 (예: JSON 배열)
    let permissions: string[] = [];
    const permissionsString = formData.get('permissions') as string;
    try {
      if (permissionsString) {
        permissions = JSON.parse(permissionsString);
      }
    } catch (parseError) {
      console.error('Error parsing permissions:', parseError);
      return {
        errors: { permissions: ['Invalid permissions format'] },
        values: {},
      };
    }

    // 검증을 위한 데이터 구성
    const validationValues = {
      ...formValues,
      permissions,
    };

    // 스키마 검증
    const { success, error, data } = featureFormSchema.safeParse(validationValues);

    if (!success) {
      return {
        errors: error.flatten().fieldErrors,
        values: {},
      };
    }

    // Raw API 호출
    const response = await featureRawApi.createFeature(
      data.projectNo,
      data.name,
      data.description,
      data.permissions,
    );

    console.log('Feature created successfully:', response);
    return {
      errors: {},
      values: {},
      success: true,
    };
  } catch (error) {
    console.error('Error creating feature:', error);
    // ✅ 에러를 상위로 전파하지 않고 에러 상태 반환
    return {
      errors: { form: ['Failed to create feature. Please try again.'] },
      values: {},
    };
  }
};
```

#### Facade 에러 처리 전략

**반환 타입별 에러 처리**

```typescript
// 배열 반환 시: 빈 배열
const getList = async (): Promise<ItemDO[]> => {
  try {
    // ... API 호출
    return items.map((item) => new ItemDO(item));
  } catch (error) {
    console.error('Error:', error);
    return []; // ✅ 빈 배열 반환
  }
};

// 단일 객체 반환 시: null
const getItem = async (id: number): Promise<ItemDO | null> => {
  try {
    // ... API 호출
    return new ItemDO(response.data);
  } catch (error) {
    console.error('Error:', error);
    return null; // ✅ null 반환
  }
};

// 작업 성공/실패 시: boolean
const performAction = async (data: ActionData): Promise<boolean> => {
  try {
    // ... API 호출
    return true;
  } catch (error) {
    console.error('Error:', error);
    return false; // ✅ false 반환
  }
};
```

#### Export 패턴

```typescript
const featureFacade = {
  getFeaturesList,
  getFeatureById,
  createFeature,
  createFeatureFormAction,
  // ... 다른 메서드들
};

export default featureFacade;
```

#### 네이밍 컨벤션

- **함수명**: 비즈니스 의미를 담은 명확한 이름 (get{Entity}List, create{Entity}FormAction)
- **파일명**: `{feature}-facade.ts` (kebab-case)
- **클래스**: 필요한 경우에만 사용, 주로 함수 기반 접근

#### 주의사항

- **모든 에러를 이 계층에서 처리**: 상위 계층으로 예외 전파 금지
- **안전한 기본값 제공**: 에러 시에도 사용 가능한 값 반환
- **명확한 에러 로깅**: 디버깅을 위한 충분한 정보 기록
- **일관된 반환 타입**: 성공/실패 상관없이 동일한 타입 반환
- **비즈니스 로직 보호**: 에러로 인한 앱 크래시 방지

### {name}-hooks

Hooks 계층은 React 컴포넌트에서 사용할 수 있는 데이터 fetching과 상태 관리를 담당합니다. 이 계층은
TanStack Query를 활용하여 서버 상태를 관리하고, Facade 계층의 메서드를 호출하여 비즈니스 로직을
처리합니다. Facade에서 이미 기술적 에러 처리가 완료되었으므로, 이 계층은 주로 사용자 경험을 위한
상태 관리와 재시도 로직에 집중합니다.

#### 핵심 책임

- **TanStack Query 통합**: useQuery, useMutation을 통한 서버 상태 관리
- **React 친화적 인터페이스**: 컴포넌트에서 쉽게 사용할 수 있는 Hook 제공
- **캐시 무효화 관리**: 데이터 변경 시 관련 쿼리 자동 무효화
- **사용자 경험 최적화**: 재시도 로직, 로딩 상태, 성공/실패 피드백
- **외부 의존성 처리**: 컴포넌트로부터 필요한 props 주입받아 처리

#### 구현 패턴

**데이터 조회 Hook - 에러 처리 불필요**

```typescript
import { useQuery } from '@tanstack/react-query';
import featureFacade from './feature-facade';
import { featureQueryKeys } from './feature-query-keys';

/**
 * Hook to fetch feature list for a project
 * Facade에서 이미 에러 처리 완료 (빈 배열 반환)
 * @param projectNo Project number
 * @returns Query object with feature list (never errors)
 */
export const useGetFeatures = (projectNo: number) => {
  return useQuery({
    queryKey: featureQueryKeys.lists(projectNo),
    queryFn: () => featureFacade.getFeaturesList(projectNo), // 항상 FeatureDO[] 반환
    enabled: !!projectNo,
    // ✅ 에러 처리 불필요 - Facade에서 처리 완료
  });
};

/**
 * 단일 아이템 조회 - null 체크만 필요
 */
export const useGetFeature = (featureId: number) => {
  return useQuery({
    queryKey: featureQueryKeys.item(featureId),
    queryFn: () => featureFacade.getFeatureById(featureId), // FeatureDO | null 반환
    enabled: !!featureId,
    // data가 null이면 아이템이 없거나 에러가 발생한 것
  });
};
```

**뮤테이션 Hook - 성공/실패 상태 기반 처리**

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';
import featureFacade from './feature-facade';
import { featureQueryKeys } from './feature-query-keys';

/**
 * Hook to create a new feature with retry capability
 */
export const useCreateFeature = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      projectNo,
      name,
      description,
    }: {
      projectNo: number;
      name: string;
      description?: string;
    }) => {
      // Facade에서 boolean 반환
      const success = await featureFacade.createFeature(projectNo, name, description);

      if (!success) {
        // 실패 시 에러 throw하여 TanStack Query의 재시도 로직 활용
        throw new Error('Feature creation failed');
      }

      return { success: true };
    },
    retry: 3, // 자동 재시도 3회
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: featureQueryKeys.lists(variables.projectNo),
      });
    },
    // ✅ onError는 사용자 피드백용으로만 사용
    onError: (error, variables) => {
      console.log('All retry attempts failed:', error);
      // 선택적: 토스트 알림 등
    },
  });
};
```

**Form Action Hook - 서버 액션 결과 기반**

```typescript
import { useActionState } from 'react';
import featureFacade from './feature-facade';

/**
 * Form Action의 경우 이미 Facade에서 에러 상태를 반환
 */
export const useFeatureFormAction = () => {
  const [state, formAction] = useActionState(featureFacade.createFeatureFormAction, {
    errors: {},
    values: {},
  });

  // ✅ Facade에서 이미 에러 처리 완료
  // state.errors에 에러 정보가 있으면 UI에서 표시
  return {
    state,
    formAction,
    hasErrors: Object.keys(state.errors).length > 0,
    isSuccess: state.success === true,
    // 재시도는 사용자가 폼을 다시 제출하는 방식
  };
};
```

**수동 재시도가 필요한 복합 Hook**

```typescript
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

/**
 * 복잡한 비즈니스 로직이 포함된 Hook with manual retry
 */
export const useActivateFeature = () => {
  const queryClient = useQueryClient();
  const [retryCount, setRetryCount] = useState(0);

  const mutation = useMutation({
    mutationFn: async ({ featureId, projectNo }: { featureId: number; projectNo: number }) => {
      const result = await featureFacade.activateFeature(featureId, projectNo);

      if (!result) {
        throw new Error('Feature activation failed');
      }

      return result;
    },
    retry: false, // 자동 재시도 비활성화
    onSuccess: (data, variables) => {
      setRetryCount(0);
      queryClient.invalidateQueries({
        queryKey: featureQueryKeys.lists(variables.projectNo),
      });
    },
    onError: () => {
      setRetryCount((prev) => prev + 1);
    },
  });

  // 수동 재시도 함수 제공
  const retryActivation = (featureId: number, projectNo: number) => {
    mutation.mutate({ featureId, projectNo });
  };

  return {
    ...mutation,
    retryCount,
    retryActivation,
    canRetry: retryCount < 3, // 최대 3회까지 재시도 허용
  };
};
```

**비즈니스 로직을 포함한 복합 Hook**

```typescript
/**
 * Hook to handle feature form submission with enhanced UX
 */
export const useFeatureFormSubmission = () => {
  const createFeature = useCreateFeature();
  const [hasAttempted, setHasAttempted] = useState(false);

  const handleSubmit = async ({
    projectNo,
    name,
    description,
  }: {
    projectNo: number;
    name: string;
    description?: string;
  }) => {
    setHasAttempted(true);

    try {
      await createFeature.mutateAsync({
        projectNo,
        name,
        description,
      });
      return { success: true };
    } catch (error) {
      // 여기서는 재시도가 모두 실패한 경우만 도달
      return { error: 'All retry attempts failed' };
    }
  };

  return {
    handleSubmit,
    isLoading: createFeature.isPending,
    error: createFeature.error,
    isSuccess: createFeature.isSuccess,
    hasAttempted,
    retryCount: createFeature.failureCount,
  };
};
```

#### 네이밍 컨벤션

- **Hook명**: `use{Action}{Entity}` 형태 (예: useGetFeatures, useCreateFeature)
- **파일명**: `{feature}-hooks.ts` (kebab-case)
- **함수 파라미터**: 구조분해할당을 통한 명시적 인터페이스

#### Hook 설계 원칙

**✅ Good Practices**

```typescript
// Facade의 안전한 반환값 활용
export const useGetFeatures = (projectNo: number) => {
  return useQuery({
    queryKey: featureQueryKeys.lists(projectNo),
    queryFn: () => featureFacade.getFeaturesList(projectNo), // 항상 배열 반환
    enabled: !!projectNo,
  });
};

// 재시도 로직이 필요한 뮤테이션
export const useCreateFeature = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const success = await featureFacade.createFeature(data);
      if (!success) throw new Error('Creation failed');
      return success;
    },
    retry: 3,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: featureQueryKeys.lists(variables.projectNo),
      });
    },
  });
};
```

**❌ Bad Practices**

```typescript
// ❌ 잘못된 방식: Raw API 직접 호출
export const useGetFeatures = (projectNo: number) => {
  return useQuery({
    queryKey: ['features', projectNo],
    queryFn: () => featureRawApi.getFeatures(projectNo), // Facade 우회
  });
};

// ❌ 잘못된 방식: 불필요한 try-catch
export const useCreateFeature = () => {
  return useMutation({
    mutationFn: async (data) => {
      try {
        // Facade에서 이미 에러 처리했는데 또 try-catch
        return await featureFacade.createFeature(data);
      } catch (error) {
        // 이 catch는 실행되지 않음 (Facade에서 에러를 throw하지 않음)
        throw error;
      }
    },
  });
};
```

#### 에러 처리 전략 비교

| 계층           | 에러 처리 책임        | 반환값                    |
| -------------- | --------------------- | ------------------------- | --------- |
| **Raw API**    | 에러 전파             | DTO 또는 Error throw      |
| **Facade**     | 기술적 에러 처리      | 안전한 기본값             |
| **Hooks**      | 사용자 경험 에러 처리 | 재시도, 피드백, 상태 관리 |
| **Query Keys** | 캐시 키 관리          | -                         | Query Key |

#### 주의사항

- **Facade 계층을 통해서만 비즈니스 로직 접근**
- **Query Keys는 별도 파일에서 가져와 사용**
- **Hook 내부에서 직접적인 UI 조작 금지**
- **Facade의 안전한 반환값 신뢰하고 활용**
- **재시도 로직은 사용자 경험 향상 목적으로만 사용**

### {name}-query-keys

Query Keys 파일은 TanStack Query의 캐시 키를 중앙 집중식으로 관리하는 역할을 담당합니다. 계층적 키
구조를 통해 효율적인 캐시 무효화와 관리를 가능하게 합니다.

#### 핵심 책임

- **키 중앙 관리**: 모든 쿼리 키를 한 곳에서 정의
- **계층적 구조**: 관련 쿼리들의 무효화를 쉽게 처리
- **타입 안전성**: TypeScript를 통한 키 타입 보장
- **캐시 무효화 전략**: 효율적인 캐시 관리 지원

#### 구현 패턴

```typescript
export type QueryKey = readonly unknown[];

export const featureQueryKeys = {
  // 전체 feature 관련 쿼리
  all: ['features'] as const,

  // 리스트 쿼리들
  lists: (projectNo: number): QueryKey => [...featureQueryKeys.all, 'list', projectNo] as const,

  // 필터링된 리스트
  filteredLists: (projectNo: number, filter: string): QueryKey =>
    [...featureQueryKeys.lists(projectNo), 'filtered', filter] as const,

  // 개별 아이템
  item: (projectNo: number, id: number): QueryKey =>
    [...featureQueryKeys.lists(projectNo), 'item', id] as const,

  // 상세 정보 (의존성 등)
  details: (id: number): QueryKey => [...featureQueryKeys.all, 'details', id] as const,
};
```

## 2. Data Flow

```
Component → Hook → Facade → Raw API → Backend
                ↓
              Query Keys (캐싱)
```

### 에러 처리 흐름

```
Backend Error → Raw API (전파) → Facade (처리&안전값반환) → Hook (재시도&UX) → Component (표시)
```

### 계층별 역할 요약

| 계층           | 주요 역할                  | 에러 처리   | 반환값              |
| -------------- | -------------------------- | ----------- | ------------------- |
| **Raw API**    | HTTP 통신, DTO 반환        | 상위로 전파 | DTO, Error          |
| **Facade**     | DTO→DO 변환, 비즈니스 로직 | 완전 처리   | 안전한 기본값       |
| **Hooks**      | React 통합, 상태 관리      | UX 최적화   | Query/Mutation 객체 |
| **Query Keys** | 캐시 키 관리               | -           | Query Key           |

이 구조를 통해 각 계층의 책임이 명확히 분리되고, 안정적이면서도 사용자 친화적인 API 계층을 구축할 수
있습니다.
