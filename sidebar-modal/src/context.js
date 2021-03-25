import React, { useState, useContext } from 'react'

const AppContext= React.createContext();

const AppProvider = ({children}) => {
  return <AppContext.Provider value='hello'>
    {children}
  </AppContext.Provider>
}
// create custom hook, its name needs to start by 'use'
export const useGlobalContext=()=>{
  return useContext(AppContext)
}
export {AppContext, AppProvider}
