interface HeaderProps {
  topText: string;
  bottomText: string;
}

export default function HeaderView({ topText, bottomText }: HeaderProps) {
  return (
    <div className="header-container">
      <div className="spacer">
        <p className="top-lebel">{topText}</p>
        <p className="bottom_label">{bottomText}</p>
        <div className="spacer" />
      </div>
    </div>
  );
}
