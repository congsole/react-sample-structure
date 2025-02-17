import { Modal } from "antd";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { usePathname } from "shared/routes/routes";

type Confirm = {
  message: string | ReactNode;
  title?: string;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
};

type ConfirmContext = {
  showConfirm: ({
    message,
    title,
    okText,
    cancelText,
    onOk,
    onCancel,
  }: {
    message: string | ReactNode;
    title?: string;
    okText?: string;
    cancelText?: string;
    onOk?: () => void;
    onCancel?: () => void;
  }) => void;
};

type ConfirmContextProvider = {
  children: ReactNode;
};

export const ConfirmContext = createContext<ConfirmContext>({
  showConfirm: () => {},
});

export const ConfirmProvider: React.FC<ConfirmContextProvider> = ({
  children,
}) => {
  const [confirmMessage, setConfirmMessage] = useState<Confirm | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const contextValue: ConfirmContext = {
    showConfirm: (confirm: Confirm) => {
      setConfirmMessage(confirm);
      setIsOpen(true);
    },
  };

  // 확인
  const handleOk = () => {
    if (confirmMessage?.onOk && typeof confirmMessage?.onOk === "function")
      confirmMessage.onOk();
    setIsOpen(false);
  };

  // 취소
  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <ConfirmContext.Provider value={contextValue}>
      {confirmMessage && (
        <Modal
          title={confirmMessage.title}
          closable={true}
          open={isOpen}
          okText={confirmMessage.okText || "확인"}
          cancelText={confirmMessage.cancelText || "취소"}
          centered={true}
          onOk={handleOk}
          onCancel={handleCancel}
          afterClose={() => setConfirmMessage(null)}
        >
          <p>{confirmMessage.message}</p>
        </Modal>
      )}
      {children}
    </ConfirmContext.Provider>
  );
};
