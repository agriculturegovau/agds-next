import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '../../../../test-utils';
import { Scrollbar } from './Scrollbar';
import type { ScrollbarProps } from './Scrollbar';

expect.extend(toHaveNoViolations);

function renderScrollbar(props?: Partial<ScrollbarProps>) {
	return render(<Scrollbar {...props}>{props?.children}</Scrollbar>);
}

describe('Scrollbar', () => {
	it('renders correctly', () => {
		const { container } = renderScrollbar();
		expect(container).toMatchSnapshot();
	});
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderScrollbar();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
