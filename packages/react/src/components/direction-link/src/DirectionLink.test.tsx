import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../../../test-utils';
import {
	DirectionLink,
	DirectionLinkProps,
	DirectionButton,
	DirectionButtonProps,
} from './DirectionLink';

afterEach(cleanup);

const directions = [
	{
		direction: 'left',
		label: 'Back',
	},
	{
		direction: 'right',
		label: 'Next',
	},
	{
		direction: 'up',
		label: 'Top',
	},
	{
		direction: 'down',
		label: 'Skip to footer',
	},
] as const;

function renderDirectionLink(props: DirectionLinkProps) {
	return render(<DirectionLink {...props} />);
}

describe('DirectionLink', () => {
	for (const { direction, label } of directions) {
		describe(`direction: ${direction}`, () => {
			it('renders correctly', () => {
				const { container } = renderDirectionLink({
					direction,
					children: label,
				});
				expect(container).toMatchSnapshot();
			});

			it('renders a valid HTML structure', () => {
				const { container } = renderDirectionLink({
					direction,
					children: label,
				});
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
			});
		});
	}
});

function renderDirectionButton(props: DirectionButtonProps) {
	return render(<DirectionButton {...props} />);
}

describe('DirectionButton', () => {
	for (const { direction, label } of directions) {
		describe(`direction: ${direction}`, () => {
			it('renders correctly', () => {
				const { container } = renderDirectionButton({
					direction,
					children: label,
				});
				expect(container).toMatchSnapshot();
			});

			it('renders a valid HTML structure', () => {
				const { container } = renderDirectionButton({
					direction,
					children: label,
				});
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
			});
		});
	}
});
