function ImagePopup(props) {
  return (
    <div
      className={`popup_type_image popup ${props.card ? "popup_opened" : ""}`}
    >
      <div className="popup__container popup__container_type_image">
        <img
          src={props.card ? props.card.link : "#"}
          alt={props.card ? props.card.name : ""}
          className="popup__image"
        />
        <p className="popup__caption">{props.card ? props.card.name : ""}</p>
        <button
          type="button"
          className="popup__button-close"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
