import "./IdentityDocuments.scss";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import ImageUpload from "../imageUpload/ImageUpload";

const IdentityDocuments = () => {
  return (
    <form className="ins-identity-docs">
      <div className="ins-identity-docs__inputWrapper">
        <Input
          width="188px"
          type="text"
          label="کد ملی صاحب فروشگاه"
          placeholder="کد ملی صاحب فروشگاه"
        />
        <Input
          width="188px"
          type="text"
          label="شماره ثابت فروشگاه"
          placeholder="شماره ثابت فروشگاه"
        />
      </div>

      <ImageUpload
        title="تصویر کارت ملی خود را وارد کنید."
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

export default IdentityDocuments;
