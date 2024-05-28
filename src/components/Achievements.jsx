import { userInformationContext } from "../contexts/Information";
import { useContext, useState } from "react";
import Heading from "./helper/Heading";
import Textarea from "./helper/Textarea";
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
		</>
	);
};
export default Achievements;
