import '@testing-library/jest-dom';
import 'html-validate/jest';
import { Text } from '../../text/src';
import { Prose } from '../../prose/src';
import { cleanup, render, screen } from '../../../../../../test-utils';
import { PageAlert, PageAlertProps } from './PageAlert';
import { PageAlertTitle } from './PageAlertTitle';

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
			<Prose>
				<ul>
					<li>
						<a href="#">Full name must not be empty</a>
					</li>
				</ul>
			</Prose>
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

			it('renders a valid HTML structure', () => {
				const { container } = renderPageAlert(props);
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
				});
			});
		});
	});

	it('can render a different heading level', () => {
		renderPageAlert({
			tone: 'info',
			children: <PageAlertTitle as="h2">Title</PageAlertTitle>,
		});
		const el = screen.getByText('Title');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('H2');
	});
});
