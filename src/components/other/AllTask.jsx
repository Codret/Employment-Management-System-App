import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
   const [userData, SetUserData] =  useContext(AuthContext);
  return (
    <div className=' all-task p-5 bg-[#1c1c1c] mt-5 rounded  '>

        <div className='bg-red-400 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>

        <div>
            {userData.map(function (elem, idx){
                return (
                <div key={idx} className='all-task-data bg-[#1c1c1c] py-2 px-4 flex justify-between rounded h-[80%] overflow-auto border-2 border-emerald-300'>
                    <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName} </h2>
                    <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskcount.new_task}</h3>
                    <h1 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskcount.active}</h1>
                    <h6 className='text-lg font-medium w-1/5 text-white'>{elem.taskcount.completed}</h6>
                    <h4 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskcount.failed}</h4>
                </div>)
            })}
        </div>
        
    </div>
  )
}

export default AllTask