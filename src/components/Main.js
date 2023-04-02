import avatar from "../images/kysto.jpg";

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__button-edit"
          onClick={props.onEditAvatar}
        >
          <img
            className="profile__avatar"
            src={avatar}
            alt="Ваша фоточка"
          />
        </button>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              className="profile__button"
              onClick={props.onEditProfile}
              aria-label="Кнопка редактирования профиля"
              type="button"
            ></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button
          className="profile__add-card"
          onClick={props.onAddPlace}
          type="button"
          aria-label="Кнопка добавления"
        ></button>
      </section>
      <section className="elements-container">
        <ul className="elements-grid"></ul>
      </section>
    </main>
  );
}

export default Main;
