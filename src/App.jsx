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
import Projects from "./components/Projects";
import Footer from "./components/helper/Footer";
import getDocDefinition from "./assets/pdfStucture";
import { userInformationContext } from "./contexts/Information";
import pdfMake from "pdfmake/build/pdfmake";
import { pdfFonts } from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
function App() {
	const {
		personalInfo,
		education,
		experience,
		projects,
		skills,
		achievements,
	} = useContext(userInformationContext);

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
	const downloadResume = async () => {
		const docDefinition = await getDocDefinition(
			personalInfo,
			education,
			experience,
			projects,
			skills,
			achievements
		);
		pdfMake.createPdf(docDefinition).download("Resume");
	};
	return (
		<div className='flex flex-col h-screen'>
			<div className='flex flex-col lg:flex-row justify-between align-center '>
				<TabGroup
					setSelected={setSelected}
					selected={selected}
					className={"w-full lg:w-1/2 my-3"}
				/>
				<Button
					className={
						"flex items-center justify-center my-3 shadow bg-green-600 text-white"
					}
					onClick={downloadResume}>
					<FiDownload className='mr-3' />
					Download
				</Button>
			</div>
			<div className='flex flex-col w-full lg:flex-row space-x-1 grow '>
				<Panel className={"w-full"}>{components[selected]}</Panel>
				<Preview className={"w-full"} />
			</div>
			<Footer />
		</div>
	);
}
export default App;
