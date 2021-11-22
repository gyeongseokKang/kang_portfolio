import React from "react";
import { CustomSection } from "./../component/CustomSection";
import Typography from "@mui/material/Typography";
import { CustomSectionTitle } from "src/component/SectionTitle";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const CircleImage = styled(Image)({
  borderRadius: "100%",
});

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
          친구들과 함께 창업한 것을 시작으로, 바쁘게 살고있는 3년차 개발자입니다. <br />
          다양한 기술과 서비스로 새로운 서비스를 만드는 것을 좋아하며
          <br />
          그럼에도 깊게 공부하는 걸 추구하는 개발자이기도 합니다. <br />
          읽기 쉬운 코드를 쓰는 개발자, 사랑받는 서비스를 만들고 싶은 개발자가 <br />
          되고 싶어 오늘도 공부하고 있습니다.
        </Typography>
        <CircleImage src={"/images/intro/myface.jpg"} width={250} height={250} priority={true} />
      </div>
    </CustomSection>
  );
};

export default IntroSection;
