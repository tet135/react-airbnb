import "./index.css";

import Heading from "../heading";

export default function Contact({
  info,
  title: name,
  image,
  rate,
  responseTime: time,
  phone,
}) {
  return (
    <div className="contact">
      <div className="contact__details">
        <div>
          <img
            src={image}
            alt={name}
            className="contact__image"
            width={80}
            height={80}
          />
        </div>
        <div className="contact_heading">
          <Heading>Господар - {name}</Heading>
          <div className="contact__info">
            <span className="contact__span">{phone}</span>
            <span className="contact__span">Відповідає {time}</span>
            <span className="contact__span">
              {rate}% відсотків позитивних відгуків
            </span>
          </div>
        </div>
      </div>
      <p className="contact__text">{info}</p>
    </div>
  );
}

// contact_info: {
//
//   image: "https://picsum.photos/80/80",
//   response_rate: 100,
//   response_time: "within an hour",
//   phone: "+123-456-7890",
// },
