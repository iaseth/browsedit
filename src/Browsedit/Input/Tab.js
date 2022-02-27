


export default function Tab ({
	text, setText
}) {

	return (
		<div className="Tab h-full">
			<div className="h-full">
				<textarea value={text} onChange={(e) => setText(e.target.value)} className="block w-full h-full px-4 py-2 font-mono outline-none"></textarea>
			</div>
		</div>
	);
}
