
const Header = ({ toggleNavbar, navbarVisible }) => {
  return (
    <header className="header__content box1">
      <img className="logo__navbar" src="./logo-horizontal-ledica.png" alt="" />
      <i className="bx bx-menu" onClick={toggleNavbar}></i>
      <nav className={`navbar ${navbarVisible ? "visible" : ""}`}>
        <ul className="nav__list">
          <a className="navbar__link" href="">
            <li className="nav__item">Home</li>
          </a>
          <a className="navbar__link" href="">
            <li className="nav__item">About me</li>
          </a>
          <a className="navbar__link" href="">
            <li className="nav__item">Certificates</li>
          </a>
          <a className="navbar__link" href="">
            <li className="nav__item">My Works</li>
          </a>
          <a className="navbar__link" href="">
            <li className="nav__item">Contact me</li>
          </a>
          <a className="navbar__link" href="">
            <li className="nav__item" onClick={toggleNavbar}>
              <i className="bx bx-horizontal-right"></i>
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
