import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

export default function AddProperties({
  title,
  houseRules,
  cancelation,
  transport,
  languages,
  offers,
  checkinInstruction,
}) {
  return (
    <Box shadow className="details">
      <Heading children={title} border></Heading>
      <ListItem title="Правила дому" children={houseRules} />
      <ListItem title="Політика скасування" children={cancelation} />
      <ListItem title="Місцевий транспорт" children={transport} />
      <ListItem title="Мови хоста" children={languages} />
      <ListItem title="Спеціальні пропозиції" children={offers} />
      <ListItem
        title="Інструкції щодо реєстрації"
        children={checkinInstruction}
      />
    </Box>
  );
}
