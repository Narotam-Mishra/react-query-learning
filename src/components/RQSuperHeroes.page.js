import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}

const RQSuperHeroesPage = () => {

  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching:", data)
  }

  const onError = (error) => {
    console.log("Perform side effect after encountering error", error)
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      onSuccess,
      onError
    }
  );

  console.log(`Loading status: ${isLoading}, Fetch status: ${isFetching}`);

  if(isLoading || isFetching){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {
        data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>
        })
      }
    </>
  )
}

export default RQSuperHeroesPage;