import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='task h-full flex-shrink-0 w-[300px] bg-green-400 rounded-xl '>
            <div className='tasklist-card flex justify-between'>
                <h3 className='bg-red-500 px-3 py-1 rounded-xl text-sm'>{data.taskType}</h3>
                <h4 className='text-sm font-semibold'>{data.task_date}</h4>
            </div>
            <h1 className=' text-2xl font-semibold '>{data.task_title}</h1>
            <p>{data.task_description}</p>
            <div className='mt-2'>
                <button className='w-full bg-red-600 py-1 px-2'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask