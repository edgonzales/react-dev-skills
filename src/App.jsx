//import { useState } from 'react'
import './App.css'
import SkillList from './SkillList'
import HorizontalRule from './hr'
import NewSkillForm from './NewSkillForm'


const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

export default function App() {

  // const [count, setCount] = useState(0)

  return (
    <div className='App padding-0' >
      <h1>React Dev Skills</h1>
      {/* <SkillList /> */}
      <SkillList skills={skills} />
      <HorizontalRule />
      <NewSkillForm />
    </div>
  )
}