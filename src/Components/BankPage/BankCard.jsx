import React, { useState } from "react";
import s from "./BankCard.module.scss";

const BankCard = (props) => {
  return (
    <div className={s.BankCard}>
     <img className={s.BankCardImg} src={props.img}/>
     <button className={s.BankCardBut} onClick={props.func}>{props.text}</button>
     
    </div>
  );
};
export default BankCard;
