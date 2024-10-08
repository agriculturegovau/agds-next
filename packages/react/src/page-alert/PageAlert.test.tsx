import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { Text } from '../text';
import { TextLink } from '../text-link';
import { ListItem, UnorderedList } from '../list';
import { cleanup, render, screen } from '../../../../test-utils';
import { PageAlert, PageAlertProps } from './PageAlert';
import { PageAlertTitle } from './PageAlertTitle';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderPageAlert(props: PageAlertProps) {
	return render(<PageAlert {...props} />);
}

const tones = [
	{
		tone: 'info',
		title: 'Notice',
		children: (
			<Text as="p">
				All vacancies close on the advertised closing date unless otherwise
				specified.
			</Text>
		),
	},
	{
		tone: 'success',
		title: 'Submission successful',
		children: (
			<Text as="p">Your application has been successfully submitted.</Text>
		),
	},
	{
		tone: 'error',
		title: 'There is a problem',
		children: (
			<UnorderedList>
				<ListItem>
					<TextLink href="#">Full name must not be empty</TextLink>
				</ListItem>
			</UnorderedList>
		),
	},
	{
		tone: 'warning',
		title: 'Browser out of date',
		children: <Text as="p">Your web browser is out of date.</Text>,
	},
] as const;

describe('PageAlert', () => {
	tones.forEach((props) => {
		describe(`tone: ${props.tone}`, () => {
			it('renders correctly', () => {
				const { container } = renderPageAlert(props);
				expect(container).toMatchSnapshot();
			});

			it('renders valid HTML with no a11y violations', async () => {
				const { container } = renderPageAlert(props);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
				expect(await axe(container)).toHaveNoViolations();
			});
		});
	});

	it('can render a different heading level', () => {
		renderPageAlert({
			tone: 'info',
			title: <PageAlertTitle as="h3">Title</PageAlertTitle>,
		});
		const el = screen.getByText('Title');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('H3');
	});

	describe('with a close button', () => {
		it('renders correctly', () => {
			const { container } = renderPageAlert({
				tone: 'info',
				title: 'PageAlert with close button',
				children: <Text as="p">This is a Page alert component.</Text>,
				onClose: jest.fn(),
			});

			expect(container).toMatchSnapshot();
		});

		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderPageAlert({
				tone: 'info',
				title: 'PageAlert with close button',
				children: <Text as="p">This is a Page alert component.</Text>,
				onClose: jest.fn(),
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
			expect(await axe(container)).toHaveNoViolations();
		});

		it('responds to an onClose event', async () => {
			const onClose = jest.fn();
			renderPageAlert({
				tone: 'info',
				title: 'PageAlert with close button',
				children: <Text as="p">This is a Page alert component.</Text>,
				onClose,
			});

			const el = screen.getByLabelText('Close');
			expect(el).toBeInTheDocument();
			expect(el).toHaveAccessibleName('Close');
			expect(el.tagName).toEqual('BUTTON');
			await userEvent.click(el);
			expect(onClose).toHaveBeenCalledTimes(1);
		});

		it('responds to an onDismiss event', async () => {
			const onDismiss = jest.fn();
			renderPageAlert({
				tone: 'info',
				title: 'PageAlert with close button',
				children: <Text as="p">This is a Page alert component.</Text>,
				onDismiss,
			});

			const el = screen.getByLabelText('Close');
			expect(el).toBeInTheDocument();
			expect(el).toHaveAccessibleName('Close');
			expect(el.tagName).toEqual('BUTTON');
			await userEvent.click(el);
			expect(onDismiss).toHaveBeenCalledTimes(1);
		});
	});
});
