import React, { useState } from 'react'

const Header = (props) => {
  // const [userName, setUserName] = useState("")
  // if(!data){
  //   setUserName("admin")
  // }else{
  //   setUserName(data.firstName)
  // }


  const logOutUser= ()=> {
    localStorage.setItem("loggedInUser", "")
    // window.location.reload()
    props.changeUser("")
    
  }

  return (
    
    <div className='flex items-end justify-between header'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{props.data.firstName} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 text-lg font-medium rounded'>Log Out</button>
    </div>
  )
}

export default Header