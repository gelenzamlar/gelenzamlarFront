import React from 'react'
import { useEffect,useState } from 'react'

export default function Anasayfa() {

  const [users, setUsers] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      if(res.ok && res.status==200){
        return res.json()
      }
    })
    .then(data => setUsers(data))
    .catch(err => console.log(err))
  }, [])
  

  return (
    <ul>
      {
        users && users.map(user=>
          <li key={user.id}>
            {user.name}
          </li>
          )
      }
    </ul>
  )
}
