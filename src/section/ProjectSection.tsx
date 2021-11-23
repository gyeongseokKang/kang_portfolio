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
        header={["프로젝트", "소개", "개발 참여도", "추가정보"]}
        footer={"프로젝트들은 최근 개발한 순으로 정렬되어 있습니다"}
      >
        <CustomTableRow key={"GUI 기반 통계 플랫폼 : HyperData"}>
          <CustomTableCell component="th" scope="row" align="center">
            GUI 기반 통계 플랫폼 : HyperData
          </CustomTableCell>
          <CustomTableCell>
            <div>[티맥스] 통계 플랫폼 : JUPYTER NOTEBOOK 상에서 동작하는 GUI 기반 통계,EDA 플랫폼</div>
            <StackChip stackList={["Python", "Jupyter", "Html5", "Javascript", "Css3", "Gitlab"]} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ParticipationChip date={"21/03 ~ CURRENT"} status={"progress"} position={"프론트, 파이썬 통계"} />
          </CustomTableCell>
          <CustomTableCell align="center">-</CustomTableCell>
        </CustomTableRow>
        <CustomTableRow key={"데이터 시각화 서비스 : HyperData"}>
          <CustomTableCell component="th" scope="row" align="center">
            데이터 시각화 서비스 : HyperData
          </CustomTableCell>
          <CustomTableCell>
            <div>[티맥스] 통계 플랫폼 : [티맥스] 시각화 대시보드 : 오픈소스 라이브러리를 이용한 시각화 대시보드</div>
            <StackChip stackList={["React", "SASS", "Typescript", "Github", "Plotly"]} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ParticipationChip date={"21/03 ~ CURRENT"} status={"progress"} position={"프론트, 파이썬 통계"} />
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
            <StackChip stackList={["Android", "Java", "Firebase", "GoogleMap"]} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ParticipationChip date={"18/12 ~ 20/02"} status={"finish"} position={"안드로이드 앱"} />
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
                  "안드로이드 다운로드 2만 달성(현재 총 13만)",
                  "통합된 모빌리티 서비스에 대한 호평과 리뷰",
                  "다양한 투자 유치 및 사업 확대",
                ]}
              />
              <Titleli
                title={"아쉬운 점"}
                list={[
                  "안드로이드앱단에서 대부분 로직을 수행하는 구조",
                  "자바 언어의 숙련도 부족으로 인한 문제점들",
                  "리소스를 매번 다운로드해야하는 동기화문제",
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
