import fs from "fs";
import docs from "../google.config.js";

const CWD = process.cwd();

const hdr = '\n' +
'<script>\n' +
'import { base } from "$app/paths";\n' +
'</script>\n\n'

const fetchGoogle = async ({ id, gid }) => {
	console.log(`fetching...${id}`);

	const base = "https://docs.google.com";
	const post = gid
		? `spreadsheets/u/1/d/${id}/export?format=csv&id=${id}&gid=${gid}`
		: `document/d/${id}/export?format=txt`;
	const url = `${base}/${post}`;

	try {
		const response = await fetch(url);
		const text = await response.text();

		if (gid) return text;

		console.log(text);
		return text;
	} catch (err) {
		throw new Error(err);
	}
};

(async () => {
	for (let d of docs) {
		try {
			const str = await fetchGoogle(d);
			const file = `${CWD}/${d.filepath}`;
			fs.writeFileSync(file, hdr + str);
		} catch (err) {
			console.log(err);
		}
	}
})();
