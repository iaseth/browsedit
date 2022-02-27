import React from 'react';

import {Heading} from './Utils';
import LineNumbers from './LineNumbers';



export default function CSSTab ({
	cssText, setCssText
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
			let selected = cssText.slice(start, end);
			if (!selected) {
				let index = start;
				while (index > 0) {
					let c = cssText[index-1];
					if (c === '\n' || c === ' ') break;
					index--;
				}
				selected = cssText.slice(index, start);
			}

			// let newText = cssText.slice(0, start-selected.length) + `<${selected}></${selected}>` + cssText.slice(start);
			// setCssText(cssText => newText);
		} else if (keyCode === 13) {
			// enter key
		}
		// console.log("Key: " + keyCode);
	}

	function handleChange (e) {
		setCssText(e.target.value);
	}

	return (
		<div className="CSSTab basis-0 grow p-4 pt-2 bg-slate-200 flex flex-col">
			<Heading>CSS</Heading>
			<div className="Textarea grow flex">
				<LineNumbers text={cssText} />
				<textarea ref={tref} value={cssText} onKeyDown={handleKeyDown} onChange={handleChange} className="textarea w-full px-2 py-2 outline-none resize-none"></textarea>
			</div>
		</div>
	);
}
