import React, { useEffect } from "react";
import { useUserStore } from "shared/store/userStore";

interface UserProviderProps {
  children: React.ReactNode;
  hasAllPermissions: boolean;
}

const UserProvider: React.FC<UserProviderProps> = ({
  children,
  hasAllPermissions,
}) => {
  const { setHasAllPermissions } = useUserStore();

  useEffect(() => {
    setHasAllPermissions(hasAllPermissions);
  }, [hasAllPermissions, setHasAllPermissions]);

  return <>{children}</>;
};

export default UserProvider;
