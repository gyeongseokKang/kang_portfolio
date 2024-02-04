import { ParticipationChip } from "@component/chip/ParticipationChip";
import { StackChip } from "@component/chip/StackChip";
import { UrlChip } from "@component/chip/UrlChip";
import ExtraInfoDialog from "@component/dialog/ExtraInfoDialog";
import { Titleli } from "@component/ul/Titleli";
import { Stack } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { CustomSectionTitle } from "src/component/SectionTitle";
import { CustomSection } from "../component/CustomSection";

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
      <Table aria-label="customized table">
        <TableHeader>
          {["프로젝트", "소개 / 사용기술", "개발 상황", "상세정보"].map(
            (headerItem) => (
              <TableColumn className="text-center">{headerItem}</TableColumn>
            )
          )}
        </TableHeader>
        <TableBody>
          <TableRow key={"골프 레슨 플랫폼 : 라운드인"}>
            <TableCell>골프 레슨 플랫폼 : 라운드인</TableCell>
            <TableCell>
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
            </TableCell>
            <TableCell align="center">
              <ParticipationChip
                date={"21/09 ~ CURRENT"}
                status={"finish"}
                position={"프론트, 배포"}
              />
            </TableCell>
            <TableCell align="center">
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
            </TableCell>
          </TableRow>
          <TableRow key={"Dr.폴리오"}>
            <TableCell scope="row" align="center">
              금융 포트폴리오 플랫폼
            </TableCell>
            <TableCell>
              <div>
                [Exfolio] 금융공학 모델 + AI를 이용한 최고의 포트폴리오 생성,
                추천 서비스
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
            </TableCell>
            <TableCell align="center">
              <ParticipationChip
                date={"21/03 ~ 21/06"}
                status={"finish"}
                position={"프론트, 배포"}
              />
            </TableCell>
            <TableCell align="center">
              <ExtraInfoDialog
                dialogTitle={"포트폴리오 추천 서비스 : Dr.폴리오"}
              >
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
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CustomSection>
  );
};

export default ProjectSection;
