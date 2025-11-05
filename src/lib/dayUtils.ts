import dayjs from "dayjs";

export const getExperiencedYear = () => {
  const totalPeriodMonth = dayjs(new Date()).diff(dayjs("2018/12/01"), "month");
  const periodDurationYear = Math.floor(totalPeriodMonth / 12);
  const periodDurationMonth = totalPeriodMonth % 12;
  const periodDurationDay = `${periodDurationYear}년 ${periodDurationMonth}개월`;

  const coupangPlayDays = dayjs(new Date()).diff(dayjs("2025/10/01"), "days");
  return {
    N년차: `${periodDurationYear + 1} Years`,
    N년N개월: periodDurationDay,
    coupangPlayDays: coupangPlayDays,
  };
};

export const getExperiencedYearFrom = (date: string) => {
  const totalPeriodMonth = dayjs(new Date()).diff(dayjs(date), "month");
  const periodDurationYear = Math.floor(totalPeriodMonth / 12);
  const periodDurationMonth = totalPeriodMonth % 12;
  const periodDurationDay = `${periodDurationYear}년 ${periodDurationMonth}개월`;

  return {
    N년차: `${periodDurationYear + 1} Experienced years`,
    N년N개월: periodDurationDay,
  };
};
