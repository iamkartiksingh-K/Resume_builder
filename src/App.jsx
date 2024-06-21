import { useState, useContext } from "react";
import TabGroup from "./components/TabGroup";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Panel from "./components/helper/Panel";
import Button from "./components/helper/Button";
import Preview from "./components/Preview";
import { FiDownload } from "react-icons/fi";
import { BsFonts } from "react-icons/bs";
import Projects from "./components/Projects";
import Footer from "./components/helper/Footer";
import getDocDefinition from "./assets/pdfStucture";
import { userInformationContext } from "./contexts/Information";
import pdfMake from "pdfmake/build/pdfmake";
import Roboto from "./roboto.js";
import heuristica from "./heuristica.js";
function App() {
	const {
		personalInfo,
		education,
		experience,
		projects,
		skills,
		achievements,
	} = useContext(userInformationContext);
	const [fontType, setFontType] = useState(true);
	const [selected, setSelected] = useState(0);
	const goForward = () => {
		if (selected + 1 < components.length) setSelected(selected + 1);
	};
	const components = [
		<PersonalDetails goForward={goForward} />,
		<Education goForward={goForward} />,
		<WorkExperience goForward={goForward} />,
		<Projects goForward={goForward} />,
		<Skills goForward={goForward} />,
		<Achievements goForward={goForward} />,
	];
	const downloadResume = () => {
		localStorage.setItem("achievements", JSON.stringify(achievements));
		const docDefinition = getDocDefinition(
			personalInfo,
			education,
			experience,
			projects,
			skills,
			achievements,
			fontType
		);
		pdfMake.vfs = fontType ? Roboto : heuristica;
		pdfMake.fonts = {
			heuristica: {
				normal: "Heuristica-Regular.ttf",
				bold: "Heuristica-Bold.ttf",
				italics: "Heuristica-Italic.ttf",
				bolditalics: "Heuristica-BoldItalic.ttf",
			},
			Roboto: {
				normal: "Roboto-Regular.ttf",
				bold: "Roboto-Bold.ttf",
				italics: "Roboto-Italic.ttf",
				bolditalics: "Roboto-BoldItalic.ttf",
			},
		};
		pdfMake.createPdf(docDefinition).download("Resume");
	};
	return (
		<div className='flex flex-col h-screen'>
			<div className='flex flex-col lg:flex-row justify-between align-center '>
				<TabGroup
					setSelected={setSelected}
					selected={selected}
					className={"w-full  lg:w-1/2 my-3"}
				/>
				<div className='flex'>
					<Button
						className={
							"flex items-center justify-center my-3 shadow  text-gray-700 mr-2"
						}
						onClick={() => setFontType(!fontType)}>
						<BsFonts className='mr-3 ' />
						{!fontType ? "Modern" : "Classic"}
					</Button>
					<Button
						className={
							"flex items-center justify-center my-3 shadow bg-green-600 text-white"
						}
						onClick={downloadResume}>
						<FiDownload className='mr-3' />
						Download
					</Button>
				</div>
			</div>
			<div className='flex flex-col w-full lg:flex-row md:space-y-2 sm:space-x-0 md:space-x-2 lg:space-y-0 space-x-2  grow '>
				<Panel className={"w-full grow"}>{components[selected]}</Panel>
				<Preview
					className={`w-full grow ${
						fontType ? "" : "font-heuristica"
					}`}
				/>
			</div>
			<Footer />
		</div>
	);
}
export default App;
