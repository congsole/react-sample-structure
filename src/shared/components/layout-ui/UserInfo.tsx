// import { getUser } from "src/shared/services/user/actions";
import React, { useEffect, useState } from "react";

export default function UserInfo() {
  const [userInfo, setUserInfo] = useState<{
    userName: string;
    topDeptNm: string;
    teamNm: string;
  }>({ userName: "손해솔", topDeptNm: "P&F본사", teamNm: "임시" });

  // useEffect(() => {
  //   getUser().then((user) => {
  //     if (user) {
  //       setUserInfo({
  //         userName: user.userName || "",
  //         topDeptNm: user.topDeptNm || "",
  //         teamNm: user.teamNm || "",
  //       });
  //     }
  //   });
  // }, []);

  return (
    <div className="user-set">
      <div className="name">{userInfo.userName}</div>
      <div className="team">{`${userInfo.topDeptNm} ${userInfo.teamNm}`}</div>
    </div>
  );
}
