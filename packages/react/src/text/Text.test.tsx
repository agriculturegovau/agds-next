import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render, screen } from '../../../test-utils';
import { Text, TextProps } from './Text';

afterEach(cleanup);

function renderText(props: Partial<TextProps>) {
	return render(<Text {...props}>Text element</Text>);
}

describe('Text', () => {
	it('renders correctly', () => {
		const { container } = renderText({});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderText({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
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
