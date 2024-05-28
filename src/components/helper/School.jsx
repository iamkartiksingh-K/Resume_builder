export default function School({
	schoolName,
	degree,
	startDate,
	endDate,
	scoreType,
	score,
}) {
	return (
		<div className='flex justify-between mb-2 '>
			<div>
				<h3 className='font-semibold'>{schoolName}</h3>
				<p className='italic'>{degree}</p>
			</div>
			<div className='text-right'>
				<p>
					{startDate} - {endDate}
				</p>
				<p>
					{scoreType}: {score}
				</p>
			</div>
		</div>
	);
}
