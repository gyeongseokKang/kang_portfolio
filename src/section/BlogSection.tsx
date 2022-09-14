import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { CustomSection } from "../component/CustomSection";
import { CustomSectionTitle } from "src/component/SectionTitle";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Stack } from "@mui/material";

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
        subTitle={"기억보다 기록을, 그리고 지식공유를 위해 하고 있습니다."}
      />
      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
        <ul style={{ flex: "1", minWidth: "300px" }}>
          <li>
            <strong>Tistory</strong> 는 도서 리뷰부터 개발에 대한 모든 것을
            씁니다.(일 평균 : 600 | 총 288,986(22.09.14 기준))
          </li>
          <li>
            <strong>Velog</strong> 는 시리즈로 쓰기 위한 글을 씁니다. (산출하기
            어려움).
          </li>
        </ul>
        <Stack direction={"row"}>
          <Stack direction={"row"} alignItems={"center"}>
            블로그 바로가기 <ArrowRightIcon />
          </Stack>

          <Stack direction={"row"} alignItems={"center"}>
            <Link
              href={
                "https://all-dev-kang.tistory.com/category/%EA%B0%9C%EB%B0%9C"
              }
            >
              <a target="_blank" style={{ textDecoration: "none" }}>
                <IconButton aria-label="open tistory button">
                  <Image
                    src={`/icons/tistory.svg`}
                    height={40}
                    width={40}
                    alt={"tistory icon"}
                  />
                </IconButton>
              </a>
            </Link>
            <Link href={"https://velog.io/@kangkyeungseok"}>
              <a target="_blank" style={{ textDecoration: "none" }}>
                <IconButton aria-label="open velog button">
                  <Image
                    src={`/icons/velog.png`}
                    height={40}
                    width={40}
                    alt={"velog icon"}
                  />
                </IconButton>
              </a>
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <iframe
        title={"tistory blog"}
        src="https://all-dev-kang.tistory.com/category/%EA%B0%9C%EB%B0%9C"
        width={"100%"}
        height={"100%"}
        style={{ minHeight: "400px" }}
      />
    </CustomSection>
  );
};

export default BlogSection;
