export default function SkillListItem(prop) {
    // Application logic, etc. goes here
    return (
        <li className="SkillListItem">
            <div id="skill-name" className="teal-text">
                {prop.skill.name}
            </div>
            <div className="level">
                Level {prop.skill.level}
            </div>
        </li>
    );
}