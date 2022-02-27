import React from 'react';

import HTMLTab from './HTMLTab';
import CSSTab from './CSSTab';
import Output from './Output';

import snippets_json from '../snippets.json';
const snippets = snippets_json.snippets;



export default function Browsedit () {
	const first_snippet = snippets[0];
	const [htmlText, setHtmlText] = React.useState(first_snippet.html);
	const [cssText, setCssText] = React.useState(first_snippet.css);

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
