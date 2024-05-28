import Heading from "./Heading";
import Job from "./Job";
import Hr from "./Hr";
import Project from "./Project";
export default function ExperienceSection({ projects }) {
	return (
		<div className='mb-2'>
			<Heading>Projects</Heading>
			<Hr />
			{projects.map((project) => (
				<Project
					projectName={project.projectName}
					techUsed={project.techUsed}
					startDate={project.startDate}
					endDate={project.endDate}
					description={project.description}
					githubLink={project.githubLink}
					liveLink={project.liveLink}
					key={project.key}
				/>
			))}
		</div>
	);
}
