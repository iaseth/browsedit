import React from 'react';

import LineNumbers from './LineNumbers';



export default function Textarea ({
	text, setText
}) {

	const tref = React.useRef(null);

	function handleKeyDown (e) {
		const keyCode = e.keyCode;
		if (keyCode === 9) {
			// tab key
			e.preventDefault();
		} else if (keyCode === 13) {
			// enter key
		}
		// console.log("Key: " + keyCode);
	}

	function handleChange (e) {
		setText(e.target.value);
	}

	return (
		<div className="Textarea grow flex">
			<LineNumbers text={text} />
			<textarea ref={tref} value={text} onFocus={() => console.log("Focused")} onKeyDown={handleKeyDown} onChange={handleChange} className="textarea w-full px-2 py-2 outline-none resize-none"></textarea>
		</div>
	);
}
