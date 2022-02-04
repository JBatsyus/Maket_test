import "./form.scss";
import { useForm } from "react-hook-form";
import dataList from "./dataList.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  // const [login, setLogin] = useState();
  // const [password, setPassword] = useState();
  const [userLogin, setsetUserLogin] = useState(false); //результат авторизации ( пока в console.log)

  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("user"));
    if (userLogin) {
      dataList.filter(users => {
        if (users.login === userObj.login) {
          console.log(users.name);
        }
      });
    }
  }, [userLogin]);

  // const changeLogin = event => {
  //   setLogin(event.target.value);
  // };

  // const changePassword = event => {
  //   setPassword(event.target.value);
  // };

  //  с useForm не происходит перерендер на каждое нажатие клавиш(тк нет useState)
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  // проверка записи в поля
  const onSubmit = data => {
    console.log(data);
    // localStorage.setItem("user", JSON.stringify(data));
    setsetUserLogin(true);
    reset(); //перестал  функционировать после функции записи в ls
  };

  return (
    <div className="body__form">
      <h2 className="title__form">Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input__form"
          title="Ваш логин"
          placeholder="Логин"
          {...register("login", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 8,
              message: "Минимум 8 символов.",
            },
          })}
          // onChange={changeLogin}
          // value={login}
        />

        <div className="errors">
          {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
        </div>

        <input
          className="input__form"
          type="password"
          title="Пароль должен содержать не менее 8 букв латинского алфавита и числа"
          placeholder="Пароль"
          {...register("password", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 8,
              message: "Не менее 8 символов",
            },
            pattern: {
              value: /[A-Za-z0-9]/,
              message: "Буквы латинского алфавита и цифры",
            },
          })}
          // value={password}
          // onChange={changePassword}
        />

        <div className="errors">
          {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
        </div>
        <Link to="/user">
          <button className="form__btn" type="submit" disadbled={!isValid}>
            Войти
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
