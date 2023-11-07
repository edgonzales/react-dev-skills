export default function SkillListItem({skill}) {
    // Application logic, etc. goes here
    return (
        <li className="SkillListItem">{skill.name} Level {skill.level}</li>
    );
}