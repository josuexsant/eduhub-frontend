import './Input.css';

export const Input = ({ type, placeholder, className }) => {
  const style = `input ${className}`;

  return <input type={type} placeholder={placeholder} className={style} />;
}

