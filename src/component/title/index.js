import "./index.css";

export default function Title({
  title,
  rating,
  review,
  city,
  country,
  superhost,
}) {
  return (
    <div className="title">
      <hl className="title__text">{title}</hl>
      <div className="title__sub-block">
        <span className="title__sub-value">{rating} рейтинг</span>
        <span className="title__sub-value">{review} відгуків</span>
        <span className="title__sub-value">
          {city}, {country}
        </span>
        {superhost && <span className="title__sub-value">Супер-хост</span>}
      </div>
    </div>
  );
}
