import React from "react";
import { Dropdown, MenuProps, Space } from "antd";
import { IconDelete2, IconMore } from "shared/components/Icon";

interface MoreDropdownProps {
  isFixed: boolean;
  onDelete?: () => void;
}

const MoreDropdown: React.FC<MoreDropdownProps> = ({ isFixed, onDelete }) => {

  const items: MenuProps["items"] = [
    {
      icon: <IconDelete2 />,
      onClick: onDelete,
      label: "삭제",
      key: "4",
    },
  ];

  return (
    <>
      {!isFixed && (
        <div className="more-set">
          <Dropdown menu={{ items }}>
            <Space>
              <IconMore />
            </Space>
          </Dropdown>
        </div>
      )}
    </>
  );
};

export default MoreDropdown;
