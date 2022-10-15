export const Button = ({ text, handlerClick }) => {
  return (
    <button type="button" onClick={handlerClick}>
      {text}
    </button>
  );
};
