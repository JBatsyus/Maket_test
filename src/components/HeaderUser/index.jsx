import logo from "../../assets/images/logo.png";
import "./headerUser.scss";
import ContactsHeaderUser from "../Buttons/ContactsHeaderUser.jsx";
import ExitHeaderUser from "../Buttons/ExitHeaderUser.jsx";
import { Link } from "react-router-dom";

const HeaderUser = () => {
  return (
    <header className="headerUser">
      <div className="header__wrapperUser">
        <Link to="/home">
          <img className="header__logoUser" src={logo} alt={"логотип"} />
        </Link>

        <div className="header__btnUser">
          <Link to="/contacts">
            <ContactsHeaderUser />
          </Link>
          <ExitHeaderUser />
        </div>
      </div>
    </header>
  );
};

export default HeaderUser;
