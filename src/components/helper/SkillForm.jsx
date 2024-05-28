import Input from "./Input";
import Button from "./Button";
import { FaPlus } from "react-icons/fa";

const SkillForm = ({ addSkill, skill, setSkill }) => {
	const handleChange = (event, type) => {
		setSkill({ ...skill, [type]: event.target.value });
	};
	return (
		<div className='flex px-3 items-end space-x-3 md:w-full'>
			<Input
				label={"Skill Title"}
				type={"text"}
				className={"mb-0"}
				placeholder={"Ex:- Language"}
				value={skill.type}
				onChange={(event) => handleChange(event, "type")}
			/>
			<Input
				label={"Description"}
				className={"grow mb-0"}
				type={"text"}
				placeholder={"C++, JavaScript, Java"}
				value={skill.desc}
				onChange={(event) => handleChange(event, "desc")}
			/>
			<Button
				onClick={addSkill}
				className={
					"w-6 border-0 text-green-500 flex justify-center items-center"
				}>
				<FaPlus className='size-6' />
			</Button>
		</div>
	);
};
export default SkillForm;
