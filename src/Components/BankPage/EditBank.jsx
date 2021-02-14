import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import s from "./EditBank.module.scss";
import EditData from "./EditData";
const EditBank = (props) => {
  const [banks, setBanks] = useState([]);
  const [dataBank, setData] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    Axios.get("https://elif-tech-task.herokuapp.com/bank").then(
      (Response) => {
        if (Response.status === 200) {
          setBanks(Response.data);
        } else {
          setMessage("Error, something went wrong");
        }
      },
      (err) => {
        setMessage("Error, something went wrong");
      }
    );
  }, []);
  function changeSelect() {
    let but = document.getElementById("SelectBut");
    let editData = document.getElementById("EditData");
    editData.style.display = "none";
    but.style.display = "block";
  }
  function selectBank(e) {
    let selectBank = document.getElementById("Select");
    if (selectBank.value !== "None") {
      let strBank = selectBank.value.substring(3);
      let arrBank = strBank.split(" ");
      let editData = document.getElementById("EditData");
      Axios.get("https://elif-tech-task.herokuapp.com/bank/" + arrBank[0]).then(
        (Response) => {
          if (Response.status === 200) {
            setData(Response.data);
            setMessage("");
            e.target.style.display = "none";
            editData.style.display = "block";
          } else {
            setMessage("Error, something went wrong");
          }
        },
        (err) => {
          setMessage("Error, something went wrong");
        }
      );
    } else {
      setMessage("Please, select the bank");
    }
  }

  let selectData = dataBank.map((p) => (
    <EditData
      key={p.Id}
      Id={p.Id}
      name={p.name}
      interest_rate={p.interest_rate}
      max_loan={p.max_loan}
      min_down_payment={p.min_down_payment}
      loan_term={p.loan_term}
    />
  ));

  let bank = [];
  if (banks.length > 0) {
    bank = banks.map((p) => (
      <option key={p.Id}>
        ID:{p.Id} {p.name}
      </option>
    ));
  } else {
    bank.push(<option>No available banks</option>);
  }
  return (
    <div className={s.EditBank}>
      <div className={s.EditBankBlock}>
        <div className={s.EditTitle}>Edit Bank</div>
        <select
          className={s.EditBankElements}
          id="Select"
          onChange={changeSelect}
        >
          <option>None</option>
          {bank}
        </select>
        <button className={s.EditSelectBut} onClick={selectBank} id="SelectBut">
          Select
        </button>
        <div className={s.EditBankData} id="EditData">
          {selectData}
        </div>
        <div className={s.Message1}>{message}</div>
      </div>
    </div>
  );
};
export default EditBank;
