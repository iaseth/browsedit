


export default function TabBar ({
	tabs, currentTabIndex, setCurrentTabIndex
}) {

	const tabItems = tabs.map((v, i) => {
		let tabClass = "font-bold px-5 py-3";
		tabClass += (i === currentTabIndex) ? " bg-slate-100" : " cursor-pointer hover:bg-slate-200";
		return <div key={i} className={tabClass} onClick={() => setCurrentTabIndex(i)}>{v}</div>;
	});

	return (
		<div className="TabBar bg-slate-300 text-black">
			<div className="flex">
				{tabItems}
			</div>
		</div>
	);
}
