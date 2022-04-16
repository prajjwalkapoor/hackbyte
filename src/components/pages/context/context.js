import React, { createContext, useEffect, useState } from 'react'
export const ContextProvider = createContext()
  export const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}
export default function Context({ children }) {


  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    // console.log(localStorage.getItem("isLoggedIn"))
    Boolean(localStorage.getItem("user")) ? setUser( JSON.parse((localStorage.getItem("user"))) ) : setUser({})
}, [])
  useEffect(() => {
      Boolean(localStorage.getItem("user")) ? setIsLoggedIn(true) : setIsLoggedIn(false)
}, [])
  return (
      <ContextProvider.Provider  value={{user, isLoggedIn, setIsLoggedIn}}>
        {children}
      </ContextProvider.Provider>
  )
}
