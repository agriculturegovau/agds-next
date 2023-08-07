import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import {
	TableHeaderSortable,
	TableHeaderSortableProps,
	TableSortDirection,
} from './TableHeaderSortable';

afterEach(cleanup);

function renderStatusBadge(props: TableHeaderSortableProps) {
	return render(<TableHeaderSortable {...props}>Example</TableHeaderSortable>);
}

const sortDirs: (TableSortDirection | undefined)[] = ['ASC', 'DESC', undefined];

describe('TableHeaderSortable', () => {
	sortDirs.forEach((dir) => {
		describe(`with sort direction ${dir}`, () => {
			it('renders correctly', () => {
				const { container } = renderStatusBadge({
					sort: dir,
				});
				expect(container).toMatchSnapshot();
			});
		});
	});
});
