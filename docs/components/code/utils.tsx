// Find multi-line comments at start `/** ... */`
const multiLineCommentRegex = /^\/\*[\s\S]*?\*\//gi;

// Checks if the code requires React support or is JSX
// Returned value is for playroom
export function checkAndModifyCode(liveCode: string) {
	// Wrap `/* ... */` comments with brackets `{ .. }`
	let code = liveCode.replaceAll(multiLineCommentRegex, '{$&}');
	// No formatting required for JSX only
	if (code.startsWith('<') || code.endsWith('>')) return code;

	// Remove `;` from the end of `() => {};`
	if (code.endsWith(';')) {
		code = code.slice(0, -1);
	}

	const formattedCode = code.split('\n').join('\n    ');
	return `<Render>\n    {${formattedCode}}\n</Render>`;
}

const removeParentPaths = [
	'/components/',
	'/content/',
	'/foundations/',
	'/guides/',
	'/patterns/',
	'/templates/',
];

// Create a display heading based on the pathname
export function createTitleFromPathname(pathname: string) {
	// Remove known path prefixing
	const title = removeParentPaths.reduce((acc, str) => {
		if (acc.startsWith(str)) {
			return acc.replace(str, '');
		}
		return acc;
	}, pathname);

	return title
		.split('/') // Nested paths
		.map((str) => {
			// Remove `-` from file names
			const newStr = str.replaceAll('-', ' ');

			// Capitalise first letter
			return newStr.charAt(0).toUpperCase() + newStr.slice(1);
		})
		.join(': ');
}
