import "./CustomerCard.scss";

const CustomerCard = ({
  name,
  phoneNumber,
  email,
  location,
  address,
  postalCode,
  number,
}) => {
  return (
    <div className="ins-customer-card-container">
      <h3 className="ins-customer-card-container__title">اطلاعات مشتری</h3>
      <p className="ins-customer-card-container__item">
        نام مشتری:
        <span>{name}</span>
      </p>
      <p className="ins-customer-card-container__item">
        شماره تماس:
        <span>{phoneNumber}</span>
      </p>
      <p className="ins-customer-card-container__item">
        ایمیل:
        <span>{email}</span>
      </p>
      <p className="ins-customer-card-container__item">
        موقعیت:
        <span>{location}</span>
      </p>
      <p className="ins-customer-card-container__item">
        آدرس:
        <span>{address}</span>
      </p>
      <p className="ins-customer-card-container__item">
        کدپستی:
        <span>{postalCode}</span>
      </p>
      <p className="ins-customer-card-container__number">
        تعداد کل سفارشات:
        <span>{number}</span>
      </p>
    </div>
  );
};

export default CustomerCard;
