
export function Square({ value, onSquareClick }) {
  let className = value ? `square ${value}` : "square";
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}
