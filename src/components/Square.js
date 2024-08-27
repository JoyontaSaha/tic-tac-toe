
export function Square({ backgroundValue, value, onSquareClick }) {

  return (
    <>
      <button
        className={"square"}
        style={{
          background: backgroundValue
        }}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}
