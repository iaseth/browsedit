import {Heading} from './Utils';
import Textarea from './Textarea';



export default function CSSTab ({
	cssText, setCssText
}) {

	return (
		<div className="CSSTab basis-0 grow p-4 bg-slate-200 flex flex-col">
			<Heading>CSS</Heading>
			<Textarea text={cssText} setText={setCssText} />
		</div>
	);
}
