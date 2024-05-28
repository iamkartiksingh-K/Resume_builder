import React from "react";
import PersonalInfoSection from "./helper/PersonalInfoSection";
import EducationSection from "./helper/EducationSection";
import ExperienceSection from "./helper/ExperienceSection";
import ProjectSection from "./helper/ProjectSection";
import SkillSection from "./helper/SkillSection";
import AchievementsSection from "./helper/AchievementsSection";
import { userInformationContext } from "../contexts/Information";
import { useContext } from "react";
import classNames from "classnames";
const Preview = ({ className }) => {
	const {
		personalInfo,
		education,
		experience,
		projects,
		skills,
		achievements,
	} = useContext(userInformationContext);
	const previewClass = classNames("border w-1/2 p-10 rounded-md", className);

	return (
		<div className={previewClass}>
			{personalInfo && <PersonalInfoSection info={personalInfo} />}
			{education.length > 0 && <EducationSection schools={education} />}
			{experience.length > 0 && <ExperienceSection jobs={experience} />}
			{projects.length > 0 && <ProjectSection projects={projects} />}
			{skills.length > 0 && <SkillSection skills={skills} />}
			{achievements.length > 0 && (
				<AchievementsSection achievements={achievements} />
			)}
		</div>
	);
};

export default Preview;
