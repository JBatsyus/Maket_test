import logo from "../../assets/images/logo.png";
import "./headerUser.scss";
import ContactsHeaderUser from "../Buttons/ContactsHeaderUser.jsx";
import ExitHeaderUser from "../Buttons/ExitHeaderUser.jsx";
const HeaderUser = () => {
  return (
    <header className="headerUser">
      <div className="header__wrapperUser">
        <img className="header__logoUser" src={logo} alt={"логотип"} />
        <div className="header__btnUser">
          <ContactsHeaderUser />
          <ExitHeaderUser />
        </div>
      </div>
    </header>
  );
};

export default HeaderUser;
