import "./cards.scss";

const Cards = props => {
  const { img, title, text } = props;
  return (
    <div className="body">
      <div className="card__box">
        <img className="card__logo" src={img} alt={"логотип"} />
        <h5 className="card__title">{title}</h5>
        <span className="bottom"></span>
        <div className="card__text">{text}</div>
      </div>
    </div>
  );
};

export default Cards;
