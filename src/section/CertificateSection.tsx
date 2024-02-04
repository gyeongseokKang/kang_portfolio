import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import ExtraInfoDialog from "src/component/dialog/ExtraInfoDialog";
import { CustomSectionTitle } from "src/component/SectionTitle";
import { CustomSection } from "../component/CustomSection";

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

const certificateItems = [
  {
    key: 1,
    자격명: "정보처리기사 & 산업기사",
    "취득 이유": `대학생활의 마무리를 위해 취득하였고, 컴퓨터공학에 대한 지식을 갈무리할 좋은 시험이었습니다.`,
    자격증: [
      "InformationProcessingEngineer",
      "InformationProcessingIndustryEngineer",
    ],
  },
  {
    key: 2,
    자격명: "정보기기운용기능사",
    "취득 이유": `국방부에서 네트워크운용병으로 복무하면서, 전문성을 높이기 위해 취득했습니다.`,
    자격증: ["InformationEquipmentManagementTechnician"],
  },
  {
    key: 3,
    자격명: "SQLD, ADSP",
    "취득 이유": `데이터 분석 시각화와 자동화분석도구를 만들기 위한 업무를 위해 취득했습니다.`,
    자격증: ["sqld", "adsp"],
  },
];

const columns = [
  {
    key: "자격명",
    label: "자격명",
  },
  {
    key: "취득 이유",
    label: "취득 이유",
  },
  {
    key: "자격증",
    label: "자격증",
  },
];

const CertificateSection = () => {
  return (
    <CustomSection id={"Certificate"}>
      <CustomSectionTitle
        title={"Certificate"}
        subTitle={
          "자격증이 실력의 척도가 될 수는 없습니다. 하지만 관심과 꾸준함에 대한 척도는 될 수 있다고 생각합니다."
        }
      />
      <Table aria-label="customized table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {certificateItems.map((row) => (
            <TableRow key={row.key}>
              <TableCell scope="row" align="center">
                {row.자격명}
              </TableCell>
              <TableCell align="center">{row["취득 이유"]}</TableCell>
              <TableCell align="center">
                <ExtraInfoDialog dialogTitle={`자격증`}>
                  <div className="flex justify-between gap-1 overflow-x-auto">
                    {row.자격증.map((path) => (
                      <Image
                        key={path}
                        src={`/images/certificate/${path}.png`}
                        height={"450px"}
                        width={"300px"}
                        alt={"certificate image"}
                      />
                    ))}
                  </div>
                </ExtraInfoDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomSection>
  );
};

export default CertificateSection;
