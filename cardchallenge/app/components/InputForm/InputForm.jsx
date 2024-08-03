"use client";
import style from "./inputform.module.scss";
import { useState } from "react";
import CreditCard from "../CreditCard/CreditCard";
const InputForm = () => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolder, setCardHolder] = useState("JOHN DOE");
  const [expiryMonth, setExpiryMonth] = useState("MM");
  const [expiryYear, setExpiryYear] = useState("YY");
  const [cvc, setCvc] = useState("CVC");

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleCardHolderFocus = () => {
    setCardHolder("");
  };
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    setCardNumber(value);
  };
  const handleExpiryMonthChange = (e) => {
    const value = e.target.value;
    if (/^(0?[1-9]|1[012])$/.test(value) || value === "") {
      setExpiryMonth(value);
    }
  };

  const handleExpiryYearChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,2}$/.test(value)) {
      setExpiryYear(value);
    }
  };

  const handleCvcChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,3}$/.test(value)) {
      setCvc(value);
    }
  };

  const confirmData = (e) => {
    e.preventDefault();
    alert("Dati inseriti correttamente!");
  };

  return (
    <section className={style.Wrapper}>
      <CreditCard
        cardNumber={cardNumber}
        cardHolder={cardHolder}
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
        cvc={cvc}
      />
      <div className={style.preform}>
        <form className={style.formContainer}>
          <div className={style.cardNameContainer}>
            <label className={style.label}>CARDHOLDER NAME</label>
            <input
              type="text"
              placeholder="JOHN DOE"
              value={cardHolder}
              onChange={handleCardHolderChange}
              onFocus={handleCardHolderFocus}
              className={style.input}
            />
          </div>
          <div className={style.cardNumberContainer}>
            <label className={style.label}>CARD NUMBER</label>
            <input
              className={style.input}
              type="number"
              placeholder="0000 0000 0000 0000"
              value={cardNumber}
              maxLength="19"
              onChange={handleCardNumberChange}
            />
          </div>
          <section className={style.expDateCvc}>
            <div className={style.expirationContainer}>
              <label className={style.label}>EXPIRATION DATE</label>
              <div className={style.divide}>
                <input
                  className={style.inputYYMM}
                  type="number"
                  placeholder="MM"
                  maxLength="2"
                  value={expiryMonth}
                  onChange={handleExpiryMonthChange}
                  onFocus={handleCardHolderFocus}
                />
                <input
                  className={style.inputYYMM}
                  type="number"
                  placeholder="YY"
                  maxLength="2"
                  value={expiryYear}
                  onChange={handleExpiryYearChange}
                  onFocus={handleCardHolderFocus}
                />
              </div>
            </div>
            <div className={style.cvcContainer}>
              <label className={style.label}>CVC</label>
              <input
                className={style.input}
                type="number"
                placeholder="CVC"
                maxLength="3"
                value={cvc}
                onChange={handleCvcChange}
                onFocus={handleCardHolderFocus}
              />
            </div>
          </section>
          <div>
            <button className={style.buttonConfirm} onClick={confirmData}>
              CONFIRM
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InputForm;
