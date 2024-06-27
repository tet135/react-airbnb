import "./index.css";

export default function Photo({ name, src }) {
  return <img className="photo" src={src} alt={name} />;
}
