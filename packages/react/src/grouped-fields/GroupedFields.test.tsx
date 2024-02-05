import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { GroupedFields } from './GroupedFields';
import type { GroupedFieldsProps } from './GroupedFields';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderGroupedFields(props?: Partial<GroupedFieldsProps>) {
	return render(<GroupedFields {...props} />);
}

describe('GroupedFields', () => {
	it('renders correctly', () => {
		const { container } = renderGroupedFields();
		expect(container).toMatchSnapshot();
	});
	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderGroupedFields();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
