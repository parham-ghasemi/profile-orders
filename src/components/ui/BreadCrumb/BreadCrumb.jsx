import { useLocation } from "react-router-dom";
import "./BreadCrumb.scss";
import arrowIcon from "/assets/ui/arrow-left-bc.svg";

function BreadCrumb({ icon, variant }) {
  const location = useLocation();
  let breadCrumb = [];

  if (location.pathname === "/insurance") {
    breadCrumb.push("خانه");
  }

  if (location.pathname === "/insurance/orders") {
    breadCrumb.push("سفارش‌ها");
  }

  if (location.pathname === "/insurance/complaints") {
    breadCrumb.push("شکایات");
  }

  if (location.pathname === "/insurance/tickets") {
    breadCrumb.push("تیکت‌ها");
  }

  if (location.pathname === "/insurance/new-ticket") {
    if (variant === "detailed") {
      breadCrumb.push("تیکت‌ها");
    }
    breadCrumb.push("ایجاد تیکت جدید");
  }

  if (location.pathname === "/insurance/transactions") {
    breadCrumb.push("تراکنش‌ها");
  }

  if (location.pathname === "/insurance/requests") {
    breadCrumb.push("درخواست‌ها");
  }

  if (location.pathname === "/insurance/insurance-policies") {
    breadCrumb.push("بیمه‌نامه‌ها");
  }

  if (location.pathname === "/insurance/new-insPolicy") {
    if (variant === "detailed") {
      breadCrumb.push("بیمه‌نامه‌ها");
    }
    breadCrumb.push("ایجاد بیمه‌نامه جدید");
  }

  if (location.pathname === "/insurance/customers") {
    breadCrumb.push("مشتریان");
  }

  if (location.pathname === "/insurance/chats") {
    breadCrumb.push("پیام‌های آنلاین");
  }

  if (location.pathname === "/insurance/profile") {
    breadCrumb.push("پروفایل");
  }

  if (location.pathname === "/insurance/subscription") {
    breadCrumb.push("اشتراک");
  }

  if (location.pathname === "/insurance/notifications") {
    breadCrumb.push("اعلانات");
  }

  return (
    <div className="bread-crumb">
      {icon && <img src={icon} alt="breadcrumb icon" />}
      {breadCrumb.map((item, index) => (
        <div className="bread-item" key={index}>
          <h3
            className={
              breadCrumb.length === 1 || index === breadCrumb.length - 1
                ? "final"
                : "intermediate"
            }
          >
            {item}
          </h3>
          {breadCrumb.length > 1 && index < breadCrumb.length - 1 && (
            <img src={arrowIcon} alt="arrow" className="arrow-icon" />
          )}
        </div>
      ))}
    </div>
  );
}

export default BreadCrumb;
