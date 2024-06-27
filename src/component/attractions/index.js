import { Fragment } from "react";
import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

export default function Attractions({ title, attractions }) {
  return (
    <Box shadow className="details">
      <Heading children={title} border></Heading>
      {attractions.map(({ id, name, link }) => (
        <Fragment key={id}>
          <ListItem>
            <a href={link} className="link">
              {name}
            </a>
          </ListItem>
        </Fragment>
      ))}
    </Box>
  );
}
