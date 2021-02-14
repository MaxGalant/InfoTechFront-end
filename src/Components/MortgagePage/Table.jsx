import React, { useEffect, useState } from "react";
import s from "./Table.module.scss";
const Table = (props) => {
  let table = [];
  let TotalPayment = Number(props.result);
  let initialLoan = props.initialLoan - props.downPayment;
  console.log(initialLoan);
  let initial = initialLoan;
  let downPayment = props.downPayment;
  let balanceRent = 0;
  for (let i = 0; i < props.month; i++) {
    let rent = Number((initial * props.rent) / 12);

    downPayment += TotalPayment - rent;
    balanceRent += rent;
    initialLoan -= TotalPayment;
    let balance = initialLoan + balanceRent;
    table.push(
      <div className={s.TableBlock} key={i}>
        <div className={s.TableMonth}>{i + 1}</div>
        <div className={s.TotalPayment}>$ {TotalPayment}</div>
        <div className={s.InterestPayment}>${rent.toFixed(2)}</div>
        <div className={s.LoanBalance}>
          ${balance > 0 ? balance.toFixed(2) : 0}
        </div>
        <div className={s.Equity}>
          $
          {balance > 0
            ? downPayment.toFixed(2)
            : (downPayment + balance).toFixed(2)}
        </div>
      </div>
    );
    initial -= TotalPayment;
  }

  return (
    <div className={s.Table}>
      <div className={s.TableBlock}>
        <div className={s.TableMonth}>Month</div>
        <div className={s.TotalPayment}>Total Payment</div>
        <div className={s.InterestPayment}>Interest Payment</div>
        <div className={s.LoanBalance}>Loan Balance</div>
        <div className={s.Equity}>Equity</div>
      </div>
      {table}
    </div>
  );
};
export default Table;
