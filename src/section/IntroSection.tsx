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
        <CircleImage
          src={"/images/intro/character_white.png"}
          width={150}
          height={150}
          layout={"fixed"}
          priority={true}
          sx={{ backgroundColor: "#add8e6" }}
        />
        <Typography variant="subtitle1" gutterBottom component="div">
          React & TypeScript 기반의 3년차 프론트엔드 개발자 <strong>강경석</strong>입니다. <br />
          누적 다운로드수 10만건의 카찹, 자동화된 BI툴의 하이퍼데이터 등의 서비스에서 프론트엔드 및 서비스에 필요한
          전반적인 업무를 담당해왔습니다.
          <br />
          현재는 연구원으로 팀내 서비스의 프론트엔드, 분석 통계 기법에 대한 설계 및 구현 등을 주요 업무로 하고 있습니다.
          <br />
          <br />
          <StyledTypography variant="subtitle1" gutterBottom>
            기술 공유의 중요성
          </StyledTypography>
          을 알기에 배운 것을 정리하고 작성하길 좋아해서 팀 내 세미나도 틈틈히 진행하고 있습니다. 블로그도 함께 합니다.
          <br />
          현재는
          <StyledTypography variant="subtitle1" gutterBottom>
            프론트엔드의 개발생산성
          </StyledTypography>
          을 높이기 위한 다양한 디자인패턴, 유틸리티에 관심이 많습니다
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <IconButton onClick={() => copyEmailToClipboard()}>
          <Image src={`/icons/gmail.svg`} height={40} width={40} />
        </IconButton>
        <Link href={"https://www.linkedin.com/in/%EA%B2%BD%EC%84%9D-%EA%B0%95-5190751aa/"}>
          <a target="_blank" style={{ textDecoration: "none" }}>
            <IconButton>
              <Image src={`/icons/linkedin.svg`} height={40} width={40} />
            </IconButton>
          </a>
        </Link>
        <Link href={"https://open.kakao.com/o/sxdXxTMd"}>
          <a target="_blank" style={{ textDecoration: "none" }}>
            <IconButton>
              <Image src={`/icons/kakao.svg`} height={40} width={40} />
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
