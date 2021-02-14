import React, { useState } from "react";
import s from "./Bank.module.scss";
import BankPhoto from "../../Img/bank.png";
import BankCard from "./BankCard";
import Create from "../../Img/create.jpg";
import Edit from "../../Img/edit.jpg";
import Delete from "../../Img/delete.jpeg";
import CreateBank from "./CreateBank";
import DeleteBank from "./DeleteBank";
import EditBank from "./EditBank";
import BankSet from "./BankSet";
import RefArrow from "../Addition/RefArrow";
import { NavLink } from "react-router-dom";
const Bank = (props) => {
  function onCreate() {
    let editBank = document.getElementById("Edit");
    let deleteBank = document.getElementById("Delete");
    let createBank = document.getElementById("Create");
    editBank.style.display = "none";
    deleteBank.style.display = "none";
    createBank.style.display = "block";
  }
  function onDelete() {
    let editBank = document.getElementById("Edit");
    let deleteBank = document.getElementById("Delete");
    let createBank = document.getElementById("Create");
    editBank.style.display = "none";
    deleteBank.style.display = "block";
    createBank.style.display = "none";
  }
  function onEdit() {
    let editBank = document.getElementById("Edit");
    let deleteBank = document.getElementById("Delete");
    let createBank = document.getElementById("Create");
    editBank.style.display = "block";
    deleteBank.style.display = "none";
    createBank.style.display = "none";
  }
  return (
    <div className={s.Bank}>
      <div className={s.Header}></div>
      <div className={s.BankIntroduction}>
        <div className={s.IntroductionTitle}>
          <div className={s.IntroductionText}>
            Create and Manage your bank{" "}
            <span className={s.TextPart2}>- NOW</span>
          </div>
        </div>
        <img src={BankPhoto} alt="" className={s.IntroductionImg} />
      </div>
      <div className={s.BankSet}>
        <BankSet />
      </div>
      <div className={s.RefArrowBlock}>
        <NavLink to="/mortgage">
          <RefArrow />
        </NavLink>
      </div>
      <div className={s.BankCardBlock}>
        <BankCard
          className={s.CreateCard}
          text={"Create"}
          img={Create}
          func={onCreate}
        />
        <BankCard
          className={s.EditCard}
          text={"Edit"}
          img={Edit}
          func={onEdit}
        />
        <BankCard
          className={s.DeleteCard}
          text={"Delete"}
          img={Delete}
          func={onDelete}
        />
      </div>
      <div className={s.Create} id="Create">
        <CreateBank />
      </div>
      <div className={s.Edit} id="Edit">
        <EditBank />
      </div>
      <div className={s.Delete} id="Delete">
        <DeleteBank />
      </div>
    </div>
  );
};
export default Bank;
