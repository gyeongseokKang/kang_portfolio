import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { StackChip } from "src/component/chip/StackChip";
import { UrlChip } from "src/component/chip/UrlChip";
import ExtraInfoDialog from "src/component/dialog/ExtraInfoDialog";
import { CustomSectionTitle } from "src/component/SectionTitle";
import { Companyli } from "src/component/ul/Companyli";
import { Titleli } from "src/component/ul/Titleli";
import { CustomSection } from "../component/CustomSection";

const ExperienceSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "experience" });
  return (
    <CustomSection id={"Experience"}>
      <CustomSectionTitle
        title={"Experience"}
        subTitle={t(
          `편리하고_가치있는_서비스를_개발하고_제대로된_제품을_만들고_있습니다`
        )}
      />

      <Table>
        <TableHeader>
          {["회사", "업무", "기여", "서비스"].map((headerItem) => (
            <TableColumn key={headerItem} align="center">
              {headerItem}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          <TableRow key={"쿠팡플레이"}>
            <TableCell>
              <Companyli
                name={"쿠팡플레이"}
                homepageUrl={"https://www.coupangplay.com/"}
                position={["시니어 프론트엔드 엔지니어"]}
                period={{
                  start: "2025/10",
                  end: new Date(),
                }}
              />
            </TableCell>
            <TableCell>
              <Titleli list={["쿠팡플레이 웹, 앱 개발 및 유지보수"]} />
            </TableCell>
            <TableCell align="center">
              <div></div>
            </TableCell>
            <TableCell align="center">
              <div></div>
            </TableCell>
          </TableRow>
          <TableRow key={"가우디오랩"}>
            <TableCell>
              <Companyli
                name={"가우디오랩"}
                homepageUrl={"https://www.gaudiolab.com/ko/"}
                position={["프론트엔드 개발자", "프론트엔드 리드"]}
                period={{
                  start: "2022/07",
                  end: "2025/09",
                }}
              />
            </TableCell>
            <TableCell>
              <Titleli
                list={[
                  "AI 모델을 활용한 웹앱 개발",
                  "오디오 데이터 ETL을 위한 내부 툴 개발",
                  "유저에게 편리한 오디오 경험을 주는 모든 서비스",
                ]}
              />
            </TableCell>
            <TableCell align="center">
              <ExtraInfoDialog
                iconType={"contribution"}
                dialogTitle={"가우디오랩"}
              >
                <Titleli
                  title={"What I learn"}
                  list={[
                    "React, Next, Typescript 기반의 깔끔한 웹 앱",
                    "MSA 아키텍체와의 원활한 JSON 상하차",
                    "Eslint부터 Stortbook, React-testing-library를 이용한 지속 가능한 소프트웨어",
                    "오디오을 사용한 모던 웹사이트 개발 경험",
                  ]}
                />
                <Titleli
                  title={"What I extpect"}
                  list={[
                    "가우디오랩의 핵심 코어가 될 오디어 관련 라이브러리 개발",
                    "깔끔하고 직관적인 UI를 통한 편리한 UX 제공",
                    "유저 데이터를 기반으로 한 의사 결정 및 기능 고도화",
                  ]}
                />
                <StackChip
                  title={"What I used"}
                  stackList={[
                    "React",
                    "Typescript",
                    "Next",
                    "StyledComponent",
                    "MUI",
                    "AWS",
                  ]}
                />
              </ExtraInfoDialog>
            </TableCell>
            <TableCell align="center">
              <ExtraInfoDialog
                dialogTitle={"AI 오디오 서비스 : 가우디오 스튜디오"}
              >
                <Titleli
                  title={"서비스 목표"}
                  list={[
                    "AI를 활용한 음원 분리 기능 제공",
                    "AI를 활용한 노래방 기능 제공",
                    "사내에서 개발중 인 AI 기능 및 서비스의 런칭",
                  ]}
                />
                <div className="flex flex-row justify-center">
                  <UrlChip
                    title={"홈페이지"}
                    url={"https://studio.gaudiolab.io/"}
                  />
                  <UrlChip
                    title={"서비스 소개"}
                    url={"https://www.youtube.com/watch?v=R_5wSIYxSuc"}
                  />
                </div>
              </ExtraInfoDialog>
            </TableCell>
          </TableRow>
          <TableRow key={"티맥스"}>
            <TableCell>
              <Companyli
                name={"티맥스티베로"}
                homepageUrl={"https://www.tmax.co.kr/hyperdata"}
                position={"연구원"}
                period={{
                  start: "2020/02",
                  end: "2022/06",
                }}
              />
            </TableCell>
            <TableCell>
              <Titleli
                list={[
                  "분석 추천 서비스를 위한 화면 설계 및 React 구현, 분석 시나리오 추천 엔진 개발",
                  "ipywidget를 활용한 No-code 통계 분석 툴 개발",
                  "기존 프로젝트 React SPA로의 전환",
                  "데이터 시각화를 위한 대시보드, 차트 기능 구현",
                ]}
              />
            </TableCell>
            <TableCell align="center">
              <ExtraInfoDialog
                iconType={"contribution"}
                dialogTitle={"BI 툴 : HyperData"}
              >
                <Titleli
                  title={"What I learned"}
                  list={[
                    "레거시에서 React로 전환하면서 배운 지식들",
                    "큰 프로젝트에서 여러사람과 함께 해본 개발환경 구축, 유틸리티에 대한 고민",
                    "프론트엔드부터 백엔드까지 다양하게 접해볼 수 있는 좋은 경험",
                    "모듈 재활용과 이를 위한 읽기 쉬운 코드의 중요성",
                  ]}
                />
                <Titleli
                  title={"What I regreted"}
                  list={[
                    "디자인 시스템을 부족함으로 인한 개발자경험 및 유저경험의 저하",
                    "부족한 테스트 커버리지 및 에러 처리",
                    "애매한 코드 리뷰 및 문서화로 인한 온보딩 시스템 및 협업 시스템 부재",
                  ]}
                />
                <StackChip
                  title={"What I used"}
                  stackList={[
                    "React",
                    "Typescript",
                    "SASS",
                    "Plotly",
                    "Python",
                    "Jupyter",
                    "Github",
                  ]}
                />
              </ExtraInfoDialog>
            </TableCell>
            <TableCell align="center">-</TableCell>
          </TableRow>
          <TableRow key={"카찹"}>
            <TableCell>
              <Companyli
                name={"카찹"}
                homepageUrl={"https://www.carchapapp.com/"}
                position={["안드로이드 개발자", "CTO", "코파운더"]}
                period={{
                  start: "2018/12",
                  end: "2020/02",
                }}
              />
            </TableCell>
            <TableCell>
              <Titleli
                list={[
                  "모빌리티 서비스를 위한 안드로이드 어플리케이션 기획, 개발",
                  "서비스 목표 설정 및 전체 일정 조율",
                ]}
              />
            </TableCell>
            <TableCell align="center">
              <ExtraInfoDialog
                iconType={"contribution"}
                dialogTitle={"통합 모빌리티 플랫폼 : 카찹"}
              >
                <Titleli
                  title={"What I learned"}
                  list={[
                    "안드로이드 앱 개발부터 배포, 그리고 유지보수까지",
                    "다양한 API 호출 및 관리를 위한 미들웨어 느낌의 관리 모듈",
                    "다양한 핸드폰 버젼, 기종을 위한 호환성 및 안전성에 대한 고민",
                    "유저 친화적인 UX/UI에 대한 고민, 운영 서비스에 대한 고찰",
                  ]}
                />
                <Titleli
                  title={"What I regreted"}
                  list={[
                    "공통 디자인 패턴, 모듈없이 개별적으로 개발된 컴포넌트, 스크린",
                    "비즈니스 알고리즘에 대한 부족한 고민과 개발",
                    "서버보다 앱단에서 수행되는 많은 비즈니스 로직들",
                  ]}
                />
                <StackChip
                  title={"What I used"}
                  stackList={[
                    "Android",
                    "Java",
                    "Firebase",
                    "GoogleMap",
                    "Github",
                  ]}
                />
              </ExtraInfoDialog>
            </TableCell>
            <TableCell align="center">
              <ExtraInfoDialog dialogTitle={"통합 모빌리티 서비스 : 카찹"}>
                <video controls width={"100%"} autoPlay={true}>
                  <source src={"/video/carchap_service.mp4"}></source>
                </video>
                <Titleli
                  title={"서비스 목표"}
                  list={[
                    "다양한 모빌리티 정보를 제공하는 통합 플랫폼",
                    "거리, 경로를 비교하여 최적의 경로를 추천하는 서비스 구현",
                    "공공API, 회사API를 통합한 API 서비스",
                  ]}
                />
                <Titleli
                  title={"서비스 성과"}
                  list={[
                    "안드로이드 다운로드 2만 달성 (현재 10만)",
                    "통합된 모빌리티 서비스에 대한 호평과 리뷰",
                    "다양한 투자 유치 및 사업 확대",
                  ]}
                />
                <div className="flex flex-row justify-center">
                  <UrlChip
                    title={"홈페이지"}
                    url={"https://www.carchapapp.com/"}
                  />
                  <UrlChip
                    title={"Play store"}
                    url={
                      "https://play.google.com/store/apps/details?id=org.techtown.carchap_v11&hl=ko&gl=US"
                    }
                  />
                  <UrlChip
                    title={"App store"}
                    url={
                      "https://apps.apple.com/us/app/%EC%B9%B4%EC%B0%B9-%EC%9D%B4%EB%8F%99%EC%88%98%EB%8B%A8-%ED%86%B5%ED%95%A9-%ED%94%8C%EB%9E%AB%ED%8F%BC/id1506198003"
                    }
                  />
                </div>
              </ExtraInfoDialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CustomSection>
  );
};

export default ExperienceSection;
