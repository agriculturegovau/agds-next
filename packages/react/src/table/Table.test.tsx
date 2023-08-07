import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Stack } from '@ag.ds-next/react/stack';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { cleanup, screen, render } from '../../../../test-utils';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCaption } from './TableCaption';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableHeader } from './TableHeader';
import { TableWrapper } from './TableWrapper';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderTableWithCaption() {
	return render(
		<TableWrapper>
			<Table id="table">
				<TableCaption>
					Population of Australian states and territories, December 2015
				</TableCaption>
				<TableHead>
					<tr>
						<TableHeader scope="col">Location</TableHeader>
						<TableHeader textAlign="right" scope="col">
							Population
						</TableHeader>
						<TableHeader textAlign="right" scope="col">
							Change over previous year %
						</TableHeader>
						<TableHeader textAlign="right" scope="col">
							Change over previous decade %
						</TableHeader>
					</tr>
				</TableHead>
				<TableBody>
					<tr>
						<TableCell as="th" scope="row">
							New South Wales
						</TableCell>
						<TableCell textAlign="right">7,670,700</TableCell>
						<TableCell textAlign="right">3.1%</TableCell>
						<TableCell textAlign="right">12.9%</TableCell>
					</tr>
					<tr>
						<TableCell as="th" scope="row">
							Victoria
						</TableCell>
						<TableCell textAlign="right">5,996,400</TableCell>
						<TableCell textAlign="right">2.5%</TableCell>
						<TableCell textAlign="right">9.3%</TableCell>
					</tr>
					<tr>
						<TableCell as="th" scope="row">
							Queensland
						</TableCell>
						<TableCell textAlign="right">4,808,800</TableCell>
						<TableCell textAlign="right">1.7%</TableCell>
						<TableCell textAlign="right">13.3%</TableCell>
					</tr>
					<tr>
						<TableCell as="th" scope="row">
							Western Australia
						</TableCell>
						<TableCell textAlign="right">2,603,900</TableCell>
						<TableCell textAlign="right">2.3%</TableCell>
						<TableCell textAlign="right">11.6%</TableCell>
					</tr>
					<tr>
						<TableCell as="th" scope="row">
							South Australia
						</TableCell>
						<TableCell textAlign="right">1,702,800</TableCell>
						<TableCell textAlign="right">2.0%</TableCell>
						<TableCell textAlign="right">6.8%</TableCell>
					</tr>
					<tr>
						<TableCell as="th" scope="row">
							Tasmania
						</TableCell>
						<TableCell textAlign="right">517,400</TableCell>
						<TableCell textAlign="right">4%</TableCell>
						<TableCell textAlign="right">5.3%</TableCell>
					</tr>
					<tr>
						<TableCell as="th" scope="row">
							Northern Territory
						</TableCell>
						<TableCell textAlign="right">244,400</TableCell>
						<TableCell textAlign="right">1.2%</TableCell>
						<TableCell textAlign="right">4.5%</TableCell>
					</tr>
					<tr>
						<TableCell as="th" scope="row">
							Australian Capital Territory
						</TableCell>
						<TableCell textAlign="right">393,000</TableCell>
						<TableCell textAlign="right">2.4%</TableCell>
						<TableCell textAlign="right">9.6%</TableCell>
					</tr>
				</TableBody>
			</Table>
		</TableWrapper>
	);
}

function renderTableWithHeadings() {
	return render(
		<Stack gap={1}>
			<H1 id="table-heading">Applications</H1>
			<Text id="table-description">
				This list of active establishment registrations
			</Text>
			<TableWrapper>
				<Table
					id="table"
					aria-labelledby="table-heading"
					aria-describedby="table-description"
				>
					<TableHead>
						<tr>
							<TableHeader scope="col">Location</TableHeader>
							<TableHeader textAlign="right" scope="col">
								Population
							</TableHeader>
							<TableHeader textAlign="right" scope="col">
								Change over previous year %
							</TableHeader>
							<TableHeader textAlign="right" scope="col">
								Change over previous decade %
							</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						<tr>
							<TableCell as="th" scope="row">
								New South Wales
							</TableCell>
							<TableCell textAlign="right">7,670,700</TableCell>
							<TableCell textAlign="right">3.1%</TableCell>
							<TableCell textAlign="right">12.9%</TableCell>
						</tr>
						<tr>
							<TableCell as="th" scope="row">
								Victoria
							</TableCell>
							<TableCell textAlign="right">5,996,400</TableCell>
							<TableCell textAlign="right">2.5%</TableCell>
							<TableCell textAlign="right">9.3%</TableCell>
						</tr>
						<tr>
							<TableCell as="th" scope="row">
								Queensland
							</TableCell>
							<TableCell textAlign="right">4,808,800</TableCell>
							<TableCell textAlign="right">1.7%</TableCell>
							<TableCell textAlign="right">13.3%</TableCell>
						</tr>
						<tr>
							<TableCell as="th" scope="row">
								Western Australia
							</TableCell>
							<TableCell textAlign="right">2,603,900</TableCell>
							<TableCell textAlign="right">2.3%</TableCell>
							<TableCell textAlign="right">11.6%</TableCell>
						</tr>
						<tr>
							<TableCell as="th" scope="row">
								South Australia
							</TableCell>
							<TableCell textAlign="right">1,702,800</TableCell>
							<TableCell textAlign="right">2.0%</TableCell>
							<TableCell textAlign="right">6.8%</TableCell>
						</tr>
						<tr>
							<TableCell as="th" scope="row">
								Tasmania
							</TableCell>
							<TableCell textAlign="right">517,400</TableCell>
							<TableCell textAlign="right">4%</TableCell>
							<TableCell textAlign="right">5.3%</TableCell>
						</tr>
						<tr>
							<TableCell as="th" scope="row">
								Northern Territory
							</TableCell>
							<TableCell textAlign="right">244,400</TableCell>
							<TableCell textAlign="right">1.2%</TableCell>
							<TableCell textAlign="right">4.5%</TableCell>
						</tr>
						<tr>
							<TableCell as="th" scope="row">
								Australian Capital Territory
							</TableCell>
							<TableCell textAlign="right">393,000</TableCell>
							<TableCell textAlign="right">2.4%</TableCell>
							<TableCell textAlign="right">9.6%</TableCell>
						</tr>
					</TableBody>
				</Table>
			</TableWrapper>
		</Stack>
	);
}

describe('Table', () => {
	describe('with TableCaption', () => {
		it('renders correctly', () => {
			const { container } = renderTableWithCaption();
			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderTableWithCaption();
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		it('has correct accessible name and description', () => {
			renderTableWithCaption();
			const table = screen.getByRole('table');

			expect(table).toHaveAccessibleName(
				'Population of Australian states and territories, December 2015'
			);
		});
	});

	describe('with headings', () => {
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderTableWithHeadings();
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		it('has correct accessible name and description', () => {
			renderTableWithHeadings();
			const table = screen.getByRole('table');

			expect(table).toHaveAccessibleDescription(
				'This list of active establishment registrations'
			);
			expect(table).toHaveAccessibleName('Applications');
		});
	});
});
