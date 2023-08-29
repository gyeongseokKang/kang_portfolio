import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { CustomSectionTitle } from "src/component/SectionTitle";
import { CustomSection } from "./../component/CustomSection";

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
  const { t } = useTranslation();

  return (
    <CustomSection id={"Intro"}>
      <CustomSectionTitle title={"INTRO"} />
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        sx={{ padding: "1rem" }}
      >
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
            <strong>Handy | {t(`intro.편리함을_추구하는_개발자`)}</strong>
            <br />
          </Typography>
          Web과 App를 다루는 5년차 프론트엔드 개발자
          <strong> 강경석(Handy)</strong>입니다. <br />
          <br />
          오디오테크 가우디오랩에서 프론트엔드 리드로 POC부터 제품 설계 및
          구현을 담당하고 있습니다..
          <br />
          이전에는 통합 모빌리티 서비스 카찹을 창업하고, BI툴인
          하이퍼데이터(티맥스소프트)를 만들었습니다.
          <br />
          <StyledTypography variant="subtitle1" gutterBottom>
            기술 공유의 중요성
          </StyledTypography>
          을 알기에 배운 것을 정리하고 문서화 좋아하며 동료에게 공유하려고
          노력합니다.
          <br />
          현재는 Web뿐만 아니라 다양한 프론트엔드 환경에서의 작업에 고민하고
          있습니다.
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <IconButton
          aria-label="open gmail button"
          onClick={() => copyEmailToClipboard()}
        >
          <Image
            src={`/icons/gmail.svg`}
            height={40}
            width={40}
            alt={"gmail"}
          />
        </IconButton>
        <Link
          href={
            "https://www.linkedin.com/in/%EA%B2%BD%EC%84%9D-%EA%B0%95-5190751aa/"
          }
        >
          <a target="_blank" style={{ textDecoration: "none" }}>
            <IconButton aria-label="open linkedin button">
              <Image
                src={`/icons/linkedin.svg`}
                height={40}
                width={40}
                alt={"linkedin"}
              />
            </IconButton>
          </a>
        </Link>
        <Link href={"https://open.kakao.com/o/sxdXxTMd"}>
          <a target="_blank" style={{ textDecoration: "none" }}>
            <IconButton aria-label="open kakao button">
              <Image
                src={`/icons/kakao.svg`}
                height={40}
                width={40}
                alt={"kakao"}
              />
            </IconButton>
          </a>
        </Link>
      </Stack>
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
      />
    </CustomSection>
  );
};

export default IntroSection;
