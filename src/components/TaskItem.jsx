function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item${task.done ? ' task-item--done' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
      </label>
      <button
        type="button"
        className="task-item__delete"
        onClick={() => onDelete(task.id)}
        aria-label={`「${task.text}」を削除`}
      >
        削除
      </button>
    </li>
  )
}

export default TaskItem
