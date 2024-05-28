export default function Description({ desc }) {
	const points = desc.split("\n").filter((point) => {
		return point.trim().length > 0;
	});
	return (
		<ul className='list-disc ml-8'>
			{points.map((point, index) => {
				return <li key={index}>{point}</li>;
			})}
		</ul>
	);
}
