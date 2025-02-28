import dayjs from "dayjs";

interface IProps {
  dateUnit: "year" | "month" | "day";
  timeOffset: number;
}

export function useDate({ dateUnit, timeOffset }: IProps) {
  // `오늘 기준 ${timeOffset} ${dateUnit} 선택 불가`
  const disabledDate = (current: dayjs.Dayjs) => {
    if (dateUnit && timeOffset) {
      const diffDate = dayjs().subtract(timeOffset, dateUnit);
      return current && current.isBefore(diffDate, dateUnit);
    }

    return true;
  };

  return { disabledDate };
}
