import { Pkg } from '../lib/mdx/packages';
import { calculateImportString } from './PkgLayout';

const examplePkg: Pkg = {
	name: 'example-package',
	deprecated: false,
	description: 'An example package for testing',
	figmaGalleryNodeId: '123456789',
	relatedComponents: [],
	relatedPatterns: [],
	slug: 'example-package',
	storybookPath: '/example-package',
	title: 'Example package',
	unreleased: true,
	subNavItems: [],
	importNames: null,
};

const singleImportExamplePkg: Pkg = {
	...examplePkg,
	importNames: ['ExamplePackageOne'],
};
const multiImportExamplePkg: Pkg = {
	...examplePkg,
	importNames: ['ExamplePackageOne', 'ExamplePackageTwo'],
};

describe('calculateImportString', () => {
	it('renders default import correctly', () => {
		const importStatement = calculateImportString(examplePkg);
		expect(importStatement).toBe(
			`import { ExamplePackage } from '@ag.ds-next/react/example-package';`
		);
	});

	it('renders single explicit import correctly', () => {
		const importStatement = calculateImportString(singleImportExamplePkg);
		expect(importStatement).toBe(
			`import { ExamplePackageOne } from '@ag.ds-next/react/example-package';`
		);
	});

	it('renders multi explicit imports correctly', async () => {
		const importStatement = calculateImportString(multiImportExamplePkg);
		expect(importStatement).toBe(
			`import {
    ExamplePackageOne,
    ExamplePackageTwo,
} from '@ag.ds-next/react/example-package';`
		);
	});
});
