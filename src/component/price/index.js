import "./index.css";

import Box from "../box";
import ListItem from "../list-item";

//підключаємо іконки
// import roundPeople from "./round-people.svg";

export default function Price({ price, discount, currency, ...rest }) {
  return (
    <Box className="price">
      <div className="price__header">
        <span
          className={`price__value ${discount ? "price__value--discount" : ""}`}
        >
          {currency}
          {price}
        </span>
        {discount && (
          <span className="price__value">
            {currency}
            {discount}
          </span>
        )}
      </div>
      <List {...rest} currency={currency} />
    </Box>
  );
}

function List({ currency, cleaning = 0, service = 0, checkin, checkout }) {
  return (
    <ul className="price__list">
      <ListItem>
        <span>Плата за прибирання:</span>
        <span>
          {currency}
          {cleaning}
        </span>
      </ListItem>

      <ListItem>
        <span>Cервісний збір:</span>
        <span>
          {currency}
          {service}
        </span>
      </ListItem>

      <ListItem>
        <span>Дата прибуття:</span>
        <span>{checkin}</span>
      </ListItem>

      <ListItem>
        <span>Дата від’їзду:</span>
        <span>{checkout}</span>
      </ListItem>
    </ul>
  );
}
