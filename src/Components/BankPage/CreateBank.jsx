import React, { useState } from "react";
import s from "./CreateBank.module.scss";
import BankIcon from "../../Img/BankIcon.jpg";
import Axios from "axios";
import ReloadPage from "../Addition/ReloadPage";
const CreateBank = (props) => {
  const [name, setName] = useState("");
  const [interest_rate, setInterestRate] = useState(0);
  const [max_loan, setMaxLoan] = useState("");
  const [min_down_payment, setMinPayment] = useState("");
  const [loan_term, setLoanTerm] = useState("");
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState("");
  function getName(e) {
    let line1 = document.getElementById("Line1");
    let point1 = document.getElementById("Point1");
    let title1 = document.getElementById("PointT1");
    title1.classList = `${s.PointTitle}`;
    line1.classList = `${s.Line}`;
    point1.classList = `${s.Point}`;

    setMessage("");
    setName(e.target.value);
  }
  function getInterestRate(e) {
    let line1 = document.getElementById("Line1");
    let point1 = document.getElementById("Point1");
    let title1 = document.getElementById("PointT1");
    title1.classList = `${s.PointTitle}`;
    line1.classList = `${s.Line}`;
    point1.classList = `${s.Point}`;
    setMessage("");
    setInterestRate(e.target.value);
  }
  function getMaxLoan(e) {
    let line1 = document.getElementById("Line1");
    let point1 = document.getElementById("Point1");
    let title1 = document.getElementById("PointT1");
    title1.classList = `${s.PointTitle}`;
    line1.classList = `${s.Line}`;
    point1.classList = `${s.Point}`;
    setMessage("");
    setMaxLoan(e.target.value);
  }
  function getMinPayment(e) {
    let line1 = document.getElementById("Line1");
    let point1 = document.getElementById("Point1");
    let title1 = document.getElementById("PointT1");
    title1.classList = `${s.PointTitle}`;
    line1.classList = `${s.Line}`;
    point1.classList = `${s.Point}`;
    setMessage("");
    setMinPayment(e.target.value);
  }
  function getLoanTerm(e) {
    let line1 = document.getElementById("Line1");
    let point1 = document.getElementById("Point1");
    let title1 = document.getElementById("PointT1");
    title1.classList = `${s.PointTitle}`;
    line1.classList = `${s.Line}`;
    point1.classList = `${s.Point}`;
    setMessage("");
    setLoanTerm(e.target.value);
  }

  function Create() {
    if (name !== "") {
      if (!isNaN(interest_rate)) {
        if (interest_rate > 0) {
          if (interest_rate < 100) {
            if (!isNaN(max_loan)) {
              if (max_loan > 0) {
                if (!isNaN(min_down_payment)) {
                  if (min_down_payment > 0) {
                    if (min_down_payment < 100) {
                      if (!isNaN(loan_term)) {
                        if (loan_term > 0) {
                          if (loan_term < 240) {
                            Axios.post("https://elif-tech-task.herokuapp.com/create_bank", {
                              name: name,
                              interest_rate: interest_rate,
                              max_loan: max_loan,
                              min_down_payment: min_down_payment,
                              loan_term: loan_term,
                            }).then(
                              (Response) => {
                                if (Response.status === 200) {
                                  setCompleted(
                                    "Congratulations, you successfully have created a bank! "
                                  );
                                  setMessage("");
                                  let line2 = document.getElementById("Line2");
                                  let point2 = document.getElementById(
                                    "Point2"
                                  );
                                  let title2 = document.getElementById(
                                    "PointT2"
                                  );
                                  let reload=document.getElementById("BankReload")
                                  title2.classList = `${s.PointTitle}`;
                                  line2.classList = `${s.Line}`;
                                  point2.classList = `${s.Point}`;
                                  reload.style.display="block"
                                } else {
                                  setMessage("Error, something went wrong");
                                }
                              },
                              (err) => {
                                setCompleted("");
                                setMessage("Error, something went wrong");
                              }
                            );
                          } else {
                            setMessage(
                              "Loan term must be  less than 240 month"
                            );
                          }
                        } else {
                          setMessage("Loan term must be more than 0 month");
                        }
                      } else {
                        setMessage("Loan term mut be a number");
                      }
                    } else {
                      setMessage("Min payment must be less than 100%");
                    }
                  } else {
                    setMessage("Min payment must be more than 0%");
                  }
                } else {
                  setMessage("Min payment must be a number");
                }
              } else {
                setMessage("Max loan must be more than 0%");
              }
            } else {
              setMessage("Max loan must be a number");
            }
          } else {
            setMessage("Interest rate must be less than 100%");
          }
        } else {
          setMessage("Interest rate must be more than 0%");
        }
      } else {
        setMessage("Interest rent must be a number");
      }
    } else {
      setMessage("Incorrect name");
    }
  }

  return (
    <div className={s.CreateBank}>
      <div className={s.CreateBankBlock}>
        <div className={s.BankForm}>
          <div className={s.BankImg}>
            <div className={s.ImgBorder}>
              <img src={BankIcon} alt="" />
            </div>
          </div>
          <div className={s.BankFormBlock}>
            <div className={s.BankFormTitle}>Create Bank</div>
            <div className={s.BankName}>
              <div className={s.BankTitleForm}>Bank Name</div>
              <input className={s.BankFormInput} onChange={getName} />
            </div>
            <div className={s.BankInterestRate}>
              <div className={s.BankTitleForm}>Interest Rate</div>
              <input className={s.BankFormInput} onChange={getInterestRate} />
            </div>
            <div className={s.BankMaximumLoan}>
              <div className={s.BankTitleForm}>Maximum Loan</div>
              <input className={s.BankFormInput} onChange={getMaxLoan} />
            </div>
            <div className={s.MinimumDownPayment}>
              <div className={s.BankTitleForm}>Minimum Down</div>
              <input className={s.BankFormInput} onChange={getMinPayment} />
            </div>
            <div className={s.LoanTerm}>
              <div className={s.BankTitleForm}>Loan Term</div>
              <input className={s.BankFormInput} onChange={getLoanTerm} />
            </div>
            <div className={s.Message} id="Message">
              {message}
            </div>
            <div className={s.CompMessage}>{completed}</div>
            <button className={s.CreateBlockButton} onClick={Create}>
              Create
            </button>
          </div>{" "}
          <div className={s.BankReload} id="BankReload">
            <ReloadPage />
          </div>
        </div>
        <div className={s.CreateBankStatus}>
          <div className={s.PointBlock}>
            <div className={s.PointTitle}>Start</div>
            <div className={s.Point}></div>
          </div>
          <div className={s.LineBlock}>
            <div className={s.GreyLine} id="Line1"></div>
          </div>
          <div className={s.PointBlock}>
            <div className={s.GrayPointTitle} id="PointT1">
              Process
            </div>
            <div className={s.GrayPoint} id="Point1"></div>
          </div>
          <div className={s.LineBlock}>
            <div className={s.GreyLine} id="Line2"></div>
          </div>
          <div className={s.PointBlock}>
            <div className={s.GrayPointTitle} id="PointT2">
              Finish
            </div>
            <div className={s.GrayPoint} id="Point2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateBank;
