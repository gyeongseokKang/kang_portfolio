import { Chip } from "@nextui-org/react";

interface DevelopmentStatusChipProp {
  status: "progress" | "finish" | "stop";
}

export const DevelopmentStatusChip = ({
  status,
}: DevelopmentStatusChipProp) => {
  let statuscolor = "#0dcaf0";
  let statusText = "개발중";
  switch (status) {
    case "progress": {
      statuscolor = "#0D6EFD";
      statusText = "개발중";
      break;
    }
    case "finish": {
      statuscolor = "#0dcaf0";
      statusText = "개발 완료";
      break;
    }
    case "stop": {
      statuscolor = "#cd2f2f";
      statusText = "개발 중단";
      break;
    }
  }

  return (
    <Chip variant={"solid"} radius="sm">
      {statusText}
    </Chip>
  );
};
