import React, { useEffect, useState } from "react";
import { Select } from "antd";

import { IconSlctDown } from "shared/components/Icon";
import { getFilterData } from "@/app/_service/aimc/report/actions";
import useQueryString from "@/app/_hooks/useQueryString";
import { useDebouncedCallback } from "use-debounce";

interface IProps {
  typCd: string;
}

const MultiSelectFilter: React.FC<IProps> = ({ typCd }) => {
  const [placeholder, setPlaceholder] = useState<string>("");
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { router, pathname, searchParams, createQueryStringList } =
    useQueryString();

  const paramValue = searchParams.get(typCd);

  const debounced = useDebouncedCallback((callback: () => void) => {
    callback();
  }, 300);

  const handleChange = (value: string[]) => {
    const values = value.length === 0 ? ["ALL"] : value;
    setSelectedItems(value);

    const callback = () => {
      const queryString = createQueryStringList([
        {
          name: typCd,
          value: values.toString(),
        },
      ]);

      router.push(`${pathname}?${queryString}`);
    };

    debounced(callback);
  };

  useEffect(() => {
    if (paramValue && paramValue !== "ALL") {
      setSelectedItems(paramValue.split(","));
    }

    if (paramValue === "ALL") {
      setSelectedItems([]);
    }
  }, [paramValue]);

  useEffect(() => {
    getFilterData(typCd).then((data) => {
      const { filterName, list } = data;

      setPlaceholder(`${filterName} 전체`);
      const options = list.map((option: any) => ({
        value: option.pbiParamVal,
        label: option.pbiParamNm,
      }));

      setOptions([...options]);

    });
  }, [typCd]);

  return (
    <Select
      className={"multi-slct"}
      placeholder={placeholder}
      options={options}
      onChange={handleChange}
      showSearch={false}
      mode={"multiple"}
      style={{ width: 210 }}
      suffixIcon={<IconSlctDown />}
      value={selectedItems}
      maxTagCount={1}
      allowClear
    />
  );
};

export default MultiSelectFilter;
