import { useState } from 'react'
import { counterAtom } from './store/atoms/counter'
import { evenSelector } from './store/selectors/isEven'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'

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
      <Buttons />
      <CurrentCount />
      <IsEven />
    </div>
  )
}

function Buttons(){
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button onClick={() => setCount(c => c + 2)}>Increase</button>
      <button onClick={() => setCount(c => c - 1)}>Decrease</button>
    </div>
  )
}

function CurrentCount(){
  const count = useRecoilValue(counterAtom);

  return (
    <div>
      {count}
    </div>
  )
}

function IsEven(){
  const isEven = useRecoilValue(evenSelector);

  return (
    <div>
      {isEven ? "It is even" : "It is odd"}
    </div>
  )
}

export default App
