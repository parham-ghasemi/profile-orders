import { useState } from "react";
import "./Profile.scss";
import BreadCrumb from "../ui/BreadCrumb/BreadCrumb";
import { progressData } from "./Data";
import Progress from "./progress/Progress";
import OrgGeneralInfo from "./orgGeneralinfo/OrgGeneralInfo";
import StoreInfo from "./storeInfo/StoreInfo";
import BankInfo from "./bankInfo/BankInfo";
import UserSettings from "./userSettings/UserSetting";
import Notification from "./notification/Notification";
import IdentityDocuments from "./identityDocuments/IdentityDocuments";

const Profile = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepComponents = [
    <OrgGeneralInfo />,
    <StoreInfo />,
    <BankInfo />,
    <UserSettings />,
    <Notification />,
    <IdentityDocuments />,
  ];

  return (
    <div className="ins-profile">
      <BreadCrumb icon="/insurance/assets/profile/profile.svg" />
      <div className="ins-profile__wrapper">
        <div className="ins-profile__wrapper__progress">
          {progressData.map((step, index) => {
            const state =
              index < currentStep
                ? "done"
                : index === currentStep
                ? "active"
                : "inactive";
            return (
              <Progress
                key={index}
                data={{ ...step, state }}
                isLast={index === progressData.length - 1}
                onClick={() => setCurrentStep(index)}
              />
            );
          })}
        </div>
        <div className="ins-profile__wrapper__content">
          {stepComponents[currentStep]}
        </div>
      </div>
    </div>
  );
};

export default Profile;
