import { useContext, useState } from "react";
import { userInformationContext } from "../contexts/Information";
import { v4 as uniqueId } from "uuid";
import Heading from "./helper/Heading";
import DisplaySkill from "./helper/DisplaySkill";
import SkillForm from "./helper/SkillForm";

const Skills = () => {
	const { skills, setSkills } = useContext(userInformationContext);

	const [skill, setSkill] = useState({ key: "", type: "", desc: "" });

	const addSkill = () => {
		if (skill.type.trim() && skill.desc.trim()) {
			setSkills([...skills, { ...skill, key: uniqueId() }]);
			setSkill({ key: "", type: "", desc: "" });
		}
	};
	const deleteSkill = (key) => {
		const newSkillSet = skills.filter((skill) => {
			return skill.key !== key;
		});
		setSkills(newSkillSet);
	};
	const savedSkills = skills.map(({ key, type, desc }) => {
		return (
			<DisplaySkill
				deleteSkill={() => deleteSkill(key)}
				key={key}
				title={type}
				desc={desc}
			/>
		);
	});

	return (
		<>
			<Heading>Skills</Heading>
			<SkillForm addSkill={addSkill} skill={skill} setSkill={setSkill} />
			<div className='mx-3 mt-10'>{savedSkills}</div>
		</>
	);
};
export default Skills;
