import "./main.scss";
import Cards from "../Cards/Cards.jsx";
import ContactsMain from "../Buttons/ContactsMain.jsx";
import EntranceMain from "../Buttons/EntranceMain.jsx";
import Modal from "../Modal/index.jsx";
import Form from "../Form/index.jsx";
import Header from "../Header/index.jsx";
import { datas } from "../Cards/datas.js";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Main = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <main className="main">
      <Header />
      <div className="main__wrapper">
        <div className="content">
          <h1 className="main__title">
            Место для получения медицинской помощи
          </h1>
          <div className="main__btn">
            <EntranceMain onClick={() => setModalActive(true)} />
            <Link to="/contacts">
              <ContactsMain />
            </Link>
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
      <Modal active={modalActive} setActive={setModalActive}>
        <Form />
      </Modal>
    </main>
  );
};

export default Main;
