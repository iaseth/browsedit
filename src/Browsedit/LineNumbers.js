


function numberOfLines (text) {
	let n = 1;
	for (let c of text) {
		if (c === '\n') n++;
	}
	return n;
}

export default function LineNumbers ({text}) {
	let n = numberOfLines(text);
	let items = [...Array(n)].map((v, i) => {
		return <div key={i}>{i+1}</div>;
	});

	return (
		<div className="LineNumbers text-slate-500 font-bold py-2 pr-2 text-right">
			{items}
		</div>
	);
}
