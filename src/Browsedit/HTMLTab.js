import React from 'react';

import {Heading} from './Utils';
import LineNumbers from './LineNumbers';



export default function HTMLTab ({
	htmlText, setHtmlText
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
			let selected = htmlText.slice(start, end);
			if (!selected) {
				let index = start;
				while (index > 0) {
					let c = htmlText[index-1];
					if (c === '\n' || c === ' ') break;
					index--;
				}
				selected = htmlText.slice(index, start);
			}

			let newText = htmlText.slice(0, start-selected.length) + `<${selected}></${selected}>` + htmlText.slice(start);
			setHtmlText(htmlText => newText);
		} else if (keyCode === 13) {
			// enter key
		}
		// console.log("Key: " + keyCode);
	}

	function handleChange (e) {
		setHtmlText(e.target.value);
	}

	return (
		<div className="HTMLTab basis-0 grow p-4 pt-2 flex flex-col">
			<Heading>HTML</Heading>
			<div className="Textarea grow flex">
				<LineNumbers text={htmlText} />
				<textarea ref={tref} value={htmlText} onKeyDown={handleKeyDown} onChange={handleChange} className="textarea w-full px-2 py-2 outline-none resize-none"></textarea>
			</div>
		</div>
	);
}
