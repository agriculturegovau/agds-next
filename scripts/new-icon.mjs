export default function newIcon(
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
	plop.setGenerator('icon', {
		description: 'Add new icon',
		prompts: [
			{
				type: 'input',
				name: 'iconName',
				message:
					'Icon name, please use appropriate uppercase (e.g. ArrowDownIcon)',
				validate: (answer) => answer.length > 0,
			},
		],
		actions: (answers) => {
			const actions = [];
			if (!answers) return actions;

			const { iconName } = answers;

			actions.push({
				type: 'addMany',
				templateFiles: '../plop-templates/icon/**',
				base: '../plop-templates/icon/',
				destination: `../packages/react/src/icon/icons`,
				data: { iconName },
			});

			actions.push({
				type: 'append',
				path: '../packages/react/src/icon/index.ts',
				template: "export { {{iconName}} } from './icons/{{iconName}}';",
			});

			actions.push({
				type: 'append',
				path: '../packages/react/src/icon/utils.ts',
				template:
					"import { {{iconName}} } from './icons/{{iconName}}'; // Please add this to object below",
			});

			actions.push({
				type: 'append',
				path: '../docs/components/designSystemComponents.tsx',
				template:
					'// Please add {{iconName}} to "@ag.ds-next/react/icons above"\n',
			});

			actions.push({
				type: 'add',
				path: '../.changeset/plop-create-{{iconName}}.md',
				template:
					"---\n'@ag.ds-next/react': minor\n---\n\nicon: Created {{iconName}}\n",
			});
		},
	});
}
