import { useEffect, useState } from 'react'

const STORAGE_KEY = 'dash-board:tasks'

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function useTasks() {
  const [tasks, setTasks] = useState(loadTasks)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setTasks((prev) => [...prev, { id: crypto.randomUUID(), text: trimmed, done: false }])
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
