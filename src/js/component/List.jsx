import React, { useState, useEffect } from "react";
import "bootstrap";

//create your first component
const TodoList = () => {
	const [inputValue, setInputValue] = useState("Hello");
	const [inputList, setInputList] = useState(["", "", ""]);

	function addItem(e) {
		setInputValue(inputValue);
		const list = inputList.concat(inputValue);
		setInputList(list);
	}
	return (
		<div>
			<h1>Google</h1>
			<input
				type="text"
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onKeyUp={addItem}
			/>
			<div>{inputList.map(key, value)}</div>
		</div>
	);
};

export default TodoList;
