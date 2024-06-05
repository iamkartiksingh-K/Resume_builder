import { useState } from "react";
import classNames from "classnames";
import TabLink from "./helper/TabLink";

const TabGroup = ({ className, selected, setSelected }) => {
	const classes = classNames(
		"flex flex-wrap px-1 items-center border h-fit rounded-md shadow-sm",
		className
	);
	return (
		<div className={classes}>
			<TabLink
				setSelected={setSelected}
				selected={selected}
				tabName={"Personal"}
				index={0}
				className={"basis-1/6"}
			/>
			<TabLink
				setSelected={setSelected}
				selected={selected}
				tabName={"Education"}
				index={1}
				className={"basis-1/6"}
			/>

			<TabLink
				setSelected={setSelected}
				selected={selected}
				tabName={"Experience"}
				index={2}
				className={"basis-1/6"}
			/>
			<TabLink
				setSelected={setSelected}
				selected={selected}
				tabName={"Projects"}
				index={3}
				className={"basis-1/6"}
			/>
			<TabLink
				setSelected={setSelected}
				selected={selected}
				tabName={"Skills"}
				index={4}
				className={"basis-1/6"}
			/>
			<TabLink
				setSelected={setSelected}
				selected={selected}
				tabName={"Achievements"}
				index={5}
				className={"basis-1/6"}
			/>
		</div>
	);
};
export default TabGroup;
