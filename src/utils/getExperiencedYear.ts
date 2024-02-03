import dayjs from "dayjs";

const getExperiencedYear = () => {
  const totalPeriodMonth = dayjs(new Date()).diff(dayjs("2018/12/01"), "month");
  const periodDurationYear = Math.floor(totalPeriodMonth / 12);
  const periodDurationMonth = totalPeriodMonth % 12;
  const periodDurationDay = `${periodDurationYear}년 ${periodDurationMonth}개월`;

  return {
    N년차: periodDurationYear + 1 + "년차",
    N년N개월: periodDurationDay,
  };
};
export default getExperiencedYear;
