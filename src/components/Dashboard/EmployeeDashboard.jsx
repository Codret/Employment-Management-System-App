import React from 'react'
import Header from '../other/Header'
import TaskListsNumbers from '../other/TaskListsNumbers'
import TaskLists from '../TaskList/TaskLists'

const EmployeeDashboard = (props) => { 
  
  return (
    <div className='employeeDash bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data= {props.data}/>
        <TaskListsNumbers data= {props.data}/>
        <TaskLists data= {props.data}/>
    </div>
  )
}

export default EmployeeDashboard