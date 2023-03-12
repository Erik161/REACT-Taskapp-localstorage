import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MySwal = withReactContent(Swal);

const TaskCreator = ({createNewTask}) => {



const [newTaskName, setNewTaskName] = useState('');

const handleSubmit = (e) =>{
    {/* It is used to not send the form data to a backend and the page is not refreshed.*/}
    e.preventDefault();
    
    createNewTask(newTaskName)
    {/* It is used to store data within the browser and so we close the application or change the page or exit the application, the data will continue to be stored here.*/}
    
    setNewTaskName('')

    

    {/* Added SweetAlert for new added task modal*/}
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'New task created!'
    })
}




  return (
      <form onSubmit={handleSubmit} className="my-2 row">
      {/* It was added in a form so that when you hit enter in the input you can perform some action. */}

        <div className="col-9">
         {/* The ONCHANGE={} event is used to receive or capture what the user adds to the input. */}
          <input
          type="text"
          placeholder="Enter a new Task"
          value={newTaskName}
          onChange={(e)=> setNewTaskName(e.target.value)}
          className="form-control"
          /> 
        </div>

        <div className="col-3">
            <button className="btn btn-primary btn-sm"> Save Task</button>
        </div>
        
      </form>
  )
}

export default TaskCreator