import React from 'react'

const TaskListsNumbers = ({data}) => {
  return (
    <div className='task-lists-numbers flex justify-between gap-5 mt-10 screen'>
        <div className="rounded-xl w-[45%] p-10 bg-yellow-400">
          <h2 className='text-3xl font-semibold'>{data.taskcount.new_task}</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className="rounded-xl w-[45%] p-10 bg-green-400">
          <h2 className='text-3xl font-semibold'>{data.taskcount.completed}</h2>
          <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className="rounded-xl w-[45%] p-10 bg-blue-400">
          <h2 className='text-3xl font-semibold'>{data.taskcount.active}</h2>
          <h3 className='text-xl font-medium'>Accepted</h3>
        </div>
        <div className="rounded-xl w-[45%] p-10 bg-red-400">
          <h2 className='text-3xl font-semibold'>{data.taskcount.failed}</h2>
          <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListsNumbers