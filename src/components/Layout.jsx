import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Sidebar from "./ui/sidebar/Sidebar";

const Layout = () => {
  return (
    <main>
      <div className="ins-panel-layout">
        <div className="ins-panel-layout__navbar"></div>
        <div className="ins-panel-layout__body">
          <div className="ins-panel-layout__body__sidebar">
            <Sidebar />
          </div>
          <div className="ins-panel-layout__body__content">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
