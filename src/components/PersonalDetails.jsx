import { useContext } from "react";
import { userInformationContext } from "../contexts/Information";
import Heading from "./helper/Heading";
import Input from "./helper/Input";
import Button from "./helper/Button";

const PersonalDetails = ({ goForward }) => {
	const { personalInfo, setPersonalInfo } = useContext(
		userInformationContext
	);
	const handleChange = (event, key) => {
		setPersonalInfo({ ...personalInfo, [key]: event.target.value });
	};
	return (
		<>
			<Heading>Personal Details</Heading>
			<form
				action='#'
				onSubmit={(event) => {
					event.preventDefault();
				}}>
				<Input
					label={"Full Name"}
					type={"text"}
					placeholder={"John Doe"}
					value={personalInfo.fullName}
					onChange={(event) => handleChange(event, "fullName")}
				/>
				<Input
					label={"Phone Number"}
					type={"text"}
					value={personalInfo.phoneNumber}
					onChange={(event) => handleChange(event, "phoneNumber")}
				/>
				<Input
					label={"Email"}
					type={"email"}
					placeholder={"john.doe@gmail.com"}
					value={personalInfo.email}
					onChange={(event) => handleChange(event, "email")}
				/>
				<Input
					label={"Linkedin"}
					type={"text"}
					placeholder={"linkedin.com/in/johnDoe"}
					value={personalInfo.linkedin}
					onChange={(event) => handleChange(event, "linkedin")}
				/>
				<Input
					label={"Github"}
					type={"text"}
					placeholder={"github.com/johnDoe"}
					value={personalInfo.github}
					onChange={(event) => handleChange(event, "github")}
				/>

				<Input
					label={"Portfolio"}
					type={"text"}
					placeholder={"www.yourPortfolio.com"}
					value={personalInfo.other}
					onChange={(event) => handleChange(event, "other")}
				/>
			</form>
			<div className='flex justify-center mt-5 space-x-2'>
				<Button onClick={goForward} primary className={"bg-green-500"}>
					Done
				</Button>
			</div>
		</>
	);
};
export default PersonalDetails;
