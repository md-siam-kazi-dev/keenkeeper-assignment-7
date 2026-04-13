'use client'
import DataContextProvider from '../context/DataContext'

const Provider = ({children}) => {
  return (
    <DataContextProvider >
        {children}
    </DataContextProvider>
  )
}

export default Provider