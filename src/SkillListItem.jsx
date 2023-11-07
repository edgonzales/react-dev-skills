export default function SkillListItem({skill}) {
    // Application logic, etc. goes here
    return (
        <li className="SkillListItem">
            <div id="skill-name" className="teal-text">
                {skill.name}
            </div>
            <div className="level">
                Level {skill.level}
            </div>
        </li>
    );
}