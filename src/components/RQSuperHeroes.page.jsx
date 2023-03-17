import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
const RQSuperHeroes = () => {
  const onSuccess=()=>{
    console.log("performs side effect after data fetcing")
  }
  const onError=()=>{
    console.log("performs side effect after data fetcing")
  }
  const fetchHeroes=()=>{
    return axios.get('http://localhost:4000/superheroes')
  }
  const {isLoading,data,isError,error,isFetching,refetch}= useQuery(
    'super-heroes',
    fetchHeroes,
    {
      //cacheTime:5000,// amount of time the fetched data will be available before refetching is required (deafult is 5 minutes)
      //staleTime:0  //use the cached query results without having to refetch data in the background default(0)
     // refetchOnmount:true , // data fetched evreytime the component mounts
      //refetchOnWindoFocus: true
      // enabled:false,
      onSuccess,
      onError
    }
    )
  if(isLoading||isFetching){
    return <h1>Loading....</h1>
  }
  if(isError){
    return <h1>{error.message}</h1>
  }
  return (  
    <div>
    <h2>Rq super heroe page</h2>
    <button onClick={refetch}>fetch heroes</button>
    {data?.data.map((hero)=>(
      <div key={hero.id}>
      <p>{hero.name}</p>
      </div>
    ))}
    </div>
  )
}

export default RQSuperHeroes