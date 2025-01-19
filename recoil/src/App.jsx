import { useState } from 'react'
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil'
import './App.css'
import { counterAtom } from './store/atoms/counter'

function App() {

  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}

function Counter(){

  return (
    <div>
      <Increase />
      <Decrease />
      <CurrentCount/>
    </div>
  )

}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);

  return(
    <button onClick={() => setCount(c => c + 1)}>Increase</button>
  )
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom);

  return(
    <button onClick={() => setCount(c => c - 1)}>Decrease</button>
  )
}

function CurrentCount(){
  const [count] = useRecoilState(counterAtom);

  return(
    <div>
      {count}
    </div>
  )
}


export default App
