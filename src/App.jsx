import { useState } from 'react'
import './App.css'
import SkillList from './SkillList'
import HorizontalRule from './hr'
import NewSkillForm from './NewSkillForm'



export default function App() {

  const initialSkills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ];

  const [skill, setSkill] = useState(initialSkills);

  return (
    <div className='App padding-0' >
      <h1 className='teal-text'>React Dev Skills</h1>
      {/* <SkillList /> */}
      <SkillList skills={skill} />
      <HorizontalRule />
      <NewSkillForm />
    </div>
  )
}