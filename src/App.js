import "./App.css";
import { useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [toDoTasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  //prevent submit form and push taskname to todotasks
  const handleSubmit = (e) => {
    e.preventDefault();
    //check if task already exists or input have whitespaces
    if (toDoTasks.includes(taskName) || /\s/g.test(taskName)) {
      return;
    }
    setTasks((prevState) => [...prevState, taskName]);
    setTaskName("");
  };

  //when checkbox is checked, push task to done and remove from todo
  const handleCheck = (e) => {
    setDoneTasks((prevState) => [...prevState, e]);
    setTasks((prevState) => prevState.filter((el) => el !== e));
  };

  return (
    <div className="App">
      <div className="main">
        <form onSubmit={handleSubmit}>
          <label>
            <p>Insert your task</p>
            <input
              type="text"
              onChange={(e) => setTaskName(e.target.value)}
              value={taskName}
            />
          </label>
          <input type="submit" value="ADD" />
        </form>

        <div className="tasks">
          {doneTasks.length > 0 && <h1>Done</h1>}

          <div className="tasks__list">
            {doneTasks.map((doneTask, i) => (
              <p className="done" key={`tasktitle${i}`}>
                {doneTask}
              </p>
            ))}
          </div>

          {toDoTasks.length > 0 && <h1>To Do</h1>}
          <div className="tasks__list">
            {toDoTasks.map((task, i) => (
              <div key={`div${i}`} className="todo">
                <input
                  key={`checkbox${i}`}
                  type="checkbox"
                  checked={false}
                  onChange={() => handleCheck(task)}
                />
                <p key={`tasktitle${i}`}>{task}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
