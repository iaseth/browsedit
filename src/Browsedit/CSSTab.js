import {Heading} from './Utils';



export default function CSSTab ({
	cssText, setCssText
}) {

	return (
		<div className="CSSTab basis-0 grow p-4 flex flex-col">
			<Heading>CSS</Heading>
			<div className="grow">
				<textarea value={cssText} onChange={(e) => setCssText(e.target.value)} className="textarea"></textarea>
			</div>
		</div>
	);
}
