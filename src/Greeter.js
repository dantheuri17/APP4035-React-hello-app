import React from "react";
import "./Greeter.css";

const Greeter = (props) => {
	return (
		<div className="greeter-div">
			<h1>
				{props.greeting} {props.name}, this REACT
			</h1>
		</div>
	);
};

export default Greeter;

