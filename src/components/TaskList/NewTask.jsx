import React from 'react'
import AcceptTask from './AcceptTask';

const NewTask = ({data}) => {
  
  const taskAccept =()=> {
    if(data.new_task){
      data.new_task =false;
      data.active = true;
      data.new_task = data.new_task -1;
      
      <AcceptTask/>
    }
  }
  
  return (
    <div className='task h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl '>
            <div className='tasklist-card flex justify-between'>
                <h3 className='bg-red-500 px-3 py-1 rounded-xl text-sm'>{data.taskType}</h3>
                <h4 className='text-sm font-semibold'>{data.task_date}</h4>
            </div>
            <h1 className=' text-2xl font-semibold '>{data.task_title}</h1>
            <p>{data.task_description}</p>
            <div className='mt-4'>
                <button onClick={taskAccept} className='bg-blue-400 py-1 px-2 rounded'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask