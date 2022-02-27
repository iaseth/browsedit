


export default function Output ({
	htmlText, cssText
}) {

	return (
		<div className="Output grow max-w-lg p-4 bg-white">
			<style>{cssText}</style>
			<div dangerouslySetInnerHTML={{__html: htmlText}}></div>
		</div>
	);
}
