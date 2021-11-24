import React from "react";
import { CustomSection } from "../component/CustomSection";
import Typography from "@mui/material/Typography";
import { CustomSectionTitle } from "src/component/SectionTitle";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

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
  return (
    <CustomSection id={"Contact"}>
      <CustomSectionTitle title={"Contact"} />
      <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
        <StyledPaper elevation={3}>
          <Typography variant="h4" gutterBottom component="div">
            <strong>KANG GYEONG SEOK</strong>
          </Typography>
          <Stack alignItems={"center"}>
            <Typography variant="subtitle2" gutterBottom component="div">
              <strong>FRONTEND DEVELOPER</strong>
            </Typography>
          </Stack>
          <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <ul style={{ flex: "1" }}>
              <li>
                <strong>Position</strong>: Developer &#38; Researcher
              </li>
              <li>
                <strong>Email</strong>: gyeongseok.kang@gmail.com
              </li>
              <li>
                <strong>Phone</strong>: 010-6626-1491
              </li>
            </ul>
          </Stack>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Typography variant="subtitle1" gutterBottom component="div">
              <strong> "같이 일하는 싶은 동료가 되겠습니다"</strong>
            </Typography>
          </Stack>
          <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Link href={"https://www.linkedin.com/in/%EA%B2%BD%EC%84%9D-%EA%B0%95-5190751aa/"}>
              <a target="_blank" style={{ textDecoration: "none" }}>
                <IconButton>
                  <Image src={`/icons/linkedin.svg`} height={40} width={40} />
                </IconButton>
              </a>
            </Link>
          </Stack>
        </StyledPaper>
      </Stack>
    </CustomSection>
  );
};

export default ContactSection;
