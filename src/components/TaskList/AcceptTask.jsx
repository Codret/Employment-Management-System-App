import React from 'react'
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const AcceptTask = ({data}) => {
   const taskActive =()=> {
      if(data.active){
        data.active =false;
        data.complete = true;
        <CompleteTask/>
      }
    }

    const taskFailed =()=> {
      if(data.active){
        data.active =false;
        data.failed = true;
        <FailedTask/>
      }
    }

  return (
    <div className='task h-full flex-shrink-0 w-[300px] bg-red-400 rounded-xl '>
            <div className='tasklist-card flex justify-between'>
                <h3 className='bg-red-500 px-3 py-1 rounded-xl text-sm'>{data.taskType}</h3>
                <h4 className='text-sm font-semibold'>{data.task_date}</h4>
            </div>
            <h1 className=' text-2xl font-semibold '>{data.task_title}</h1>
            <p>{data.task_description}</p>
            <div className='flex justify-between mt-4'>
                <button onClick={taskActive} className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button onClick={taskFailed} className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask