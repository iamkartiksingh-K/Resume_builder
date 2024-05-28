import classNames from "classnames";
const Heading = ({ children, className }) => {
	const headingClass = classNames("text-2xl font-semibold ", className);
	return <h1 className={headingClass}>{children}</h1>;
};
export default Heading;
