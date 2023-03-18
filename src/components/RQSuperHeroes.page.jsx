import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
const RQSuperHeroes = () => {
  const onSuccess=(data)=>{
    console.log("performs side effect after data fetcing",data)
  }
  const onError=(error)=>{
    console.log("performs side effect after data fetcing",error)
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
      //refetchOnWindoFocus: true //background refetch is initiated whenever the window turns active
      // enabled:false,
      // polling - process of fetching data at regular intervals
      //refetchInterval:2000-every 2seconds (default(false)) can be set to a number in milliseconds which wil result to a continous refetch of the query at that interval     
      // refetchIntervalInBackground:true, // will continue pulling data even when the browser is not in focus
      onSuccess,//succes callback react-reducer automatically injects data into it
      onError ,//error
      // select is a function tha automaticaly receives api data as an argument
      select:(data)=>{
        const superHeroNames = data.data.map((hero)=>hero.name)
        return superHeroNames
      }
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
   {/* {data?.data.map((hero)=>(
      <div key={hero.id}>
      <p>{hero.name}</p>
      </div>
    ))} */}
    {data.map(heroName=>{
      return <div >{heroName.name}</div>
    })}
    </div>
  )
}

export default RQSuperHeroes