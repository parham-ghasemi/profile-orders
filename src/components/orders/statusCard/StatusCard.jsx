import "./StatusCard.scss";

const Card = ({
  title,
  content,
  status,
  comparisonTime,
  comparisonPercentage,
  img,
}) => {
  return (
    <div className="status-card-container">
      <div className="status-card-container__img">
        <img src={img} alt="card-img" />
      </div>
      <div className="status-card-container__txt">
        <div className="status-card-container__txt__top">
          <p className="status-card-container__txt__top__title">{title}</p>
          <p className="status-card-container__txt__top__content">{content}</p>
        </div>
        <p
          className={`status-card-container__txt__comparison ${
            status === "up"
              ? "status-card-container__txt__comparison--up"
              : status === "down"
              ? "status-card-container__txt__comparison--down"
              : ""
          }`}
        >
          {`نسبت به ${comparisonTime} ${comparisonPercentage}%`}
          {status === "up" && (
            <img src="assets/ui/trend-up.svg" alt="trend-up" />
          )}
          {status === "down" && (
            <img src="assets/ui/trend-down.svg" alt="trend-down" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
