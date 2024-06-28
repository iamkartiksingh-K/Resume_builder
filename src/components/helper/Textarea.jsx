import classNames from "classnames";

const Textarea = ({ label, placeholder, required, className, ...rest }) => {
	const containerClass = classNames("flex flex-col my-3", className);
	const redAstric = <span className='text-red-400'>*</span>;

	return (
		<div className={containerClass}>
			{label && (
				<label
					htmlFor='label'
					className={"text-base mb-1 font-medium text-gray-900"}>
					{label}
					{required && redAstric}
				</label>
			)}
			<textarea
				id={label || ""}
				className={
					"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-sky-200 w-full h-64 p-2.5"
				}
				placeholder={placeholder}
				{...rest}
			/>
		</div>
	);
};
export default Textarea;
