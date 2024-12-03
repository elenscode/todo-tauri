import { memo, FC } from 'react'
import { ToDo } from '../App' // Import the ToDo interface
import { VscTrash } from 'react-icons/vsc'

const ToDoItem: FC<ToDo> = ({ id, completed, text, onDelete }) => {
  console.log('Rendering ToDoItem', id)
  return (
    <div>
      <label className="flex gap-2 items-center">
        <input
          type="checkbox"
          data-id={id}
          defaultChecked={completed}
        />
        <span
          className={`${
            completed ? 'line-through' : ''
          } text-primary-light dark:text-primary-dark`}>
          {text}
        </span>
        <button
          type="button"
          className="px-2 text-primary-light dark:text-primary-dark"
          onClick={() => onDelete && onDelete(id)}>
          <VscTrash />
        </button>
      </label>
    </div>
  )
}

export default memo(ToDoItem)
