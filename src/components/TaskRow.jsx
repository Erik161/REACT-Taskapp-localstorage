import React from 'react'

const TaskRow = ({task, toggleTask}) => {
  const rowClassName = task.done ? 'completed' : '';
  return (
    <tr className={rowClassName}>
        <td className='d-flex justify-content-between'>
            {task.name}
            <input type="checkbox" 
            checked={task.done}
            onChange={() => toggleTask(task)}
            />
        </td>
    </tr>
  )
}

export default TaskRow
