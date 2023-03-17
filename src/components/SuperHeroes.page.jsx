import React,{useState,useEffect} from 'react'
import axios from 'axios'
const SuperHeroes = () => {
  const[data,setData]=useState([])
  const[isLoading,setIsloading]=useState(true)
  const[error,setError] = useState('')
  useEffect(()=>{
    axios.get('http://localhost:4000/superheroes')
    .then(response =>{
      setData(response.data)
      setIsloading(false)
    }).catch((error)=>{
      setError(error.message)
      setIsloading(false)
    })
  },[])
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>{error} </h1>
  }
  return (
    <div>
      {data.map((hero)=>{
        return (
          <div key={hero.id}>
            <p>{hero.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SuperHeroes