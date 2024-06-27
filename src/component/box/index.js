import "./index.css";

export default function Box({ children, shadow, className }) {
  return (
    <div className={`box ${shadow ? "box--shadow" : ""} ${className}`}>
      {children}
    </div>
  );
}
