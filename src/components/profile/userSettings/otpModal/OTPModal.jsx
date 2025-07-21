import { useEffect, useRef, useState } from "react";
import "./OTPModal.scss";
import { useModal } from "../../../../contexts/ModalContext";

const OTPModal = () => {
  const {closeLatestModal} = useModal()
  const [isWrong, setIsWrong] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("09337171914");
  const [time, setTime] = useState(3);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="ins-otp-modal-container">
      <button className="ins-otp-modal-container__close-btn" onClick={closeLatestModal}>
        <img src="assets/profile/close-circle.svg" alt="close-circle" />
      </button>

      <p className="ins-otp-modal-container__title">
        {`کد تایید ارسال شده به شماره ${phoneNumber} را وارد کنید`}
      </p>

      <div className="ins-otp-modal-container__middle">
        <div className="ins-otp-modal-container__middle__inputs-container" dir="ltr">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              className={`ins-otp-modal-container__middle__inputs-container__input ${
                isWrong
                  ? "ins-otp-modal-container__middle__inputs-container__input--wrong"
                  : ""
              }`}
              onFocus={(e) =>
                e.target.classList.add(
                  "ins-otp-modal-container__middle__inputs-container__input--active"
                )
              }
              onBlur={(e) =>
                e.target.classList.remove(
                  "ins-otp-modal-container__middle__inputs-container__input--active"
                )
              }
            />
          ))}
        </div>

        {isWrong && (
          <p className="ins-otp-modal-container__middle__wrong-txt">
            عدد وارد شده اشتباه می‌باشد
          </p>
        )}

        <p className="ins-otp-modal-container__middle__timer">
          {`${formatTime(time)} باقی مانده`}
        </p>
      </div>

      <button className="ins-otp-modal-container__button">تایید</button>

      {time === 0 && (
        <p className="ins-otp-modal-container__resend">دریافت مجدد کد تایید</p>
      )}
    </div>
  );
};

export default OTPModal;
