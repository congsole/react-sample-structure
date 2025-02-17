import { AlertContext } from "shared/components/alert/AlertContextProvider";
import { useContext } from "react";

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within a AlertContextProvider");
  }
  return context;
};
