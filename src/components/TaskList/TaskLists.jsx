import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskLists = ({data}) => {
  return (
    <div id='task-list-cards' className='tasklist-cards flex items-center overflow-x-auto h-[55%] w-full gap-5 mt-10'>
       {data.tasks.map((elem, idx)=>{
        
            if(elem.active){
                return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.new_task){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.complete){
              return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed){
              return <FailedTask key={idx} data={elem}/>
            }
        })}
        
    </div>
  )
}

export default TaskLists