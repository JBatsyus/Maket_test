import "./index.scss";
import { useHistory } from "react-router-dom";

const ExitUser = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }
  return (
    <button className="exit__btn-user" onClick={handleClick}>
      Выйти из аккаунта
    </button>
  );
};

export default ExitUser;
