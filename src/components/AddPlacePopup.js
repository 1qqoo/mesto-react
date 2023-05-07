import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSumbit(evt) {
    evt.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  function hadleChangeName(evt) {
    setName(evt.target.value);
  }

  function hadleChangeLink(evt) {
    setLink(evt.target.value);
  }

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSumbit}
    >
      <input
        name="name"
        className="popup__input popup__input_type_title"
        type="text"
        autocomplete="off"
        placeholder="Название"
        required
        id="title-input"
        minLength="2"
        maxLength="30"
        onChange={hadleChangeName}
      />
      <span className="title-input-error popup__input-error"></span>

      <input
        name="link"
        className="popup__input popup__input_type_image"
        type="url"
        autocomplete="off"
        placeholder="Ссылка на картинку"
        required
        id="url-input"
        onChange={hadleChangeLink}
      />
      <span className="url-input-error popup__input-error"></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
