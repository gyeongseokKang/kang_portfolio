// import { SamplePlayerCard } from "@component/card/SamplePlayer";
// import WaveCard from "@component/card/WaveCard";
// import { CustomSection } from "@component/CustomSection";
// import {
//   Badge,
//   BreadcrumbItem,
//   Breadcrumbs,
//   Button,
//   Card,
//   CardFooter,
//   Checkbox,
//   CheckboxGroup,
//   Chip,
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalHeader,
//   Tab,
//   Tabs,
//   Tooltip,
//   useDisclosure,
//   User,
// } from "@nextui-org/react";
// import { CustomSectionTitle } from "src/component/SectionTitle";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { SiCodereview } from "react-icons/si";
// import { SlSizeFullscreen } from "react-icons/sl";
// import getExperiencedYear from "src/utils/getExperiencedYear";

// const IntroSection = () => {
//   const { t } = useTranslation();

//   const copyEmailToClipboard = () => {
//     navigator.clipboard.writeText("handy.kang.dev@gmail.com");
//     openCopySuccessSnackBar();
//   };

//   const [copySuccessSnackBar, setCopySuccessSnackBar] = React.useState(false);
//   const openCopySuccessSnackBar = () => {
//     setCopySuccessSnackBar(true);
//   };
//   const closeCopySuccessSnackBar = () => {
//     setCopySuccessSnackBar(false);
//   };

//   return (
//     <div className="container py-8 mt-4">
//       <div className="flex flex-wrap w-full min-h-[40rem]">
//         <div className="flex flex-col items-center justify-center flex-1 gap-4 min-w-[20rem]">
//           <Image
//             className="rounded-full bg-[#add8e6]"
//             alt={"face image"}
//             src={"/images/intro/character_white.png"}
//             width={200}
//             height={200}
//             layout={"fixed"}
//             priority={true}
//           />
//           <div className="px-4">
//             <div className="text-2xl font-semibold">
//               편리함을 추구하는 개발자,
//               <span className="text-blue-500">강경석</span>입니다
//             </div>
//             <div className="text-sm font-light text-gray-600 dark:text-gray-300">
//               Web과 App를 다루는 {getExperiencedYear().N년차}{" "}
//               개발자(Handy)입니다.
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-1">
//           <div className="flex flex-wrap items-center justify-center w-full h-full gap-4 gap-y-4">
//             <WaveCard duration={4}>
//               <Image src={`/icons/typescript.svg`} height={30} width={30} />
//             </WaveCard>
//             <WaveCard className="top-4" duration={2}>
//               <Badge
//                 content="재직중"
//                 color="primary"
//                 size="sm"
//                 classNames={{
//                   badge: "text-xs font-normal top-7",
//                 }}
//               >
//                 <Breadcrumbs size={"sm"}>
//                   <BreadcrumbItem>카찹</BreadcrumbItem>
//                   <BreadcrumbItem>티맥스</BreadcrumbItem>
//                   <BreadcrumbItem>가우디오랩</BreadcrumbItem>
//                   <BreadcrumbItem>쿠팡플레이</BreadcrumbItem>
//                 </Breadcrumbs>
//               </Badge>
//             </WaveCard>
//             <WaveCard duration={2}>
//               <Image src={`/icons/react.svg`} height={30} width={30} />
//             </WaveCard>
//             <WaveCard duration={4}>
//               <User
//                 className="cursor-pointer"
//                 name="편리함을 추구하는 핸디의 지식 블로그"
//                 description={
//                   <Link href="https://all-dev-kang.tistory.com/">
//                     <div className="flex items-center gap-1">
//                       @Dev-blog
//                       <Chip radius="sm" size="sm">
//                         60만조회수
//                       </Chip>
//                       <Chip radius="sm" size="sm">
//                         글(380개)
//                       </Chip>
//                     </div>
//                   </Link>
//                 }
//                 avatarProps={{
//                   src: "/images/intro/logo.jpeg",
//                 }}
//               />
//             </WaveCard>

//             <SamplePlayerCard />
//             <div className="flex flex-row flex-wrap sm:flex-col">
//               <몇년째개발중Card />
//               <WaveCard duration={6}>
//                 <div className="text-sm">창업 경험 有</div>
//               </WaveCard>
//             </div>
//             <WaveCard duration={2}>
//               <Image
//                 className="bg-white"
//                 src={`/icons/next-js.svg`}
//                 height={30}
//                 width={30}
//               />
//             </WaveCard>
//             <CheckboxGroupdd />
//             <div className="flex flex-row flex-wrap items-center justify-center sm:flex-col">
//               <FullStackTab />
//               <div className="flex flex-wrap ">
//                 <WaveCard duration={2}>
//                   <Image src={`/icons/flutter.svg`} height={30} width={30} />
//                 </WaveCard>
//                 <WaveCard duration={4}>
//                   <Image src={`/icons/dart.svg`} height={30} width={30} />
//                 </WaveCard>
//               </div>
//             </div>

//             <CodingCard />
//           </div>
//         </div>
//       </div>

//       <CustomSection id="sample">
//         <CustomSectionTitle
//           title={"Intro"}
//           subTitle={"편리함을 추구하는 개발자 강경석(Handy)입니다"}
//         />
//         <div className="flex flex-col flex-wrap w-full justify-evenly">
//           <div className="text-sm font-normal w-full flex flex-col gap-6">
//             <div>
//               쿠팡플레이에서 시니어 프론트엔드 엔지니어로 근무하고 있습니다.
//               <br />
//               이전에는 통합 모빌리티 서비스 카찹을 창업하고, BI툴인
//               하이퍼데이터(티맥스소프트)를 만들었습니다. 또한 가우디오랩에서
//               프론트엔드 리드로 다양한 제품을 만들고 유지보수했습니다.
//             </div>
//             <div>
//               현재는 웹, 앱을 넘어 백엔드도 경험해보며 풀스택을 추구하고
//               있습니다.
//               <br />
//               이를 위해 supabase, prisma 같은 서비스를 경험해보며 함수형 언어인
//               Elixir도 빠르게 학습중입니다.
//             </div>

//             <div>
//               시니어 개발자로써 프로세스 정립에 힘쓰고, 자동화와 AI를 활용한
//               업무에 관심을 가지고 있습니다. <br /> 그와 함께 좋은 팀을 꾸려가는
//               것에 관심이 생기기 시작했네요.
//             </div>
//           </div>
//         </div>
//       </CustomSection>
//     </div>
//   );
// };

// export default IntroSection;

// const FullStackTab = () => {
//   const [selected, setSelected] = useState("web");
//   const tabs = ["web", "app", "backend"];

//   useEffect(() => {
//     const handleNextLoop = () => {
//       const next = tabs.indexOf(selected) + 1;
//       setSelected(tabs[next === tabs.length ? 0 : next]);
//     };

//     const interval = setInterval(handleNextLoop, 3000);

//     return () => clearInterval(interval);
//   }, [selected]);

//   return (
//     <div className="rounded-md shadow-lg animate-wave-8 h-fit">
//       <Tabs
//         className="contents"
//         size="sm"
//         aria-label="Tabs sizes"
//         selectedKey={selected}
//         onSelectionChange={(key) => {
//           setSelected(key as string);
//         }}
//       >
//         <Tab
//           key="web"
//           title={
//             <Tooltip
//               showArrow
//               isOpen={selected === "web"}
//               size="sm"
//               content="탁월함, 일정 단축 가능"
//               placement="top"
//             >
//               <div>Web</div>
//             </Tooltip>
//           }
//         ></Tab>
//         <Tab
//           key="app"
//           title={
//             <Tooltip
//               showArrow
//               isOpen={selected === "app"}
//               size="sm"
//               content="잘함, 일정 내 가능"
//               placement="top"
//             >
//               <div>App</div>
//             </Tooltip>
//           }
//         />
//         <Tab
//           key="backend"
//           title={
//             <Tooltip
//               showArrow
//               isOpen={selected === "backend"}
//               size="sm"
//               content="적당함, 일정 추가필요"
//               placement="top"
//             >
//               <div>Backend</div>
//             </Tooltip>
//           }
//         />
//       </Tabs>
//     </div>
//   );
// };

// const 몇년째개발중Card = () => {
//   return (
//     <WaveCard duration={8}>
//       <div className="text-sm text-foreground/80">
//         {getExperiencedYear().N년차} 프론트엔드 개발자
//       </div>
//       <div className="text-xs text-foreground/40">
//         {getExperiencedYear().N년N개월}째 개발중
//       </div>
//     </WaveCard>
//   );
// };

// const CodingCard = () => {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   return (
//     <>
//       <Card
//         isFooterBlurred
//         radius="lg"
//         className="flex items-center justify-center w-48 h-36 animate-wave-6"
//       >
//         <figure className="w-40 m-2">
//           <embed src="https://wakatime.com/share/@handy_kang/a635f85e-ca8b-4f40-ba18-28a3b6e8896f.svg"></embed>
//         </figure>
//         <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
//           <p className="text-xs">30일간 코딩 시간</p>
//           <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
//             <SlSizeFullscreen />
//           </Button>
//         </CardFooter>
//       </Card>

//       <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">
//                 30일 개발 시간 (Wakatime)
//               </ModalHeader>
//               <ModalBody>
//                 <figure className="min-w-100 min-h-100">
//                   <embed
//                     className="w-100 h-100"
//                     src="https://wakatime.com/share/@handy_kang/a635f85e-ca8b-4f40-ba18-28a3b6e8896f.svg"
//                   ></embed>
//                 </figure>
//               </ModalBody>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// const CheckboxGroupdd = () => {
//   return (
//     <WaveCard duration={8}>
//       <CheckboxGroup
//         label={
//           <div className="flex items-center justify-between gap-1">
//             5S 개발자
//             <Tooltip
//               showArrow
//               content={
//                 <div className="px-1 py-2">
//                   <div className="font-bold text-small">5S 개발자란?</div>
//                   <div className="text-tiny">
//                     공부(Study), 공유(Save), 기록(Save), 버그없는(Safe),
//                     시니어(Senior)
//                   </div>
//                 </div>
//               }
//             >
//               <Button size="sm" isIconOnly variant="light">
//                 <SiCodereview />
//               </Button>
//             </Tooltip>
//           </div>
//         }
//         size="sm"
//         value={["study", "share", "save"]}
//       >
//         <Checkbox value="study">공부하는 개발자</Checkbox>
//         <Checkbox value="share">공유하는 개발자</Checkbox>
//         <Checkbox value="save">기록하는 개발자</Checkbox>
//         <Checkbox value="sate">버그없는 개발자</Checkbox>
//         <Checkbox value="senior">시니어 개발자</Checkbox>
//       </CheckboxGroup>
//     </WaveCard>
//   );
// };
