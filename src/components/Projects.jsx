import Heading from "./helper/Heading";
import Button from "./helper/Button";
import { useContext, useState } from "react";
import { userInformationContext } from "../contexts/Information";
import ShowList from "./helper/ShowList";
import { FaPlus } from "react-icons/fa";
import ProjectForm from "./helper/ProjectForm";
const Projects = ({ goForward }) => {
	const { projects, setProjects } = useContext(userInformationContext);
	const [showForm, setShowForm] = useState(false);
	const [editForm, setEditForm] = useState(undefined);
	const edit = (keyToEdit) => {
		setEditForm(projects.find(({ key }) => key === keyToEdit));
		setShowForm(true);
	};
	const deleteJob = (keyToDelete) => {
		const newJobSet = projects.filter(({ key }) => {
			return key !== keyToDelete;
		});
		setProjects(newJobSet);
		localStorage.setItem("projects", JSON.stringify(newJobSet));
	};
	const renderedComponent = showForm ? (
		<ProjectForm
			closeForm={() => {
				setShowForm(false);
			}}
			project={projects}
			setProject={setProjects}
			editProject={editForm}
		/>
	) : (
		<>
			<div>
				{projects.map(
					({ projectName, techUsed, startDate, endDate, key }) => {
						return (
							<ShowList
								key={key}
								title={projectName}
								subText={techUsed}
								startDate={startDate}
								endDate={endDate}
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
				<Heading>Projects</Heading>

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
export default Projects;
