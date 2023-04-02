import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  return (
    <body className="root">
      <>
        <Header />
      </>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <template id="card">
        <li className="element">
          <img
            src="#"
            className="element__image"
            alt=""
          />
          <button
            className="element__button-delete"
            aria-label="удалить карточку"
            type="button"
          ></button>
          <div className="element__footer">
            <h2 className="element__title">#</h2>
            <div className="element__like-container">
              <button
                className="element__button-like"
                aria-label="поставить лайк"
                name="addLike"
                type="button"
              ></button>
              <h3 className="element__like-number">0</h3>
            </div>
          </div>
        </li>
      </template>
      <Footer />
      <PopupWithForm
        name="profile"
        buttonText="Сохранить"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
      >
        <input
          id="name-input"
          name="name"
          className="popup__input popup__input_type_name"
          type="text"
          autocomplete="off"
          placeholder="Введите имя"
          minlength="2"
          maxlength="40"
          required
        />
        <span className="name-input-error popup__input-error">
          Вы пропустили это поле
        </span>
        <input
          required
          name="about"
          className="popup__input popup__input_type_job"
          type="text"
          autocomplete="off"
          placeholder="Расскажите о себе"
          minlength="2"
          maxlength="200"
          id="job-input"
        />
        <span className="job-input-error popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
      >
        <input
          name="name"
          className="popup__input popup__input_type_title"
          type="text"
          autocomplete="off"
          placeholder="Название"
          required
          id="title-input"
          minlength="2"
          maxlength="30"
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
        />
        <span className="url-input-error popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        buttonText="Сохранить"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
      >
        <input
          id="avatar"
          name="avatar"
          className="popup__input popup__input_type_avatar"
          type="url"
          autocomplete="off"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="avatar-error popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        buttonText="Да"
      ></PopupWithForm>
      <ImagePopup />
    </body>
  );
}

export default App;
