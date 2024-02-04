import { SamplePlayerCard } from "@component/card/SamplePlayer";
import WaveCard from "@component/card/WaveCard";
import { CustomSection } from "@component/CustomSection";
import {
  Badge,
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CardFooter,
  Checkbox,
  CheckboxGroup,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tab,
  Tabs,
  Tooltip,
  useDisclosure,
  User,
} from "@nextui-org/react";
import { CustomSectionTitle } from "src/component/SectionTitle";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SiCodereview } from "react-icons/si";
import { SlSizeFullscreen } from "react-icons/sl";
import getExperiencedYear from "src/utils/getExperiencedYear";

const IntroSection = () => {
  const { t } = useTranslation();

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("handy.kang.dev@gmail.com");
    openCopySuccessSnackBar();
  };

  const [copySuccessSnackBar, setCopySuccessSnackBar] = React.useState(false);
  const openCopySuccessSnackBar = () => {
    setCopySuccessSnackBar(true);
  };
  const closeCopySuccessSnackBar = () => {
    setCopySuccessSnackBar(false);
  };

  return (
    <div className="container py-8 mt-4 mb-12">
      <div className="flex flex-wrap w-full min-h-[40rem]">
        <div className="flex flex-col items-center justify-center flex-1 gap-4 min-w-[20rem]">
          <Image
            className="rounded-full bg-[#add8e6]"
            alt={"face image"}
            src={"/images/intro/character_white.png"}
            width={200}
            height={200}
            layout={"fixed"}
            priority={true}
          />
          <div>
            <div className="text-2xl font-semibold">
              편리함을 추구하는 개발자,
              <span className="text-blue-500">강경석</span>입니다
            </div>
            <div className="text-sm font-light text-gray-600 dark:text-gray-300">
              Web과 App를 다루는 {getExperiencedYear().N년차}{" "}
              개발자(Handy)입니다.
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-wrap items-center justify-center w-full h-full gap-4 gap-y-4">
            <WaveCard duration={4}>
              <Image src={`/icons/typescript.svg`} height={30} width={30} />
            </WaveCard>
            <WaveCard className="top-4" duration={2}>
              <Badge
                content="재직중"
                color="primary"
                size="sm"
                classNames={{
                  badge: "text-xs font-normal top-7",
                }}
              >
                <Breadcrumbs size={"sm"}>
                  <BreadcrumbItem>카찹</BreadcrumbItem>
                  <BreadcrumbItem>티맥스</BreadcrumbItem>
                  <BreadcrumbItem>가우디오랩</BreadcrumbItem>
                </Breadcrumbs>
              </Badge>
            </WaveCard>
            <WaveCard duration={2}>
              <Image src={`/icons/react.svg`} height={30} width={30} />
            </WaveCard>
            <WaveCard duration={4}>
              <User
                className="cursor-pointer"
                name="편리함을 추구하는 핸디의 지식 블로그"
                description={
                  <Link href="https://all-dev-kang.tistory.com/">
                    <div className="flex items-center gap-1">
                      @Dev-blog
                      <Chip radius="sm" size="sm">
                        60만조회수
                      </Chip>
                      <Chip radius="sm" size="sm">
                        글(380개)
                      </Chip>
                    </div>
                  </Link>
                }
                avatarProps={{
                  src: "/images/intro/logo.jpeg",
                }}
              />
            </WaveCard>

            <SamplePlayerCard />
            <div className="flex flex-row flex-wrap sm:flex-col">
              <몇년째개발중Card />
              <WaveCard duration={6}>
                <div className="text-sm">창업 경험 有</div>
              </WaveCard>
            </div>
            <WaveCard duration={2}>
              <Image
                className="bg-white"
                src={`/icons/next-js.svg`}
                height={30}
                width={30}
              />
            </WaveCard>
            <CheckboxGroupdd />
            <div className="flex flex-row flex-wrap items-center justify-center sm:flex-col">
              <FullStackTab />
              <div className="flex flex-wrap ">
                <WaveCard duration={2}>
                  <Image src={`/icons/flutter.svg`} height={30} width={30} />
                </WaveCard>
                <WaveCard duration={4}>
                  <Image src={`/icons/dart.svg`} height={30} width={30} />
                </WaveCard>
              </div>
            </div>

            <CodingCard />
          </div>
        </div>
      </div>

      <CustomSection id="sample">
        <CustomSectionTitle
          title={"Intro"}
          subTitle={"편리함을 추구하는 개발자 강경석(Handy)입니다"}
        />
        <div className="flex flex-col flex-wrap w-full justify-evenly">
          <div className="font-normal text-md">
            <strong>
              가우디오랩에서 프론트엔드 리드 개발자로 일하고 있습니다
            </strong>
            <br />
            가우디오랩에서 B2B, 또는 B2C, 그리고 내부툴을 만들고 있습니다.
            <br />
            이전에는 통합 모빌리티 서비스 카찹을 창업하고, BI툴인
            하이퍼데이터(티맥스소프트)를 만들었습니다.
            <br />
            <br />
            현재는 새로운 기술을 습득하기보다는
            <strong> 기존 기술로 어떻게 더 편리하게 문제를 해결</strong> 할 수
            있는지 고민을 하고 있습니다.
            <br />
            블로깅을 하는 것을 좋아하고, 기술을 깊게 탐구하고 공유하는 것을
            좋아합니다.
            <br />
            <br />
            <strong>
              Web과 App에 전문성울 두고, Backend, Devops를 경험하고 있습니다.
            </strong>
          </div>
        </div>
        {/* <div className="flex justify-center w-full px-2 ">
          <Button
            isIconOnly
            aria-label="open gmail button"
            onPress={() => copyEmailToClipboard()}
          >
            <Image
              src={`/icons/gmail.svg`}
              height={40}
              width={40}
              alt={"gmail"}
            />
          </Button>
          <Link
            href={
              "https://www.linkedin.com/in/%EA%B2%BD%EC%84%9D-%EA%B0%95-5190751aa/"
            }
          >
            <a target="_blank" style={{ textDecoration: "none" }}>
              <Button isIconOnlyaria-label="open linkedin button">
                <Image
                  src={`/icons/linkedin.svg`}
                  height={40}
                  width={40}
                  alt={"linkedin"}
                />
              </Button>
            </a>
          </Link>
          <Link href={"https://open.kakao.com/o/sxdXxTMd"}>
            <a target="_blank" style={{ textDecoration: "none" }}>
              <Button isIconOnly aria-label="open kakao button">
                <Image
                  src={`/icons/kakao.svg`}
                  height={40}
                  width={40}
                  alt={"kakao"}
                />
              </Button>
            </a>
          </Link>
        </div> */}
      </CustomSection>
      {/* 
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={copySuccessSnackBar}
        autoHideDuration={5000}
        onClose={closeCopySuccessSnackBar}
        message="Copy handy.kang.dev@gmail.com"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeCopySuccessSnackBar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      /> */}
    </div>
  );
};

export default IntroSection;

const FullStackTab = () => {
  const [selected, setSelected] = useState("web");
  const tabs = ["web", "app", "backend"];

  useEffect(() => {
    const handleNextLoop = () => {
      const next = tabs.indexOf(selected) + 1;
      setSelected(tabs[next === tabs.length ? 0 : next]);
    };

    const interval = setInterval(handleNextLoop, 3000);

    return () => clearInterval(interval);
  }, [selected]);

  return (
    <div className="rounded-md shadow-lg animate-wave-8 h-fit">
      <Tabs
        className="contents"
        size="sm"
        aria-label="Tabs sizes"
        selectedKey={selected}
        onSelectionChange={(key) => {
          setSelected(key as string);
        }}
      >
        <Tab
          key="web"
          title={
            <Tooltip
              showArrow
              isOpen={selected === "web"}
              size="sm"
              content="탁월함, 일정 단축 가능"
              placement="top"
            >
              <div>Web</div>
            </Tooltip>
          }
        ></Tab>
        <Tab
          key="app"
          title={
            <Tooltip
              showArrow
              isOpen={selected === "app"}
              size="sm"
              content="잘함, 일정 내 가능"
              placement="top"
            >
              <div>App</div>
            </Tooltip>
          }
        />
        <Tab
          key="backend"
          title={
            <Tooltip
              showArrow
              isOpen={selected === "backend"}
              size="sm"
              content="적당함, 일정 추가필요"
              placement="top"
            >
              <div>Backend</div>
            </Tooltip>
          }
        />
      </Tabs>
    </div>
  );
};

const 몇년째개발중Card = () => {
  return (
    <WaveCard duration={8}>
      <div className="text-sm text-foreground/80">
        {getExperiencedYear().N년차} 프론트엔드 개발자
      </div>
      <div className="text-xs text-foreground/40">
        {getExperiencedYear().N년N개월}째 개발중
      </div>
    </WaveCard>
  );
};

const CodingCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card
        isFooterBlurred
        radius="lg"
        className="flex items-center justify-center w-48 h-36 animate-wave-6"
      >
        <figure className="w-40 m-2">
          <embed src="https://wakatime.com/share/@handy_kang/a635f85e-ca8b-4f40-ba18-28a3b6e8896f.svg"></embed>
        </figure>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-xs">30일간 코딩 시간</p>
          <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
            <SlSizeFullscreen />
          </Button>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                30일 개발 시간 (Wakatime)
              </ModalHeader>
              <ModalBody>
                <figure className="min-w-100 min-h-100">
                  <embed
                    className="w-100 h-100"
                    src="https://wakatime.com/share/@handy_kang/a635f85e-ca8b-4f40-ba18-28a3b6e8896f.svg"
                  ></embed>
                </figure>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const CheckboxGroupdd = () => {
  return (
    <WaveCard duration={8}>
      <CheckboxGroup
        label={
          <div className="flex items-center justify-between gap-1">
            5S 개발자
            <Tooltip
              showArrow
              content={
                <div className="px-1 py-2">
                  <div className="font-bold text-small">5S 개발자란?</div>
                  <div className="text-tiny">
                    공부(Study), 공유(Save), 기록(Save), 버그없는(Safe),
                    시니어(Senior)
                  </div>
                </div>
              }
            >
              <Button size="sm" isIconOnly variant="light">
                <SiCodereview />
              </Button>
            </Tooltip>
          </div>
        }
        size="sm"
        value={["study", "share", "save"]}
      >
        <Checkbox value="study">공부하는 개발자</Checkbox>
        <Checkbox value="share">공유하는 개발자</Checkbox>
        <Checkbox value="save">기록하는 개발자</Checkbox>
        <Checkbox value="sate">버그없는 개발자</Checkbox>
        <Checkbox value="senior">시니어 개발자</Checkbox>
      </CheckboxGroup>
    </WaveCard>
  );
};
