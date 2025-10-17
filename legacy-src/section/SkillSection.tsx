import { StackChip } from "@component/chip/StackChip";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { CustomSectionTitle } from "src/component/SectionTitle";
import { getExperiencedYearFrom } from "src/utils/getExperiencedYear";
import { CustomSection } from "../component/CustomSection";

const SkillSection = () => {
  return (
    <CustomSection id={"Skill"}>
      <CustomSectionTitle
        title={"Stack"}
        subTitle={
          "역설적이게도 제너럴리스트이자 스페셜리스트를 꿈꿉니다. 핵심 영역에선 스페셜, 넓은 영역에선 제너럴을 추구합니다."
        }
      />
      <Accordion variant="splitted" isCompact>
        <AccordionItem
          key="1"
          aria-label="TS, JS"
          startContent={
            <div className="flex flex-wrap gap-2 max-w-[25vw]">
              <StackChip
                size={35}
                stackList={["Javascript", "Typescript"]}
              ></StackChip>
            </div>
          }
          subtitle={`${getExperiencedYearFrom("2018/12/01").N년차}`}
        >
          <div className="text-sm">
            JS, TS의 트렌드를 따라가며 프론트엔드 개발자의 기본기라 생각하고
            끊임없이 공부하고 있습니다.
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="TS, JS"
          startContent={
            <div className="flex flex-wrap gap-2 max-w-[25vw]">
              <StackChip
                size={35}
                stackList={["next-js", "React", "ReactNative"]}
              ></StackChip>
            </div>
          }
          subtitle={`${getExperiencedYearFrom("2020/02/01").N년차}`}
        >
          <div className="text-sm">
            빠르게 급변하는 프론트엔드 시장을 평정중인 기술 스택이라 판단해서
            열심히 사용중인 기술입니다. 과연 이 둘의 시너지를 이길 기술이 나올까
            기대가 됩니다.
            <br />
            ReactNative를 조금씩 찍먹해보고 있습니다.
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="TS, JS"
          startContent={
            <div className="flex flex-wrap gap-2 max-w-[25vw]">
              <StackChip size={35} stackList={["flutter", "dart"]}></StackChip>
            </div>
          }
          subtitle={`${getExperiencedYearFrom("2021/02/01").N년차}`}
        >
          <div className="text-sm">
            One Code, Multi Platform, 이것만큼 강력한 매력이 어디있을까요? 앱을
            만들고 싶을때 주로 사용합니다.
            <br />
            Dart 언어가 주는 정교한 문법과 Flutter의 생태계가 참 마음에 듭니다.
          </div>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="TS, JS"
          startContent={
            <div className="flex flex-wrap gap-2 max-w-[25vw]">
              <StackChip
                size={35}
                stackList={[
                  "graphql",
                  "prisma",
                  "postgresql",
                  "webassembly",
                  "supabase",
                  "elixir",
                ]}
              ></StackChip>
            </div>
          }
        >
          <div className="text-sm">
            상기한 기술들은 프론트엔드 업무를 하면서 계속 경험해보고 있는
            기술들입니다. 언젠가 이것도 전문가의 영역으로 들어가길 바랍니다.
          </div>
        </AccordionItem>
      </Accordion>
    </CustomSection>
  );
};

export default SkillSection;
