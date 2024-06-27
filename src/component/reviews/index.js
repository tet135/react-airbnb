import { Fragment } from "react";
import "./index.css";

import Box from "../box";
import Heading from "../heading";

export default function GuestReviews({ reviews }) {
  return (
    <div className="review__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="review__list">
        {reviews.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Review {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

//function Room можна при потребі відділити в окремий компонент, щоб підключити в іншому місці коду
//pricePerNight: price - задаємо іншу(внутрішню, тільки у функції) назву
function Review({ guestName: name, rating, review }) {
  return (
    <Box className="review">
      <div className="review__top">
        <span className="review__title">{name}</span>
        <span className="review__rating">Рейтинг: {rating}</span>
      </div>
      <span className="review__info">{review}</span>
    </Box>
  );
}
