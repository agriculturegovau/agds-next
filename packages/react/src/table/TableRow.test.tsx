import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
} from '../../../../test-utils';
import { Checkbox } from '../checkbox';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCaption } from './TableCaption';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableWrapper } from './TableWrapper';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderTable(
	onClickTableRow: jest.Mock<unknown> | undefined = undefined,
	onClickButton: jest.Mock<unknown> | undefined = undefined,
	onClickCheckbox: jest.Mock<unknown> | undefined = undefined
) {
	return render(
		<TableWrapper>
			<Table id="table">
				<TableCaption>
					Population of Australian states and territories, December 2015
				</TableCaption>
				<TableHead>
					<TableRow>
						<TableHeader scope="col">Location</TableHeader>
						<TableHeader scope="col" textAlign="right">
							Population
						</TableHeader>
						<TableHeader scope="col" textAlign="right">
							Change over previous year %
						</TableHeader>
						<TableHeader scope="col" textAlign="right">
							Change over previous decade %
						</TableHeader>
						<TableHeader scope="col">Actions</TableHeader>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow onClick={onClickTableRow}>
						<TableCell>
							<Checkbox
								id="nsw-checkbox"
								onChange={onClickCheckbox}
								value="nsw"
							>
								Select checkbox
							</Checkbox>
						</TableCell>
						<TableCell as="th" scope="row">
							New South Wales
						</TableCell>
						<TableCell textAlign="right">7,670,700</TableCell>
						<TableCell textAlign="right">3.1%</TableCell>
						<TableCell textAlign="right">12.9%</TableCell>
						<TableCell>
							<button
								data-testid="remove-button"
								onClick={onClickButton}
								type="button"
							>
								Remove
							</button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableWrapper>
	);
}

describe('TableRow', () => {
	it('renders correctly', () => {
		const { container } = renderTable();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderTable();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				'no-redundant-for': 'off', // disabled for Checkbox component
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	describe('row onClick', () => {
		it('executes the `onClick` event on the table row when the table cell is click', async () => {
			const mockOnClickTableRow = jest.fn(() => null);

			renderTable(mockOnClickTableRow);

			const tableCellElement = screen.getByText('New South Wales');
			act(() => {
				fireEvent.click(tableCellElement);
			});

			expect(mockOnClickTableRow).toHaveBeenCalledTimes(1);
		});

		it('does not execute the `onClick` event on the table row when the button in a table cell is clicked', async () => {
			const mockOnClickTableRow = jest.fn(() => null);
			const mockOnClickButton = jest.fn(() => null);

			renderTable(mockOnClickTableRow, mockOnClickButton);

			const buttonElement = screen.getByTestId('remove-button');
			await act(() => {
				fireEvent.click(buttonElement);
			});

			expect(mockOnClickButton).toHaveBeenCalledTimes(1);
			expect(mockOnClickTableRow).toHaveBeenCalledTimes(0);
		});

		it('does not execute the `onClick` event on the table row when the Checkbox component in a table cell is clicked', async () => {
			const mockOnClickTableRow = jest.fn(() => null);
			const mockOnClickCheckbox = jest.fn(() => null);

			renderTable(mockOnClickTableRow, undefined, mockOnClickCheckbox);

			const checkboxElement = screen.getByLabelText('Select checkbox');
			await act(() => {
				fireEvent.click(checkboxElement);
			});

			expect(mockOnClickCheckbox).toHaveBeenCalledTimes(1);
			expect(mockOnClickTableRow).toHaveBeenCalledTimes(0);
		});
	});
});
