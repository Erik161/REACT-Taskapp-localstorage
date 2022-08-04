import { useState } from "react";

const TaskCreator = ({createNewTask}) => {



const [newTaskName, setNewTaskName] = useState('');

const handleSubmit = (e) =>{
    {/* It is used to not send the form data to a backend and the page is not refreshed.*/}
    e.preventDefault();
    {/* It is used to store data within the browser and so we close the application or change the page or exit the application, the data will continue to be stored here.*/}
    createNewTask(newTaskName)
    localStorage.setItem('tasks', newTaskName)
    setNewTaskName('')
}




  return (
      <form onSubmit={handleSubmit}>
      {/* It was added in a form so that when you hit enter in the input you can perform some action. */}

                                                          {/* The ONCHANGE={} event is used to receive or capture what the user adds to the input. */}
        <input
        type="text"
        placeholder="Enter a new Task"
        value={newTaskName}
        onChange={(e)=> setNewTaskName(e.target.value)}/>
        <button> Save Task</button>
      </form>
  )
}

export default TaskCreator