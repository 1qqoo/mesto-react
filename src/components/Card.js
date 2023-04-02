import React from "react";

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <img
        src={props.card.link}
        className="element__image"
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <button
        className="element__button-delete"
        aria-label="удалить карточку"
        type="button"
      ></button>
      <div className="element__footer">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            className="element__button-like"
            aria-label="поставить лайк"
            name="addLike"
            type="button"
          ></button>
          <h3 className="element__like-number">{props.card.likes.length}</h3>
        </div>
      </div>
    </li>
  );
}

export default Card;
