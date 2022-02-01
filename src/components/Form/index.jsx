import "./form.scss";
import { useForm, useEffect } from "react-hook-form";
import dataList from "./dataList.json";

const Form = () => {
  // const [user, setUser] = useState(dataList); //undefined
  // // сохрание  LS, проверяет, есть ли что-то в LS
  // useEffect(() => {
  //   const userListMas = JSON.parse(localStorage.getItem("dataList"));
  //   if (userListMas) {
  //     setUser(userListMas);
  //   }
  // }, []);

  // // сработал LS, data изменена => переписывает массив dataList
  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem("dataList", JSON.stringify(user));
  //   }
  // }, [user]);

  //  с useForm не происходит перерендер на каждое нажатие клавиш(тк нет useState)
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });
  // проверка записи в поля
  const onSubmit = data => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="body__form">
      <h2 className="title__form">Регистрация</h2>
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
        />

        <div className="errors">
          {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
        </div>

        <button className="form__btn" type="submit" disadbled={!isValid}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default Form;
