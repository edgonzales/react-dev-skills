export default function NewSkillForm() {
    return(
        <form action="">
            <label htmlFor="skill">Skill</label>
            <input type="text" />
            <label htmlFor="level">Level</label>
            <select name="level" id="level">
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