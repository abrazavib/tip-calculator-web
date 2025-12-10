import '../../index.css';

interface LogoViewProps {
  topText?: string[];
  bottomText?: string;
  logoSrc?: string;
}

export default function LogoView({
  topText,
  bottomText,
  logoSrc,
}: LogoViewProps) {
  return (
    <div className="logo-container">
      <img src={logoSrc} alt="Calculator" className="logo-image" />

      <div className="logo-text">
        <p className="logo-top-text">
          {topText?.at(0)}{' '}
          <span className="logo-top-bold">{topText?.at(1)}</span>
        </p>

        <p className="logo-bottom-text">{bottomText}</p>
      </div>
    </div>
  );
}
