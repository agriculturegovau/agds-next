import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { Avatar } from './Avatar';
import type { AvatarProps } from './Avatar';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderAvatar(props: AvatarProps) {
	return render(<Avatar {...props} />);
}

describe('Avatar', () => {
	it('renders correctly', () => {
		const { container } = renderAvatar({
			name: 'William Mead',
		});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderAvatar({
			name: 'William Mead',
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('renders the correct aria attributes', () => {
		const { container } = renderAvatar({
			name: 'William Mead',
			'aria-hidden': 'true',
			'aria-label': 'William Mead Avatar',
		});
		const el = container.firstChild;
		expect(el).toHaveAttribute('aria-hidden', 'true');
		expect(el).toHaveAttribute('aria-label', 'William Mead Avatar');
	});
});
