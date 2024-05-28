import Heading from "./Heading";
import Hr from "./Hr";
export default function SkillSection({ skills }) {
	return (
		<div className='mb-3'>
			<Heading>Skills</Heading>
			<Hr />
			<ul>
				{skills.map((skill) => {
					return (
						<li key={skill.key}>
							<span className='font-semibold'>{skill.type}</span>:{" "}
							{skill.desc}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
