import { useState } from "react"

export default function NewSkillForm(props) {
    
    const [newSkill, setNewSkill] = useState({
        name: '',
        level: 3,
    })

    function handleChange(evt) {
        evt.preventDefault();
        const newFormData = {...newSkill, [evt.target.name]: evt.target.value};
        setNewSkill(newFormData);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.addSkill(newSkill);
        setNewSkill({
            name: '',
            level: 3
        })
    }

    console.log(newSkill);
    
    return(
        <form onSubmit={handleSubmit} className="NewSkillForm">
            <label htmlFor="skill" className="teal-text">Skill</label>
            <input 
                type="text" 
                value={newSkill.name}
                onChange={handleChange}
                name='name'
            />
            <label htmlFor="level" className="teal-text">Level</label>
            <select 
                name="level" 
                id="level"
                className="teal-text"
                value={newSkill.level}
                onChange={handleChange}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit"
            >
                ADD SKILL
            </button>
        </form>
    )
}