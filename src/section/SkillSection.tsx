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
        subTitle={"참신하고 편리함을 주는 기술을 배우고 프로젝트에 적용하고자 고민합니다."}
      />
      <CustomTable
        key="SKillTable"
        header={["기술", "로고", "사용 경험", "숙련도"]}
        footer={"5개의 별을 위해 끝까지 공부하겠습니다."}
      >
        <SkillSectionItem
          name={"Javascript"}
          score={3}
          experienceText={`프론트엔드의 근간이 되는 언어라고 생각하고 최신버전도 꾸준히 트래킹하면서 배우고 있습니다.
          가장 많이 사용한 언어이지만 아직도 전부다 이해하지못해 계속해서 공부하고 있는 언어이기도 합니다.`}
          careerNumber={3}
        />
        <SkillSectionItem
          name={"Typescript"}
          score={3}
          experienceText={`타입스크립트의 정적 분석을 통해 개발 유지보수성을 향상시키고 사이드이펙트가 없는 프로그램을 만들기 위해 도입하고 사용하고 있습니다. 
            한번 빠지면 자바스크립트를 돌아갈수 없다는 말처럼 저 또한 타입스크립트에 매료되었고 계속 사용하고 있습니다`}
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
          <Typography sx={{ pr: 2, minWidth: "100px" }}>Utilities :</Typography>
          <StackChip stackList={["Zeplin", "Figma", "Framer", "Storybook"]} />
        </Stack>
        <Stack direction={"row"} padding={0.5}>
          <Typography sx={{ pr: 2, minWidth: "100px" }}>DataBase :</Typography>
          <StackChip stackList={["Firebase", "MySQL", "Oracle"]} />
        </Stack>
        <Stack direction={"row"} padding={0.5}>
          <Typography sx={{ pr: 2, minWidth: "100px" }}>Deployment :</Typography>
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
        <Image src={`/icons/${name.toLowerCase()}.svg`} height={50} width={50} />
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
