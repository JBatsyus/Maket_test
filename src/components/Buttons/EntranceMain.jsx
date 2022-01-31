import "./index.scss";

const EntranceMain = props => {
  return (
    <button className="entrance__btn-main" onClick={props.onClick}>
      Войти
    </button>
  );
};

export default EntranceMain;
