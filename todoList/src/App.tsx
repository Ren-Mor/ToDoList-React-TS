import { useState, type ChangeEvent } from "react";
import type { ITask } from "./Interfaces/interface";
import TodoTask from "./Components/TodoTask";
import "./App.css";

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [taskId, setTaskId] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  };

  function addTask(): void {
    const newTask: ITask = {
      taskName: task,
      deadline: deadline,
      taskId: taskId,
    };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadLine(0);
    setTaskId(taskId + 1);
  }

  function completeTask(taskToComplete: number): void {
    setTodoList(todoList.filter((task) => task.taskId !== taskToComplete));
  }

  return (
    <>
      <div className="App"></div>
      <div className="Header gap-3 d-flex">
        <input
          className="rounded border-0 p-2"
          type="text"
          name="task"
          placeholder="Task..."
          onChange={handleChange}
        />
        <input
          className="rounded border-0 p-2"
          type="number"
          name="deadline"
          placeholder="Deadline...(In giorni)"
          onChange={handleChange}
        />
        <button className="btn btn-success" onClick={addTask}>
          Aggiungi
        </button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, index: number) => {
          return (
            <TodoTask key={index} task={task} completeTask={completeTask} />
          );
        })}
      </div>
    </>
  );
}

export default App;
