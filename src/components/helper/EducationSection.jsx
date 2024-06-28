import School from "./School";
import Heading from "./Heading";
import Hr from "./Hr";
export default function EducationSection({ schools }) {
	return (
		<div className='mb-3'>
			<Heading>Education</Heading>
			<Hr />
			{schools.map((school) => (
				<School
					schoolName={school.collegeName}
					degree={school.course}
					startDate={school.startDate}
					endDate={school.endDate}
					scoreType={school.scoreType}
					score={school.score}
					key={school.key}
				/>
			))}
		</div>
	);
}
