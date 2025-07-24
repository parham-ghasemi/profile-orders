import { useState } from "react";
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
import StatusCard from "./statusCard/StatusCard";
import "./Orders.scss";
import SearchBar from "./searchBar/SearchBar";
import { cards, tableData } from "./ordersData.jsx";
import TableTabs from "./tableTabs/TableTabs";
import OrdersTable from "./ordersTable/OrdersTable";

const Orders = () => {
  const [tableSearch, SettableSearch] = useState("");
  const [activeTableTab, setActiveTableTab] = useState(0);

  return (
    <div className="ins-orders">
      <BreadCrumb icon="assets/orders/orders-icon.svg" />

      <div className="ins-orders__cards-row">
        {cards.map((item, index) => (
          <StatusCard
            title={item.title}
            content={item.content}
            status={item.status}
            comparisonTime={item.comparisonTime}
            comparisonPercentage={item.comparisonPercentage}
            img={item.img}
            key={`top-card-${index}`}
          />
        ))}
      </div>

      <div className="ins-orders__table-container">
        <p className="ins-orders__table-container__title">سفارش‌ها</p>
        <div className="ins-orders__table-container__top">
          <SearchBar setSearch={SettableSearch} search={tableSearch} />
          <TableTabs
            acitveTab={activeTableTab}
            setActiveTab={setActiveTableTab}
          />
          <OrdersTable tableData={tableData}/>
        </div>
      </div>
    </div>
  );
};

export default Orders;
