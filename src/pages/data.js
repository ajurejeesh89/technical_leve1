import React from 'react'
import { useEffect } from 'react';


const DataFromAPI = () => {

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('https://api.nationalize.io/?name=raj')
          const data = await res.json()
          console.log(data)
        }
    
        fetchData()
      }, [])


  return (
    <div>data</div>
  )
}

export default DataFromAPI