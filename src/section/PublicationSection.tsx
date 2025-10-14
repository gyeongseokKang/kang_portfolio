import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CustomSection } from "src/component/CustomSection";
import { CustomSectionTitle } from "src/component/SectionTitle";

const PublicationSection = () => {
  const PublicationSectionVAProp: PublicationSectionVAProp = {};
  return <PublicationSectionView {...PublicationSectionVAProp} />;
};

interface PublicationSectionVAProp {}
const PublicationSectionView = ({}: PublicationSectionVAProp) => {
  return (
    <CustomSection id={"Publication"}>
      {/* Book Block */}
      <div className="mb-6 md:mb-8">
        <CustomSectionTitle
          title={"Book"}
          subTitle={"📘 인생 첫 책을 출간했습니다!"}
        />
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
          <ul className="flex-1 min-w-[300px] leading-relaxed space-y-2 text-sm md:text-base">
            <li>
              지난 몇 년간의 경험과 블로그 글을 정리해 첫 책을 출간했습니다.
            </li>
            <li>
              완벽한 책은 아니지만, 누군가에게 작은 배움과 읽는 즐거움이 되길
              바랍니다.
            </li>
          </ul>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <span className="font-semibold text-sm md:text-base">
              리액트, Next.js로 완성하는 프론트엔드
            </span>
            <Link href={"https://lnkd.in/g83kQymG"}>
              <a
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700 transition-colors"
                aria-label="교보문고 바로가기"
              >
                바로가기 ↗
              </a>
            </Link>
          </Stack>
        </Stack>
      </div>

      {/* Blog Block */}
      <div>
        <CustomSectionTitle
          title={"Blog"}
          subTitle={"기억보다 기록을, 그리고 지식공유를 위해 하고 있습니다."}
        />
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
          <ul className="flex-1 min-w-[300px] leading-relaxed text-sm md:text-base">
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
                <a target="_blank" className="no-underline">
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
            </Stack>
          </Stack>
        </Stack>
        <iframe
          title={"tistory blog"}
          src="https://all-dev-kang.tistory.com/category/%EA%B0%9C%EB%B0%9C"
          className="w-full min-h-[400px]"
        />
      </div>
    </CustomSection>
  );
};

export default PublicationSection;
