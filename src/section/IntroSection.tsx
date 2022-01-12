import React from "react";
import { CustomSection } from "./../component/CustomSection";
import Typography from "@mui/material/Typography";
import { CustomSectionTitle } from "src/component/SectionTitle";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

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
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("gyeongseok.kang@gmail.com");
    openCopySuccessSnackBar();
  };

  const [copySuccessSnackBar, setCopySuccessSnackBar] = React.useState(false);
  const openCopySuccessSnackBar = () => {
    setCopySuccessSnackBar(true);
  };
  const closeCopySuccessSnackBar = () => {
    setCopySuccessSnackBar(false);
  };
  const IntroSectionVAProp: IntroSectionVAProp = {
    copyEmailToClipboard: copyEmailToClipboard,
    copySuccessSnackBar: copySuccessSnackBar,
    closeCopySuccessSnackBar: closeCopySuccessSnackBar,
  };
  return <IntroSectionView {...IntroSectionVAProp} />;
};

interface IntroSectionVAProp {
  copySuccessSnackBar: boolean;
  copyEmailToClipboard: () => void;
  closeCopySuccessSnackBar: () => void;
}
const IntroSectionView = ({
  copySuccessSnackBar,
  copyEmailToClipboard,
  closeCopySuccessSnackBar,
}: IntroSectionVAProp) => {
  return (
    <CustomSection id={"Intro"}>
      <CustomSectionTitle title={"INTRO"} />
      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"} sx={{ padding: "1rem" }}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <CircleImage
            alt={"face image"}
            src={"/images/intro/character_white.png"}
            width={150}
            height={150}
            layout={"fixed"}
            priority={true}
            sx={{ backgroundColor: "#add8e6" }}
          />
        </Stack>
        <Typography variant="subtitle1" gutterBottom component="div">
          <Typography variant="h5" gutterBottom component="div">
            <strong>Handy | 편리함을 추구하는 개발자</strong>
            <br />
          </Typography>
          React & TypeScript 기반의 3년차 프론트엔드 개발자 <strong>강경석</strong>입니다. <br />
          누적 다운로드수 10만건의 모빌리티 서비스 카찹, BI툴의 하이퍼데이터 등의 프로젝트에서 프론트엔드 개발 및 연구를
          하고 있습니다.
          <br />
          현재는 연구원으로 프론트엔드, 분석 통계 기법에 대한 설계 및 구현을 주로 하고 있습니다.
          <br />
          <br />
          <StyledTypography variant="subtitle1" gutterBottom>
            기술 공유의 중요성
          </StyledTypography>
          을 알기에 배운 것을 정리하고 작성하길 좋아하며 동료에게 공유하려고 노력합니다.
          <br />
          현재는
          <StyledTypography variant="subtitle1" gutterBottom>
            프론트엔드의 개발생산성
          </StyledTypography>
          을 높이기 위한 다양한 디자인패턴, 유틸리티에 관심이 많아 디자인툴이나 테스팅도구들을 살펴보고 있습니다.
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <IconButton aria-label="open gmail button" onClick={() => copyEmailToClipboard()}>
          <Image src={`/icons/gmail.svg`} height={40} width={40} alt={"gmail"} />
        </IconButton>
        <Link href={"https://www.linkedin.com/in/%EA%B2%BD%EC%84%9D-%EA%B0%95-5190751aa/"}>
          <a target="_blank" style={{ textDecoration: "none" }}>
            <IconButton aria-label="open linkedin button">
              <Image src={`/icons/linkedin.svg`} height={40} width={40} alt={"linkedin"} />
            </IconButton>
          </a>
        </Link>
        <Link href={"https://open.kakao.com/o/sxdXxTMd"}>
          <a target="_blank" style={{ textDecoration: "none" }}>
            <IconButton aria-label="open kakao button">
              <Image src={`/icons/kakao.svg`} height={40} width={40} alt={"kakao"} />
            </IconButton>
          </a>
        </Link>
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={copySuccessSnackBar}
        autoHideDuration={5000}
        onClose={closeCopySuccessSnackBar}
        message="Copy gyeongseok.kang@gmail.com"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={closeCopySuccessSnackBar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </CustomSection>
  );
};

export default IntroSection;
