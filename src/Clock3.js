import { useState, useEffect } from "react";

function Clock3(props) {
	const [currentDate, setCurrentDate] = useState(new Date());

	console.log(useState(new Date()));

	if (props.clockType === "Interactive") {
	}
	useEffect(() => {
        if(props.clockType === 'Interactive') {
            const timerID = setInterval(() => setCurrentDate(new Date()), 1000);
						return () => clearInterval(timerID);
        }
    
        else if (props.clockType === 'Static') return
		
	}, [props.clockType]);

	const continent = props.continent;
	const city = props.city;
	const tz = `${continent}/ ${city}`;

	return (
		<div>
			<h1>
				In {continent}, {city.replace("_", "")}
			</h1>
			<h2>It is {currentDate.toLocaleString("en-US", { timezone: tz })}</h2>
		</div>
	);
}

export default Clock3;
