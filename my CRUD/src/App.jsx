import { useState } from "react";
import "./App.css";

function App() {
  const [addTask, setAddTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setAddTask(event.target.value)
  }

  const handleClick = () => {
    
  }



  return (
      <>
      <div className="input-group mb-3">
        <input
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
          onChange={handleClick}
        >
          ADD
        </button>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          An item
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-outline-success">
              DONE
            </button>
            <button type="button" className="btn btn-outline-secondary">
              DELETE
            </button>
          </div>
        </li>
      </ul>
    </>
  );
}

export default App;
