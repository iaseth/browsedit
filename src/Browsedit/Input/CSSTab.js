


export default function CSSTab ({
	cssText, setCssText
}) {

	return (
		<div className="CSSTab h-full">
			<div className="h-full">
				<textarea value={cssText} onChange={(e) => setCssText(e.target.value)} className="block w-full h-full px-4 py-2 font-mono outline-none"></textarea>
			</div>
		</div>
	);
}
