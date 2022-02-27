import {Heading} from './Utils';



export default function HTMLTab ({
	htmlText, setHtmlText
}) {

	return (
		<div className="HTMLTab basis-0 grow p-4 bg-slate-200 flex flex-col">
			<Heading>HTML</Heading>
			<div className="grow">
				<textarea value={htmlText} onChange={(e) => setHtmlText(e.target.value)} className="textarea"></textarea>
			</div>
		</div>
	);
}
