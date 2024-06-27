import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import guest from "./guest.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bathroom from "./bathroom.svg";

export default function Details({ title, guests, bedrooms, beds, bathrooms }) {
  return (
    <Box shadow className="details">
      <Heading children={title} border></Heading>
      <ListItem src={guest}>{guests} гостя</ListItem>
      <ListItem src={bedroom}>{bedrooms} спальня</ListItem>
      <ListItem src={bed}>{beds} ліжко</ListItem>
      <ListItem src={bathroom}>{bathrooms} ванна кімната</ListItem>
    </Box>
  );
}
