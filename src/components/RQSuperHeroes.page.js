
import React, { useState } from 'react'
import { useAddSuperHeroData, useSuperHeroesData } from './hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';

const RQSuperHeroesPage = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')

  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching:", data)
  }

  const onError = (error) => {
    console.log("Perform side effect after encountering error", error)
  }

  const { mutate:addHero } =  useAddSuperHeroData()
  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = {name, alterEgo};
    addHero(hero);
  }

  // console.log(`Loading status: ${isLoading}, Fetch status: ${isFetching}`);

  if(isLoading || isFetching){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>

      {/* Add hero */}
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Heroes</button>
      </div>

      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}

      {/* {
        data.map(heroName => {
          return <div key={heroName}>{heroName}</div>
        })
      } */}
    </>
  );
}

export default RQSuperHeroesPage;