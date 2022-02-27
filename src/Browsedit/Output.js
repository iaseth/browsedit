import {Heading} from './Utils';



export default function Output ({
	htmlText, cssText
}) {

	return (
		<div className="Output basis-0 grow max-w-lg p-4 bg-slate-200">
			<Heading>Output</Heading>
			<style>{cssText}</style>
			<div dangerouslySetInnerHTML={{__html: htmlText}}></div>
		</div>
	);
}
