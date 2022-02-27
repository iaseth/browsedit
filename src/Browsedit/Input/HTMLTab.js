


export default function HTMLTab ({
	htmlText, setHtmlText
}) {

	return (
		<div className="HTMLTab h-full">
			<div className="h-full">
				<textarea value={htmlText} onChange={(e) => setHtmlText(e.target.value)} className="block w-full h-full px-4 py-2 font-mono outline-none"></textarea>
			</div>
		</div>
	);
}
