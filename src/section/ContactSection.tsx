import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CustomSectionTitle } from "src/component/SectionTitle";
import { CustomSection } from "../component/CustomSection";

const StyledPaper = styled(Paper)({
  padding: "2rem 5rem",
  borderRadius: "15px",
  margin: "0.25rem",
});

const ContactSection = () => {
  const ContactSectionVAProp: ContactSectionVAProp = {};
  return <ContactSectionView {...ContactSectionVAProp} />;
};

interface ContactSectionVAProp {}
const ContactSectionView = ({}: ContactSectionVAProp) => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("gyeongseok.kang@gmail.com");
    openCopySuccessSnackBar();
  };

  const [copySuccessSnackBar, setCopySuccessSnackBar] = useState(false);
  const openCopySuccessSnackBar = () => {
    setCopySuccessSnackBar(true);
  };
  const closeCopySuccessSnackBar = () => {
    setCopySuccessSnackBar(false);
  };

  return (
    <CustomSection id={"Contact"}>
      <CustomSectionTitle title={"Contact"} />
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <StyledPaper elevation={3}>
          <Typography variant="h4" gutterBottom component="div">
            <strong>KANG GYEONG SEOK</strong>
          </Typography>
          <Stack alignItems={"center"}>
            <Typography variant="subtitle2" gutterBottom component="div">
              <strong>FRONTEND DEVELOPER</strong>
            </Typography>
          </Stack>
          <br />
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Position | Developer, Researcher
            <br />
            Email | gyeongseok.kang@gmail.com
          </Stack>
          <br />
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Typography variant="subtitle1" gutterBottom component="div">
              <strong> "같이 일하는 싶은 동료가 되겠습니다"</strong>
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
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
        </StyledPaper>
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={copySuccessSnackBar}
        autoHideDuration={5000}
        onClose={closeCopySuccessSnackBar}
        message="Copy gyeongseok.kang@gmail.com"
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

export default ContactSection;
