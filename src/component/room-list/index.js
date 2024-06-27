import { Fragment } from "react";
import "./index.css";

import Box from "../box";
import Heading from "../heading";

export default function RoomList({ rooms }) {
  // const oneRoom = rooms.map((room) => (
  //   <Box>
  //     <li key={room.id} className="room__card">
  //       <div className="room__card-title">{room.type}</div>
  //       <span>Кількість гостей: {room.capacity}</span>
  //       <span className="room__card-price">
  //         {room.currency}
  //         {room.pricePerNight}
  //       </span>
  //     </li>
  //   </Box>
  // ));

  return (
    <div className="room__block">
      <Heading>Типи номерів</Heading>
      {/* <ul className="rooms__list">{oneRoom}</ul> */}

      <div className="room__list">
        {rooms.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Room {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

//function Room можна при потребі відділити в окремий компонент, щоб підключити в іншому місці коду
//pricePerNight: price - задаємо іншу(внутрішню, тільки у функції) назву
function Room({ type, pricePerNight: price, currency, capacity }) {
  return (
    <Box className="room">
      <span className="room__title">{type}</span>
      <span className="room__info">Кількість гостей: {capacity}</span>
      <span className="room__price">
        {currency}
        {price}
      </span>
    </Box>
  );
}
