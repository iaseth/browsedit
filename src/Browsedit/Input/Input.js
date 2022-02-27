import React from 'react';

import TabBar from './TabBar';
import HTMLTab from './HTMLTab';
import CSSTab from './CSSTab';

const tabs = [
	"HTML", "CSS"
];



export default function Input ({
	htmlText, setHtmlText,
	cssText, setCssText
}) {

	const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

	const tabBarProps = {
		tabs, currentTabIndex, setCurrentTabIndex
	};

	function getCurrentTab () {
		let tabName = tabs[currentTabIndex];

		if (tabName === "HTML") {
			const props = {htmlText, setHtmlText};
			return <HTMLTab {...props} />;
		} else if (tabName === "CSS") {
			const props = {cssText, setCssText};
			return <CSSTab {...props} />;
		}
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
