import React from "react";
import { CustomSection } from "../component/CustomSection";
import { IconButton } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { CustomSectionTitle } from "src/component/SectionTitle";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Link from "next/link";

const CircleImage = styled(Image)({
  borderRadius: "100%",
});

const BlogSection = () => {
  const BlogSectionVAProp: BlogSectionVAProp = {};
  return <BlogSectionView {...BlogSectionVAProp} />;
};

interface BlogSectionVAProp {}
const BlogSectionView = ({}: BlogSectionVAProp) => {
  return (
    <CustomSection id={"Blog"}>
      <CustomSectionTitle
        title={"Blog"}
        subTitle={"글을 쓰는 것을 즐깁니다. 공부한 것을 나누며, 취미를 기록하고 또 학습합니다."}
      />
      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
        <ul style={{ flex: "1", minWidth: "300px" }}>
          <li>
            <strong>Tistory</strong> 에는 코딩테스트부터 책에 대한 후기 (일 평균 : 300, 현재 누적 13만)
          </li>
          <li>
            <strong>Velog</strong> 에는 딥한 내용의 개발글을 쓰려고 하고 있습니다 (산출하기 어려움).
          </li>
        </ul>
        <Stack direction={"row"}>
          <Stack direction={"row"} alignItems={"center"}>
            블로그 바로가기 <ArrowRightIcon />
          </Stack>

          <Stack direction={"row"} alignItems={"center"}>
            <Link href={"https://all-dev-kang.tistory.com/category/%EA%B0%9C%EB%B0%9C"}>
              <a target="_blank" style={{ textDecoration: "none" }}>
                <IconButton>
                  <Image src={`/icons/tistory.svg`} height={40} width={40} />
                </IconButton>
              </a>
            </Link>
            <Link href={"https://velog.io/@kangkyeungseok"}>
              <a target="_blank" style={{ textDecoration: "none" }}>
                <IconButton>
                  <Image src={`/icons/velog.png`} height={40} width={40} />
                </IconButton>
              </a>
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <iframe
        src="https://all-dev-kang.tistory.com/category/%EA%B0%9C%EB%B0%9C"
        width={"100%"}
        height={"100%"}
        style={{ minHeight: "400px" }}
        sandbox="allow-scripts"
      />
    </CustomSection>
  );
};

export default BlogSection;
