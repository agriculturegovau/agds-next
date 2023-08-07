import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render, screen } from '../../../../test-utils';
import { Text, TextProps } from './Text';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderText(props: Partial<TextProps>) {
	return render(<Text {...props}>Text element</Text>);
}

describe('Text', () => {
	it('renders correctly', () => {
		const { container } = renderText({});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderText({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('can render a paragraph tag using the `as` prop', () => {
		render(
			<Text as="p" data-testid="example">
				Paragraph element
			</Text>
		);
		expect(screen.getByTestId('example').tagName).toBe('P');
	});
});
