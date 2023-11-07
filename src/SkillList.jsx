import SkillListItem from "./SkillListItem";


function SkillList(props) {
    // Application logic, etc. goes here
   console.log(props); 
    const skillListItems = props.skills.map((s, idx) => <SkillListItem skill={s} key={idx} />);
    console.log(skillListItems)
    return (
        <ul>
            {skillListItems}
        </ul>
    );
}

export default SkillList;