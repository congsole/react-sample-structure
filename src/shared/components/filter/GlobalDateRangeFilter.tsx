import React from "react";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import { useDate } from "shared/hooks/useDate";
import { useEffect, useState } from "react";
// import { updateSearchParamsWithoutRerender } from "shared/utils/utils";

const { RangePicker } = DatePicker;
interface Props {
  start: string;
  end: string;
};

const GlobalDateRangeFilter: React.FC<Props> = ({ start, end }) => {
  const { disabledDate } = useDate({ dateUnit: "month", timeOffset: 13 });
  const [startDt, setStartDt] = useState<string | null>(null);
  const [endDt, setEndDt] = useState<string | null>(null);

  useEffect(() => {
    setStartDt(start);
    setEndDt(end);
  }, []);

  const handleRangePickerChange: RangePickerProps["onChange"] = (
    _: any,
    dateStrings: [string, string],
  ) => {
    // updateSearchParamsWithoutRerender({
    //   start: dateStrings[0],
    //   end: dateStrings[1],
    // });
    setStartDt(dateStrings[0]);
    setEndDt(dateStrings[1]);
  };

  return (
    <RangePicker
      onChange={handleRangePickerChange}
      value={[startDt ? dayjs(startDt) : null, endDt ? dayjs(endDt) : null]}
      disabledDate={disabledDate}
    />
  );
};

export default GlobalDateRangeFilter;
