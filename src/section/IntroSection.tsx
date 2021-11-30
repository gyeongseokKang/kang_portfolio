import React from "react";
import { CustomSection } from "./../component/CustomSection";
import Typography from "@mui/material/Typography";
import { CustomSectionTitle } from "src/component/SectionTitle";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const CircleImage = styled(Image)({
  borderRadius: "100%",
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "inline",
  background: `linear-gradient(180deg, rgba(0,0,0,0) 50%, ${theme.palette.primary.light} 50%)`,
  paddingInline: "1px 2px",
  fontWeight: "500" as any,
  letterSpacing: "-1px",
}));

const IntroSection = () => {
  const IntroSectionVAProp: IntroSectionVAProp = {};
  return <IntroSectionView {...IntroSectionVAProp} />;
};

interface IntroSectionVAProp {}
const IntroSectionView = ({}: IntroSectionVAProp) => {
  return (
    <CustomSection
      id={"Intro"}
      seo={{
        title: `Kang's Profolio`,
        description: "Kang's Intro",
      }}
    >
      <CustomSectionTitle title={"INTRO"} />
      <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        <Typography variant="subtitle1" gutterBottom component="div">
          안녕하세요. <strong>강경석</strong>입니다. <br />
          복잡해진 프론트앤드 환경에서 심플함을 찾으려는 3년차 개발자입니다. <br />
          다양한 기술과 서비스로 혁신적이고 필요한 서비스를 만드는 목표로 삼고 있습니다.
          <br />
          <br />
          <StyledTypography variant="subtitle1" gutterBottom>
            수정하기 쉬운 코드
          </StyledTypography>
          를 만드는
          <StyledTypography variant="subtitle1" gutterBottom>
            대체되기 어려운 개발자
          </StyledTypography>
          가 되고 싶습니다.
          <br />
          글을 쓰는 것도 읽는 것도 좋아하는 개발자가 되고 싶습니다.
        </Typography>
        <CircleImage src={"/images/intro/myface.jpg"} width={250} height={250} priority={true} />
      </div>
    </CustomSection>
  );
};

export default IntroSection;
