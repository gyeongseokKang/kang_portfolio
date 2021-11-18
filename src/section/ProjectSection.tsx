import React from "react";
import { CustomSection } from "../component/CustomSection";
import Typography from "@mui/material/Typography";
import { CustomSectionTitle } from "src/component/SectionTitle";
import CustomTable, { CustomTableCell, CustomTableRow } from "src/component/table/CustomTable";
import { StackChip } from "src/component/chip/StackChip";

const ProjectSection = () => {
  const ProjectSectionVAProp: ProjectSectionVAProp = {};
  return <ProjectSectionView {...ProjectSectionVAProp} />;
};

interface ProjectSectionVAProp {}
const ProjectSectionView = ({}: ProjectSectionVAProp) => {
  return (
    <CustomSection
      id={"Project"}
      seo={{
        title: `Kang's Intro`,
        description: "Kang's Intro",
      }}
    >
      <CustomSectionTitle
        title={"PROJECT"}
        subTitle={"저는 깔끔한 코드, 읽기 쉬운 디자인패턴을 마음속에 담고 프로젝트를 끝까지 하기 위해 노력합니다."}
      />
      <CustomTable header={["프로젝트", "소개", "개발 참여도", "추가정보"]}>
        <CustomTableRow key={"aa"}>
          <CustomTableCell component="th" scope="row" align="center">
            GUI 기반 통계 플랫폼 : HyperData
          </CustomTableCell>
          <CustomTableCell align="center">
            <div>[티맥스] 통계 플랫폼 : JUPYTER NOTEBOOK 상에서 동작하는 GUI 기반 통계,EDA 플랫폼</div>
            <StackChip stackList={["Python", "Jupyter", "Html", "Javascript", "Css"]} />
          </CustomTableCell>
          <CustomTableCell align="center">2</CustomTableCell>
          <CustomTableCell align="center">2</CustomTableCell>
        </CustomTableRow>
        <CustomTableRow key={"aa"}>
          <CustomTableCell component="th" scope="row" align="center">
            데이터 시각화 서비스 : HyperData
          </CustomTableCell>
          <CustomTableCell align="center">3</CustomTableCell>
          <CustomTableCell align="center">2</CustomTableCell>
          <CustomTableCell align="center">2</CustomTableCell>
        </CustomTableRow>
        <CustomTableRow key={"aa"}>
          <CustomTableCell component="th" scope="row" align="center">
            통합 모빌리티 서비스 : 카찹
          </CustomTableCell>
          <CustomTableCell align="center">3</CustomTableCell>
          <CustomTableCell align="center">2</CustomTableCell>
          <CustomTableCell align="center">2</CustomTableCell>
        </CustomTableRow>
      </CustomTable>
    </CustomSection>
  );
};

export default ProjectSection;
