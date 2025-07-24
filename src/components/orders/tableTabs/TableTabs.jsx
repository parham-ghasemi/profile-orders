import { tabs } from "../ordersData.jsx";
import "./TableTabs.scss";

const TableTabs = ({ acitveTab, setActiveTab }) => {
  return (
    <div className="ins-orders-tableTabs">
      {tabs.map((tab, index) => (
        <p
          className={` ins-orders-tableTabs__tab ${
            index === acitveTab && "ins-orders-tableTabs__tab--active"
          } `}
          key={`tab-item-${index}`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </p>
      ))}
    </div>
  );
};

export default TableTabs;
