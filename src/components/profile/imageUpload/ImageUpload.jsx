import "./ImageUpload.scss";

const ImageUpload = ({title, formatText, buttonTxt}) => {
  return (
    <div className="ins-image-upload-container">
      <p className="ins-image-upload-container__title">
        {title}
      </p>
      <p className="ins-image-upload-container__format">
        {formatText}
      </p>

      <input
        type="file"
        id="profile-image"
        accept="image/png, image/jpeg"
        className="ins-image-upload-container__fileInput"
      />
      <label htmlFor="profile-image" className="ins-image-upload-container__imageInput">
        <img src="assets/profile/import.svg" alt="import" />
        {buttonTxt}
      </label>
    </div>
  );
};

export default ImageUpload;
