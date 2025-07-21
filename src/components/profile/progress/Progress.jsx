import "./Progress.scss";

const Progress = ({ data, isLast, onClick }) => {
  const stateImages = {
    inactive: data.imgInactive,
    active: data.imgActive,
    done: data.imgDone,
  };

  return (
    <>
      <div
        className={`ins-Progress ins-Progress__${data.state}`}
        onClick={onClick}
      >
        <div className="ins-Progress__imgContainer">
          <img src={stateImages[data.state]} alt="مرحله" />
        </div>
        <div className="ins-Progress__title">{data.title}</div>
      </div>
      {!isLast && (
        <div className="ins-Progress-vector">
          <img src="/insurance/assets/profile/Vector.png" alt="خط اتصال" />
        </div>
      )}
    </>
  );
};

export default Progress;
