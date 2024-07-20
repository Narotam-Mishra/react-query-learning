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
  useQuery('super-heroes', fetchSuperHeroes)
  useQuery('friends', fetchFriends)

  return (
    <div>ParallelQueries.page</div>
  )
}

export default ParallelQueriesPage