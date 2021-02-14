import s from "./MiddlePage.module.scss";
import Mortgage from "../../Img/mortgage.jpg";
import BankIcon from "../../Img/bankCard.jpg";
import { NavLink } from "react-router-dom";
const MiddlePage = () => {
  return (
    <div className={s.MiddlePage}>
      <div className={s.Header}></div>
      <div className={s.MiddlePageTitle}>Select your action</div>
      <div className={s.CardBlock}>
        <div className={s.BankCard}>
          <img className={s.CardImg} src={BankIcon} />
          <NavLink to="/bank">
            <button className={s.Cardbut}>Select</button>
          </NavLink>
        </div>
        <div className={s.MortgageCard}>
          <img className={s.CardImg} src={Mortgage} />
          <NavLink to="/mortgage">
            <button className={s.Cardbut}>Select</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;
