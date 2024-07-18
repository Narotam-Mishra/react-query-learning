
import React from 'react'
import { useSuperHeroesData } from './hooks/useSuperHeroesData';

const RQSuperHeroesPage = () => {

  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching:", data)
  }

  const onError = (error) => {
    console.log("Perform side effect after encountering error", error)
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

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
      {/* {
        data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>
        })
      } */}

      {
        data.map(heroName => {
          return <div key={heroName}>{heroName}</div>
        })
      }
    </>
  )
}

export default RQSuperHeroesPage;