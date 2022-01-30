import "./index.scss";

import ContactsUser from "../Buttons/ContactsUser.jsx";
import ExitUser from "../Buttons/ExitUser.jsx";

const User = props => {
  const { userName } = props;
  return (
    <div className="box">
      <div className="content__user">
        <h1 className="user__title">Привет, {userName}</h1>
        <div className="user__btn">
          <ExitUser />
          <ContactsUser />
        </div>
      </div>
    </div>
  );
};

export default User;
