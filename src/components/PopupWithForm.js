import React from "react";

function PopupWithForm(props) {
  return (
    <>
      <div
        className={`popup popup_type_${props.name} ${
          props.isOpen ? "popup_opened" : ""
        }`}
      >
        <div className="popup__container">
          <button
            className="popup__button-close"
            type="button"
            aria-label="Закрывает попап"
          ></button>
          <h3 className="popup__title">{props.title}</h3>
          <form
            className="popup__form popup__form-profile"
            name={props.name}
            novalidate
          >
            {props.children}
            <button
              className="popup__button-save"
              type="submit"
              aria-label="Кнопка сохранить и отправить форму"
            >
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
