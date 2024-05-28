import { MdOutlineDeleteOutline } from "react-icons/md";

const DisplaySkill = ({ deleteSkill, title, desc }) => {
	return (
		<div className='flex items-center justify-between p-3 mt-3 bg-white border border-gray-200 rounded-md'>
			<div>
				<h5 className='inline text-xl font-bold tracking-tight text-gray-900 '>
					{title}
				</h5>
				<p className='inline ml-3 font-normal text-gray-500'>{desc}</p>
			</div>

			<MdOutlineDeleteOutline
				onClick={deleteSkill}
				className='inline text-red-400 size-6 cursor-pointer'
			/>
		</div>
	);
};
export default DisplaySkill;
