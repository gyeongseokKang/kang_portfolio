import { Divider, Typography } from "@mui/material";

import ExtraInfoDialog from "@component/dialog/ExtraInfoDialog";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Stack from "@mui/material/Stack";
import { CustomSectionTitle } from "src/component/SectionTitle";
import { CustomSection } from "../component/CustomSection";

const RetrospectivedSection = () => {
  const RetrospectivedSectionVAProp: RetrospectivedSectionVAProp = {};
  return <RetrospectivedSectionView {...RetrospectivedSectionVAProp} />;
};

interface RetrospectivedSectionVAProp {}
const RetrospectivedSectionView = ({}: RetrospectivedSectionVAProp) => {
  return (
    <CustomSection id={"Retrospective"}>
      <CustomSectionTitle
        title={"Retrospectived"}
        subTitle={
          "분기별 회고를 작성하며 지난 날을 반성하고 정리합니다.(2022부터 시작~)"
        }
      />
      <RetrospectivedSection2023Item />
      <RetrospectivedSection2022Item />
    </CustomSection>
  );
};

interface RetrospectivedItemProp {
  retrospectivedName: string;
  details: string;
  oneLineTitle: string;
  extraDetail?: string[];
}

const RetrospectivedItem = ({
  retrospectivedName,
  details,
  oneLineTitle,
  extraDetail,
}: RetrospectivedItemProp) => {
  return (
    <>
      <Typography sx={{ paddingBottom: 1 }} fontWeight={500}>
        {retrospectivedName} - {oneLineTitle}
      </Typography>
      <Typography variant="subtitle2">
        <Stack
          spacing={1}
          direction={"row"}
          alignItems={"center"}
          sx={{ pl: 1, pb: 2 }}
        >
          ㄴ{details}
          {extraDetail && (
            <ExtraInfoDialog dialogTitle={`세부 정보`} iconType={"paper"}>
              <Stack
                spacing={1}
                alignItems={"flex-start"}
                divider={<Divider orientation="vertical" flexItem />}
              >
                {extraDetail.map((detail) => {
                  return (
                    <Typography
                      sx={{ paddingBottom: 1 }}
                      fontWeight={500}
                      fontSize={14}
                    >
                      {detail}
                    </Typography>
                  );
                })}
              </Stack>
            </ExtraInfoDialog>
          )}
        </Stack>
      </Typography>
    </>
  );
};

const RetrospectivedSection2022Item = () => {
  return (
    <Timeline sx={{ minWidth: "500px" }}>
      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: 0, minWidth: "100px" }}>
          2022년
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <RetrospectivedItem
            retrospectivedName={"4Q"}
            oneLineTitle={
              "가우디오랩의 다양한 서비스를 위한 기초 다지기를 시작했다"
            }
            details={"신뢰를 바탕으로 다양한 서비스 및 데모 사이트를 구현."}
            extraDetail={[
              "1. 오디오, 대용량 데이터에 대한 최적화 진행",
              "2. 기존 웹사이트 모바일 지원을 위한 반응형 및 구조 변경",
            ]}
          />
          <RetrospectivedItem
            retrospectivedName={"3Q"}
            oneLineTitle={"이직 후 믿을 수 있는 동료가 되기 위해 노력했다"}
            details={
              "기존 프로젝트 마이그레이션 및 기술 스택 익히기, 신뢰감를 얻은 중요했던 시기"
            }
            extraDetail={[
              "1. 클래스형컴포넌트 -> 함수컴포넌트로 마이그레이션 완료",
              "2. Next 도입, 데이터 페칭은 React-Query로 개선",
            ]}
          />
          <RetrospectivedItem
            retrospectivedName={"2Q"}
            oneLineTitle={"이직을 준비했고, 프로젝트를 정리하며 마무리했다"}
            details={
              "포트폴리오를 최신화하고 면접을 보러다녔으며, 현재 회사의 업무를 마무리하고 문서화에 힘씀."
            }
          />
          <RetrospectivedItem
            retrospectivedName={"1Q"}
            oneLineTitle={
              "이직을 마음먹었고, Next.js, Recoil 등 최신 스택을 사용해봤다"
            }
            details={
              "기존의 기술스택에서 벗어나 다양한 라이브러리, 프레임워크를 접하려고 노력했다."
            }
            extraDetail={[
              "1. 최신 기술을 학습을 위한 사이드프로젝트 시작(Next.js)",
            ]}
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
const RetrospectivedSection2023Item = () => {
  return (
    <Timeline sx={{ minWidth: "500px" }}>
      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: 0, minWidth: "100px" }}>
          2023년
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <RetrospectivedItem
            retrospectivedName={"3Q"}
            oneLineTitle={"오디오 도메인 개발에 자신감이 붙었다."}
            details={
              "코어 라이브러리 내재화를 완성했고(Waveform-playlist), 오픈소스 컨트리뷰터(wavesurfer)가 되었다."
            }
            extraDetail={[
              "1. Waveform-playlist의 내재화를 완료하고 추가기능 및 고도화를 진행중이다.",
              "2. Wavesurfer 오픈소스 컨트리뷰터가 되었다.",
              "3. Flutter로 서비스를 런칭하고, 유저의 피드백을 받아 고도화를 하고 있다.",
            ]}
          />
          <RetrospectivedItem
            retrospectivedName={"2Q"}
            oneLineTitle={"겨울을 이겨내기 위한 다양한 불피우기를 시도했다."}
            details={"프로젝트 기획, 구현, 런칭까지 매우 바쁜 분기였다"}
            extraDetail={[
              "1. Gaudio Studio-pro를 런칭했다. 내가 만든 서비스가 돈을 벌기 시작했다.",
              "2. 사이드 프로젝트를 위해 오랜만에 Flutter를 잡았다.",
            ]}
          />
          <RetrospectivedItem
            retrospectivedName={"1Q"}
            oneLineTitle={"겨울나기에 돌입하여 기술로 살아남기에 도전했다"}
            details={
              "코어 라이브러리(Web Audio)에 대한 개발을 시작하고 브라우저상에서 대용량 파일을 요리해봤다."
            }
            extraDetail={[
              "1. Waveform-playlist 오디오 라이브러리 개선(TS/React 지원, 대용량 파일 최적화)",
              "2. AI모델을 위한 데이터 수집 자동화툴 구현(Puppeteer 활용) - 100GB 수집",
              "3. ChakraUI, Framer-motion, TailwindCSS 조합의 프로젝트 런칭",
            ]}
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default RetrospectivedSection;
