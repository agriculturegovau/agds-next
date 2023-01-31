import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { Avatar } from './Avatar';
import type { AvatarProps } from './Avatar';

afterEach(cleanup);

function renderAvatar(props: AvatarProps) {
	return render(<Avatar {...props} />);
}

describe('Avatar', () => {
	it('renders correctly', () => {
		const { container } = renderAvatar({
			name: 'Anthony Albanese',
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderAvatar({
			name: 'Anthony Albanese',
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});

	it('renders the correct aria attributes', () => {
		const { container } = renderAvatar({
			name: 'Anthony Albanese',
			'aria-hidden': 'true',
			'aria-label': 'Avatar for Anthony Albanese',
		});
		const el = container.firstChild;
		expect(el).toHaveAttribute('aria-hidden', 'true');
		expect(el).toHaveAttribute('aria-label', 'Avatar for Anthony Albanese');
	});
});
