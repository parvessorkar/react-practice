import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends() {
  const [user, setuser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
    .then(data=>setuser({data}))
  },[])
  return <div>
    <h2>user:</h2>
    {
      user.map(singel=> <Friend friend={singel}></Friend>)
    }
  </div>
}