import React, { useEffect, useState } from "react";
import { Select } from "antd";

import { IconSlctDown } from "shared/components/Icon";
import { getFilterData } from "modules/aimc/services/report/actions";
import { useDebouncedCallback } from "use-debounce";
import useGlobalFilterStore from "modules/aimc/store/filterStore";

interface IProps {
  typCd: string;
}

const MultiSelectFilter: React.FC<IProps> = ({ typCd }) => {
  const selectedOptions = useGlobalFilterStore((state) => state.getSelectedOptions(typCd));
  const setSelectedOptions = useGlobalFilterStore((state) => state.setSelectedOptions);
  const [placeholder, setPlaceholder] = useState<string>("");
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );

  // const debounced = useDebouncedCallback((callback: () => void) => {
  //   callback();
  // }, 300);

  const handleChange = (value: string[]) => {
    setSelectedOptions({ [typCd]: value });
  };

  useEffect(() => {
    const filterData = getFilterData(typCd);
    setPlaceholder(`${filterData?.name} 전체`);
    const options = filterData?.options.map((option: any) => ({
      value: option,
      label: option,
    }));

    setOptions(options ? [...options] : []);
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
      value={selectedOptions || []}
      maxTagCount={1}
      allowClear
    />
  );
};

export default MultiSelectFilter;
