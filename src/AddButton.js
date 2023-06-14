const AddButton = (props) => {
  return (
    <button onClick={() => {props.showForm(true)}} className="self-end h-10 w-10 button-styles">
      +
    </button>
  );
};

export default AddButton;
