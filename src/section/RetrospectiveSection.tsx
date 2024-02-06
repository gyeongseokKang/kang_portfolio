import ExtraInfoDialog from "@component/dialog/ExtraInfoDialog";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
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
      <VerticalTimeline sx={{ minWidth: "500px" }}>
        <RetrospectivedSection2023Item />
        <RetrospectivedSection2022Item />
      </VerticalTimeline>
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
      <div className="font-medium text-md">
        {retrospectivedName} - {oneLineTitle}
      </div>
      <div className="flex flex-row items-center gap-1 pl-4 text-sm">
        <>
          ㄴ{details}
          {extraDetail && (
            <ExtraInfoDialog dialogTitle={`세부 정보`} iconType={"paper"}>
              <div className="flex flex-col gap-1 pl-4 text-sm">
                {extraDetail.map((detail) => {
                  return <span>{detail}</span>;
                })}
              </div>
            </ExtraInfoDialog>
          )}
        </>
      </div>
    </>
  );
};

const RetrospectivedSection2022Item = () => {
  return (
    <VerticalTimelineElement
      icon={<div>2022</div>}
      // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    >
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
    </VerticalTimelineElement>
  );
};
const RetrospectivedSection2023Item = () => {
  return (
    <VerticalTimelineElement>
      <RetrospectivedItem
        retrospectivedName={"4Q"}
        oneLineTitle={"새로운 기술보단 기존 기술에 능숙함을 더하다"}
        details={
          "사용하는 기술이 정리되고, 기존 기술에 대한 이해도를 높이는데 집중했다."
        }
        extraDetail={[
          "1. React, Next에 대한 이해도를 높이고, 기존 프로젝트를 리팩토링했다.",
          "2. Flutter 프로젝트를 유지보수하며 안정도를 높이고 있다.",
        ]}
      />
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
    </VerticalTimelineElement>
  );
};

export default RetrospectivedSection;

const AEVas = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" name="2023" />
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="font-semibold leading-none text-small text-default-600">
              Zoey Lang
            </h4>
            <h5 className="tracking-tight text-small text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
};
