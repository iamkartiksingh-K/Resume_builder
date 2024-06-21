import Heading from "./helper/Heading";
import WorkForm from "./helper/WorkForm";
import Button from "./helper/Button";
import { useContext, useState } from "react";
import { userInformationContext } from "../contexts/Information";
import ShowList from "./helper/ShowList";
import { FaPlus } from "react-icons/fa";

const WorkExperience = ({ goForward }) => {
	const { experience, setExperience } = useContext(userInformationContext);
	const [showForm, setShowForm] = useState(false);
	const [editForm, setEditForm] = useState(undefined);
	const edit = (keyToEdit) => {
		setEditForm(experience.find(({ key }) => key === keyToEdit));
		setShowForm(true);
	};
	const deleteJob = (keyToDelete) => {
		const newJobSet = experience.filter(({ key }) => {
			return key !== keyToDelete;
		});
		setExperience(newJobSet);
		localStorage.setItem("experience", JSON.stringify(newJobSet));
	};
	const renderedComponent = showForm ? (
		<WorkForm
			closeForm={() => {
				setShowForm(false);
			}}
			work={experience}
			setWork={setExperience}
			editJob={editForm}
			setEditForm={setEditForm}
		/>
	) : (
		<>
			<div>
				{experience.map(
					({
						companyName,
						position,
						startDate,
						endDate,
						companyLocation,
						key,
					}) => {
						return (
							<ShowList
								key={key}
								title={companyName}
								subText={position}
								startDate={startDate}
								endDate={endDate}
								rightSubText={companyLocation}
								itemKey={key}
								edit={edit}
								deleteItem={deleteJob}
							/>
						);
					}
				)}
				<div className='flex justify-center mt-5 space-x-2'>
					<Button
						onClick={goForward}
						primary
						className={"bg-green-500"}>
						Done
					</Button>
				</div>
			</div>
		</>
	);
	return (
		<>
			<div className={"flex justify-between items-center"}>
				<Heading>Work Experience</Heading>

				<Button
					className={"flex justify-center items-center"}
					onClick={() => setShowForm(true)}>
					<FaPlus className='mr-3' />
					Add
				</Button>
			</div>
			{renderedComponent}
		</>
	);
};
export default WorkExperience;
