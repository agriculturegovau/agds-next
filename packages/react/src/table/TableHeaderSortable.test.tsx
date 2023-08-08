import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { Table } from './Table';
import { TableHead } from './TableHead';
import {
	TableHeaderSortable,
	TableHeaderSortableProps,
	TableSortDirection,
} from './TableHeaderSortable';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderTableHeaderSortable(props: TableHeaderSortableProps) {
	return render(
		<Table>
			<TableHead>
				<tr>
					<TableHeaderSortable {...props}>Example</TableHeaderSortable>
				</tr>
			</TableHead>
		</Table>
	);
}

const sortDirs: (TableSortDirection | undefined)[] = ['ASC', 'DESC', undefined];

describe('TableHeaderSortable', () => {
	sortDirs.forEach((sort) => {
		describe(`with sort direction: ${sort}`, () => {
			it('renders correctly', () => {
				const { container } = renderTableHeaderSortable({ sort });
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = renderTableHeaderSortable({ sort });
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
			});
		});
	});
});
