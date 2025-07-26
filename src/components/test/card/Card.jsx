import "./Card.scss";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-container__bg-image">
        <img src="assets/test/card-bg.jpg" alt="" />
      </div>
      <div className="card-container__right">
        <p className="card-container__right__top">تعداد بیماران</p>
        <p className="card-container__right__bottom">تعداد بیماران</p>
      </div>
      <div className="card-container__left">
        <img src="/insurance/assets/test/examination.png" alt="examination" />
      </div>
    </div>
  );
};

export default Card;
