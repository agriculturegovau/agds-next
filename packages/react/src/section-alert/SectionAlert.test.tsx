import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { Text } from '../text';
import type { SectionAlertProps } from './SectionAlert';
import { SectionAlert } from './SectionAlert';
import {
	SectionAlertTone,
	sectionAlertLegacyTonesMap,
	sectionAlertToneMap,
} from './utils';

const sectionAlertTones = Object.keys(
	sectionAlertToneMap
) as Array<SectionAlertTone>;

const sectionAlertLegacyToneMap = Object.keys(
	sectionAlertLegacyTonesMap
) as Array<SectionAlertTone>;

afterEach(cleanup);

function renderSectionAlert(props?: Partial<SectionAlertProps>) {
	return render(
		<SectionAlert title="Title of Section alert" tone="success" {...props} />
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
						rules: {
							'prefer-native-element': 'off',
							// react 18s `useId` break this rule
							'valid-id': 'off',
						},
					});
				});
			});
		});
	}

	{
		sectionAlertLegacyToneMap.forEach((tone) => {
			describe(`with legacy ${tone}`, () => {
				const { container } = renderSectionAlert({ tone });
				expect(container).toMatchSnapshot();
			});
			it('renders a valid HTML structure', () => {
				const { container } = renderSectionAlert({ tone });
				expect(container).toHTMLValidate({
					extends: ['html-validate:recommended'],
					rules: {
						'prefer-native-element': 'off',
						// react 18s `useId` break this rule
						'valid-id': 'off',
					},
				});
			});
		});
	}

	describe('with a description', () => {
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
				rules: {
					'prefer-native-element': 'off',
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
		});
	});

	describe('which is closable', () => {
		const onClose = jest.fn();
		const onDismiss = jest.fn();

		it('renders correctly', () => {
			const { container } = renderSectionAlert({
				onClose,
			});
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderSectionAlert({
				onClose,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					'prefer-native-element': 'off',
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});
		});
		it('calls the onClose function when clicked', () => {
			const { getByRole } = renderSectionAlert({
				onClose,
			});
			const dismissButton = getByRole('button');
			expect(onClose).not.toHaveBeenCalled();
			dismissButton.click();
			expect(onClose).toHaveBeenCalledTimes(1);
		});
		it('calls the onDismiss function when clicked', () => {
			const { getByRole } = renderSectionAlert({
				onDismiss,
			});
			const dismissButton = getByRole('button');
			expect(onDismiss).not.toHaveBeenCalled();
			dismissButton.click();
			expect(onDismiss).toHaveBeenCalledTimes(1);
		});
	});
});
