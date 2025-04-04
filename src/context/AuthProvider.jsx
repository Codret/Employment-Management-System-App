import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  //  localStorage.clear()
  const [userData, SetUserData] = useState(null)
  useEffect(() => {
    setLocalStorage()
    const {employees} = getLocalStorage();
    SetUserData(employees)
  }, [])
  
  
  return (
    <div>
        <AuthContext.Provider value={[userData, SetUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider