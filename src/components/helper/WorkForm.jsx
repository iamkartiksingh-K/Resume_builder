import Input from "./Input";
import Button from "./Button";
import Textarea from "./Textarea";
import { useState } from "react";
import { v4 as uniqueId } from "uuid";
import { CreateJob } from "../../utils/Helpers";

const WorkForm = ({ closeForm, setEditForm, work, setWork, editJob }) => {
	const [job, setJob] = useState(editJob || new CreateJob());
	const [error, setError] = useState(false);
	const handleChange = (event, key) => {
		setError(false);
		setJob({ ...job, [key]: event.target.value });
	};
	const save = () => {
		const { companyName, position, startDate, endDate, description } = job;
		if (
			!companyName ||
			!position ||
			!startDate ||
			!endDate ||
			!description
		) {
			setError(true);
		} else {
			let newWorkSet;
			if (editJob) {
				newWorkSet = work.map((currJob) => {
					if (currJob.key === editJob.key) {
						return job;
					}
					return currJob;
				});
			} else {
				newWorkSet = [...work, { ...job, key: uniqueId() }];
			}
			localStorage.setItem("experience", JSON.stringify(newWorkSet));
			setWork(newWorkSet);
			setEditForm(new CreateJob());
			closeForm();
		}
	};
	const cancel = () => {
		setEditForm(new CreateJob());
		closeForm();
	};
	return (
		<div>
			<Input
				label={"Company"}
				value={job.companyName}
				required
				onChange={(event) => handleChange(event, "companyName")}
				placeholder={"Mircrosoft"}
			/>
			<Input
				label={"Position"}
				value={job.position}
				required
				onChange={(event) => handleChange(event, "position")}
				placeholder={"SDE-I"}
			/>
			<div className='flex space-x-5'>
				<Input
					label={"Start Date"}
					className={"grow"}
					placeholder={"August 2022"}
					required
					value={job.startDate}
					onChange={(event) => handleChange(event, "startDate")}
				/>
				<Input
					label={"End Date"}
					className={"grow"}
					placeholder={"August 2025"}
					required
					value={job.endDate}
					onChange={(event) => handleChange(event, "endDate")}
				/>
			</div>
			<Textarea
				label={"Description"}
				required
				placeholder={
					"Separate each achievement with enter key ↵ \nExample:-\nDeveloped a REST API using FastAPI and PostgreSQL to store data from learning management systems. \nDeveloped a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data."
				}
				value={job.description}
				onChange={(event) => handleChange(event, "description")}
			/>
			<div className='flex space-x-6 justify-center'>
				<Button
					onClick={save}
					className={" bg-green-600 text-white shadow-md"}>
					Save
				</Button>
				<Button onClick={cancel} className={" shadow-md"}>
					Cancel
				</Button>
			</div>
			<p className='text-red-500 mt-10 text-center'>
				{error && "Some fields are missing"}
			</p>
		</div>
	);
};
export default WorkForm;
