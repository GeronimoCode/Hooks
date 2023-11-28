import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countb, setCountb] = useState(0)

  // useEffect 
 useEffect(() => {

  console.log("Roda cada renderização ");
});

// array de dependências
useEffect(() => {
  console.log("Só roda ao incrimentar um valor ! ")
}, [count])

  return <div className='App'>
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1 ) }>Rendezizar</button>
      <p>{count}</p>
    </div>
    <div>
      <button onClick={() => setCountb(prevCount => prevCount + 1 ) }>Rendezizar b</button>
      <p>{countb}</p>
    </div>
  </div>
}

export default App
