import logo from "../../assets/images/logo.png";
import "./header.scss";
import ContactsHeader from "../Buttons/ContactsHeader.jsx";
import { Link } from "react-router-dom";

import EntranceHeader from "../Buttons/EntranceHeader.jsx";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/home">
          <img className="header__logo" src={logo} alt={"логотип"} />
        </Link>
        <div className="header__btn">
          <Link to="/contacts">
            <ContactsHeader />
          </Link>
          <EntranceHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
