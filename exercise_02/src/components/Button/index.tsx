import "./style.css";

type TButton = {
  onClick: () => void;
  children: React.ReactChild;
};

export default function Button({
  onClick,
  children,
}: TButton): React.ReactElement {
  return (
    <button className="button-base" onClick={onClick}>
      {children}
    </button>
  );
}
