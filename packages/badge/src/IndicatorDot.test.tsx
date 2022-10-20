import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { IndicatorDot, IndicatorDotProps } from './IndicatorDot';
import { badgeToneMap, BadgeTone } from './utils';

afterEach(cleanup);

function renderIndicatorDot(props: IndicatorDotProps) {
	return render(<IndicatorDot {...props} />);
}

const tones = Object.keys(badgeToneMap) as BadgeTone[];

describe('IndicatorDot', () => {
	tones.forEach((tone) => {
		describe(`tone: ${tone}`, () => {
			it('renders correctly', () => {
				const { container } = renderIndicatorDot({ tone });
				expect(container).toMatchSnapshot();
			});

			it('renders a valid HTML structure', () => {
				const { container } = renderIndicatorDot({ tone });
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
			});
		});
	});
});
