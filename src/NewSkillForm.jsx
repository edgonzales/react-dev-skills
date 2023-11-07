export default function NewSkillForm() {
    return(
        <form action="" className="NewSkillForm">
            <label htmlFor="skill" className="teal-text">Skill</label>
            <input type="text" />
            <label htmlFor="level" className="teal-text">Level</label>
            <select name="level" id="level" className="teal-text">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button>ADD SKILL</button>
        </form>
    )
}