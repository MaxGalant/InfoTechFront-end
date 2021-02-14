import React, { useState } from "react";
import s from "./BankSet.module.scss";
import { useEffect } from "react";
import Axios from "axios";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const BankSet = (props) => {
  const [banks, setBanks] = useState([]);
  const [message, setMessage] = useState("");
 
  useEffect(() => {
    Axios.get("https://elif-tech-task.herokuapp.com/bank").then(
      (Response) => {
        if (Response.status === 200) {
          if (Response.data.length > 0) {
            setBanks(Response.data);
            setMessage("");
          } else {
            setMessage("Error, something went wrong");
          }
        } else {
          setMessage("Error, something went wrong");
        }
      },
      (err) => {
        setMessage("Error, something went wrong");
      }
    );
  }, []);

  function HoverList(e) {
    let but = document.getElementById("contentBut");
    let content = document.getElementById("content");
    let svg1 = document.getElementById("svg1");
    let svg2 = document.getElementById("svg2");
    svg1.style.display = "block";
    svg2.style.display = "none";
    but.style.left = "1000px";
    but.style.transition = ".4s";
    content.style.transition = ".4s";
    content.style.left = "0px";
  }
  function HoverListEnd() {
    let but = document.getElementById("contentBut");
    let content = document.getElementById("content");
    let svg1 = document.getElementById("svg1");
    let svg2 = document.getElementById("svg2");
    but.style.left = "0px";
    but.style.transition = ".4s";
    svg1.style.display = "none";
    svg2.style.display = "block";
    content.style.left = "-1000px";
  }

  let bank = [];
  if (banks.length > 0) {
    bank = banks.map((p) => (
      <div className={s.BankList} key={p.Id}>
        <div className={s.BankIcon}>
          <AccountBalanceIcon className={s.BankSvg} />
        </div>
        <div className={s.BankName}>{p.name}</div>
        <div className={s.BankRate}>{p.interest_rate}%</div>
        <div className={s.BankMax}>${p.max_loan}</div>
        <div className={s.BankMin}>{p.min_down_payment}%</div>
        <div className={s.BankTerm}>{p.loan_term} month</div>
      </div>
    ));
  } else {
    bank.push(<div className={s.Message}>No available banks</div>);
  }

  return (
    <div className={s.EditBank}>
      <div className={s.AppereanceBlock} onMouseLeave={HoverListEnd}>
        <div className={s.AppereanceContent} id="content">
          <div className={s.AppereanceBlockTitle}>List of banks</div>
          <div className={s.BankList}>
            <div className={s.BankIcon}>
              <AccountBalanceIcon className={s.BankSvg} />
            </div>
            <div className={s.BankName}>Name</div>
            <div className={s.BankRate}>Interst Rate</div>
            <div className={s.BankMax}>Max Loan</div>
            <div className={s.BankMin}>Min payment</div>
            <div className={s.BankTerm}>Loan Term</div>
          </div>
          {bank}
          <div className={s.Message}>{message}</div>
        </div>
        <div
          className={s.AppereanceBut}
          onMouseOver={HoverList}
          id="contentBut"
        >
          <ArrowForwardIosIcon className={s.AppereanceArrow1} id="svg1" />
          <ArrowBackIosIcon className={s.AppereanceArrow2} id="svg2" />
        </div>
      </div>
    </div>
  );
};
export default BankSet;
