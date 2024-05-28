import classNames from "classnames";

const Panel = ({ className, children }) => {
	const panelClass = classNames(
		"w-1/2 p-3 border rounded-md shadow-sm",
		className
	);
	return <div className={panelClass}>{children}</div>;
};
export default Panel;
