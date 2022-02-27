import React from 'react';

import HTMLTab from './HTMLTab';
import CSSTab from './CSSTab';



export default function Input ({
	htmlText, setHtmlText,
	cssText, setCssText
}) {

	const htmlProps = {htmlText, setHtmlText};
	const cssProps = {cssText, setCssText};

	return (
		<div className="Input grow bg-slate-200 border-r-2 border-slate-600 flex flex-col">
			<div className="grow flex">
				<HTMLTab {...htmlProps} />
				<CSSTab {...cssProps} />
			</div>
		</div>
	);
}
