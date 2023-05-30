import { useState } from "react";
import "./App.css";

function App() {
  const [addTask, setAddTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setAddTask(event.target.value);
  };

  const handleClick = () => {
    const taskProps = {
      id: todoList.length + 1,
      taskName: addTask,
      isDone: false,
    };

    setTodoList((prevTodoList) => [...prevTodoList, taskProps]);

    document.getElementById('inputText').value = "";
  };

  const deleteTask = (taskID) => {
    setTodoList(todoList.filter(task => task.id !== taskID))
  }

  const complete = (taskID) => {
    setTodoList(todoList.map((task) => {
      return task.id === taskID? {...task, isDone:true} : task
    }
    ))
  }

  const newTask = todoList.map((task) => (
    <ul key={task.id} className="list-group list-group-flush">
      <li className="list-group-item" style={{textDecorationLine:task.isDone? "line-through":"none"}}>
        {task.taskName}
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-outline-success" onClick={()=> complete(task.id)}>
            DONE
          </button>
          <button type="button" className="btn btn-outline-secondary" onClick={() => deleteTask(task.id)}>
            DELETE
          </button>
        </div>
      </li>
    </ul>
  ));

  return (
    <>
      <div className="input-group mb-3">
        <input
          id="inputText"
          type="text"
          className="form-control"
          placeholder="Things to do"
          aria-label="Things to do"
          aria-describedby="button-addon2"
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          ADD
        </button>
      </div>
      {newTask}
    </>
  );
}

export default App;
