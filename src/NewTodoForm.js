import { useState } from "react";

const NewTodoForm = (props) => {
  const [taskName, setTaskName] = useState("");

  const taskChangeHandler = ({ target: { value } }) => {
    setTaskName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskName === "") {
      console.log("FORM EMPTY");
    } else {
      setTaskName("");
      props.submitForm({ taskName: taskName });
    }
  };

  return (
    <form
      className="flex flex-col ml-10 bg-gray-600 rounded-md p-3 items-center h-56"
      onSubmit={handleSubmit}
    >
      <label
        className="mt-3 text-white font-mono font-extrabold"
        for="taskTextInput"
      >
        Task Name:
      </label>
      <input
        className=" w-fit rounded-md h-9 p-3 bg-gray-300 mt-3 mb-6"
        id="taskTextInput"
        type="text"
        onChange={taskChangeHandler}
        value={taskName}
      ></input>
      <button className="mt-auto w-fit button-styles p-3" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default NewTodoForm;
