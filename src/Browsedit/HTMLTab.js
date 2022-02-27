


export default function HTMLTab ({
	htmlText, setHtmlText
}) {

	return (
		<div className="HTMLTab basis-0 grow p-4 bg-slate-200 flex flex-col">
			<h2 className="font-bold text-xl px-2 pb-2">HTML</h2>
			<div className="grow">
				<textarea value={htmlText} onChange={(e) => setHtmlText(e.target.value)} className="textarea"></textarea>
			</div>
		</div>
	);
}
