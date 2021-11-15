import React from "react";
import { CustomSection } from "../component/CustomSection";
import Typography from "@mui/material/Typography";
import { CustomSectionTitle } from "src/component/SectionTitle";

const ProjectSection = () => {
  const ProjectSectionVAProp: ProjectSectionVAProp = {};
  return <ProjectSectionView {...ProjectSectionVAProp} />;
};

interface ProjectSectionVAProp {}
const ProjectSectionView = ({}: ProjectSectionVAProp) => {
  return (
    <CustomSection
      id={"Project"}
      seo={{
        title: `Kang's Intro`,
        description: "Kang's Intro",
      }}
    >
      <CustomSectionTitle
        title={"PROJECT"}
        subTitle={"저는 깔끔한 코드, 읽기 쉬운 디자인패턴을 마음속에 담고 프로젝트를 끝까지 하기 위해 노력합니다."}
      />
      <Typography variant="subtitle1" gutterBottom component="div">
        안녕하세요. <strong>강경석</strong>입니다. <br />
        친구들과 함께 창업한 것을 시작으로, 바쁘게 살고있는 3년차 개발자입니다. <br />
        다양한 기술과 서비스로 새로운 서비스를 만드는 것을 좋아하며
        <br />
        그럼에도 깊게 공부하는 걸 추구하는 개발자이기도 합니다. <br />
        읽기 쉬운 코드를 쓰는 개발자, 사랑받는 서비스를 만들고 싶은 개발자가 <br />
        되고 싶어 오늘도 공부하고 있습니다.
      </Typography>
    </CustomSection>
  );
};

export default ProjectSection;
