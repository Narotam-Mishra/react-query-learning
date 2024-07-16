import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}

const RQSuperHeroesPage = () => {
  // const { isLoading, data, isError, error, isFetching } = useQuery('super-heroes', fetchSuperHeroes, {
  //   cacheTime: 5000,
  // })

  // const { isLoading, data, isError, error, isFetching } = useQuery('super-heroes', fetchSuperHeroes, {
  //   staleTime: 30000,
  // })

  const { isLoading, data, isError, error, isFetching } = useQuery('super-heroes', fetchSuperHeroes, {
    refetchOnMount: true,
    refetchOnWindowFocus: true
  })

  // const { isLoading, data, isError, error, isFetching } = useQuery('super-heroes', fetchSuperHeroes)

  console.log(`Loading status: ${isLoading}, Fetch status: ${isFetching}`);

  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {
        data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>
        })
      }
    </>
  )
}

export default RQSuperHeroesPage;