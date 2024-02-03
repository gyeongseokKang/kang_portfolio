import { Chip, Tooltip } from "@nextui-org/react";
import dayjs from "dayjs";
import Link from "next/link";
import { HiOutlineCalendar } from "react-icons/hi";
interface CompanyliProp {
  name: string;
  homepageUrl?: string;
  position: string | string[];
  period: {
    start: string | Date;
    end: string | Date;
  };
}

export const Companyli = ({
  name,
  homepageUrl,
  position,
  period,
}: CompanyliProp) => {
  const positionList = Array.isArray(position) ? position : [position];

  const periodStart = dayjs(period.start).format("YYYY/MM");
  const periodEnd = dayjs(period.end).format("YYYY/MM");

  // ex 19개월 -> 1년 7개월
  const totalPeriodMonth = dayjs(period.end).diff(dayjs(period.start), "month");
  const periodDurationYear = Math.floor(totalPeriodMonth / 12);
  const periodDurationMonth = totalPeriodMonth % 12;
  const periodDurationDay = `${periodDurationYear}년 ${periodDurationMonth}개월`;

  return (
    <div className="flex flex-col flex-wrap justify-between">
      <div className="text-xl font-medium">{name}</div>
      {homepageUrl && (
        <div className="text-xs italic text-cyan-700">
          <Link href={homepageUrl}>
            <a target="_blank">{homepageUrl}</a>
          </Link>
        </div>
      )}
      <div className="flex flex-col gap-1 mt-1">
        <div className="flex gap-1">
          {positionList.map((position) => (
            <Chip radius="sm" size="sm">
              {position}
            </Chip>
          ))}
        </div>
        <div className="flex items-center gap-1 text-xs">
          <HiOutlineCalendar />
          <Tooltip content={periodDurationDay} placement="right">
            <p>
              {periodStart} ~ {periodEnd}
            </p>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
