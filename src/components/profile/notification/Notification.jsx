import { useState } from "react";
import Button from "../../ui/Button/Button";
import "./Notification.scss";

const notifications = [
  "اعلان سفارش جدید",
  "اعلان تراکنش موفق",
  "اعلان تراکنش ناموفق",
  "تخفیفات و کمپین سایت",
];

const Notification = () => {
  const [checkedItems, setCheckedItems] = useState(
    new Array(notifications.length).fill(false)
  );

  const toggleCheck = (index) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  return (
    <form className="ins-notification">
      <div className="ins-notification__checkbox-container">
        <ul className="ins-notification__checklist">
          {notifications.map((text, i) => (
            <li key={i} onClick={() => toggleCheck(i)}>
              <img
                src={
                  checkedItems[i]
                    ? "assets/profile/checkbox-checked.svg"
                    : "assets/profile/checkbox-unchecked.svg"
                }
                alt="checkbox"
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="ins-store-info__btn-row">
        <Button type="outlined">مرحله قبل</Button>
        <Button type="filled">مرحله بعد</Button>
      </div>
    </form>
  );
};

export default Notification;
