import CustomTable, {
  CustomTableCell,
  CustomTableRow,
} from "src/component/table/CustomTable";

import { CustomSection } from "../component/CustomSection";
import { CustomSectionTitle } from "src/component/SectionTitle";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ExtraInfoDialog from "src/component/dialog/ExtraInfoDialog";
import IconButton from "@mui/material/IconButton";
import { ParticipationChip } from "src/component/chip/ParticipationChip";
import React from "react";
import { Stack } from "@mui/material";
import { StackChip } from "src/component/chip/StackChip";
import { Titleli } from "src/component/ul/Titleli";
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
        subTitle={
          "새로운 기술, 배우고 싶은 기술을 사용해보고 더 나아진 서비스를 위해 적용합니다"
        }
      />
      <CustomTable
        key="ProjectTable"
        header={["프로젝트", "소개 / 사용기술", "개발 상황", "상세정보"]}
        footer={
          "프로젝트는 개발한 순으로 정렬되어 있습니다. 제가 사용한 기술만 적었습니다."
        }
      >
        <CustomTableRow key={"골프 레슨 플랫폼 : 라운드인"}>
          <CustomTableCell component="th" scope="row" align="center">
            골프 레슨 플랫폼 : 라운드인
          </CustomTableCell>
          <CustomTableCell>
            <div>[라운드인] 골프 레슨 서비스를 통합하는 플랫폼</div>
            <StackChip
              stackList={[
                "React",
                "Typescript",
                "Next",
                "MUI",
                "Tailwind",
                "Amplify",
                "Github",
              ]}
            />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ParticipationChip
              date={"21/09 ~ CURRENT"}
              status={"finish"}
              position={"프론트, 배포"}
            />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ExtraInfoDialog dialogTitle={"골프 레슨 플랫폼 : 라운드인"}>
              <iframe
                src="https://www.roundin.kr/"
                width={"100%"}
                height={"100%"}
                style={{ minHeight: "300px", minWidth: "500px" }}
              />
              <Titleli
                title={"서비스 목표"}
                list={[
                  "각종 골프 관련 서비스를 제공할 수 있는 플랫폼",
                  "프로들과 유저들 사이의 1:1 간편 레슨 서비스",
                ]}
              />
              <Titleli
                title={"서비스 성과"}
                list={[
                  "레슨 신청 수천건 진행",
                  "Android, IOS, 웹 모두 제공",
                  "다양한 프로들과 협업 및 팀 구성",
                ]}
              />
              <Titleli
                title={"내 기여도"}
                list={[
                  "프론트엔드 개발 및 배포 담당",
                  "웹뷰 기반 크로스플랫폼 유지보수",
                  "Storybook를 통한 디자인시스템 구축",
                  "새로운 서비스 기획 및 디자인",
                ]}
              />
              <Stack direction={"row"} justifyContent={"center"}>
                <UrlChip title={"홈페이지"} url={"https://www.roundin.kr/"} />
              </Stack>
            </ExtraInfoDialog>
          </CustomTableCell>
        </CustomTableRow>
        {/* <CustomTableRow>
          <CustomTableCell component="th" scope="row" align="center">
            웹기반 개발포트폴리오
          </CustomTableCell>
          <CustomTableCell>
            <div>[개발자] 다양한 라이브러리와 기술을 가지고 만들어보는 나만의 포트폴리오</div>
            <StackChip stackList={["React", "Typescript", "Next", "MUI", "Vercel", "Github"]} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ParticipationChip date={"20/03 ~ CURRENT"} status={"progress"} position={"프론트, 배포"} />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ExtraInfoDialog dialogTitle={"개발 포트폴리오 ver2"}>
              <iframe
                src="https://kang-portfolio.vercel.app/"
                width={"100%"}
                height={"100%"}
                style={{ minHeight: "400px", minWidth: "400px" }}
              />
              <Titleli
                title={"서비스 목표"}
                list={["개발 포트폴리오의 템플릿을 목표로 함", "실제 구직시 사용할수 있도록 높은 퀄리티 유지"]}
              />
              <Titleli
                title={"버전별 변화"}
                list={["ver2 : Next.js + react + vercel", "ver1 : js + css + html + githubPage"]}
              />

              <Stack direction={"row"} justifyContent={"center"}>
                <UrlChip title={"홈페이지(ver2)"} url={"https://kang-portfolio.vercel.app/"} />
                <UrlChip title={"홈페이지(ver1)"} url={"https://gyeongseokkang.github.io/"} />
              </Stack>
            </ExtraInfoDialog>
          </CustomTableCell>
        </CustomTableRow> */}
        <CustomTableRow key={"Dr.폴리오"}>
          <CustomTableCell component="th" scope="row" align="center">
            금융 포트폴리오 플랫폼
          </CustomTableCell>
          <CustomTableCell>
            <div>
              [Exfolio] 금융공학 모델 + AI를 이용한 최고의 포트폴리오 생성, 추천
              서비스
            </div>
            <StackChip
              stackList={[
                "React",
                "Typescript",
                "Plotly",
                "MUI",
                "Babel",
                "Webpack",
                "GithubPage",
                "Github",
              ]}
            />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ParticipationChip
              date={"21/03 ~ 21/06"}
              status={"finish"}
              position={"프론트, 배포"}
            />
          </CustomTableCell>
          <CustomTableCell align="center">
            <ExtraInfoDialog dialogTitle={"포트폴리오 추천 서비스 : Dr.폴리오"}>
              <video controls width={"100%"} autoPlay={true}>
                <source src={"/video/dr.folio_service.mp4"}></source>
              </video>
              <Titleli
                title={"서비스 목표"}
                list={[
                  "금융공학 + AI를 이용한 최적의 포트폴리오 추천 서비스",
                  "포트폴리오를 통한 커뮤니티형 플랫폼",
                ]}
              />
              <Titleli
                title={"서비스 성과"}
                list={["우리은행 해커톤 우수상 수상"]}
              />
              <Titleli
                title={"내 기여도"}
                list={[
                  "프론트엔드 개발 및 배포 담당",
                  "서비스 기획 및 디자인",
                  "대화 참가를 위한 사전준비",
                ]}
              />
              <Stack direction={"row"} justifyContent={"center"}>
                <UrlChip
                  title={"홈페이지(데모)"}
                  url={"https://dr-folio.github.io/"}
                />
                <UrlChip
                  title={"소스코드"}
                  url={"https://github.com/gyeongseokKang/dividend"}
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
