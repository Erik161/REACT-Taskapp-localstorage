import React from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);


const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {


    const handleDelete = () => {
      MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete all tasks!',
      }).then((result) => {
        if (result.isConfirmed) {
          cleanTasks();
          MySwal.fire(
            'Deleted!',
            'All tasks have been deleted.',
            'success'
          );
        }
      });
    };


  

  
  return (
    <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
        <div className='form-check form-switch'>
          <input 
          className='form-check-input'
          type="checkbox"
          checked={isChecked}
          onChange={(e)=>setShowCompleted(e.target.checked)}
          /> {""}
          <label>Show Tasks Done</label>
        </div>
        

        <button onClick={handleDelete} className="btn btn-danger btn-sm">
            Clear
        </button>
    </div>
  )
}

export default VisibilityControl