import "./index.scss";
import HeaderUser from "../HeaderUser";
import { Link } from "react-router-dom";
import ContactsUser from "../Buttons/ContactsUser.jsx";
import ExitUser from "../Buttons/ExitUser.jsx";

const User = props => {
  const { name } = props;
  return (
    <div>
      <HeaderUser />
      <div className="box">
        <div className="content__user">
          <h1 className="user__title">Привет, {name}</h1>
          <div className="user__btn">
            <ExitUser />
            <Link to="/contacts">
              <ContactsUser />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
