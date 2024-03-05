const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const docgen = require('react-docgen-typescript');

const repoRoot = path.join(process.cwd(), '..');
const packages = path.join(repoRoot, 'packages', '**/*.tsx');
const outputFolder = path.join((process.cwd(), '__generated__'));
const outputFile = path.join(outputFolder, 'componentProps.json');
const outputFile2 = path.join(outputFolder, 'componentNameResolver.json');
const applayout = path.join(
	repoRoot,
	'packages/react/src/app-layout/',
	'index.ts'
);

// const arr = {};
// let arr;
let arr = [];

const tsConfigParser = docgen.withCustomConfig('./tsconfig.json', {
	propFilter: {
		skipPropsWithName: ['className', 'key'],
	},
	skipChildrenPropWithoutDoc: false,
	savePropValueAsString: true,
	shouldRemoveUndefinedFromOptional: true,
	componentNameResolver: (exp, source) => {
		// const expKeys = Object.keys(arr).filter((key) =>
		// 	key.includes('exp-')
		// ).length;

		// arr[`exp-${expKeys + 1}`] = exp;
		// arr[`source-${expKeys + 1}`] = source;

		// if (source.fileName.includes('AppLayout.tsx')) {
		// console.log(`exp`, exp);
		// arr = exp;
		// console.log(`source`, source);
		// }
		arr.push({
			exp,
			source,
		});
	},
});

// Function to stringify objects with circular references
function safeStringify(obj) {
	const seen = [];
	return JSON.stringify(obj, function (key, value) {
		if (typeof value === 'object' && value !== null) {
			if (seen.indexOf(value) !== -1) {
				// Circular reference found, discard key
				return;
			}
			// Store value in our collection
			seen.push(value);
		}
		return value;
	});
}

(async () => {
	const results = await glob(packages);

	const data = Object.fromEntries(
		tsConfigParser.parse(results).map(({ displayName, description, props }) => {
			return [
				displayName,
				{
					displayName,
					description,
					// Sort the required props before the non-required props, then sort alphabetically
					props: Object.fromEntries(
						Object.values(props)
							.sort((a, b) => {
								if (a.required !== b.required) {
									if (a.required) return -1;
									return 1;
								}
								return a.name.localeCompare(b.name);
							})
							.map((a) => [a.name, a])
					),
				},
			];
		})
	);

	// Create the output folder if it doesn't exist
	if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder);

	// Write the output from react-docgen-typescript to the output file
	fs.writeFileSync(outputFile, JSON.stringify(data));
	fs.writeFileSync(outputFile2, safeStringify(arr));
})();
