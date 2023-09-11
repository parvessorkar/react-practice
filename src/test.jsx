import { useState } from "react"

export default function SumAnd() {
  const [count,setcount]=useState(0)
  const color = {
    margin:'10px',
    padding:'10px',
    border:'2px solid purple'
  }
  function juk() {
    const newCount = count + 1;
    setcount(newCount)
  }
  function biyog() {
    const newCount = count - 1;
    setcount(newCount)
  }
  
  return <div style={color}>
    <h2>count:{count}</h2>
    <button onClick={juk}>add</button>
    <button onClick={biyog}>reduce</button>
  </div>
}