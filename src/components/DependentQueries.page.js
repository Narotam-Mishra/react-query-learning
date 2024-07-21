import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetechCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/users/${channelId}`)
}

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email))
  const channelId = user?.data.channelId

  useQuery(['courses', channelId], () => fetechCoursesByChannelId(channelId), {
    enabled: !!channelId
  })
  
  return (
    <div>DependentQueries</div>
  )
}

export default DependentQueriesPage