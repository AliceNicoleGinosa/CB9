import style from "./creditcard.module.scss";
const CreditCard = ({
  cardNumber,
  cardHolder,
  expiryMonth,
  expiryYear,
  cvc,
}) => {
  return (
    <div className={style.generalContainer}>
      <div className={style.containerCardFront}>
        <img src="logo.svg" className={style.logoIconFront} />
        <div>
          <div className={style.containerCardnumber}>
            <p className={style.cardNumber}>{cardNumber}</p>
          </div>

          <div className={style.containerHolderDate}>
            <div className={style.containerHolder}>
              <p>{cardHolder}</p>
            </div>
            <div className={style.containerDate}>
              <p>{expiryMonth}</p>/<p>{expiryYear}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.containerBack}>
        <div className={style.blackString}></div>
        <img src="logo.svg" className={style.iconBack} />
        <div className={style.cvcInput}>{cvc}</div>
      </div>
    </div>
  );
};

export default CreditCard;
