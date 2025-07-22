import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
import Card from "../ui/statusCard/StatusCard";
import "./Orders.scss";

const Orders = () => {
  return (
    <div className="ins-orders">
      <BreadCrumb icon="assets/orders/orders-icon.svg" />

      <div className="ins-orders__cards-row">
          <Card
            title="تعداد کل سفارش‌ها"
            content="96 سفارش"
            status="down"
            comparisonTime="ماه قبل"
            comparisonPercentage="6"
            img="assets/orders/card-icon.png"
          />
          <Card
            title="تعداد کل سفارش‌ها"
            content="96 سفارش"
            status="down"
            comparisonTime="ماه قبل"
            comparisonPercentage="6"
            img="assets/orders/card-icon.png"
          />
          <Card
            title="تعداد کل سفارش‌ها"
            content="96 سفارش"
            status="down"
            comparisonTime="ماه قبل"
            comparisonPercentage="6"
            img="assets/orders/card-icon.png"
          />
      </div>
    </div>
  );
};

export default Orders;
