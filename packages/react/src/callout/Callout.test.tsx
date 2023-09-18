import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Text } from '../text';
import { cleanup, render } from '../../../../test-utils';
import { Callout, CalloutProps } from './Callout';
import { calloutToneMap, calloutVariantMap } from './utils';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderCallout(props?: Partial<CalloutProps>) {
	return render(
		<Callout title="Callout heading" {...props}>
			<Text as="p">Description of the callout.</Text>
		</Callout>
	);
}

const calloutVariants = Object.keys(calloutVariantMap) as Array<
	keyof typeof calloutVariantMap
>;

describe('Callout', () => {
	it('renders correctly', () => {
		const { container } = renderCallout();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderCallout();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	calloutVariants.forEach((variant) => {
		describe(`with ${variant} variant`, () => {
			const calloutTones = Object.keys(calloutToneMap(variant)) as Array<
				keyof typeof calloutToneMap
			>;
			calloutTones.forEach((tone) => {
				describe(`and ${tone} tone`, () => {
					it('renders correctly', () => {
						const { container } = renderCallout({
							variant: variant,
							tone: tone,
						});
						expect(container).toMatchSnapshot();
					});

					it('renders valid HTML with no a11y violations', async () => {
						const { container } = renderCallout();
						expect(container).toHTMLValidate({
							extends: ['html-validate:recommended'],
						});
						expect(await axe(container)).toHaveNoViolations();
					});
				});
			});
		});
	});
});
