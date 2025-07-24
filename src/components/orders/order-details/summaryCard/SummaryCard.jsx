import "./SummaryCard.scss";

const SummaryCard = ({ id, date, status }) => {
  const statusMap = {
    "در حال بررسی": "reviewing",
    "در حال آماده سازی": "preparing",
    "تحویل به پیک": "delivering",
    "ارسال شده": "sent",
    "مرجوع شده": "returned",
    "لغو شده": "cancelled",
  };

  const statusClass = statusMap[status] || "default";

  return (
    <div className="ins-summary-card-container">
      <p className="ins-summary-card-container__order-id">
        {`شماره سفارش: ${id}`}
      </p>
      <p className="ins-summary-card-container__order-date">
        تاریخ ثبت سفارش:
        <span>{date}</span>
      </p>
      <p
        className={`ins-summary-card-container__status ins-summary-card-container__status--${statusClass}`}
      >
        {status}
      </p>
    </div>
  );
};

export default SummaryCard;
