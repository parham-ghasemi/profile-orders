import "./productsCard.scss";

const ProductsCard = ({ name, details, price, number, priceSum, img }) => {
  return (
    <div className="ins-products-item-container">
      <div className="ins-products-item-container__right">
        <div className="ins-products-item-container__right__img">
          <img src={img} alt="product-image" />
        </div>
        <div className="ins-products-item-container__right__name-desc">
          <p className="ins-products-item-container__right__name-desc__name">
            {name}
          </p>
          <p className="ins-products-item-container__right__name-desc__desc">
            {details}
          </p>
        </div>
      </div>

      <div className="ins-products-item-container__left">
        <div className="ins-products-item-container__left__item">
          <p className="ins-products-item-container__left__item__title">
            قیمت هر واحد
          </p>
          <p className="ins-products-item-container__left__item__value">
            {` ${Number(price).toLocaleString("fa-IR")} تومان `}
          </p>
        </div>
        <div className="ins-products-item-container__left__item">
          <p className="ins-products-item-container__left__item__title">
            تعداد
          </p>
          <p className="ins-products-item-container__left__item__value">
            {number}
          </p>
        </div>
        <div className="ins-products-item-container__left__item">
          <p className="ins-products-item-container__left__item__title">
            مجموع
          </p>
          <p className="ins-products-item-container__left__item__value">
            {` ${Number(priceSum).toLocaleString("fa-IR")} تومان `}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
