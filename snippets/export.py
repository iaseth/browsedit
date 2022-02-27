import json
import os



def main():
	htmls =  [item for item in os.listdir() if item.endswith(".html")]

	snippets = []
	for i, filename in enumerate(htmls):
		print(f"[{i+1} of {len(htmls)}]: {filename}")
		lines = [x.rstrip() for x in open(filename).read().split("\n")]

		dashline_1 = False
		dashline_2 = False
		for index, line in enumerate(lines):
			if (line.startswith("====")):
				if not dashline_1:
					dashline_1 = index
				elif not dashline_2:
					dashline_2 = index
				else:
					break

		json_text = "{" + "\n".join(lines[:dashline_1]) + "}"
		html_text = "\n".join(lines[dashline_1+1:dashline_2])
		css_text = "\n".join(lines[dashline_2+1:])

		snippet = {}
		snippet["name"] = filename[:-5]
		snippet["meta"] = json.loads(json_text)
		snippet["html"] = html_text
		snippet["css"] = css_text
		snippets.append(snippet)

	jo = {}
	jo["snippets"] = snippets
	# print(json.dumps(jo, indent="\t"))

	output_filename = "../src/snippets.json"
	with open(output_filename, "w") as f:
		json.dump(jo, f)
		print(f"\t==== saved {len(htmls)} snippets to {output_filename}.")
	pass

if __name__ == '__main__':
	main()
