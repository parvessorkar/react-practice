import { useState } from "react"


 
export default function Conter() {
  const [count, setcount] = useState(0)
  function big() {
    const newCount = count + 1;
    setcount(newCount)
  }
  function small() {
    const newvalu = count - 1;
    setcount(newvalu)
  }
  return <div style={{border:'2px solid red'}}>
    <h2>conter: {count}</h2>
    <button onClick={big}>increse</button>
    <button onClick={small}>Decrese</button>
  </div>
}