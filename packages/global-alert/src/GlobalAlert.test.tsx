import '@testing-library/jest-dom';
import 'html-validate/jest';
import { Text } from '@ag.ds-next/text';
import { cleanup, render } from '../../../test-utils';
import { GlobalAlert, GlobalAlertProps } from './GlobalAlert';

afterEach(cleanup);

function renderGlobalAlert(props: GlobalAlertProps) {
	return render(<GlobalAlert {...props} />);
}

describe('GlobalAlert', () => {
	it('renders correctly', () => {
		const { container } = renderGlobalAlert({
			title: 'Alert title',
			children: <Text as="p">Alert description.</Text>,
		});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderGlobalAlert({
			title: 'Alert title',
			children: <Text as="p">Alert description.</Text>,
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
