import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import { Detail } from './Detail';
import type { DetailProps } from './Detail';

afterEach(cleanup);

function renderDetail(props?: Partial<DetailProps>) {
	return render(<Detail {...props} />);
}

describe('Detail', () => {
	it('renders a valid HTML structure', () => {
		const { container } = renderDetail();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});
