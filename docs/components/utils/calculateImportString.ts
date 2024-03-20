import { Pkg } from "../../lib/mdx/packages";

/**
 * Calculates what the import statement would be by providing it package data.
 *
 * If only 1 import, it outputs a string like this:
 * import { ComponentName } from '@ag.ds-next/react/component-name';
 *
 * If more than 1 import, it outputs a string like this:
 * import {
 *     ComponentOne,
 *     ComponentTwo,
 * } from '@ag.ds-next/react/component-name'
 *
 * This helps keep the string readable and not require scrolling
 */
export function calculateImportString(pkg: Pkg) {
	const hasMultipleImports = (pkg.importNames?.length || 0) > 1;

	function getImportNames(): string {
		if (!pkg.importNames?.length) {
			const defaultImportName = pkg.slug
				.split('-')
				.map(capitalizeFirstLetter)
				.join('');
			return ' ' + defaultImportName;
		}
		if (hasMultipleImports) {
			const tabInset = '\n    ';
			return tabInset + pkg.importNames?.join(',' + tabInset);
		}
		return ' ' + pkg.importNames.join(', ');
	}

	const importNames = getImportNames();
	const closingBracket = hasMultipleImports ? ',\n}' : ' }';
	const importString = `import {${importNames + closingBracket
		} from '@ag.ds-next/react/${pkg.name}';`;

	return importString;
}

function capitalizeFirstLetter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
