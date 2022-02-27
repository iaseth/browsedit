


export default function CSSTab ({
	cssText, setCssText
}) {

	return (
		<div className="CSSTab basis-0 grow p-4 flex flex-col">
			<h2 className="font-bold text-xl px-2 pb-2">CSS</h2>
			<div className="grow">
				<textarea value={cssText} onChange={(e) => setCssText(e.target.value)} className="textarea"></textarea>
			</div>
		</div>
	);
}
