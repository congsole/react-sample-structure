import { Alert, Modal } from "antd";
import { usePathname } from "shared/routes/routes";
import React, { ReactNode, createContext, useState } from "react";

type Alert = {
  message: string | ReactNode;
  title?: string;
  okText?: string;
  onOk?: () => void;
};

type AlertContext = {
  showAlert: ({
    message,
    title,
    okText,
    onOk,
  }: {
    message: string | ReactNode;
    title?: string;
    okText?: string;
    onOk?: () => void;
  }) => void;
};

type AlertContextProvider = {
  children: ReactNode;
};

export const AlertContext = createContext<AlertContext>({
  showAlert: () => {},
});

export const AlertProvider: React.FC<AlertContextProvider> = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState<Alert | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const contextValue: AlertContext = {
    showAlert: (alert: Alert) => {
      setAlertMessage(alert);
      setIsOpen(true);
    },
  };

  // 확인
  const handleOk = () => {
    if (alertMessage?.onOk && typeof alertMessage?.onOk === "function")
      alertMessage.onOk();
    setIsOpen(false);
  };

  // 취소
  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <AlertContext.Provider value={contextValue}>
      {isOpen && alertMessage && (
        <Modal
          title={alertMessage.title}
          closable={true}
          open={isOpen}
          footer={(_, { OkBtn }) => <OkBtn />}
          okText={alertMessage.okText || "확인"}
          centered={true}
          onOk={handleOk}
          onCancel={handleCancel}
          afterClose={() => setAlertMessage(null)}
          maskClosable={false}
        >
          {/*<p dangerouslySetInnerHTML={{ __html: alertMessage.message }}></p>*/}
          <p>{alertMessage.message}</p>
        </Modal>
      )}
      {children}
    </AlertContext.Provider>
  );
};
