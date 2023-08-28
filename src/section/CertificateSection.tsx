import Stack from "@mui/material/Stack";
import Image from "next/image";
import ExtraInfoDialog from "src/component/dialog/ExtraInfoDialog";
import { CustomSectionTitle } from "src/component/SectionTitle";
import CustomTable, {
  CustomTableCell,
  CustomTableRow,
} from "src/component/table/CustomTable";
import { CustomSection } from "../component/CustomSection";

const CertificateSection = () => {
  const CertificateSectionVAProp: CertificateSectionVAProp = {};
  return <CertificateSectionView {...CertificateSectionVAProp} />;
};

interface CertificateSectionVAProp {}
const CertificateSectionView = ({}: CertificateSectionVAProp) => {
  return (
    <CustomSection id={"Certificate"}>
      <CustomSectionTitle
        title={"Certificate"}
        subTitle={
          "자격증이 실력의 척도가 될 수는 없습니다. 하지만 관심과 꾸준함에 대한 척도는 될 수 있다고 생각합니다."
        }
      />
      <CustomTable
        key="CertificateTable"
        header={["자격명", "취득 이유", "자격증"]}
      >
        <CertificateSectionItem
          name={"정보처리기사 & 산업기사"}
          text={`대학생활의 마무리를 위해 취득하였고, 컴퓨터공학에 대한 지식을 갈무리할 좋은 시험이었습니다.`}
          imagePath={[
            "InformationProcessingEngineer",
            "InformationProcessingIndustryEngineer",
          ]}
        />
        <CertificateSectionItem
          name={"정보기기운용기능사"}
          text={`국방부에서 네트워크운용병으로 복무하면서, 전문성을 높이기 위해 취득했습니다.`}
          imagePath={["InformationEquipmentManagementTechnician"]}
        />
        <CertificateSectionItem
          name={"SQLD, ADSP"}
          text={`데이터 분석 시각화와 자동화분석도구를 만들기 위한 업무를 위해 취득했습니다.`}
          imagePath={["sqld", "adsp"]}
        />
      </CustomTable>
    </CustomSection>
  );
};

interface CertificateSectionItemProp {
  name: string;
  text: string;
  imagePath: string[];
}

const CertificateSectionItem = ({
  name,
  text,
  imagePath,
}: CertificateSectionItemProp) => {
  return (
    <CustomTableRow key={name}>
      <CustomTableCell component="th" scope="row" align="center">
        {name}
      </CustomTableCell>
      <CustomTableCell align="center">{text}</CustomTableCell>
      <CustomTableCell align="center">
        <ExtraInfoDialog dialogTitle={`${name} 자격증`}>
          <Stack spacing={1}>
            {imagePath.map((path) => (
              <Image
                key={path}
                src={`/images/certificate/${path}.png`}
                height={"450px"}
                width={"300px"}
                alt={"certificate image"}
              />
            ))}
          </Stack>
        </ExtraInfoDialog>
      </CustomTableCell>
    </CustomTableRow>
  );
};

export default CertificateSection;
