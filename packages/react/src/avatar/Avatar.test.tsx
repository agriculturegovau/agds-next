import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { Avatar } from './Avatar';
import type { AvatarProps } from './Avatar';

afterEach(cleanup);

function renderAvatar(props?: Partial<AvatarProps>) {
	return render(<Avatar name={props.name} />);
}

describe('Avatar', () => {
	it('renders correctly', () => {
		const { container } = renderAvatar({ name: 'Oscar Piastri' });
		expect(container).toMatchSnapshot();
	});
	it('renders a valid HTML structure', () => {
		const { container } = renderAvatar({ name: 'Oscar Piastri' });
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
