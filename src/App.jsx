
import './App.css'

import Conter from './Conter';
import Friends from './Friends';
import Users from './Users';
import SumAnd from './test';


function App() {
  function handleClick() {
    alert('do not come here')
  }
  function sum(num) {
    alert(num + 5);
  }


  return (
    <>
     
      <Users></Users>
     <SumAnd></SumAnd>
     <Conter></Conter>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>click here</button>
      <button onClick={()=>sum(5)}>click to sum</button>
    </>
  )
}

export default App
