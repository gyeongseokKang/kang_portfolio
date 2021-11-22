import React from "react";
import { CustomSection } from "../component/CustomSection";
import IconButton from "@mui/material/IconButton";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { CustomSectionTitle } from "src/component/SectionTitle";
import CustomTable, { CustomTableCell, CustomTableRow } from "src/component/table/CustomTable";
import { StackChip } from "src/component/chip/StackChip";
import { ParticipationChip } from "src/component/chip/ParticipationChip";

const ToyProjectSection = () => {
  const ToyProjectSectionVAProp: ToyProjectSectionVAProp = {};
  return <ToyProjectSectionView {...ToyProjectSectionVAProp} />;
};

interface ToyProjectSectionVAProp {}
const ToyProjectSectionView = ({}: ToyProjectSectionVAProp) => {
  return (
    <CustomSection id={"ToyProject"}>
      <CustomSectionTitle
        title={"TOY PROJECT"}
        subTitle={"배우고 싶은 기술, 언어를 사용해보고 좋은 것은 공유하고 적용합니다."}
      />
      <CustomTable
        key="TopProjectTable"
        header={["프로젝트", "소개", "개발 참여도", "추가정보"]}
        footer={"프로젝트들은 최근 개발한 순으로 정렬되어 있습니다"}
      >
        <CustomTableRow key={"골프 레슨 플랫폼 : 라운드인"}>
          <CustomTableCell component="th" scope="row" align="center">
            골프 레슨 플랫폼 : 라운드인
          </CustomTableCell>
          <CustomTableCell>
            <div>[라운드인] 프로와 골린이를 연결해주는 레슨 플랫폼 서비스</div>
            <StackChip stackList={["React", "Typescript", "Next", "Amplify", "Github"]} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ParticipationChip date={"21/09 ~ CURRENT"} status={"progress"} position={"프론트, 배포"} />
          </CustomTableCell>
          <CustomTableCell align="center">-</CustomTableCell>
        </CustomTableRow>
        <CustomTableRow key={"Dr.폴리오"}>
          <CustomTableCell component="th" scope="row" align="center">
            포트폴리오 추천 서비스 : Dr.폴리오
          </CustomTableCell>
          <CustomTableCell>
            <div>[Exfolio] 금융공학 모델 + AI를 이용한 최고의 포트폴리오 생성, 추천 서비스</div>
            <StackChip stackList={["React", "Typescript", "Plotly", "MUI", "Babel", "Webpack", "Github"]} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ParticipationChip date={"21/04 ~ 21/07"} status={"stop"} position={"프론트, 배포"} />
          </CustomTableCell>
          <CustomTableCell align="center">-</CustomTableCell>
        </CustomTableRow>
      </CustomTable>
    </CustomSection>
  );
};

export default ToyProjectSection;
