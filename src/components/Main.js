import React, { useState, useEffect, useContext } from "react";
import api from "../utils/Api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  // const [userName, setUserName] = useState("");
  // const [userDescription, setUserDescription] = useState("");
  // const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getAllCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__button-edit"
          onClick={onEditAvatar}
        >
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Ваша фоточка"
          />
        </button>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__button"
              onClick={onEditProfile}
              aria-label="Кнопка редактирования профиля"
              type="button"
            ></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-card"
          onClick={onAddPlace}
          type="button"
          aria-label="Кнопка добавления"
        ></button>
      </section>
      <section className="elements-container">
        <ul className="elements-grid">
          {cards.map((card) => (
            <Card
              card={card}
              onCardClick={onCardClick}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
