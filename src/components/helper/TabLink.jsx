import classNames from "classnames";

const TabLink = ({ tabName, className, setSelected, selected, index }) => {
	const tabClass = classNames(
		"p-2 font-medium hover:cursor-pointer text-center rounded-md px-2",
		className,
		{
			"bg-sky-500 text-white": selected === index,
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
