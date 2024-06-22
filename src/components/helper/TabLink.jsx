import classNames from "classnames";

const TabLink = ({ tabName, className, setSelected, selected, index }) => {
	const tabClass = classNames(
		"p-2 text-xs md:text-sm min-[1139px]:text-base font-medium hover:cursor-pointer text-center rounded-md ",
		className,
		{
			"text-sky-600 ": selected === index,
		}
	);
	const handleClick = () => {
		setSelected(index);
	};
	return (
		<div className={tabClass} onClick={handleClick}>
			{tabName}
		</div>
	);
};
export default TabLink;
