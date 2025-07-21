import "./OrgGeneralInfo.scss";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";

const OrgGeneralInfo = () => {
  return (
    <form className="ins-org-general-info">
      <div className="ins-org-general-info__inputWrapper">
        <div className="ins-org-general-info__inputWrapper__row">
          <Input
            width="188px"
            type="text"
            label="نام شرکت بیمه"
            placeholder="نام شرکت بیمه"
          />
          <Input
            width="188px"
            type="text"
            label="نام شرکت (اختیاری)"
            placeholder="نام شرکت (اختیاری)"
          />
        </div>
      </div>
      <div className="ins-org-general-info__inputWrapper">
        <div className="ins-org-general-info__inputWrapper__row">
          <Input width="188px" type="text" label="ایمیل" placeholder="ایمیل" />
          <Input
            width="188px"
            type="text"
            label="شماره موبایل"
            placeholder="شماره موبایل"
          />
        </div>
      </div>

      <div className="ins-org-general-info__btnNext">
        <Button type="filled">مرحله بعد</Button>
      </div>
    </form>
  );
};

export default OrgGeneralInfo;
