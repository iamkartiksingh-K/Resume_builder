import { BsGithub } from "react-icons/bs";
import classNames from "classnames";
export default function Footer({ className }) {
	const footerClass = classNames("bg-white rounded-lg shadow", className);
	return (
		<footer className={footerClass}>
			<div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center'>
				<span className='flex space-x-2 text-sm text-gray-500 sm:text-center '>
					<a
						href='https://github.com/iamkartiksingh-K'
						className='flex items-center space-x-2'>
						<BsGithub className='inline' />
						<p>2024 </p>
					</a>
					<a
						href='https://github.com/iamkartiksingh-K'
						className='hover:underline'>
						Kartik Singh
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
}
