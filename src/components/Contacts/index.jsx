import "./contacts.scss";
import HeaderUser from "../HeaderUser";

const Contacts = () => {
  return (
    <div>
      <HeaderUser />
      <div className="box__contacts">
        <div className="content__contacts">
          <h1 className="contacts__title">Контакты</h1>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
