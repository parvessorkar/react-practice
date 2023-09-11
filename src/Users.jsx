import { useEffect, useState } from "react"

export default function Users() {
  const [user, setuser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data=> setuser(data))
  },[])
  return <div>
    <h2>user:{user.length}</h2>
  
  </div>
}