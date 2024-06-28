import classNames from "classnames";
const Input = ({ label, placeholder, type, required, className, ...rest }) => {
	const containerClass = classNames("flex flex-col my-3", className);
	return (
		<div className={containerClass}>
			{label && (
				<label
					htmlFor={label}
					className={"text-base mb-1 font-medium text-gray-900"}>
					{label}
				</label>
			)}
			<input
				id={label || ""}
				type={type || "text"}
				className={
					"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-sky-200 w-full p-2.5"
				}
				placeholder={placeholder}
				{...rest}
			/>
		</div>
	);
};
export default Input;
