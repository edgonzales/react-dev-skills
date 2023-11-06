//import { useState } from 'react'
import './App.css'
import SkillList from './SkillList'
import HorizontalRule from './hr'
import NewSkillForm from './NewSkillForm'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Dev Skills</h1>
      <SkillList />
      <HorizontalRule />
      <NewSkillForm />
    </>
  )
}

export default App
