import "./CardImage.css";

export const CardImage = ({className, svg, topic}) => {
  const style = `button-container ${className}`;
  const title = topic;

  return (
    <div className={style}>
      <a href="/" className="brutalist-button openai">
        <div className="openai-logo">
          <svg
            className="openai-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {svg}
          </svg>
        </div>
        <div className="button-text">
          <span>Roadmapy</span>
          <span>{title}</span>
        </div>
      </a>
    </div>
  );
};