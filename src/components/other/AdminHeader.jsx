import React  from 'react'

const AdminHeader = (props) => {
  const logOutUser= ()=> {
    localStorage.setItem("loggedInUser", "")
    // window.location.reload()
    props.changeUser("")
    
  }
  return (
    <div>
      <div className='flex items-end justify-between header'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>Akash Maurya (Admin) 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 text-lg font-medium rounded'>Log Out</button>
      </div>
    </div>
  )
}

export default AdminHeader