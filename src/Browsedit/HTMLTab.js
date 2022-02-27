import {Heading} from './Utils';
import LineNumbers from './LineNumbers';



export default function HTMLTab ({
	htmlText, setHtmlText
}) {

	return (
		<div className="HTMLTab basis-0 grow p-4 flex flex-col">
			<Heading>HTML</Heading>
			<div className="grow flex">
				<LineNumbers text={htmlText} />
				<textarea value={htmlText} onChange={(e) => setHtmlText(e.target.value)} className="textarea"></textarea>
			</div>
		</div>
	);
}
