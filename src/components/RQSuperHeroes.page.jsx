import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
const RQSuperHeroes = () => {
  const fetchHeroes=()=>{
    return axios.get('http://localhost:4000/superheroes1')
  }
  const {isLoading,data,isError,error}= useQuery('super-heroes',fetchHeroes)
  if(isLoading){
    return <h1>Loading....</h1>
  }
  if(isError){
    return <h1>{error.message}</h1>
  }
  return (  
    <div>
    {data?.data.map((hero)=>(
      <div key={hero.id}>
      <p>{hero.name}</p>
      </div>
    ))}
    </div>
  )
}

export default RQSuperHeroes