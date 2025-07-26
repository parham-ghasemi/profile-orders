import * as React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { sidebarItems } from "./Data";
import { useState } from "react";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSetItem = (index) => setSelectedIndex(index);

  return (
    <div className="insp-sidebar">
      <ul className="insp-sidebar__list">
        {sidebarItems.map((item, index) => (
          <li
            className={`insp-sidebar__list__item ${
              selectedIndex === index ? "insp-sidebar__list__itemSelected" : ""
            }`}
            key={index}
            onClick={() => handleSetItem(index)}
          >
            <Link to={item.link} className="insp-sidebar__list__item__link">
              <img
                src={selectedIndex === index ? item.active : item.icon}
                alt="آیکون سایدبار"
              />
              <strong className="insp-sidebar__list__item__text">
                {item.text}
              </strong>
            </Link>
          </li>
        ))}

        <li className="insp-sidebar__list__item">
          <div className="insp-sidebar__list__item__logout">
            <img src="/inspection/assets/sidebar/logout.svg" alt="خروج" />
            <strong className="insp-sidebar__list__item__logout__text">خروج</strong>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
