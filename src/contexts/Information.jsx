import { createContext, useState } from "react";
const userInformationContext = createContext();

function Provider({ children }) {
	const [personalInfo, setPersonalInfo] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
		github: "",
		linkedin: "",
		portfolio: "",
	});
	const [education, setEducation] = useState([]);
	const [experience, setExperience] = useState([]);
	const [projects, setProjects] = useState([]);
	const [skills, setSkills] = useState([]);
	const [achievements, setAchievements] = useState("");
	return (
		<userInformationContext.Provider
			value={{
				personalInfo,
				setPersonalInfo,
				education,
				setEducation,
				experience,
				setExperience,
				projects,
				setProjects,
				skills,
				setSkills,
				achievements,
				setAchievements,
			}}>
			{children}
		</userInformationContext.Provider>
	);
}
export { Provider, userInformationContext };
