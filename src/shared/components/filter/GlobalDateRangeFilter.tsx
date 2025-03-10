import React from "react";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import { useDate } from "shared/hooks/useDate";
import { useEffect, useState } from "react";
import useGlobalFilterStore from "../../../modules/aimc/store/filterStore";
// import { updateSearchParamsWithoutRerender } from "shared/utils/utils";

const { RangePicker } = DatePicker;
interface Props {
  start: string;
  end: string;
};

const GlobalDateRangeFilter: React.FC<Props> = ({ start, end }) => {
  const startDt = useGlobalFilterStore((state) => state.getSelectedOptions("startDt"));
  const endDt = useGlobalFilterStore((state) => state.getSelectedOptions("endDt"));
  const setSelectedOptions = useGlobalFilterStore((state) => state.setSelectedOptions);
  const { disabledDate } = useDate({ dateUnit: "month", timeOffset: 13 });

  const handleRangePickerChange: RangePickerProps["onChange"] = (
    _: any,
    dateStrings: [string, string],
  ) => {
    setSelectedOptions({
      startDt: [dateStrings[0]],
      endDt: [dateStrings[1]],
    });
  };

  return (
    <RangePicker
      onChange={handleRangePickerChange}
      value={[startDt ? dayjs(startDt[0]) : null, endDt ? dayjs(endDt[0]) : null]}
      disabledDate={disabledDate}
    />
  );
};

export default GlobalDateRangeFilter;
