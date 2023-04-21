import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}
export default function RQSuperHeroesPage() {
  const {data, isLoading, isError, error, isFetching} = useQuery("super-heroes", fetchSuperHeroes, {
    staleTime: 30000
  });
  
  console.log({isFetching, isLoading});
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  
  return (
    <div>
      <h2>RQ SuperHeroes</h2>
      {data?.data.map(hero => <div key={hero.id}>{hero.name}</div>)}
    </div>
  )
}
