import React from "react";
import s from "./RefArrow.module.scss";
import ForwardIcon from '@material-ui/icons/Forward';
const RefArrow = () => {
  return (
    <div className={s.RefArrow}>
      <ForwardIcon className={s.Arrow}/>
    </div>
  );
};

export default RefArrow;
