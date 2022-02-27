import React from 'react';

import Input from './Input';
import Output from './Output';



export default function Browsedit () {
	const [htmlText, setHtmlText] = React.useState("");
	const [cssText, setCssText] = React.useState("");
	const [jsText, setJsText] = React.useState("");

	const inputProps = {
		htmlText, setHtmlText,
		cssText, setCssText,
		jsText, setJsText
	};

	const outputProps = {
		htmlText, cssText, jsText
	};

	return (
		<div className="Browsedit">
			<div className="min-h-screen md:flex">
				<Input {...inputProps} />
				<Output {...outputProps} />
			</div>
		</div>
	);
}
