import { useContext } from "react";
import { ConfirmContext } from "shared/components/alert/ConfirmContextProvider";

export const useConfirm = () => {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error("useConfirm must be used within a ConfirmContextProvider");
  }
  return context;
};
