import React, { useState } from "react";
import s from "./EditBank.module.scss";
import Axios from "axios";
import ReloadPage from "../Addition/ReloadPage";
const EditData = (props) => {
  function changeFieldString(e) {
    if (e.target.value.length > 0) {
      e.target.parentElement.parentElement.children[2].innerHTML = "";
    }
  }
  function changeFieldNumber(e) {
    if (!isNaN(e.target.value)) {
      if (e.target.value.length > 0) {
        e.target.parentElement.parentElement.children[2].innerHTML = "";
      }
    }
  }
  function updateName(e) {
    let inputValue = e.target.parentElement.children[0].value;

    if (inputValue.length > 0) {
      Axios.put("https://elif-tech-task.herokuapp.com/update/name/" + props.Id, {
        name: inputValue,
      }).then(
        (Response) => {
          if (Response.status === 200) {
            e.target.parentElement.parentElement.children[2].innerHTML = "";
            e.target.parentElement.parentElement.children[3].innerHTML =
              "Successfully edited";
            e.target.parentElement.children[0].value = "";
            let reload = document.getElementById("Reload");
            reload.style.display = "block";
          }
        },
        (err) => {
          e.target.parentElement.parentElement.children[3].innerHTML = "";
          e.target.parentElement.parentElement.children[2].innerHTML =
            "Error, something went wrong";
        }
      );
    } else {
      e.target.parentElement.parentElement.children[2].innerHTML =
        "The field value must not be empty ";
    }
  }
  function updateRate(e) {
    let inputValue = Number(e.target.parentElement.children[0].value);
    if (!isNaN(inputValue)) {
      if (inputValue > 0) {
        if (inputValue < 100) {
          Axios.put("http://localhost:3001/update/rate/" + props.Id, {
            rate: inputValue,
          }).then(
            (Response) => {
              if (Response.status === 200) {
                e.target.parentElement.parentElement.children[2].innerHTML = "";
                e.target.parentElement.parentElement.children[3].innerHTML =
                  "Successfully edited";
                e.target.parentElement.children[0].value = "";
                let reload = document.getElementById("Reload");
                reload.style.display = "block";
              }
            },
            (err) => {
              e.target.parentElement.parentElement.children[3].innerHTML = "";
              e.target.parentElement.parentElement.children[2].innerHTML =
                "Error, something went wrong";
            }
          );
        } else {
          e.target.parentElement.parentElement.children[2].innerHTML =
            "The field value must be less than 100%";
        }
      } else {
        e.target.parentElement.parentElement.children[2].innerHTML =
          "The field must be more than 0%";
      }
    } else {
      e.target.parentElement.parentElement.children[2].innerHTML =
        "The field value must be a number";
    }
  }
  function updateMaxLoan(e) {
    let inputValue = Number(e.target.parentElement.children[0].value);
    if (!isNaN(inputValue)) {
      if (inputValue > 0) {
        Axios.put("https://elif-tech-task.herokuapp.com/update/max_loan/" + props.Id, {
          max_loan: inputValue,
        }).then(
          (Response) => {
            if (Response.status === 200) {
              e.target.parentElement.parentElement.children[2].innerHTML = "";
              e.target.parentElement.parentElement.children[3].innerHTML =
                "Successfully edited";
              e.target.parentElement.children[0].value = "";
              let reload = document.getElementById("Reload");
              reload.style.display = "block";
            }
          },
          (err) => {
            e.target.parentElement.parentElement.children[3].innerHTML = "";
            e.target.parentElement.parentElement.children[2].innerHTML =
              "Error, something went wrong";
          }
        );
      } else {
        e.target.parentElement.parentElement.children[2].innerHTML =
          "The field value must be more than 0$";
      }
    } else {
      e.target.parentElement.parentElement.children[2].innerHTML =
        "The field value must be a number";
    }
  }
  function updateMinLoan(e) {
    let inputValue = Number(e.target.parentElement.children[0].value);
    if (!isNaN(inputValue)) {
      if (inputValue > 0) {
        if (inputValue < 100) {
          Axios.put("https://elif-tech-task.herokuapp.com/update/min_loan/" + props.Id, {
            min_loan: inputValue,
          }).then(
            (Response) => {
              if (Response.status === 200) {
                e.target.parentElement.parentElement.children[2].innerHTML = "";
                e.target.parentElement.parentElement.children[3].innerHTML =
                  "Successfully edited";
                e.target.parentElement.children[0].value = "";
                let reload = document.getElementById("Reload");
                reload.style.display = "block";
              }
            },
            (err) => {
              e.target.parentElement.parentElement.children[3].innerHTML = "";
              e.target.parentElement.parentElement.children[2].innerHTML =
                "Error, something went wrong";
            }
          );
        } else {
          e.target.parentElement.parentElement.children[2].innerHTML =
            "The field value must be less than 100%";
        }
      } else {
        e.target.parentElement.parentElement.children[2].innerHTML =
          "The field value value must be more than 0%";
      }
    } else {
      e.target.parentElement.parentElement.children[2].innerHTML =
        "The field value must be a number";
    }
  }
  function updateLoanTerm(e) {
    let inputValue = Number(e.target.parentElement.children[0].value);
    if (!isNaN(inputValue)) {
      if (inputValue > 0) {
        if (inputValue < 240) {
          Axios.put("https://elif-tech-task.herokuapp.com/update/loan_term/" + props.Id, {
            loan_term: inputValue,
          }).then(
            (Response) => {
              if (Response.status === 200) {
                e.target.parentElement.parentElement.children[2].innerHTML = "";
                e.target.parentElement.parentElement.children[3].innerHTML =
                  "Successfully edited";
                e.target.parentElement.children[0].value = "";
                let reload = document.getElementById("Reload");
                reload.style.display = "block";
              }
            },
            (err) => {
              e.target.parentElement.parentElement.children[3].innerHTML = "";
              e.target.parentElement.parentElement.children[2].innerHTML =
                "Error, something went wrong";
            }
          );
        } else {
          e.target.parentElement.parentElement.children[2].innerHTML =
            "The field value must be less than 240 month";
        }
      } else {
        e.target.parentElement.parentElement.children[2].innerHTML =
          "The field value must be more than 0 month ";
      }
    } else {
      e.target.parentElement.parentElement.children[2].innerHTML =
        "The field value must be a number";
    }
  }
  return (
    <div>
      <div className={s.EditBankDataBlock}>
        <div className={s.EditBankDataTitle}>
          Name: <span className={s.EditBankDataEl}>{props.name}</span>
        </div>
        <div className={s.EditBankDataContainer}>
          <input className={s.EditBankDataInput} onChange={changeFieldString} />
          <button className={s.EditBankDataBut} onClick={updateName}>
            Edit
          </button>
        </div>
        <div className={s.Message}></div>
        <div className={s.Success}></div>
      </div>
      <div className={s.EditBankDataBlock}>
        <div className={s.EditBankDataTitle}>
          Interest rent:
          <span className={s.EditBankDataEl}>{props.interest_rate}%</span>
        </div>{" "}
        <div className={s.EditBankDataContainer}>
          <input className={s.EditBankDataInput} onChange={changeFieldNumber} />
          <button className={s.EditBankDataBut} onClick={updateRate}>
            Edit
          </button>
        </div>
        <div className={s.Message}></div>
        <div className={s.Success}></div>
      </div>
      <div className={s.EditBankDataBlock}>
        <div className={s.EditBankDataTitle}>
          Max loan: <span className={s.EditBankDataEl}>${props.max_loan}</span>
        </div>{" "}
        <div className={s.EditBankDataContainer}>
          <input className={s.EditBankDataInput} onChange={changeFieldNumber} />
          <button className={s.EditBankDataBut} onClick={updateMaxLoan}>
            Edit
          </button>
        </div>
        <div className={s.Message}></div>
        <div className={s.Success}></div>
      </div>
      <div className={s.EditBankDataBlock}>
        <div className={s.EditBankDataTitle}>
          Min payment:
          <span className={s.EditBankDataEl}>{props.min_down_payment}%</span>
        </div>

        <div className={s.EditBankDataContainer}>
          <input className={s.EditBankDataInput} onChange={changeFieldNumber} />
          <button className={s.EditBankDataBut} onClick={updateMinLoan}>
            Edit
          </button>
        </div>
        <div className={s.Message}></div>
        <div className={s.Success}></div>
      </div>
      <div className={s.EditBankDataBlock}>
        <div className={s.EditBankDataTitle}>
          Loan term:{" "}
          <span className={s.EditBankDataEl}> {props.loan_term} month</span>
        </div>
        <div className={s.EditBankDataContainer}>
          <input className={s.EditBankDataInput} onChange={changeFieldNumber} />
          <button className={s.EditBankDataBut} onClick={updateLoanTerm}>
            Edit
          </button>
        </div>
        <div className={s.Message}></div>
        <div className={s.Success}></div>
      </div>

      <div className={s.Reload} id="Reload">
        <ReloadPage />
      </div>
    </div>
  );
};
export default EditData;
