import "./main.scss";
import Cards from "../Cards/Cards.jsx";
import ContactsMain from "../Buttons/ContactsMain.jsx";
import EntranceMain from "../Buttons/EntranceMain.jsx";
import { datas } from "../Cards/datas.js";

const Main = () => {
  return (
    <main className="main">
      <div className="main__wrapper">
        <div className="content">
          <h1 className="main__title">
            Место для получения медицинской помощи
          </h1>
          <div className="main__btn">
            <EntranceMain />
            <ContactsMain />
          </div>
          <div className="main__cards">
            {datas.map(data => (
              <Cards
                key={data.id}
                img={data.img}
                title={data.title}
                text={data.text}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
