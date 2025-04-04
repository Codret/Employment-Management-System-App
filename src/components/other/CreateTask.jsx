import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'
import NewTask from '../TaskList/NewTask'



const CreateTask = () => {

  const [userData, setUserData]= useContext(AuthContext)
  
  
  const [task_title, setTask_title] = useState("")
  const [task_description, setTask_description] = useState("")
  const [task_date, setTask_date] = useState("")
  const [assignTo, setAssignTo] = useState("")
  const [taskType, setTaskType] = useState("")

  const [newTask, setNewTask] = useState("")

  const submitHandler =(e) => {
    e.preventDefault()
    setNewTask({active:false, new_task:true, complete:false , failed:false,task_title, task_description, task_date,taskType})

    const data = userData;
    
    data.forEach((elem) =>{
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
    
        elem.taskcount.new_task= elem.taskcount.new_task +1;
        localStorage.setItem("employees",JSON.stringify(data))
      } 
      setUserData(data)
    });
    
    setTask_title("")
    setTask_description("")
    setTask_date("")
    setAssignTo("")
    setTaskType("")
  }

  return (
    <div className='admin-box p-5 bg-[#1c1c1c] mt-7 rounded'>
          <form onSubmit={(e) => {
            submitHandler(e)
          }} className='flex flex-wrap w-full items-start justify-between'>
            <div className='create-task w-1/2'>
                <div>
                  <h3 className='text-sm text-gray-300 mb-0.5'>Task Titles</h3>
                  <input
                  value={task_title}
                  onChange={(e)=>{
                    setTask_title(e.target.value)
                  }}
                  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Make A UI Design' />
                </div>

                <div>
                  <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                  <input
                  value={task_date}
                  onChange={(e)=>{
                    setTask_date(e.target.value)
                  }}

                  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date" />
                </div>
                <div>
                  <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                  <input
                  value={assignTo}
                  onChange={(e)=>{
                    setAssignTo(e.target.value)
                  }}

                  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Employee Name' />
                </div>
                <div>
                  <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                  <input
                  value={taskType}
                  onChange={(e)=>{
                    setTaskType(e.target.value)
                  }}
                  
                  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='design , dev etc' />
                </div>
            </div>

            <div className='create-task w-2/5 flex flex-col items-start'>    
              
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea
                value={task_description}
                onChange={(e)=>{
                  setTask_description(e.target.value)
                }}
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]' name="" rows={5} cols={30} id=""></textarea>
              
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
          </form>
        </div>
  )
}

export default CreateTask