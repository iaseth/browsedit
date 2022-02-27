import React from 'react';

import LineNumbers from './LineNumbers';



export default function Textarea ({
	text, setText
}) {

	const tref = React.useRef(null);

	function handleKeyDown (e) {
		const keyCode = e.keyCode;
		const target = e.target;

		if (keyCode === 9) {
			// tab key
			e.preventDefault();
			const start = target.selectionStart;
			const end = target.selectionEnd;
			let selected = text.slice(start, end);
			if (!selected) {
				let index = start;
				while (index > 0) {
					let c = text[index-1];
					if (c === '\n' || c === ' ') break;
					index--;
				}
				selected = text.slice(index, start);
			}

			let newText = text.slice(0, start-selected.length) + `<${selected}></${selected}>` + text.slice(start);
			setText(text => newText);
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
