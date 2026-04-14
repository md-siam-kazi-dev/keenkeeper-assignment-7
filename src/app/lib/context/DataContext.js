'use client'
import { createContext,  use,  useState } from "react"


export const DataContext = createContext();

const DataContextProvider = ({children}) => {
    const [history,setHistory] = useState([]);


    const [profils,setProfils] = useState([]);



    const historySetter =(historyData)=>{

        setHistory([...history,historyData]);

    }


    const profileSetter =(profileCollection)=>{
        setProfils(profileCollection);
    }

  return (
    <DataContext value={{profils,profileSetter,history,historySetter}}>{children}</DataContext>
  )
}

export default DataContextProvider;