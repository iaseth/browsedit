import LineNumbers from './LineNumbers';



export default function Textarea ({
	text, setText
}) {
	//

	return (
		<div className="Textarea grow flex">
			<LineNumbers text={text} />
			<textarea value={text} onChange={(e) => setText(e.target.value)} className="textarea w-full px-2 py-2 outline-none resize-none"></textarea>
		</div>
	);
}
