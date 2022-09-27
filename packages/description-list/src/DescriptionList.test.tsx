import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { DescriptionList } from './DescriptionList';
import type { DescriptionListProps } from './DescriptionList';

afterEach(cleanup);

function renderDescriptionList(props?: Partial<DescriptionListProps>) {
	return render(<DescriptionList {...props} />);
}

describe('DescriptionList', () => {
	it('renders a valid HTML structure', () => {
		const { container } = renderDescriptionList();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
