import "./Button.css";

export const Button = ({ children, className, handleClick }) => {
  const style = `button-confirm ${className}`;

  return <button className={style} onClick={handleClick}>{children}</button>;
};