import "./button.css";

export const button = (props) => {
  return (
    <>
      <button className="button">{props.buttonName}</button>
    </>
  );
};
export default button;
