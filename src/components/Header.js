import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Логотип"
      />
      {/* <button className="header__button">
        <p className="header__button-text">Регистрация</p>
      </button> */}
    </header>
  );
}

export default Header;
