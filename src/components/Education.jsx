import { useContext, useState } from "react";
import { userInformationContext } from "../contexts/Information";
import EducationForm from "./helper/EducationForm";
import Heading from "./helper/Heading";
import Button from "./helper/Button";
import ShowList from "./helper/ShowList";
import { FaPlus } from "react-icons/fa";

const Education = ({ goForward }) => {
	const { education, setEducation } = useContext(userInformationContext);
	const [showForm, setShowForm] = useState(false);
	const [editForm, setEditForm] = useState(undefined);
	const edit = (keyToEdit) => {
		setEditForm(education.find(({ key }) => key === keyToEdit));
		setShowForm(true);
	};
	const deleteJob = (keyToDelete) => {
		const newSchoolSet = education.filter(({ key }) => {
			return key !== keyToDelete;
		});
		setEducation(newSchoolSet);
	};
	const renderedComponent = showForm ? (
		<EducationForm
			closeForm={() => {
				setShowForm(false);
			}}
			education={education}
			setEducation={setEducation}
			editSchool={editForm}
		/>
	) : (
		<>
			<div>
				{education.map(
					({
						collegeName,
						course,
						startDate,
						endDate,
						scoreType,
						score,
						key,
					}) => {
						return (
							<ShowList
								key={key}
								title={collegeName}
								subText={course}
								startDate={startDate}
								endDate={endDate}
								rightSubText={`${scoreType} : ${score}`}
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
				<Heading>Education Details</Heading>
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
export default Education;
