'use client'
import { createContext,  useState } from "react"


export const DataContext = createContext();

const DataContextProvider = ({children}) => {
    const [profils,setProfils] = useState([]);
    const profileSetter =(profileCollection)=>{
        setProfils(profileCollection);
    }

  return (
    <DataContext value={{profils,profileSetter}}>{children}</DataContext>
  )
}

export default DataContextProvider;