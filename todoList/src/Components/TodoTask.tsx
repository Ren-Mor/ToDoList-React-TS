import type { ITask } from "./interface";

interface Props {
  task: ITask;
  completeTask(taskToComplete: number): void;
}

function TodoTask({ task, completeTask }: Props) {
  return (
    <div className="task text-white d-flex gap-3 mt-3 justify-content-center align-items-center">
      <span>
        TODO: <strong>{task.taskName}</strong>
      </span>
      <span>
        Da completare entro <strong>{task.deadline}</strong> Giorni
      </span>
      <button
        onClick={() => {
          completeTask(task.taskId);
        }}
        className="btn btn-outline-danger"
      >
        X
      </button>
    </div>
  );
}

export default TodoTask;
