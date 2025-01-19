import { useEffect, useState, memo } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1);
    }, 3000)
  }, [])

  return (
    <div>
      <StaticComponent />
      <Increase />
      <Decrease/>
    </div>
  )
}

const StaticComponent = memo(() => {
  return (
    <div>
      Hello World
    </div>
  )
})

const Increase = memo(() => {
  return (
    <button>Increase</button>
  )
})

const Decrease = memo(() => {
  return (
    <button>Decrease</button>
  )
})

export default App
