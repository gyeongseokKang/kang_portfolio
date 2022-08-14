import CustomTable, {
  CustomTableCell,
  CustomTableRow,
} from "src/component/table/CustomTable";

import { CustomSection } from "../component/CustomSection";
import { CustomSectionTitle } from "src/component/SectionTitle";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import React from "react";
import Stack from "@mui/material/Stack";
import { StackChip } from "src/component/chip/StackChip";
import { Typography } from "@mui/material";

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
          "빠르게 편하는 최신 기술을 익히고 프로젝트에 적용하고자 고민합니다."
        }
      />
      <CustomTable
        key="SKillTable"
        header={["기술", "-", "사용 경험", "사용 기간"]}
      >
        <SkillSectionItem
          name={"Javascript"}
          score={3}
          experienceText={`ES6문법이 활발하게 적용될때 배워 이후 버젼도 꾸준히 공부하여 적용하고 있습니다. 
          데이터 시각화 대시보드, 반응형 웹사이트 등을 만들며 활용하고 있습니다.`}
          careerNumber={4}
        />
        <SkillSectionItem
          name={"Typescript"}
          score={3}
          experienceText={`정적 분석을 통해 개발 생산성과 유지보수성이 높아진 것을 실감하여 이후 진행하는 프로젝트 대부분에 적용하고 있습니다.`}
          careerNumber={3}
        />
        <SkillSectionItem
          name={"React"}
          score={3}
          experienceText={`클래스형 컴포넌트에서 함수형 컴포넌트로 대세가 변할때즘 접하고 이후 React의 Flux 패러다임에 매료되어 사용하고 있습니다.
          최신 리액트를 빠르게 따라가고 적용하고 있으며 현재 React18를 도입하여 프로젝트에 사용중입니다.`}
          careerNumber={4}
        />
        <SkillSectionItem
          name={"Next"}
          score={2}
          experienceText={`
            React가 최종적으로 가야할 프레임워크라 생각하고 있습니다. 웹뷰 기반, SEO 노출을 위해 Next.js를 도입해서 사용중이며 현재 Next12를 사용하여
            SSR, ISG를 통해 빌드 프로세스를 구축하였습니다.
            `}
          careerNumber={2}
        />
      </CustomTable>
      <Stack direction={"column"}>
        <Stack direction={"row"} padding={0.5}>
          <Typography sx={{ pr: 2, minWidth: "100px" }}>
            UI library :
          </Typography>
          <StackChip stackList={["MUI", "Tailwind", "StyledComponent"]} />
        </Stack>
        <Stack direction={"row"} padding={0.5}>
          <Typography sx={{ pr: 2, minWidth: "100px" }}>Testing :</Typography>
          <StackChip stackList={["Jest", "Storybook", "Framer"]} />
        </Stack>
        <Stack direction={"row"} padding={0.5}>
          <Typography sx={{ pr: 2, minWidth: "100px" }}>
            Deployment :
          </Typography>
          <StackChip stackList={["Amplify", "Vercel", "Githubpage"]} />
        </Stack>

        <Stack direction={"row"} padding={0.5}>
          <Typography sx={{ pr: 2, minWidth: "100px" }}>DataBase :</Typography>
          <StackChip stackList={["Firebase", "MySQL", "Oracle"]} />
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

const SkillSectionItem = ({
  name,
  score,
  experienceText,
  careerNumber,
}: SkillSectionItemProp) => {
  return (
    <CustomTableRow key={name}>
      <CustomTableCell component="th" scope="row" align="center">
        {name}
      </CustomTableCell>
      <CustomTableCell align="center">
        <Image
          src={`/icons/${name.toLowerCase()}.svg`}
          height={50}
          width={50}
          alt={name}
        />
      </CustomTableCell>
      <CustomTableCell align="center">{experienceText}</CustomTableCell>
      <CustomTableCell align="center">
        <Stack>
          <Typography>{careerNumber} years</Typography>
        </Stack>
      </CustomTableCell>
    </CustomTableRow>
  );
};

export default SkillSection;

// const ColoredDescriptionBodyContent = ({ text, regex }: { text: string; regex: RegExp }) => {
//   const splitMatchedText = (content: string) => {
//     return content.replace(regex, (match) => `<span style="color: white;background-color: #00AAD2">${match}</span>`);
//   };

//   return (
//     <Typography className={classes.scenarioDescriptionBody}>
//       <span dangerouslySetInnerHTML={{ __html: splitMatchedText(text) }}></span>
//     </Typography>
//   );
// };

//   const ColoredDescriptionBodyContent = ({ text }: { text: string }) => {
//     const splitMatchedText = (content: string) => {
//       const regExp = /(\[([^\]]+)\])/gi;
//       return content.replace(regExp, (match) => `<span style="color: white;background-color: #00AAD2">${match}</span>`);
//     };

//     return (
//       <Typography className={classes.scenarioDescriptionBody}>
//         <span dangerouslySetInnerHTML={{ __html: splitMatchedText(text) }}></span>
//       </Typography>
//     );
//   };
