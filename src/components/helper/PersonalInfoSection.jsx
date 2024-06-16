import VerticalBar from "./VerticalBar";
export default function PersonalInfoSection({ info }) {
	return (
		<div className='mb-3'>
			<h1 className='text-center text-3xl font-semibold mb-2'>
				{info.fullName}
			</h1>
			<div className='flex justify-center'>
				<p>{info.phoneNumber}</p>
				{info.email && (
					<>
						<VerticalBar />
						<p>{info.email}</p>
					</>
				)}

				{info.linkedin && (
					<>
						<VerticalBar />

						<a
							href={`https://${info.linkedin}`}
							target='_blank'
							className='text-blue-500'
							rel='noopener noreferrer'>
							{"Linkedin"}
						</a>
					</>
				)}
				{info.github && (
					<>
						<VerticalBar />

						<a
							href={`https://${info.github}`}
							target='_blank'
							className='text-blue-500'
							rel='noopener noreferrer'>
							{"Github"}
						</a>
					</>
				)}
				{info.portfolio && (
					<>
						<VerticalBar />

						<a
							href={`https://${info.portfolio}`}
							target='_blank'
							rel='noopener noreferrer'>
							{info.portfolio}
						</a>
					</>
				)}
			</div>
		</div>
	);
}
