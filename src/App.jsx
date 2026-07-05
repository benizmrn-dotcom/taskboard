import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import { useTasks } from './hooks/useTasks.js'
import './App.css'

function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks()

  return (
    <main className="task-board">
      <h1>タスクボード</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </main>
  )
}

export default App
