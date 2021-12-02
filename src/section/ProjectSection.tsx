import React, { useState } from "react";
import { CustomSection } from "../component/CustomSection";
import IconButton from "@mui/material/IconButton";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { CustomSectionTitle } from "src/component/SectionTitle";
import CustomTable, { CustomTableCell, CustomTableRow } from "src/component/table/CustomTable";
import { StackChip } from "src/component/chip/StackChip";
import { ParticipationChip } from "src/component/chip/ParticipationChip";
import ExtraInfoDialog from "src/component/dialog/ExtraInfoDialog";
import { Titleli } from "src/component/ul/Titleli";
import { Stack } from "@mui/material";
import { UrlChip } from "src/component/chip/UrlChip";

const ProjectSection = () => {
  const ProjectSectionVAProp: ProjectSectionVAProp = {};
  return <ProjectSectionView {...ProjectSectionVAProp} />;
};

interface ProjectSectionVAProp {}
const ProjectSectionView = ({}: ProjectSectionVAProp) => {
  return (
    <CustomSection id={"Project"}>
      <CustomSectionTitle
        title={"PROJECT"}
        subTitle={"저는 깔끔한 코드, 읽기 쉬운 디자인패턴을 마음속에 담고 프로젝트를 끝까지 하기 위해 노력합니다."}
      />
      <CustomTable
        key="ProjectTable"
        header={["프로젝트", "소개 / 사용기술", "요약", "세부 내용", "서비스 정보"]}
        footer={"프로젝트들은 최근 개발한 순으로 정렬되어 있습니다. 실제 사용한 기술만 적었습니다."}
      >
        <CustomTableRow key={"GUI 기반 통계 플랫폼 : HyperData"}>
          <CustomTableCell component="th" scope="row" align="center">
            GUI 기반 통계 플랫폼 : HyperData
          </CustomTableCell>
          <CustomTableCell>
            <div>[티맥스] 통계 플랫폼 : JUPYTER NOTEBOOK 상에서 동작하는 GUI 기반 통계,EDA 플랫폼</div>
            <StackChip stackList={["Python", "Jupyter", "Html5", "Javascript", "CSS3", "Gitlab"]} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ParticipationChip date={"21/03 ~ CURRENT"} status={"progress"} position={"프론트, 파이썬 통계"} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ExtraInfoDialog iconType={"contribution"} dialogTitle={"GUI 기반 통계 플랫폼 : HyperData"}>
              <Titleli
                title={"담당 업무"}
                list={["No-code 기반 GUI 분석 플랫폼 구현", "통계 기법 함수 구현", "notebook extension 모듈화"]}
              />
              <Titleli
                title={"기여도"}
                list={[
                  "필요한 기능 단위 선언 -> 내부 이벤트, 데이터를 바인딩해서 GUI 위젯으로 합쳐주는 구조 설계 및 구현",
                  "5개의 카테고리별 20여종의 통계 기법 구현",
                  "docker image 생성 및 관리",
                ]}
              />
              <Titleli
                title={"회고"}
                list={[
                  "데이터 분석에 필요한 통계 기법을 연구할 수 있었음",
                  "docker, kubernetes에 대한 기초적인 학습을 할 수 있었음",
                  "초기 구조 설계 및 구현으로 우수사원상을 받음",
                ]}
              />
            </ExtraInfoDialog>
          </CustomTableCell>
          <CustomTableCell align="center">-</CustomTableCell>
        </CustomTableRow>
        <CustomTableRow key={"데이터 시각화 서비스 : HyperData"}>
          <CustomTableCell component="th" scope="row" align="center">
            데이터 분석 플랫폼 : HyperData
          </CustomTableCell>
          <CustomTableCell>
            <div>[티맥스] 시각화 대시보드 : 오픈소스 라이브러리를 이용한 시각화 대시보드</div>
            <StackChip stackList={["React", "Typescript", "SASS", "Plotly", "Github"]} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ParticipationChip date={"21/03 ~ CURRENT"} status={"progress"} position={"프론트, 파이썬 통계"} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ExtraInfoDialog iconType={"contribution"} dialogTitle={"데이터 분석 플랫폼 : HyperData"}>
              <Titleli title={"담당 업무"} list={["시각화 차트 개발", "시각화 대시보드 구현", "React 마이그레이션"]} />
              <Titleli
                title={"기여도"}
                list={[
                  "부족한 자사 차트 라이브러리 -> 오픈소스 차트(plotly, tabulator)로 변환",
                  "사용자 요청에 따른 SQL 쿼리 생성기 설계 및 구현",
                  "사용자와 인터렉티브한 대시보드 설계 및 구현",
                ]}
              />
              <Titleli
                title={"회고"}
                list={[
                  "React 전환작업을 하면서 JS와 React에 관한 깊은 공부를 할 수 있었음",
                  "데이터 분석 시각화에 대한 연구 및 구현이 재밌었음",
                  "대용량 시각화 차트에 대한 연구 부족이 아쉬움",
                ]}
              />
            </ExtraInfoDialog>
          </CustomTableCell>
          <CustomTableCell align="center">-</CustomTableCell>
        </CustomTableRow>
        <CustomTableRow key={"통합 모빌리티 서비스 : 카찹"}>
          <CustomTableCell component="th" scope="row" align="center">
            통합 모빌리티 서비스 : 카찹
          </CustomTableCell>
          <CustomTableCell>
            <div>
              [카찹] 통합 모빌리티 서비스 : 다양하게 분산되어 있는 모빌리티 서비스를 한 곳에서 통합 검색 &gt; 결제 &gt;
              반납의 서비스를 제공합니다.
            </div>
            <StackChip stackList={["Android", "Java", "Firebase", "GoogleMap", "Github"]} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ParticipationChip date={"18/12 ~ 20/02"} status={"finish"} position={"안드로이드 앱"} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ExtraInfoDialog iconType={"contribution"} dialogTitle={"통합 모빌리티 서비스 : 카찹"}>
              <Titleli
                title={"담당 업무"}
                list={["안드로이드 개발", "배포 및 유지보수를 위한 환경 구축", "서비스 기획 및 디자인"]}
              />
              <Titleli
                title={"기여도"}
                list={[
                  "안드로이드 어플리케이션 단독 구현",
                  "다양한 모빌리티 관련 API 호출 시스템 기획 및 구현",
                  "데이터 수집, 버전업데이트 등을 위한 Config, Database용 FireBase 구축",
                ]}
              />
              <Titleli
                title={"회고"}
                list={[
                  "어플리케이션 단에서 몰려있는 서비스 로직 구조",
                  "자바-> 코틀린으로 변환하는 도중에 중단",
                  "어플리케이션 구조에 대한 깊은 고민이 없었음",
                ]}
              />
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

export default ProjectSection;
