import logo from "../../assets/images/logo.png";
import "./header.scss";
import ContactsHeader from "../Buttons/ContactsHeader.jsx";

import EntranceHeader from "../Buttons/EntranceHeader.jsx";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img className="header__logo" src={logo} alt={"логотип"} />
        <div className="header__btn">
          <ContactsHeader />
          <EntranceHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
