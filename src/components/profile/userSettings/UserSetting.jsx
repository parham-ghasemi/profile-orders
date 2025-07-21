import { useModal } from "../../../contexts/ModalContext";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import OTPModal from "./otpModal/OTPModal";
import "./UserSetting.scss";

const UserSettings = () => {
  const { openModal } = useModal();
  const handleOpenModal = () => {
    openModal(<OTPModal />, {
      cross: false,
      withBorder: false,
    });
  };
  return (
    <form className="ins-user-settings">
      <div className="ins-user-settings__phone-number-container">
        <div className="ins-user-settings__phone-number-container__input">
          <Input
            width="188px"
            type="text"
            label="دریافت کد تایید"
            placeholder="دریافت کد تایید"
          />
          <p className="ins-user-settings__phone-number-container__input__desc">
            برای تغییر رمز عبور ابتدا شماره تلفن را تایید کنید
          </p>
        </div>
        <Button type="filled" onClick={handleOpenModal}>
          دریافت کد تایید
        </Button>
      </div>
      <div className="ins-user-settings__password-container">
        <Input
          width="188px"
          type="text"
          label="رمز عبور جدید"
          placeholder="رمز عبور جدید"
        />
        <Input
          width="188px"
          type="text"
          label="تکرار رمز عبور جدید"
          placeholder="تکرار رمز عبور جدید"
        />
      </div>

      <div className="ins-store-info__btn-row">
        <Button type="outlined">مرحله قبل</Button>
        <Button type="filled">مرحله بعد</Button>
      </div>
    </form>
  );
};

export default UserSettings;
