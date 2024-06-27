import './CardEmpty.css'

export const CardEmpty = ({ children, color }) => {
  const style = `card-empty ${color}`;

  return (
    <div className={style}>
      {children}
    </div>
  )
}