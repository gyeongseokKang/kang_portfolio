import { Typography } from "@mui/material";

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
        subTitle={"분기별 회고를 작성하며 지난 날을 반성하고 정리합니다.(2022부터 시작~)"}
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
  score?: number;
}

const RetrospectivedItem = ({ retrospectivedName, details, oneLineTitle, score }: RetrospectivedItemProp) => {
  return (
    <>
      <Typography sx={{ paddingBottom: 1 }} fontWeight={500}>
        {retrospectivedName} - {oneLineTitle}
      </Typography>
      <Typography variant="subtitle2">
        <Stack spacing={1} direction={"row"} alignItems={"center"} sx={{ pl: 1, pb: 2 }}>
          ㄴ{details}
          <Stack>{score}</Stack>
        </Stack>
      </Typography>
    </>
  );
};

const RetrospectivedSection2022Item = () => {
  return (
    <Timeline sx={{ minWidth: "500px" }}>
      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: 0, minWidth: "100px" }}>2022년</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <RetrospectivedItem
            retrospectivedName={"4Q"}
            oneLineTitle={"가우디오랩의 다양한 서비스를 위한 기초 다지기를 시작했다"}
            details={"신뢰를 바탕으로 다양한 서비스 및 데모 사이트를 구현."}
          />
          <RetrospectivedItem
            retrospectivedName={"3Q"}
            oneLineTitle={"이직 후 믿을 수 있는 동료가 되기 위해 노력했다"}
            details={"기존 프로젝트 마이그레이션 및 기술 스택 익히기, 신뢰감를 얻은 중요했던 시기"}
          />
          <RetrospectivedItem
            retrospectivedName={"2Q"}
            oneLineTitle={"이직을 준비했고, 프로젝트를 정리하며 마무리했다"}
            details={"포트폴리오를 최신화하고 면접을 보러다녔으며, 현재 회사의 업무를 마무리하고 문서화에 힘씀."}
          />
          <RetrospectivedItem
            retrospectivedName={"1Q"}
            oneLineTitle={"이직을 마음먹었고, Next.js, Recoil 등 최신 스택을 사용해봤다"}
            details={"기존의 기술스택에서 벗어나 다양한 라이브러리, 프레임워크를 접하려고 노력했다."}
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
        <TimelineOppositeContent sx={{ flex: 0, minWidth: "100px" }}>2023년</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <RetrospectivedItem
            retrospectivedName={"1Q 목표"}
            oneLineTitle={"만드는 서비스에 안정성을 더했다"}
            details={"테스팅 라이브러리에 대한 학습과 적용을 해봤다"}
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default RetrospectivedSection;
