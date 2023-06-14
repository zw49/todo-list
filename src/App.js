import "./App.css";
import { useState } from "react";
import TodoItem from "./TodoItem";
import AddButton from "./AddButton";
import NewTodoForm from "./NewTodoForm";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleSubmitForm = (formContent) => {
    setTaskList((prev) => {
      return [{ id: uid(), ...formContent }, ...prev];
    });
    console.log(taskList);
    setShowForm(false);
  };

  const handleItemCompleted = (checkmarkState, checkedItemId) => {
    if (checkmarkState) {
      // console.log(checkedItemId)
      const _dummyArr = [...taskList]
      console.log(_dummyArr)
      for (const task in _dummyArr) {
        if (_dummyArr[task].id === checkedItemId){
          _dummyArr.splice(task, 1)
        }
      }
      setTaskList(_dummyArr)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 p-2 items-center text-center">
      <h1 className="text-3xl font-bold text-white font-mont mb-24">
        To Do List
      </h1>
      <div className="flex w-full justify-center">
        <div className="flex flex-col p-5 justify-center w-1/2 min-h-full h-auto bg-gray-600 rounded-md shadow-2xl">
          {taskList.map((task)=>(<TodoItem itemCompleted={handleItemCompleted} name={task.taskName} id={task.id} key={task.id} />))}
          <AddButton showForm={handleShowForm} />
        </div>
        {showForm && <NewTodoForm submitForm={handleSubmitForm} />}
      </div>
    </div>
  );
}
