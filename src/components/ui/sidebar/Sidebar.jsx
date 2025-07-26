import * as React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { sidebarItems } from "./Data";
import { useState } from "react";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSetItem = (index) => setSelectedIndex(index);

  return (
    <div className="mcp-sidebar">
      <ul className="mcp-sidebar__list">
        {sidebarItems.map((item, index) => (
          <li
            className={`mcp-sidebar__list__item ${
              selectedIndex === index ? "mcp-sidebar__list__itemSelected" : ""
            }`}
            key={index}
            onClick={() => handleSetItem(index)}
          >
            <Link to={item.link} className="mcp-sidebar__list__item__link">
              <img
                src={selectedIndex === index ? item.active : item.icon}
                alt="آیکون سایدبار"
              />
              <strong className="mcp-sidebar__list__item__link__text">
                {item.text}
              </strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
