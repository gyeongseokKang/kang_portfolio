import React from "react";
import { CustomSection } from "../component/CustomSection";
import { CustomSectionTitle } from "src/component/SectionTitle";
import Image from "next/image";
import CustomTable, { CustomTableCell, CustomTableRow } from "src/component/table/CustomTable";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";
import { StackChip } from "src/component/chip/StackChip";

const SkillSection = () => {
  const SkillSectionVAProp: SkillSectionVAProp = {};
  return <SkillSectionView {...SkillSectionVAProp} />;
};

interface SkillSectionVAProp {}
const SkillSectionView = ({}: SkillSectionVAProp) => {
  return (
    <CustomSection id={"Skill"}>
      <CustomSectionTitle
        title={"Skill"}
        subTitle={
          "다양한 프레임워크, 라이브러리, 솔루션 등을 사용해보면서 새로운 것을 익히는 것을 좋아합니다. 하지만 프론트앤드의 기본이 되는 기술을 주로 공부합니다."
        }
      />
      <CustomTable
        key="SKillTable"
        header={["기술", "로고", "사용 경험", "숙련도"]}
        footer={"5개의 별은 부끄럽게도 평생을 공부해도 가질수 있을까 의문입니다만, 쟁취해보려고 합니다."}
      >
        <SkillSectionItem
          name={"Javascript"}
          score={4}
          experienceText={
            "JAVASCRIPT, ECMASCRIPT, WEBPACK 과 BABEL등을 위주로 개발하며 모듈을 극대화한 자바스크립트 프로그래밍을 추구합니다. 최신 문법인 ES6부터 핵심이 되는 자바스크립트 코어까지 가장 깊게 공부하고 사용하고 있는 언어이기도 합니다."
          }
          careerNumber={3}
        />
        <SkillSectionItem
          name={"Typescript"}
          score={3}
          experienceText={
            "타입스크립트의 견고한 정적 분석을 통해 개발 유지보수성을 향상시키고 사이드이펙트가 없는 프로그램을 만들기 위해 도입하고 사용하고 있습니다. 자바스크립트의 슈퍼셋언어로서 다양한 기능과 장기적인 편의가 있어 자바스크립트와 함께 꾸준히 배워가고 있습니다."
          }
          careerNumber={2}
        />
        <SkillSectionItem
          name={"React"}
          score={3}
          experienceText={`기존 프로젝트(JS+CSS+HTML)에서 REACT로 마이그레이션을 위해 사용했습니다.
            클래스형 컴포넌트보다는 함수형 컴포넌트 + Hooks 조합을 좋아하고 적절한 최적화와 누구나 가져다 쓸수 있는 깔끔한 컴포넌트를 만들기 위해 고민합니다.
            또한 STORYBOOK를 이용한 컴포넌트 테스트를 진행하며 다양한 상태관리툴을 도입해보고 공부합니다`}
          careerNumber={2}
        />
        <SkillSectionItem
          name={"Next"}
          score={2}
          experienceText={`
            React 앱을 만드는 도중에 SEO와 SSR를 써야할 상황이 생겼습니다. React 라이브러리를 통한 우회방법을 고민하다 Next를 접하고 이후에 계속 사용하고 있습니다.
            Next의 프레임워크다운 규칙과 철학이 마음에 들어 계속 공부하고 있습니다.
            `}
          careerNumber={1}
        />
      </CustomTable>
      <Stack direction={"column"}>
        <Stack direction={"row"} padding={0.5}>
          <Typography sx={{ pr: 2 }}>Utilities :</Typography>
          <StackChip stackList={["Zeplin", "Figma", "Framer", "Storybook"]} />
        </Stack>
        <Stack direction={"row"} padding={0.5}>
          <Typography sx={{ pr: 2 }}>DataBase :</Typography>
          <StackChip stackList={["Firebase", "MySQL"]} />
        </Stack>
        <Stack direction={"row"} padding={0.5}>
          <Typography sx={{ pr: 2 }}>Deploy :</Typography>
          <StackChip stackList={["Amplify", "Vercel", "Githubpage"]} />
        </Stack>
      </Stack>
    </CustomSection>
  );
};

interface SkillSectionItemProp {
  name: string;
  score: number;
  experienceText: string;
  careerNumber: number;
}

const SkillSectionItem = ({ name, score, experienceText, careerNumber }: SkillSectionItemProp) => {
  return (
    <CustomTableRow key={name}>
      <CustomTableCell component="th" scope="row" align="center">
        {name}
      </CustomTableCell>
      <CustomTableCell align="center">
        <Image src={`/icons/${name}.svg`} height={50} width={50} />
      </CustomTableCell>
      <CustomTableCell align="center">{experienceText}</CustomTableCell>
      <CustomTableCell align="center">
        <Stack>
          <Rating name="read-only" value={score} readOnly size="small" />
          <Typography>{careerNumber} years</Typography>
        </Stack>
      </CustomTableCell>
    </CustomTableRow>
  );
};

export default SkillSection;
