import React from "react";
import { CustomSection } from "../component/CustomSection";
import IconButton from "@mui/material/IconButton";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { CustomSectionTitle } from "src/component/SectionTitle";
import CustomTable, { CustomTableCell, CustomTableRow } from "src/component/table/CustomTable";
import { StackChip } from "src/component/chip/StackChip";
import { ParticipationChip } from "src/component/chip/ParticipationChip";
import { Stack } from "@mui/material";
import { UrlChip } from "src/component/chip/UrlChip";
import ExtraInfoDialog from "src/component/dialog/ExtraInfoDialog";
import { Titleli } from "src/component/ul/Titleli";

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
        header={["프로젝트", "소개 / 사용기술", "개발 참여도", "추가정보"]}
        footer={"프로젝트들은 최근 개발한 순으로 정렬되어 있습니다. 실제 사용한 기술만 적었습니다."}
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
          <CustomTableCell align="center">
            <ExtraInfoDialog dialogTitle={"골프 레슨 플랫폼 : 라운드인"}>
              <iframe
                src="https://www.roundin.kr/"
                width={"100%"}
                height={"100%"}
                style={{ minHeight: "400px" }}
                sandbox="allow-scripts"
              />
              <Titleli
                title={"서비스 목표"}
                list={["각종 골프 관련 서비스를 제공할 수 있는 플랫폼", "프로들과 유저들 사이의 1:1 간편 레슨 서비스"]}
              />

              <Stack direction={"row"} justifyContent={"center"}>
                <UrlChip title={"홈페이지"} url={"https://www.roundin.kr/"} />
              </Stack>
            </ExtraInfoDialog>
          </CustomTableCell>
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
          <CustomTableCell align="center">
            <ExtraInfoDialog dialogTitle={"포트폴리오 추천 서비스 : Dr.폴리오"}>
              <video controls width={"100%"} autoPlay={true}>
                <source src={"/video/dr.folio_service.mp4"}></source>
              </video>
              <Titleli
                title={"서비스 목표"}
                list={["금융공학 + AI를 이용한 최적의 포트폴리오 추천 서비스", "포트폴리오를 통한 커뮤니티형 플랫폼"]}
              />
              <Titleli title={"서비스 성과"} list={["우리은행 해커톤 우수상 수상"]} />
              <Titleli
                title={"아쉬운 점"}
                list={[
                  "팀원들의 이직으로 서비스 개발 중단",
                  "MUI와 React를 이용한 첫번째 사이드프로젝트로 인한 코드 미숙",
                  "테스트 코드 미작성",
                ]}
              />
              <Stack direction={"row"} justifyContent={"center"}>
                <UrlChip title={"홈페이지(데모)"} url={"https://dr-folio.github.io/"} />
                <UrlChip title={"소스코드"} url={"https://github.com/gyeongseokKang/dividend"} />
              </Stack>
            </ExtraInfoDialog>
          </CustomTableCell>
        </CustomTableRow>
      </CustomTable>
    </CustomSection>
  );
};

export default ToyProjectSection;
