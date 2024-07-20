import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
    axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
    axios.get('http://localhost:4000/friends')
}

const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
  const { data: friends } = useQuery('friends', fetchFriends)

  return (
    <div>ParallelQueries.page</div>
  )
}

export default ParallelQueriesPage