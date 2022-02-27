import {Heading} from './Utils';
import Textarea from './Textarea';



export default function HTMLTab ({
	htmlText, setHtmlText
}) {

	return (
		<div className="HTMLTab basis-0 grow p-4 pt-2 flex flex-col">
			<Heading>HTML</Heading>
			<Textarea text={htmlText} setText={setHtmlText} />
		</div>
	);
}
