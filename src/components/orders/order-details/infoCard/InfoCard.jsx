import "./InfoCard.scss";

const InfoCard = ({ prodSumPrice, shippingPrice, priceSum }) => {
  return (
    <div className="ins-info-card-container">
      <h3 className="ins-info-card-container__title">اطلاعات سفارش</h3>

      <p className="ins-info-card-container__item">
        قیمت کل سفارش‌ها:
        <span>{Number(prodSumPrice).toLocaleString("fa-IR")} تومان</span>
      </p>
      <p className="ins-info-card-container__item">
        هزینه ارسال:
        <span>{Number(shippingPrice).toLocaleString("fa-IR")} تومان</span>
      </p>
      <p className="ins-info-card-container__item">
        جمع کل:
        <span>{Number(priceSum).toLocaleString("fa-IR")} تومان</span>
      </p>

      <button className="ins-info-card-container__btn">مشاهده فاکتور</button>
    </div>
  );
};

export default InfoCard;
