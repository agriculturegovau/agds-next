import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { PathwayAccordion } from './PathwayAccordion';
import type { PathwayAccordionProps } from './PathwayAccordion';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderPathwayAccordion(props?: Partial<PathwayAccordionProps>) {
	return render(
		<PathwayAccordion
			tone="teal"
			title="1. Make key decisions"
			desc="The decisions you make early on can affect many areas of your business. Including the licences you need, how much tax you pay and the volume of paperwork."
			image="https://ausgov.github.io/bga-style-guide/assets/refresh-illustrations/signpost.svg"
			imageAlt="Signpost"
			{...props}
		>
			Content goes here.
		</PathwayAccordion>
	);
}

describe('PathwayAccordion', () => {
	it('renders correctly', () => {
		const { container } = renderPathwayAccordion();
		expect(container).toMatchSnapshot();
	});
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderPathwayAccordion();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
