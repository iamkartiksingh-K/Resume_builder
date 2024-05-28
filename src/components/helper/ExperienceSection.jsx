import Heading from "./Heading";
import Job from "./Job";
import Hr from "./Hr";

export default function ExperienceSection({ jobs }) {
	// console.log(jobs);
	return (
		<div className='mb-3'>
			<Heading>Experience</Heading>
			<Hr />
			{jobs.map((job) => (
				<Job
					companyName={job.companyName}
					position={job.position}
					startDate={job.startDate}
					endDate={job.endDate}
					description={job.description}
					key={job.key}
				/>
			))}
		</div>
	);
}
