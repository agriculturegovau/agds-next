import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Text } from '@ag.ds-next/text';
import { Accordion } from './Accordion';
import { AccordionItem, AccordionItemContent } from './AccordionItem';

afterEach(cleanup);

function renderAccordion() {
	return render(
		<Accordion>
			<AccordionItem title="Accordion 1">
				<AccordionItemContent>
					<Text as="p">Accordion 1 text content.</Text>
				</AccordionItemContent>
			</AccordionItem>
			<AccordionItem title="Accordion 2">
				<AccordionItemContent>
					<Text as="p">Accordion 2 text content.</Text>
				</AccordionItemContent>
			</AccordionItem>
		</Accordion>
	);
}

describe('Accordion', () => {
	it('renders correctly', () => {
		const { container } = renderAccordion();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderAccordion();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// Our HTML is based off ARIA APG https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html
				'prefer-native-element': 'off',
				// We use a deterministic mock ID in tests
				'no-dup-id': 'off',
			},
		});
	});

	it('to have correct aria attributes when toggling accordion item', async () => {
		renderAccordion();
		const titleEl = screen.getByText('Accordion 1');
		const bodyEl = screen.getByText('Accordion 1 text content.').parentElement
			?.parentElement?.parentElement as HTMLDivElement;
		expect(titleEl).toBeInTheDocument();
		expect(titleEl).toHaveAttribute('aria-controls', bodyEl.id);
		expect(bodyEl).toHaveAttribute('aria-labelledby', titleEl.id);
		expect(titleEl.tagName).toBe('BUTTON');
		expect(titleEl).toHaveAccessibleName('Accordion 1');
		expect(titleEl).toHaveAttribute('aria-expanded', 'false');
		await userEvent.click(titleEl);
		expect(titleEl).toHaveAttribute('aria-expanded', 'true');
	});
});
