import { useContext, useState } from "react";
import { userInformationContext } from "../contexts/Information";
import Heading from "./helper/Heading";
import Input from "./helper/Input";
import Button from "./helper/Button";

const PersonalDetails = ({ goForward }) => {
	const [error, setError] = useState(false);
	const { personalInfo, setPersonalInfo } = useContext(
		userInformationContext
	);
	const handleChange = (event, key) => {
		setError(false);
		setPersonalInfo({ ...personalInfo, [key]: event.target.value });
	};
	const handleSubmit = () => {
		const { fullName, phoneNumber, email } = personalInfo;
		console.log(phoneNumber);
		if (!fullName || !phoneNumber || !email) {
			setError(true);
		} else {
			localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
			goForward();
		}
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
					required
					value={personalInfo.fullName}
					onChange={(event) => handleChange(event, "fullName")}
				/>
				<Input
					label={"Phone Number"}
					type={"text"}
					required
					value={personalInfo.phoneNumber}
					onChange={(event) => handleChange(event, "phoneNumber")}
				/>
				<Input
					label={"Email"}
					type={"email"}
					required
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
					value={personalInfo.portfolio}
					onChange={(event) => handleChange(event, "portfolio")}
				/>
			</form>
			<div className='flex flex-col items-center justify-center mt-5 space-x-2'>
				<Button
					onClick={handleSubmit}
					primary
					className={"bg-green-500"}>
					Done
				</Button>
				<p className='text-red-500 mt-4'>
					{error && "Some fields are missing"}
				</p>
			</div>
		</>
	);
};
export default PersonalDetails;
