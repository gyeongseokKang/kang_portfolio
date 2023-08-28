import CustomTable, {
  CustomTableCell,
  CustomTableRow,
} from "src/component/table/CustomTable";

import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { CustomSectionTitle } from "src/component/SectionTitle";
import { CustomSection } from "../component/CustomSection";

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
          "T자형 스킬셋을 추가합니다. 현재는 깊게 하는것보다 넓게 하는게 더 재밌어요."
        }
      />
      <CustomTable
        key="SKillTable"
        header={["기술", "-", "사용 경험", "사용 기간"]}
      >
        <SkillSectionItem
          name={"Javascript"}
          score={3}
          experienceText={`프론트엔드 개발자의 기본기라 생각하고 끊임없이 공부하고 있습니다.`}
          careerNumber={5}
        />
        <SkillSectionItem
          name={"Typescript"}
          score={3}
          experienceText={`안 사용해본 사람은 있어도 한번만 사용한 사람은 없다에서, 한번만 사용한 사람은 없다를 담당하고 있습니다.`}
          careerNumber={4}
        />
        <SkillSectionItem
          name={"React"}
          score={3}
          experienceText={`프론트 4대장(React,Vue,Angular,Svelte)중에서 가장 많이 사용합니다. 협업을 하기위해선 리액트를 뺴놓수 없죠.`}
          careerNumber={4}
        />
        <SkillSectionItem
          name={"Next"}
          score={2}
          experienceText={`
           프레임워크가 주는 컨벤션과 안정성, 그리고 편리함에 매료되어 사용하고 있습니다. 앞으로 어떻게 발전해나갈지 기대됩니다.
            `}
          careerNumber={3}
        />
        <SkillSectionItem
          name={"Flutter"}
          score={2}
          experienceText={`
            화면을 완전히 다룰수 있는 매력, 크로스플랫폼을 지원하는 장점에 빠져서 재밌게 사용하고 있습니다. 
            `}
          careerNumber={2}
        />
      </CustomTable>
      {/* <Stack direction={"column"}>
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
      </Stack> */}
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
