import React from 'react';

import TabBar from './TabBar';
import Tab from './Tab';

const tabs = [
	"HTML", "CSS", "JS"
];



export default function Input ({
	htmlText, setHtmlText,
	cssText, setCssText,
	jsText, setJsText
}) {

	const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

	const tabBarProps = {
		tabs, currentTabIndex, setCurrentTabIndex
	};

	function getCurrentTab () {
		let tabName = tabs[currentTabIndex];
		let props = {};

		if (tabName === "HTML") {
			props = {
				text: htmlText,
				setText: setHtmlText,
				...props
			};
		} else if (tabName === "CSS") {
			props = {
				text: cssText,
				setText: setCssText,
				...props
			};
		} else if (tabName === "JS") {
			props = {
				text: jsText,
				setText: setJsText,
				...props
			};
		}

		return <Tab {...props} />;
	}

	return (
		<div className="Input grow bg-slate-100 border-r-2 border-slate-600 flex flex-col">
			<TabBar {...tabBarProps} />
			<div className="grow">
				{getCurrentTab()}
			</div>
		</div>
	);
}
