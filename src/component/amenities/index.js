import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import icon from "../details/guest.svg";

export default function Amenities({ title, amenities }) {
  return (
    <Box shadow className="details">
      <Heading children={title} border></Heading>
      {Object.entries(amenities).map(
        ([key, value]) =>
          value && (
            <div key={key}>
              <ListItem src={icon} children={key} />
            </div>
          )
      )}
    </Box>
  );
}
