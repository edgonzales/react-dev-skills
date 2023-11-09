import SkillListItem from "./SkillListItem";


function SkillList({skills}) {
    // Application logic, etc. goes here
    //console.log(props); 
    const skillListItems = skills.map((s, idx) => <SkillListItem skill={s} key={idx} />);
    console.log(skillListItems);
    return (
        <ul className="padding-0">
            {skillListItems}
        </ul>
    );
}

export default SkillList;