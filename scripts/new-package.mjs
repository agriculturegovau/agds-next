export default function newPackage(
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
	plop.setHelper('website', () => 'https://design-system.agriculture.gov.au');

	plop.setGenerator('component', {
		description: 'Add new component',
		prompts: [
			{
				type: 'input',
				name: 'packageName',
				message: 'Package name, all lowercase (e.g. button-link)',
				validate: (answer) => answer.length > 0,
			},
			{
				type: 'input',
				name: 'componentName',
				message: 'Component name, in PascalCase (e.g. ButtonLink)',
				validate: (answer) => answer.length > 0,
			},
			{
				type: 'list',
				name: 'projectCategory',
				message:
					'Component category, what category does this component belong to?',
				choices: Object.keys(mapProjectCategory),
			},
		],

		actions: (answers) => {
			const actions = [];
			if (!answers) return actions;

			const { componentName, packageName, projectCategory } = answers;

			const projectCategorySlug = mapProjectCategory[projectCategory];

			actions.push({
				type: 'addMany',
				templateFiles: '../plop-templates/component/**',
				base: '../plop-templates/component/',
				destination: `../packages/react/src/${packageName}`,
				data: { componentName, packageName, projectCategorySlug },
			});

			actions.push({
				type: 'append',
				path: '../docs/components/designSystemComponents.tsx',
				template:
					'export { {{componentName}} } from "@ag.ds-next/react/{{packageName}}"\n',
			});

			actions.push({
				type: 'add',
				path: '../.changeset/plop-create-{{packageName}}.md',
				template:
					"---\n'@ag.ds-next/react': minor\n'@ag.ds-next/docs': minor\n---\n\n{{componentName}}: Initial release of component\n",
			});

			return actions;
		},
	});
}

const mapProjectCategory = {
	Brand: 'brand',
	Content: 'content',
	Forms: 'forms',
	Foundations: 'foundations',
	Layout: 'layout',
	Navigation: 'navigation',
};
