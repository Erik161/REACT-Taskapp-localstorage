import React from 'react'

const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {


    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete all ?`)) {
          cleanTasks();
        }
    };

  
  return (
    <div>
        <input 
        type="checkbox"
        checked={isChecked}
        onChange={(e)=>setShowCompleted(e.target.checked)}
        /> {""}
        <label>Show Tasks Done</label>

        <button onClick={handleDelete}>
            Clear
        </button>
    </div>
  )
}

export default VisibilityControl