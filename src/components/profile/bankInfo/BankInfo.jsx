import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import "./BankInfo.scss";

const BankInfo = () => {
  return (
    <form className="ins-bank-info">
      <div className="ins-bank-info__inputWrapper">
        <div className="ins-bank-info__inputWrapper__row">
          <Input
            width="188px"
            type="text"
            label="شماره حساب"
            placeholder="شماره حساب"
          />
          <Input
            width="188px"
            type="text"
            label="شماره شبا"
            placeholder="شماره شبا"
          />
        </div>
      </div>
      <div className="ins-bank-info__inputWrapper">
        <div className="ins-bank-info__inputWrapper__row">
          <Input
            width="188px"
            type="text"
            label="نام صاحب حساب"
            placeholder="نام صاحب حساب"
          />
        </div>
      </div>

      <div className="ins-bank-info__btn-row">
        <Button type="outlined">مرحله قبل</Button>
        <Button type="filled">مرحله بعد</Button>
      </div>
    </form>
  );
};

export default BankInfo;