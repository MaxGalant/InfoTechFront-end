import React, { useEffect, useState } from "react";
import s from "./Mortgage.module.scss";
import Axios from "axios";
import Table from "./Table";
import RefArrow from "../Addition/RefArrow";
import { NavLink } from "react-router-dom";
const Mortgage = (props) => {
  const [initialLoan, setInitialLoan] = useState(0);
  const [downPayment, setDownPayments] = useState(0);
  const [banks, setBanks] = useState([]);
  const [dataBank, setData] = useState([]);
  const [result, setResult] = useState(0);
  const [month, setMonth] = useState(0);
  const [rentYear, SetRent] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    Axios.get("https://elif-tech-task.herokuapp.com/bank").then((Response) => {
      setBanks(Response.data);
    });
  }, []);

  function getSelected(e) {
    let selectBank = document.getElementById("Select");
    if (selectBank.value !== "None") {
      let strBank = selectBank.value.substring(3);
      let arrBank = strBank.split(" ");
      Axios.get("http://localhost:3001/bank/" + arrBank[0]).then(
        (Response) => {
          if (Response.status === 200) {
            setData(Response.data);
            setMonth(Response.data[0].loan_term);
            SetRent(Response.data[0].min_down_payment / 100);
          } else {
            setMessage("Error, something went wrong");
          }
        },
        (err) => {
          setMessage("Error, something went wrong");
        }
      );
    }
  }

  function calculateMotgage() {
    let table = document.getElementById("Table");
    let result = document.getElementById("Result");
    let selectBank = document.getElementById("Select");
    let rent = (initialLoan * dataBank[0].min_down_payment) / 100;

    if (selectBank.value !== "None") {
      if (!isNaN(Number(initialLoan))) {
        if (Number(initialLoan) > 0) {
          if (initialLoan > downPayment) {
            if (downPayment >= rent) {
              if (initialLoan <= dataBank[0].max_loan) {
                let interestRate = dataBank[0].interest_rate / 100;
                let amountBorroved = initialLoan - downPayment;
                let p1 = amountBorroved * (interestRate / 12);
                let p2 = (1 + interestRate / 12) ** dataBank[0].loan_term;
                let mouthlyPayment = (p1 * p2) / (p2 - 1);
                result.parentElement.style.display = "block";
                result.innerHTML = " " + mouthlyPayment.toFixed(2);
                table.style.display = "block";
                setMessage("");
                setResult(mouthlyPayment.toFixed(2));
              } else {
                result.parentElement.style.display = "none";
                setMessage("Initial loan exceeds the allowable");
              }
            } else {
              result.parentElement.style.display = "none";
              setMessage("Down payment must be more");
            }
          } else {
            result.parentElement.style.display = "none";
            setMessage("Initial must be more than dawn payment");
          }
        } else {
          result.parentElement.style.display = "none";
          setMessage("Initial loan must be more than 0");
        }
      } else {
        result.parentElement.style.display = "none";
        setMessage("Initial loan must be a number");
      }
    } else {
      result.parentElement.style.display = "none";
      setMessage("Please, select a bank");
    }
  }
  let bank=[]
  if (banks.length > 0) {
     bank = banks.map((p) => (
      <option key={p.Id}>
        ID:{p.Id} {p.name}
      </option>
    ));
  }
  function getInitialLoan(e) {
    setInitialLoan(Number(e.target.value));
  }
  function getDownPayments(e) {
    setDownPayments(Number(e.target.value));
  }
  return (
    <div className={s.Mortgage}>
      <div className={s.Header}></div>
      <div className={s.MortgageBlock}>
        <div className={s.MortgageBlockTitle}>Mortgage Calculator</div>
        <div className={s.MortgageBlockCalculator}>
          <div className={s.MortgageBlockCalculatorInputs}>
            <input
              type="text"
              className={s.MortgageBlockCalInitial}
              onChange={getInitialLoan}
            />
            <input
              type="text"
              className={s.MortgageBlockCalDownPayment}
              onChange={getDownPayments}
            />
            <select
              name=""
              id=""
              className={s.MortgageBlockCalBank}
              id="Select"
              onChange={getSelected}
            >
              <option>None</option>
              {bank}
            </select>
          </div>
          <button className={s.MortgageBlockCalBut} onClick={calculateMotgage}>
            Calculate
          </button>
          <div className={s.ResultBlock}>
            {" "}
            Result:
            <span className={s.Result} id="Result"></span>
          </div>
        </div>
        <div className={s.Message}>{message}</div>
      </div>
      <div className={s.Table} id="Table">
        <Table
          rent={rentYear}
          initialLoan={initialLoan}
          result={result}
          month={month}
          downPayment={downPayment}
        />
      </div>{" "}
      <div className={s.RefArrowBlock}>
        <NavLink to="/bank">
          <RefArrow />
        </NavLink>
      </div>
    </div>
  );
};
export default Mortgage;
