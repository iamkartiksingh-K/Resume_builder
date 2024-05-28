import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { v4 as uniqueId } from "uuid";
import { CreateSchool } from "../../utils/Helpers";
const EducationForm = ({ closeForm, education, setEducation, editSchool }) => {
	const [collegeInfo, setCollegeInfo] = useState(
		editSchool || new CreateSchool()
	);
	const handleChange = (event, key) => {
		setCollegeInfo({ ...collegeInfo, [key]: event.target.value });
	};
	const save = () => {
		if (editSchool) {
			const newSchoolSet = education.map((currSchool) => {
				if (currSchool.key === editSchool.key) {
					return collegeInfo;
				}
				return currSchool;
			});
			setEducation(newSchoolSet);
		} else {
			setEducation([...education, { ...collegeInfo, key: uniqueId() }]);
		}
		setCollegeInfo(new CreateSchool());
		closeForm();
	};
	const cancel = () => {
		setCollegeInfo(new CreateSchool());
		closeForm();
	};
	return (
		<div>
			<Input
				label={"College/School Name"}
				value={collegeInfo.collegeName}
				onChange={(event) => handleChange(event, "collegeName")}
			/>
			<Input
				label={"Course"}
				value={collegeInfo.course}
				onChange={(event) => handleChange(event, "course")}
			/>
			<div className='flex space-x-5'>
				<Input
					label={"Start Date"}
					className={"grow"}
					placeholder={"August 2022"}
					value={collegeInfo.startDate}
					onChange={(event) => handleChange(event, "startDate")}
				/>
				<Input
					label={"End Date"}
					className={"grow"}
					placeholder={"August 2025"}
					value={collegeInfo.endDate}
					onChange={(event) => handleChange(event, "endDate")}
				/>
			</div>
			<div className='flex space-x-5'>
				<Input
					label={"Score Type"}
					className={"grow"}
					placeholder={"CGPA"}
					value={collegeInfo.scoreType}
					onChange={(event) => handleChange(event, "scoreType")}
				/>
				<Input
					label={"Score"}
					className={"grow"}
					placeholder={"9.8"}
					value={collegeInfo.score}
					onChange={(event) => handleChange(event, "score")}
				/>
			</div>
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
		</div>
	);
};
export default EducationForm;
