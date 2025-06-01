import ExtraInfoDialog from "@component/dialog/ExtraInfoDialog";
import { CardContent } from "@mui/material";
import { Card, CardHeader } from "@nextui-org/react";
import { CustomSectionTitle } from "src/component/SectionTitle";
import { CustomSection } from "../component/CustomSection";

const RetrospectivedSection = () => {
  const RetrospectivedSectionVAProp: RetrospectivedSectionVAProp = {};
  return <RetrospectivedSectionView {...RetrospectivedSectionVAProp} />;
};

interface RetrospectivedSectionVAProp {}
const RetrospectivedSectionView = ({}: RetrospectivedSectionVAProp) => {
  return (
    <CustomSection id={"Retrospective"}>
      <CustomSectionTitle
        title={"Retrospectived"}
        subTitle={
          "분기별 회고를 작성하며 지난 날을 반성하고 정리합니다.(2022부터 시작~)"
        }
      />
      <div className="flex flex-col gap-2">
        <RetrospectivedSection2025Item />
        <RetrospectivedSection2024Item />
        <RetrospectivedSection2023Item />
        <RetrospectivedSection2022Item />
      </div>
    </CustomSection>
  );
};

interface RetrospectivedItemProp {
  retrospectivedName: string;
  details: string;
  oneLineTitle: string;
  extraDetail?: string[];
}

const RetrospectivedItem = ({
  retrospectivedName,
  details,
  oneLineTitle,
  extraDetail,
}: RetrospectivedItemProp) => {
  return (
    <>
      <div className="text-sm font-medium">
        {retrospectivedName} - {oneLineTitle}
      </div>
      <div className="flex flex-row items-center gap-1 pl-4 text-xs">
        <>
          ㄴ{details}
          {extraDetail && (
            <ExtraInfoDialog dialogTitle={`세부 정보`} iconType={"paper"}>
              <div className="flex flex-col gap-1 text-sm">
                {extraDetail.map((detail) => {
                  return <span>{detail}</span>;
                })}
              </div>
            </ExtraInfoDialog>
          )}
        </>
      </div>
    </>
  );
};

const RetrospectivedSection2022Item = () => {
  return (
    <YearCard year={2022}>
      <RetrospectivedItem
        retrospectivedName={"4Q"}
        oneLineTitle={
          "가우디오랩의 다양한 서비스를 위한 기초 다지기를 시작했다"
        }
        details={"신뢰를 바탕으로 다양한 서비스 및 데모 사이트를 구현."}
        extraDetail={[
          "1. 오디오, 대용량 데이터에 대한 최적화 진행",
          "2. 기존 웹사이트 모바일 지원을 위한 반응형 및 구조 변경",
        ]}
      />
      <RetrospectivedItem
        retrospectivedName={"3Q"}
        oneLineTitle={"이직 후 믿을 수 있는 동료가 되기 위해 노력했다"}
        details={
          "기존 프로젝트 마이그레이션 및 기술 스택 익히기, 신뢰감를 얻은 중요했던 시기"
        }
        extraDetail={[
          "1. 클래스형컴포넌트 -> 함수컴포넌트로 마이그레이션 완료",
          "2. Next 도입, 데이터 페칭은 React-Query로 개선",
        ]}
      />
      <RetrospectivedItem
        retrospectivedName={"2Q"}
        oneLineTitle={"이직을 준비했고, 프로젝트를 정리하며 마무리했다"}
        details={
          "포트폴리오를 최신화하고 면접을 보러다녔으며, 현재 회사의 업무를 마무리하고 문서화에 힘씀."
        }
      />
      <RetrospectivedItem
        retrospectivedName={"1Q"}
        oneLineTitle={
          "이직을 마음먹었고, Next.js, Recoil 등 최신 스택을 사용해봤다"
        }
        details={
          "기존의 기술스택에서 벗어나 다양한 라이브러리, 프레임워크를 접하려고 노력했다."
        }
        extraDetail={[
          "1. 최신 기술을 학습을 위한 사이드프로젝트 시작(Next.js)",
        ]}
      />
    </YearCard>
  );
};
const RetrospectivedSection2023Item = () => {
  return (
    <YearCard year={2023}>
      {
        <>
          <RetrospectivedItem
            retrospectivedName={"4Q"}
            oneLineTitle={"새로운 기술보단 기존 기술에 능숙함을 더하다"}
            details={
              "사용하는 기술이 정리되고, 기존 기술에 대한 이해도를 높이는데 집중했다."
            }
            extraDetail={[
              "1. React, Next에 대한 이해도를 높이고, 기존 프로젝트를 리팩토링했다.",
              "2. Flutter 프로젝트를 유지보수하며 안정도를 높이고 있다.",
            ]}
          />
          <RetrospectivedItem
            retrospectivedName={"3Q"}
            oneLineTitle={"오디오 도메인 개발에 자신감이 붙었다."}
            details={
              "코어 라이브러리 내재화를 완성했고(Waveform-playlist), 오픈소스 컨트리뷰터(wavesurfer)가 되었다."
            }
            extraDetail={[
              "1. Waveform-playlist의 내재화를 완료하고 추가기능 및 고도화를 진행중이다.",
              "2. Wavesurfer 오픈소스 컨트리뷰터가 되었다.",
              "3. Flutter로 서비스를 런칭하고, 유저의 피드백을 받아 고도화를 하고 있다.",
            ]}
          />
          <RetrospectivedItem
            retrospectivedName={"2Q"}
            oneLineTitle={"겨울을 이겨내기 위한 다양한 불피우기를 시도했다."}
            details={"프로젝트 기획, 구현, 런칭까지 매우 바쁜 분기였다"}
            extraDetail={[
              "1. Gaudio Studio-pro를 런칭했다. 내가 만든 서비스가 돈을 벌기 시작했다.",
              "2. 사이드 프로젝트를 위해 오랜만에 Flutter를 잡았다.",
            ]}
          />
          <RetrospectivedItem
            retrospectivedName={"1Q"}
            oneLineTitle={"겨울나기에 돌입하여 기술로 살아남기에 도전했다"}
            details={
              "코어 라이브러리(Web Audio)에 대한 개발을 시작하고 브라우저상에서 대용량 파일을 요리해봤다."
            }
            extraDetail={[
              "1. Waveform-playlist 오디오 라이브러리 개선(TS/React 지원, 대용량 파일 최적화)",
              "2. AI모델을 위한 데이터 수집 자동화툴 구현(Puppeteer 활용) - 100GB 수집",
              "3. ChakraUI, Framer-motion, TailwindCSS 조합의 프로젝트 런칭",
            ]}
          />
        </>
      }
    </YearCard>
  );
};
const RetrospectivedSection2024Item = () => {
  return (
    <YearCard year={2024}>
      {
        <>
          <RetrospectivedItem
            retrospectivedName={"4Q"}
            oneLineTitle={"리드로써 프로세스를 정리하다."}
            details={
              "합리적인 프로세스를 만들고, 반복되는 업무를 찾아내서 자동화에 힘쓰다"
            }
            extraDetail={[
              "1. 개발 중인 브라우저 기반 미디어 편집툴을 바탕으로 내부 프로젝트를 진행했다",
              "2. 코드 리뷰에 대한 프로세스를 확립하고, 지키기 위해 발버둥중이다.",
              "3. 좋은 사수가 되기 위해 발버둥중이다",
            ]}
          />
          <RetrospectivedItem
            retrospectivedName={"3Q"}
            oneLineTitle={"일정관리와 사람관리의 경계에서 길을 찾아가다"}
            details={
              "리드로부터 리드의 업무를 배우고, 좋은 리드가 되기 위해 노력중"
            }
            extraDetail={[
              "1. 브라우저 기반 미디어 편집툴을 개발중이다(오픈소스)",
              "2. Supabase등을 사용해보며 백엔드에 대한 지식을 쌓고 있다",
              "3. 좋은 사수, 혹은 리드가 되기 위해 발버둥중이다",
            ]}
          />
          <RetrospectivedItem
            retrospectivedName={"2Q"}
            oneLineTitle={
              "프론트엔드리드를 맡아, 시니어 개발자로 나아가고 있다"
            }
            details={"사람관리, 일정관리 힘쓰고, 전문화 분야를 찾아가고 있다."}
            extraDetail={[
              "1. 테스트코드, 코드리뷰를 하고 있고, 스터디도 진행중이다.",
              "2. 웹 오디오 전문가의 길을 찾아보고 있다.",
              "3. 다양한 사이드프로젝트에 도전하고 있다.",
            ]}
          />
          <RetrospectivedItem
            retrospectivedName={"1Q"}
            oneLineTitle={"좋은 개발자가 되기 위한 비개발적인 준비를 하다"}
            details={
              "코드리뷰를 시작하고, 좋은 사수가 되기 위한 공부를 하고, 책 출판을 준비하다"
            }
            extraDetail={[
              "1. 신입 동료와 코드리뷰를 도입해보고, bit bucket를 통한 자동화를 적용해보았다.",
              "2. 좋은 사수 개발자가 되기 위한 공부를 하고 있다.",
              "3. 책 출판 제의가 들어와, 그에 대한 준비를 시작했다",
            ]}
          />
        </>
      }
    </YearCard>
  );
};
const RetrospectivedSection2025Item = () => {
  return (
    <YearCard year={2025}>
      {
        <>
          <RetrospectivedItem
            retrospectivedName={"2Q"}
            oneLineTitle={
              "모노레포와 디자인시스템에 신경쓰다"
            }
            details={"프로젝트 레포 관리를 위해 모노레포를 도입하고 이를 디자인 시스템에 적용했다"}
            extraDetail={[
              "1. AWS CodeArtifact를 사내 패키지를 관리하기 시작했다.",
              "2. PNPM Workspaces를 통해 모노레포 관리를 시작했다.",
              "3. 디자인 시스템 구축을 준비하여 프로젝트를 병행진행중이다.",
            ]}
          />
          <RetrospectivedItem
            retrospectivedName={"1Q"}
            oneLineTitle={"글쓰기에 힘쓰고, 새로운 기술 습득을 준비하다"}
            details={
              "책 퇴고를 마무리하고, 기술 습득(엘릭서) 학습을 본격적으로 시작했다"
            }
            extraDetail={[
              "1. 엘릭서 세미나와 Exercism를 통해 엘릭서 언어를 흡수하고 있다.",
            ]}
          />
        </>
      }
    </YearCard>
  );
};

const YearCard = ({
  year,
  children,
}: {
  year: number;
  children: React.ReactNode;
}) => {
  return (
    <Card className="p-1">
      <CardHeader>{year}</CardHeader>
      <CardContent className="px-4 py-0">{children}</CardContent>
    </Card>
  );
};

export default RetrospectivedSection;
