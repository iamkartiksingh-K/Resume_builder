import Description from "./Description";
export default function Job({
	companyName,
	position,
	startDate,
	endDate,
	description,
}) {
	return (
		<div className='mb-2'>
			<div className='flex justify-between'>
				<div>
					<h3 className='font-semibold'>{position}</h3>
					<p className='italic'>{companyName}</p>
				</div>
				<div className='text-right'>
					<p>
						{startDate} - {endDate}
					</p>
				</div>
			</div>
			<Description desc={description} />
		</div>
	);
}
