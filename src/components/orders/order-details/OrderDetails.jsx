import { useParams } from "react-router-dom";
import "./OrderDetails.scss";
import BreadCrumb from "../../ui/BreadCrumb/BreadCrumb";
import SummaryCard from "./summaryCard/SummaryCard";
import { orderData } from "./OrderData";
import InfoCard from "./infoCard/InfoCard";
import CustomerCard from "./customerCard/CustomerCard";

const OrderDetails = () => {
  const id = useParams().id;

  return (
    <div className="orderDetails-container">
      <BreadCrumb variant="detailed" />

      <div className="orderDetails-container__cards-container">
        <div className="orderDetails-container__cards-container__top">
          <div className="orderDetails-container__cards-container__top__right">
            <div className="orderDetails-container__cards-container__top__right__summary-card">
              <SummaryCard
                id={id}
                date={orderData.date}
                status={orderData.status}
              />
            </div>
            <div className="orderDetails-container__cards-container__top__right__info-card">
              <InfoCard
                prodSumPrice={orderData.productSumPrice}
                shippingPrice={orderData.shippingPrice}
                priceSum={orderData.fullPrice}
              />
            </div>
          </div>
          <div className="orderDetails-container__cards-container__top__left">
            <div className="orderDetails-container__cards-container__top__left__customer">
              <CustomerCard
                name={orderData.customer.name}
                phoneNumber={orderData.customer.phoneNumber}
                email={orderData.customer.email}
                location={orderData.customer.location}
                address={orderData.customer.address}
                postalCode={orderData.customer.postalCode}
                number={orderData.customer.numberOfProducts}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="orderDetails-container__cards-container__item">k</div>
    </div>
  );
};

export default OrderDetails;
