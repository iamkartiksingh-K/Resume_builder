import { createContext, useState } from "react";
const userInformationContext = createContext();

function Provider({ children }) {
	const [personalInfo, setPersonalInfo] = useState(
		JSON.parse(localStorage.getItem("personalInfo")) || {
			fullName: "",
			email: "",
			phoneNumber: "",
			github: "",
			linkedin: "",
			portfolio: "",
		}
	);
	const [education, setEducation] = useState(
		JSON.parse(localStorage.getItem("education")) || []
	);
	const [experience, setExperience] = useState(
		JSON.parse(localStorage.getItem("experience")) || []
	);
	const [projects, setProjects] = useState(
		JSON.parse(localStorage.getItem("projects")) || []
	);
	const [skills, setSkills] = useState(
		JSON.parse(localStorage.getItem("skills")) || []
	);
	const [achievements, setAchievements] = useState(
		JSON.parse(localStorage.getItem("achievements")) || ""
	);
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
