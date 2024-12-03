import { useState } from 'react'
// import { invoke } from "@tauri-apps/api/core";
import { VscColorMode } from 'react-icons/vsc'
import ToDoList from './component/ToDoList'
import HeatmapComponent from './component/HeatmapComponent'
import './index.css'

export interface ToDo {
  id: number
  text: string
  completed: boolean
  onDelete?: (todoId: number) => void
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <main className={`h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <h1 className="flex justify-center text-3xl text-black dark:text-white">
        ToDo App
      </h1>
      <div className="flex justify-center items-center">
        <ToDoList />
      </div>

      <button
        type="button"
        onClick={toggleDarkMode}
        className="absolute top-5 right-5 text-black dark:text-white text-2xl">
        <VscColorMode />
      </button>
      <div className="flex justify-center items-center">
        <HeatmapComponent />
      </div>
    </main>
  )
}

export default App
