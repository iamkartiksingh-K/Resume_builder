import classNames from "classnames";
const Button = ({ children, primary, disabled, className, ...rest }) => {
	const btnClass = classNames(
		"border w-40 h-12 rounded-lg font-bold hover:cursor-pointer",
		className,
		{
			"bg-sky-500 text-white": primary,
		},
		{
			"bg-slate-500": disabled,
		}
	);
	return (
		<button className={btnClass} {...rest}>
			{children}
		</button>
	);
};
export default Button;
