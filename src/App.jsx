import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
import {Container} from './components/Container';
import Swal from "sweetalert2";






const App = () => {

  const [taskItems, setTaskItems]= useState([])
  const [showCompleted,setShowCompleted]=useState(false);


  function createNewTask(taskName){
    if(!taskItems.find(task=>task.name===taskName)){
      setTaskItems([...taskItems, {name: taskName, done: false}])
    }
    
  }


const toggleTask = task => {
  const taskToUpdate = taskItems.find(t => t.name === task.name);
  const newTaskItems = taskItems.map(t =>
    t.name === task.name ? { ...t, done: !t.done } : t
  );

  setTaskItems(newTaskItems);

  if (!taskToUpdate.done) {
    // Only show SweetAlert if task was marked as done
    const Toast = Swal.mixin({
      toast: true,
      position: "center",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: "success",
      title: "Selected task finished!"
    });
  }
};


  useEffect(()=>{
   let data = localStorage.getItem('tasks')
   if (data){
     setTaskItems(JSON.parse(data))
   }
  }, [])


  const cleanTasks = () =>{
    
    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false)
  }


  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])



  return (
    <main className="bg-dark vh-100 text-white d-flex align-items-center">
  
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {
          showCompleted === true && (
            <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
          )
        }
      </Container>

    </main>
  );
}



export default App;
