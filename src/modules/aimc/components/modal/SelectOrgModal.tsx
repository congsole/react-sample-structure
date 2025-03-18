import React from "react";
import { IconClose, IconInpSearch } from "shared/components/Icon";
import { Checkbox, GetProp, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { getFilterData } from "modules/aimc/services/report/actions"
import useFilterStore from "../../store/filterStore";

type SelectOrgModalProps = {
  showModal: boolean;
  onCancel: () => void;
};

export default function SelectStateModal({
  showModal,
  onCancel,
}: SelectOrgModalProps) {
  const allStateNames = getFilterData("STAT")?.options || [];
  const [stateCount, setStateCount] = useState(allStateNames.length);
  const [stateNames, setStateNames] = useState<string[]>(allStateNames);
  const [filteredStateNames, setFilteredStateNames] = useState<string[]>(allStateNames);
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [debounceSearchText] = useDebounce(searchText, 1000);

  const selectedStateNames = useFilterStore((state) => state.getSelectedOptions("STAT")) || [];
  const setSelectedStateNames = useFilterStore((state) => state.setSelectedOptions);

  useEffect(() => {
    if (debounceSearchText === "") {
      setFilteredStateNames([...stateNames]);
      return;
    }

    const filtered = stateNames.filter(
      (name) => name.indexOf(debounceSearchText) >= 0,
    );
    setFilteredStateNames(filtered);
  }, [debounceSearchText]);

  const handleSearchTextChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleReportOrgChange = () => {
    if (!selectedStateNames) return;
    onCancel();
  };

  const handleOrgChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues,
  ) => {
    if (checkedValues.length !== filteredStateNames.length) {
      setIsAllChecked(false);
    } else {
      setIsAllChecked(true);
    }
    setSelectedStateNames({"STAT": checkedValues as string[]});
  };

  return (
    <Modal
      wrapClassName="report-modal-wrap"
      className="report-modal"
      title="다른 본부 리포트"
      open={showModal}
      onCancel={onCancel}
      width={500}
      footer={null}
      mask={false}
      closeIcon={<IconClose style={{ width: 16 }} />}
    >
      <div className="report-pop">
        <div className="pop-header">
          <ul className="pop-info">
            <li>본부를 선택하시면 해당 본부 리포트를 보실 수 있습니다.</li>
            {/* <li>각 본부 별로 최근 설정하신 기준으로 화면이 구성 됩니다.</li> */}
            <li>데이터는 현재 월(최신)기준으로 안내 됩니다.</li>
          </ul>
        </div>
        <div className="pop-content">
          <div className="top-set">
            <div className="total-wrap">
              <div className="store-total">
                <strong>{stateCount}개</strong>본부
              </div>
            </div>
            <Input
              placeholder="본부 입력"
              className="inp"
              style={{ width: 200 }}
              suffix={<IconInpSearch />}
              onChange={handleSearchTextChange}
            />
          </div>
          <div className="report-store">
            <div className="store" style={{ width: "100%" }}>
              <div className="tit">
                <Checkbox
                  checked={isAllChecked}
                  onChange={(e) => {
                    setIsAllChecked(e.target.checked);
                    if (e.target.checked) {
                      setSelectedStateNames({"STAT": filteredStateNames});
                    } else {
                      setSelectedStateNames({"STAT": []});
                    }
                  }}
                >
                  전체
                </Checkbox>
              </div>
              <div className="con scrollbar">
                <Checkbox.Group
                  className="report-org-list"
                  onChange={handleOrgChange}
                  value={selectedStateNames}
                  style={{ width: "100%" }}
                >
                  {filteredStateNames.map((name, index) => (
                    <Checkbox
                      value={name}
                      className="report-org-list-item"
                      key={index}
                    >
                      {name}
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </div>
            </div>
          </div>
        </div>
        <div className="pop-footer">
          <div className="btn-set">
            <button type="button" className="cancel" onClick={onCancel}>
              취소
            </button>
            <button
              type="button"
              className="close"
              onClick={() => {
                handleReportOrgChange();
              }}
            >
              선택
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
