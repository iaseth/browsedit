import React from 'react';

import './Browsedit.css';

import Input from './Input';
import Output from './Output';



export default function Browsedit () {
	const [htmlText, setHtmlText] = React.useState("");
	const [cssText, setCssText] = React.useState("");

	const inputProps = {
		htmlText, setHtmlText,
		cssText, setCssText
	};

	const outputProps = {
		htmlText, cssText
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
