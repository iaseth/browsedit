


export default function CSSTab ({
	cssText, setCssText
}) {

	return (
		<div className="CSSTab h-full grow bg-slate-200 p-4 flex flex-col">
			<h2 className="font-bold text-xl px-2 pb-2">CSS</h2>
			<div className="grow">
				<textarea value={cssText} onChange={(e) => setCssText(e.target.value)} className="block w-full h-full px-3 py-2 font-mono outline-none"></textarea>
			</div>
		</div>
	);
}
