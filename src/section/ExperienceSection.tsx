import React, { useState } from "react";
import { CustomSection } from "../component/CustomSection";

import { CustomSectionTitle } from "src/component/SectionTitle";
import CustomTable, { CustomTableCell, CustomTableRow } from "src/component/table/CustomTable";
import { StackChip } from "src/component/chip/StackChip";

import ExtraInfoDialog from "src/component/dialog/ExtraInfoDialog";
import { Titleli } from "src/component/ul/Titleli";
import { Stack } from "@mui/material";
import { UrlChip } from "src/component/chip/UrlChip";
import { Companyli } from "src/component/ul/Companyli";

const ExperienceSection = () => {
  const ExperienceSectionVAProp: ExperienceSectionVAProp = {};
  return <ExperienceSectionView {...ExperienceSectionVAProp} />;
};

interface ExperienceSectionVAProp {}
const ExperienceSectionView = ({}: ExperienceSectionVAProp) => {
  return (
    <CustomSection id={"Experience"}>
      <CustomSectionTitle
        title={"Experience"}
        subTitle={"편리하고 가치있는 서비스를 개발하고, 제대로된 제품을 만들고 있습니다."}
      />
      <CustomTable key="ExperienceTable" header={["회사", "업무", "세부 내용", "서비스 정보"]}>
        <CustomTableRow key={"데이터 시각화 서비스 : HyperData"}>
          <CustomTableCell component="th" scope="row" align="center">
            <Companyli
              name={"티맥스티베로"}
              homepageUrl={"https://www.tmax.co.kr/hyperdata"}
              position={"연구원"}
              period={"2020/02 ~ 현재"}
            />
          </CustomTableCell>
          <CustomTableCell>
            <Titleli
              list={[
                "시각화 대시보드 설계 및 구현",
                "오픈소스를 활용한 시각화 차트 개발",
                "No-code 기반 GUI 분석 플랫폼 기획 및 구현",
                "분석 추천 서비스을 위한 통계 기법 구현",
                "React 마이그레이션 & 아키텍처 개선 등 개발 환경 구축",
              ]}
            />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ExtraInfoDialog iconType={"contribution"} dialogTitle={"BI 툴 : HyperData"}>
              <Titleli
                title={"What I learned"}
                list={[
                  "레거시에서 React로 전환하면서 배운 지식들",
                  "큰 프로젝트에서 여러사람과 함께 해본 개발환경 구축, 유틸리티에 대한 고민",
                  "프론트엔드부터 백엔드까지 다양하게 접해볼 수 있는 좋은 경험",
                  "모듈 재활용과 이를 위한 읽기 쉬운 코드의 중요성",
                ]}
              />
              <Titleli title={"What I regreted"} list={["후회되는 것들을 하나씩 지워나가고 있음"]} />
              <StackChip
                title={"What I used"}
                stackList={["React", "Typescript", "SASS", "Plotly", "Python", "Jupyter", "Github"]}
              />
            </ExtraInfoDialog>
          </CustomTableCell>
          <CustomTableCell align="center">-</CustomTableCell>
        </CustomTableRow>
        <CustomTableRow key={"통합 모빌리티 서비스 : 카찹"}>
          <CustomTableCell component="th" scope="row" align="center">
            <Companyli
              name={"카찹"}
              homepageUrl={"https://www.carchapapp.com/"}
              position={"안드로이드 개발자 & CTO"}
              period={"2018/12 ~ 2020/02"}
            />
          </CustomTableCell>
          <CustomTableCell>
            <Titleli
              list={[
                "안드로이드 어플리케이션 단독 개발",
                "다양한 모빌리티 관련 API 호출 시스템 기획 및 구현",
                "데이터 수집, 버전업데이트 등을 위한 Config, Database용 FireBase 구축",
                "배포 및 유지보수를 위한 환경 구축",
                "서비스 기획 및 디자인",
              ]}
            />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ExtraInfoDialog iconType={"contribution"} dialogTitle={"통합 모빌리티 플랫폼 : 카찹"}>
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
              <StackChip title={"What I used"} stackList={["Android", "Java", "Firebase", "GoogleMap", "Github"]} />
            </ExtraInfoDialog>
          </CustomTableCell>
          <CustomTableCell align="center">
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
              <Stack direction={"row"} justifyContent={"center"}>
                <UrlChip title={"홈페이지"} url={"https://www.carchapapp.com/"} />
                <UrlChip
                  title={"Play store"}
                  url={"https://play.google.com/store/apps/details?id=org.techtown.carchap_v11&hl=ko&gl=US"}
                />
                <UrlChip
                  title={"App store"}
                  url={
                    "https://apps.apple.com/us/app/%EC%B9%B4%EC%B0%B9-%EC%9D%B4%EB%8F%99%EC%88%98%EB%8B%A8-%ED%86%B5%ED%95%A9-%ED%94%8C%EB%9E%AB%ED%8F%BC/id1506198003"
                  }
                />
              </Stack>
            </ExtraInfoDialog>
          </CustomTableCell>
        </CustomTableRow>
      </CustomTable>
    </CustomSection>
  );
};

export default ExperienceSection;
