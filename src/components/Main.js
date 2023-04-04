import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getAllCards()])
      .then(([data, cards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
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
            src={userAvatar}
            alt="Ваша фоточка"
          />
        </button>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__button"
              onClick={onEditProfile}
              aria-label="Кнопка редактирования профиля"
              type="button"
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
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
