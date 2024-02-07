import { StackChip } from "@component/chip/StackChip";
import { UrlChip } from "@component/chip/UrlChip";
import ExtraInfoDialog from "@component/dialog/ExtraInfoDialog";
import { Titleli } from "@component/ul/Titleli";
import { Stack } from "@mui/material";
import {
  Image,
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
        subTitle={"신기술 + 좋은 옛기술을 통해 프로젝트를 만들어갑니다."}
      />
      <Table
        aria-label="customized table"
        bottomContent={
          <div className="flex justify-center w-full text-xs text-foreground-400">
            이전 회사의 프로젝트 또는 개인프로젝트 중 공개할 수 있는 프로젝트만
            공유합니다.
          </div>
        }
      >
        <TableHeader>
          {["프로젝트", "소개 / 사용기술", "상세정보"].map((headerItem) => (
            <TableColumn>{headerItem}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          <TableRow key={"티맥스"}>
            <TableCell>BI 솔루션</TableCell>
            <TableCell>
              <div>
                다양한 유형의 데이터를 실시간으로 분석하여 비즈니스 의사결정을
                돕는 빅데이터 플랫폼
              </div>
              <StackChip
                stackList={[
                  "React",
                  "Typescript",
                  "MUI",
                  "SASS",
                  "Oracle",
                  "Github",
                ]}
              />
            </TableCell>

            <TableCell>
              <ExtraInfoDialog dialogTitle={"BI 솔루션"}>
                <Image src="/project/티맥스_1.gif" width={"100%"}></Image>
                <Image src="/project/티맥스_2.gif" width={"100%"}></Image>
                <Titleli
                  title={"개발 목표"}
                  list={[
                    "기존 사내 프레임워크에서 리액트로 마이그레이션",
                    "데이터 시각화 대시보드 구축",
                    "자동화된 데이터 분석 및 리포팅 기능 제공",
                  ]}
                />
                <Titleli
                  title={"개발 성과"}
                  list={[
                    "5종 20개의 차트 및 옵션 기능 제공",
                    "MUI, Styled Component를 통한 빠른 디자인 구축",
                    "성공적인 마이그레이션, 배포 및 개발 속도 향상",
                  ]}
                />
                <Titleli
                  title={"내 기여도"}
                  list={[
                    "차트 기능 단톡 개발 및 대시보드간 연동 기능 개발",
                    "리액트 공통 컴포넌트 개발 및 환경 구축 담당",
                  ]}
                />
              </ExtraInfoDialog>
            </TableCell>
          </TableRow>
          <TableRow key={"여행사 내부 솔루션"}>
            <TableCell>여행사 사내솔루션(ERP+CRM)</TableCell>
            <TableCell>
              <div>
                MS의 Access로 관리하던 기존 시스템 마이그레이션 프로젝트
              </div>
              <StackChip
                stackList={[
                  "React",
                  "Typescript",
                  "Next-js",
                  "NextUI",
                  "Tailwind",
                  "Prisma",
                  "graphql",
                  "postgresql",
                  "Amplify",
                  "Github",
                ]}
              />
            </TableCell>

            <TableCell>
              <ExtraInfoDialog dialogTitle={"여행사 사내솔루션(ERP+CRM)"}>
                <Image src="/project/그린빈즈_31.gif" width={"100%"}></Image>
                <Titleli
                  title={"개발 목표"}
                  list={[
                    "MS Access로 관리하던 시스템을 웹으로 마이그레이션",
                    "최소의 공수로 최대의 효과를 내는 내부툴 구축",
                  ]}
                />
                <Titleli
                  title={"개발 성과"}
                  list={[
                    "postgresql, prisma, graphql을 통한 데이터 관리",
                    "상기 데이터 프로세스를 통한 typescript 및 graphql 생성 자동화",
                    "NextUI를 통한 빠른 디자인 구축",
                  ]}
                />
                <Titleli
                  title={"내 기여도"}
                  list={[
                    "프론트엔드 개발 및 배포 담당",
                    "prisma-graphql-typescript을 프로세스 구축",
                  ]}
                />
              </ExtraInfoDialog>
            </TableCell>
          </TableRow>
          <TableRow key={"골프 레슨 플랫폼 : 라운드인"}>
            <TableCell>골프 레슨 플랫폼</TableCell>
            <TableCell>
              <div>골프 레슨 서비스 및 회원관리 플랫폼</div>
              <StackChip
                stackList={[
                  "React",
                  "Typescript",
                  "Next-js",
                  "MUI",
                  "flutter",
                  "dart",
                  "Tailwind",
                  "Amplify",
                  "Github",
                ]}
              />
            </TableCell>

            <TableCell>
              <ExtraInfoDialog
                size="xl"
                dialogTitle={"골프 레슨 플랫폼 : 라운드인"}
              >
                <div className="flex items-center justify-center w-full gap-1">
                  <Image
                    className="max-h-[30vh] overflow-y-auto"
                    src="/project/라운드인_앱1.gif"
                    width={"100%"}
                  ></Image>
                  <Image
                    className="max-h-[30vh] overflow-y-auto"
                    src="/project/라운드인_앱2.gif"
                    width={"100%"}
                  ></Image>
                  <Image
                    className="max-h-[30vh] overflow-y-auto"
                    src="/project/라운드인_앱3.gif"
                    width={"100%"}
                  ></Image>
                </div>
                <Titleli
                  title={"개발 목표"}
                  list={[
                    "각종 골프 관련 서비스를 제공할 수 있는 플랫폼",
                    "프로들과 유저들 사이의 1:1 간편 레슨 서비스",
                  ]}
                />
                <Titleli
                  title={"개발 성과"}
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
                    "Flutter + NextJS를 통한 하이브리드앱 구축",
                  ]}
                />
              </ExtraInfoDialog>
            </TableCell>
          </TableRow>
          <TableRow key={"Dr.폴리오"}>
            <TableCell scope="row">금융 포트폴리오 플랫폼</TableCell>
            <TableCell>
              <div>
                금융공학 모델 + AI를 이용한 최고의 포트폴리오 생성, 추천 서비스
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

            <TableCell>
              <ExtraInfoDialog
                dialogTitle={"포트폴리오 추천 서비스 : Dr.폴리오"}
              >
                <video controls width={"100%"} autoPlay={true}>
                  <source src={"/video/dr.folio_service.mp4"}></source>
                </video>
                <Titleli
                  title={"개발 목표"}
                  list={[
                    "금융공학 + AI를 이용한 최적의 포트폴리오 추천 서비스",
                    "사내 기술 습득을 위한 프로젝트",
                  ]}
                />
                <Titleli
                  title={"서비스 성과"}
                  list={[
                    "우리은행 해커톤 우수상 수상",
                    "시계열 예측 모델을 실제 프로젝트에 적용",
                  ]}
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
                    title={"데모 사이트"}
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
