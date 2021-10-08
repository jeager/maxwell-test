import "./style.scss";

type Colors = "green" | "red" | "default";

type TButton = {
  onClick: () => void;
  children: React.ReactChild;
  small?: boolean;
  color?: Colors;
};

export default function Button({
  onClick,
  children,
  small = false,
  color = "default",
}: TButton): React.ReactElement {
  let className = "button-base";
  className = className.concat(` ${color}`);
  if (small) className = className.concat(" small");

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
