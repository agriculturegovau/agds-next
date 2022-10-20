import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Text } from '@ag.ds-next/text';
import { Callout } from './Callout';

afterEach(cleanup);

function renderCallout(props?: Partial<CalloutProps>) {
	return render(
		<Callout title="Callout heading" {...props}>
			<Text as="p">Description of the callout.</Text>
		</Callout>
	);
}

describe('Callout', () => {
	it('renders correctly', () => {
		const { container } = renderCallout();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderCallout();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
