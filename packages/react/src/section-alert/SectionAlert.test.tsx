import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { SectionAlert } from './SectionAlert';
import type { SectionAlertProps } from './SectionAlert';

afterEach(cleanup);

function renderSectionAlert(props?: Partial<SectionAlertProps>) {
	return render(<SectionAlert {...props} />);
}

describe('SectionAlert', () => {
	it('renders correctly', () => {
		const { container } = renderSectionAlert();
		expect(container).toMatchSnapshot();
	});
	it('renders a valid HTML structure', () => {
		const { container } = renderSectionAlert();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
