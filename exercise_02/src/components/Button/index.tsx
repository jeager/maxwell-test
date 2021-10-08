import "./style.scss";

type TButton = {
  onClick: () => void;
  children: React.ReactChild;
  small?: boolean;
};

export default function Button({
  onClick,
  children,
  small = false,
}: TButton): React.ReactElement {
  const className = small ? "button-base small" : "button-base";
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
