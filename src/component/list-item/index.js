import "./index.css";

export default function ListItem({ src, title, children }) {
  return (
    <li className="list-item">
      {src && <img src={src} alt="Icon" width={24} height={24} />}

      <div className="list-item__block">
        {title && <strong className="list-item__title">{title}</strong>}
        <div className="list-item__content">{children}</div>
      </div>
    </li>
  );
}
