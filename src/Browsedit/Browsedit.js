import React from 'react';

import HTMLTab from './HTMLTab';
import CSSTab from './CSSTab';
import Output from './Output';



export default function Browsedit () {
	const [htmlText, setHtmlText] = React.useState("");
	const [cssText, setCssText] = React.useState("");

	const htmlProps = {htmlText, setHtmlText};
	const cssProps = {cssText, setCssText};

	const outputProps = {
		htmlText, cssText
	};

	return (
		<div className="Browsedit">
			<div className="min-h-screen md:flex md:items-stretch bg-slate-300">
				<Output {...outputProps} />
				<HTMLTab {...htmlProps} />
				<CSSTab {...cssProps} />
			</div>
		</div>
	);
}
