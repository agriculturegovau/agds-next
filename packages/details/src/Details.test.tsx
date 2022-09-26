import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '@testing-library/react';
import { Details } from './Details';
import type { DetailsProps } from './Details';

afterEach(cleanup);

function renderDetail(props?: Partial<DetailsProps>) {
	return render(<Details {...props} />);
}

describe('Details', () => {
	it('renders a valid HTML structure', () => {
		const { container } = renderDetail();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
