import React from "react";
import s from "./ReloadPage.module.scss";

import RefreshIcon from "@material-ui/icons/Refresh";
const ReloadPage = () => {
  return (
    <div className={s.Reload}>
      <RefreshIcon className={s.RefreshIcon} onClick={()=>{
        window.location.reload()
      }}/>
    </div>
  );
};

export default ReloadPage;
