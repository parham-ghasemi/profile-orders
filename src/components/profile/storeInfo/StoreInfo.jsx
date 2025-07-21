import "./StoreInfo.scss";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import DropDown from "../../ui/DropDown/DropDown";
import { useState } from "react";
import ImageUpload from "../imageUpload/ImageUpload";

const StoreInfo = () => {
  const [select, setSelect] = useState("");

  const handleSelect = (newOpt) => {
    setSelect(newOpt);
  };
  return (
    <form className="ins-store-info">
      <div className="ins-store-info__inputWrapper">
        <div className="ins-store-info__inputWrapper__row">
          <Input
            width="188px"
            type="text"
            label="نام فروشگاه"
            placeholder="نام فروشگاه"
          />
          <Input
            width="188px"
            type="text"
            label="شماره صنفی (جواز کسب)"
            placeholder="شماره صنفی"
          />
        </div>
      </div>
      <div className="ins-store-info__inputWrapper__row">
        <DropDown
          options={[""]}
          label="دسته بندی کسب و کار"
          placeholder="دسته‌بندی"
          value={select}
          onChange={handleSelect}
          width="247px"
        />
      </div>
      <Input
        width="100%"
        height="86px"
        type="textarea"
        label="آدرس فروشگاه"
        placeholder="آدرس فروشگاه"
      />

      <Input
        width="100%"
        height="86px"
        type="textarea"
        label="درباره فروشگاه"
        placeholder="درباره فروشگاه"
      />

      <ImageUpload
        title="تصویر نمایه فروشگاه خود را وارد کنید."
        formatText="فرمت‌های قابل قبول JPEG ،PNG تا 8 مگابایت"
        buttonTxt="انتخاب تصویر پروفایل"
      />

      <div className="ins-store-info__btn-row">
        <Button type="outlined">مرحله قبل</Button>
        <Button type="filled">مرحله بعد</Button>
      </div>
    </form>
  );
};

export default StoreInfo;
