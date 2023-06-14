const TodoItem = (props) => {
  const handleCheck = (event) => {
    console.log(event.target.checked);
  };
  return (
    <div className="rounded-md bg-gray-500 shadow-md h-14 w-full mb-5 items-center flex justify-start p-3">
      <p className="mr-auto font-mono font-bold text-white ">{props.name}</p>
      <input
        type="checkbox"
        id="check"
        className="checked:bg-green-700 appearance-none cursor-pointer hover:bg-green-200 ease-in duration-200 shadow-md rounded-sm h-5 w-5 bg-slate-200"
        onChange={handleCheck}
      />
    </div>
  );
};

export default TodoItem;
