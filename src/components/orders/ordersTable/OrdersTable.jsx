import "./OrdersTable.scss";
import Table from "../../ui/Table/Table";
import { useNavigate } from "react-router-dom";


const OrdersTable = ({ tableData }) => {
  const navigate = useNavigate();

  return (
    <div className="ins-orders-table">
      <Table
        headers={tableData.headers}
        data={tableData.data}
        renderCell={(row, key, value) => {
          if (key === "status") {
            const statusMap = {
              "در حال بررسی": "reviewing",
              "در حال آماده سازی": "preparing",
              "تحویل به پیک": "delivering",
              "ارسال شده": "sent",
              "مرجوع شده": "returned",
              "لغو شده": "cancelled",
            };

            const statusClass = statusMap[value] || "default";

            return (
              <p
                className={`ins-orders-table__status ins-orders-table__status--${statusClass}`}
              >
                {value}
              </p>
            );
          }

          if (key === "details" && value === "more") {
            return (
              <img
                src="assets/orders/more.svg"
                alt="جزئیات"
                className="ins-orders-table__more-icon"
                onClick={() => navigate(`details/${row.id}`)}
              />
            );
          }

          return value;
        }}
      />
    </div>
  );
};

export default OrdersTable;
