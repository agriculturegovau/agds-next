/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const docgen = require('react-docgen-typescript');

const repoRoot = path.join(process.cwd(), '..');
const packages = path.join(repoRoot, 'packages', '**/*.tsx');
const outputFolder = path.join((process.cwd(), '__generated__'));
const outputFile = path.join(outputFolder, 'componentProps.json');

const tsConfigParser = docgen.withCustomConfig('./tsconfig.json', {
	skipChildrenPropWithoutDoc: false,
	savePropValueAsString: true,
	shouldRemoveUndefinedFromOptional: true,
});

glob(packages, {}, function (_, files) {
	const data = Object.fromEntries(
		tsConfigParser.parse(files).map(({ displayName, description, props }) => {
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
});
