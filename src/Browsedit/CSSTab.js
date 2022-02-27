import {Heading} from './Utils';
import LineNumbers from './LineNumbers';



export default function CSSTab ({
	cssText, setCssText
}) {

	return (
		<div className="CSSTab basis-0 grow p-4 bg-slate-200 flex flex-col">
			<Heading>CSS</Heading>
			<div className="grow flex">
				<LineNumbers text={cssText} />
				<textarea value={cssText} onChange={(e) => setCssText(e.target.value)} className="textarea"></textarea>
			</div>
		</div>
	);
}
