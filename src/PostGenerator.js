import React from "react";
import { useState, useEffect } from "react";

function PostGenerator() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<div>
			{posts.map((post) => {
				return (
					<div>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
				);
			})}
		</div>
	);
}

export default PostGenerator;
