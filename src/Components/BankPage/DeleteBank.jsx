import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import ReloadPage from "../Addition/ReloadPage";
import s from "./DeleteBank.module.scss";
const DeleteBank = (props) => {
  const [banks, setBanks] = useState([]);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
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
  function deleteBank(e) {
    let reload = document.getElementById("Reload");
    let selectBank = e.target.parentElement.children[1].children[0].value;
    console.log(selectBank);
    let strBank = selectBank.substring(3);
    console.log(strBank);
    let arrBank = strBank.split(" ");
    if (selectBank !== "None") {
      Axios.delete(
        "https://elif-tech-task.herokuapp.com/delete/bank/" + arrBank[0] + "/" + arrBank[1]
      ).then(
        (Response) => {
          setMessage("");
          setSuccess("Successfully delete the bank");
        },
        (err) => {
          reload.style.display = "block";
          setMessage("Error, something went wrong");
          setSuccess("");
        }
      );
    } else {
      reload.style.display = "none";
      setMessage("Please, select the bank");
    }
    setSuccess("");
  }
  return (
    <div className={s.DeleteBank}>
      <div className={s.DeleteBankBlock}>
        <div className={s.DeleteTitle}>Delete Bank</div>
        <div className={s.ChooseBank}>
          <select className={s.DeleteBankElements} id="Select">
            <option>None</option>
            {bank}
          </select>
        </div>
        <button className={s.DeleteBut} onClick={deleteBank}>
          Delete
        </button>
        <div className={s.Message} id="Message">
          {message}
        </div>
        <div className={s.Success}>{success}</div>
        <div className={s.Reload} id="Reload">
          <ReloadPage />
        </div>
      </div>
    </div>
  );
};
export default DeleteBank;
