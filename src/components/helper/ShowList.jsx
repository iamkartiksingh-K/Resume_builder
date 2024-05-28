import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
const ShowList = ({
	title,
	subText,
	startDate,
	endDate,
	rightSubText,
	itemKey,
	edit,
	deleteItem,
}) => {
	return (
		<div className='flex items-center justify-between space-x-5 p-3 mt-3 bg-white border border-gray-200 rounded-md'>
			<div className='grow'>
				<div className='flex justify-between items-center '>
					<h5 className='inline text-xl font-bold tracking-tight text-gray-900 '>
						{title}
					</h5>
					<p className='inline ml-3 font-normal text-gray-500'>
						{startDate} - {endDate}
					</p>
				</div>
				<div className='flex justify-between items-center grow'>
					<p className='inline font-normal text-gray-500'>
						{subText}
					</p>
					<p className='inline ml-3 font-normal text-gray-500'>
						{rightSubText}
					</p>
				</div>
			</div>

			<div className='flex flex-col space-y-1'>
				<MdOutlineDeleteOutline
					onClick={() => deleteItem(itemKey)}
					className='inline text-red-400 size-6 cursor-pointer'
				/>
				<MdOutlineEdit
					onClick={() => edit(itemKey)}
					className='inline text-gray-400 size-6 cursor-pointer'
				/>
			</div>
		</div>
	);
};
export default ShowList;
