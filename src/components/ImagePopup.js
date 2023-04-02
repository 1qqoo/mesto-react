function ImagePopup() {
  return (
    <div className="popup_type_image popup">
      <div className="popup__container popup__container_type_image">
        <img
          className="popup__image"
          alt=""
        />
        <p className="popup__caption"></p>
        <button
          type="button"
          className="popup__button-close"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
