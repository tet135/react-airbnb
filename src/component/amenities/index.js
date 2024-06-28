import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import children from "./children.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import reception from "./reception.svg";
import room_service from "./room_service.svg";
import transfer from "./transfer.svg";
import wifi from "./wifi.svg";

export default function Amenities({ title, amenities }) {
  return (
    <Box shadow className="details">
      <Heading children={title} border></Heading>
      {/* {Object.entries(amenities).map(
        ([key, value]) =>
          value && (
            <div key={key}>
              <ListItem src={icon} children={key} />
            </div>
          )
      )} */}
      {amenities.hasPool && <ListItem src={pool}>Басейн</ListItem>}
      {amenities.hasGym && <ListItem src={gym}>Спортивний зал</ListItem>}
      {amenities.hasFreeBreakfast && (
        <ListItem src={breakfast}>Безкоштовний сніданок</ListItem>
      )}
      {amenities.hasParking && (
        <ListItem src={parking}>Безкоштовний вуличний паркінг</ListItem>
      )}
      {amenities.hasFreeWiFi && (
        <ListItem src={wifi}>Безкоштовний Wi-Fi</ListItem>
      )}
      {amenities.hasPetsAllowed && (
        <ListItem src={pets}>
          Дозволено розміщення з домашніми тваринами
        </ListItem>
      )}
      {amenities.hasAirportShuttle && (
        <ListItem src={transfer}>Трансфер до/з аеропорту</ListItem>
      )}
      {amenities.hasConciergeService && (
        <ListItem src={reception}>Консьєрж-сервіс</ListItem>
      )}
      {amenities.hasRoomService && (
        <ListItem src={room_service}>Обслуговування номерів</ListItem>
      )}
      {amenities.hasChildFriendly && (
        <ListItem src={children}>Підходить для дітей</ListItem>
      )}
    </Box>
  );
}
