import '@testing-library/jest-dom';
import 'html-validate/jest';
import { Text } from '@ag.ds-next/react/text';
import { cleanup, render } from '../../../../test-utils';
import { SectionAlert } from './SectionAlert';
import type { SectionAlertProps } from './SectionAlert';
import { sectionAlertIconMap, SectionAlertTone } from './utils';

const sectionAlertTones = Object.keys(
	sectionAlertIconMap
) as Array<SectionAlertTone>;

afterEach(cleanup);

function renderSectionAlert(props?: Partial<SectionAlertProps>) {
	return render(
		<SectionAlert tone="success" title="Title of Section alert" {...props} />
	);
}

describe('SectionAlert', () => {
	{
		sectionAlertTones.forEach((tone) => {
			describe(`with ${tone} tone`, () => {
				it('renders correctly', () => {
					const { container } = renderSectionAlert({ tone });
					expect(container).toMatchSnapshot();
				});
				it('renders a valid HTML structure', () => {
					const { container } = renderSectionAlert({ tone });
					expect(container).toHTMLValidate({
						extends: ['html-validate:recommended'],
					});
				});
			});
		});
	}

	describe(`with a description`, () => {
		it('renders correctly', () => {
			const { container } = renderSectionAlert({
				children: <Text as="p">Section alert description text</Text>,
			});
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderSectionAlert({
				children: <Text as="p">Section alert description text</Text>,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
		});
	});

	describe(`which is dismissable`, () => {
		const onClose = jest.fn();

		it('renders correctly', () => {
			const { container } = renderSectionAlert({
				onClose: onClose,
			});
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderSectionAlert({
				onClose: onClose,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
		});
		it('calls the onClose function when clicked', () => {
			const { getByRole } = renderSectionAlert({
				onClose: onClose,
			});
			const dismissButton = getByRole('button');
			expect(onClose).not.toHaveBeenCalled();
			dismissButton.click();
			expect(onClose).toHaveBeenCalledTimes(1);
		});
	});
});
