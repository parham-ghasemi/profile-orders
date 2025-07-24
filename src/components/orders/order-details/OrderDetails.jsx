import { useParams } from "react-router-dom";
import "./OrderDetails.scss";
import BreadCrumb from "../../ui/BreadCrumb/BreadCrumb";
import SummaryCard from './summaryCard/SummaryCard'
import { orderData } from "./OrderData";

const OrderDetails = () => {
  const id = useParams().id;

  return (
    <div className="orderDetails-container">
      <BreadCrumb variant="detailed" />

      <div className="orderDetails-container__cards-container">
        <div className="orderDetails-container__cards-container__summary-card">
          <SummaryCard id={id} date={orderData.date} status={orderData.status}/>
        </div>
        <div className="orderDetails-container__cards-container__info-card">
          k
        </div>
        <div className="orderDetails-container__cards-container__customer">
          k
        </div>
        <div className="orderDetails-container__cards-container__item">k</div>
      </div>
    </div>
  );
};

export default OrderDetails;
