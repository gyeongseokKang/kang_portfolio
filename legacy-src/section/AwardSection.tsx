import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Image from "next/image";
import ExtraInfoDialog from "src/component/dialog/ExtraInfoDialog";
import { CustomSectionTitle } from "src/component/SectionTitle";
import { CustomSection } from "../component/CustomSection";

const AwardSection = () => {
  return (
    <CustomSection id={"Award"}>
      <CustomSectionTitle
        title={"Award"}
        subTitle={
          "만들고 있던 서비스를 검증하기 위해, 주어진 일에 열심히 몰두하고 있을때 선물처럼 다가옵니다."
        }
      />
      <AwardSectionItem />
    </CustomSection>
  );
};

interface AwardItemProp {
  awardName: string;
  details: string;
  awardGrade: string;
  awardImg?: string[];
}

const AwardItem = ({
  awardName,
  details,
  awardGrade,
  awardImg,
}: AwardItemProp) => {
  return (
    <>
      <div className="font-semibold">
        {awardName} - {awardGrade}
      </div>
      <div className="text-sm">
        <div className="flex flex-row items-center gap-1 pl-4 text-sm">
          ㄴ{details}
          <ExtraInfoDialog dialogTitle={`${awardName}`} iconType={"prize"}>
            <div className="flex flex-row items-center gap-1 pl-4 text-sm">
              {awardImg?.map((path) => (
                <div
                  style={{
                    width: "150px",
                    height: "300px",
                    minWidth: "300px",
                    position: "relative",
                  }}
                >
                  <Image
                    key={path}
                    src={`/images/award/${path}`}
                    layout="fill"
                    alt={"award image"}
                  />
                </div>
              ))}
            </div>
          </ExtraInfoDialog>
        </div>
      </div>
    </>
  );
};

const AwardSectionItem = () => {
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
          <AwardItem
            awardName={"가우디오랩"}
            awardGrade={"PIETTIC 중 Integrity 수상"}
            details={"신뢰도 높은 협업, 높은 수준의 업무수행으로 인한 수상"}
            // awardImg={["tmaxAward2021.jpg"]}
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: 0, minWidth: "100px" }}>
          2021년
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <AwardItem
            awardName={"티맥스 표창장"}
            awardGrade={"우수사원상"}
            details={"[티맥스]시각화 플랫폼, 통계 플랫폼 관련 업무로 인한 수상"}
            awardImg={["tmaxAward2021.jpg"]}
          />
          <AwardItem
            awardName={"우리은행 온택트 공모전"}
            awardGrade={"우수상"}
            details={
              "[DR.폴리오] 금용공학 모델 + AI를 이용한 최적의 포트폴리오 생성, 추천 서비스"
            }
            awardImg={["wooribangAward.jpeg"]}
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: 0, minWidth: "100px" }}>
          2019년
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <AwardItem
            awardName={
              "청년 스타트업 어워즈, 경기도 대학생 융합 창업지원 공모전, 흑석캠퍼스타운 창업경진대회,스마트시티즌 챌린지 외"
            }
            awardGrade={"대상, S등급, 대상, 최우수상 외"}
            details={"[카찹] 통합 모빌리티 플랫폼"}
            awardImg={[
              "startupAward.jpg",
              "gyeonggiAward.jpeg",
              "campusTownAward.jpg",
              "smartCitizenAward.jpeg",
              "STU_Award.png",
            ]}
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: 0, minWidth: "100px" }}>
          2018년
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <AwardItem
            awardName={"한국통신학회 추계종합학술발표회"}
            awardGrade={"우수논문상"}
            details={
              "[UC-LAB] GAN모델과 DNN모델을 활용한 ANOMALY DETECTION에 관한 연구"
            }
            awardImg={["bestPaper2018.jpg", "poster.jpg"]}
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default AwardSection;
