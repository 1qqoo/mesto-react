import React, { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
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
        onCardClick={handleCardClick}
      />

      <Footer />
      <PopupWithForm
        name="profile"
        buttonText="Сохранить"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="name-input"
          name="name"
          className="popup__input popup__input_type_name"
          type="text"
          autocomplete="off"
          placeholder="Введите имя"
          minLength="2"
          maxLength="40"
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
          minLength="2"
          maxLength="200"
          id="job-input"
        />
        <span className="job-input-error popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
        onClose={closeAllPopups}
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
        onClose={closeAllPopups}
      ></PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </body>
  );
}

export default App;
