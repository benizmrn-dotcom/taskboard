import { useState } from 'react'

let nextId = 1

export function useTasks() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setTasks((prev) => [...prev, { id: nextId++, text: trimmed, done: false }])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return { tasks, addTask, toggleTask, deleteTask }
}
