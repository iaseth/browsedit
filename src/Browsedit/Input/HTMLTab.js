


export default function HTMLTab ({
	htmlText, setHtmlText
}) {

	return (
		<div className="HTMLTab h-full grow p-4 flex flex-col">
			<h2 className="font-bold text-xl px-2 pb-2">HTML</h2>
			<div className="grow">
				<textarea value={htmlText} onChange={(e) => setHtmlText(e.target.value)} className="block w-full h-full px-3 py-2 font-mono outline-none"></textarea>
			</div>
		</div>
	);
}
