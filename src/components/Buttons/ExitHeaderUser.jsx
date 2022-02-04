import "./index.scss";
import { useHistory } from "react-router-dom";

const ExitHeaderUser = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }
  return (
    <button className="entrance__btnUser" onClick={handleClick}>
      Выйти
    </button>
  );
};

export default ExitHeaderUser;
