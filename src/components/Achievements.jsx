import { userInformationContext } from "../contexts/Information";
import { useContext } from "react";
import Heading from "./helper/Heading";
import Textarea from "./helper/Textarea";
import Button from "./helper/Button";
const Achievements = () => {
	const { achievements, setAchievements } = useContext(
		userInformationContext
	);
	const handleChange = (event) => {
		setAchievements(event.target.value);
	};
	return (
		<>
			<Heading>Achievements</Heading>
			<Textarea
				value={achievements}
				onChange={(event) => handleChange(event)}
				placeholder={
					"Separate each achievement with enter key ↵ \nExample:-\nCreated my own programming language. \nWriter of one of the best selling books."
				}
			/>

			<div className='flex justify-center '>
				<Button
					className={"bg-green-600 text-white"}
					onClick={() => {
						localStorage.setItem(
							"achievements",
							JSON.stringify(achievements)
						);
					}}>
					Save
				</Button>
			</div>
			<p className='text-center text-slate-400 mt-5'>
				You can now download your resume
			</p>
		</>
	);
};
export default Achievements;
