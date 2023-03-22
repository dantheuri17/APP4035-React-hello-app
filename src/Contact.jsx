import React from "react";
import { useState } from "react";

const Contact = () => {
	const [data, setData] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const serverHost = "http://localhost:4000";

	async function addStudent(student) {
		const url = serverHost + "/students";
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(student),
		};
		const response = await fetch(url, options);
		if (response.status === 200) {
			setSubmitted(true);
		}
	}

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		//create an object for the current input field event
		const currentInputFieldData = {
			[name]: value,
		};
		const updatedData = {
			...data,
			...currentInputFieldData,
		};
		setData(updatedData);
	};
	const handleSubmit = (e) => {
		console.log(data);
		addStudent(data);
		e.preventDefault();
		
	};

	return (
		<div>
			<h1>This is the Contact Page</h1>
			{!submitted ?
			<form onSubmit={handleSubmit}>
				<label>
					First name:
					<input name="firstName" type="text" onChange={handleChange} />
				</label>
				<br />
				<label>
					Middle name:
					<input name="middleName" type="text" onChange={handleChange} />
				</label>
				<br />
				<label>
					Last name:
					<input name="lastName" type="text" onChange={handleChange} />
				</label>
				<br />
				<input type="submit" value="submit" />
			</form>
			:
			<p>Your data has been submitted successfully. Thank you</p> 
	}
		</div>
	);
};

export default Contact;
