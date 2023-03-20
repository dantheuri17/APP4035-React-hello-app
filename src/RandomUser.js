import React from "react";
import { useState, useEffect } from "react";

function RandomUser() {
	const [results, setResults] = useState([]);
	useEffect( () => {

        const fetchData = async () => {
            try {
                let response = await fetch("https://randomuser.me/api/")
                let data = await response.json()
                console.log(data.results)
                setResults(data.results)
            }
            catch (error) {
                console.log(error)
            }
        }; 

        fetchData();
	}, []);

	return (
		<div>
            {results.map((element) => {
				return (
					<div>
                        <h2>{element.email}</h2>
						<h2>{element.gender}</h2>
					</div>
				);
			})}
			
		</div>
	);
}

export default RandomUser;
