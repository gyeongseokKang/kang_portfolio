import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CustomSectionTitle } from "src/component/SectionTitle";
import { CustomSection } from "../component/CustomSection";

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
            씁니다.(총 67만(25.9 기준))
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
            {/* <Link href={"https://velog.io/@kangkyeungseok"}>
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
            </Link> */}
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
