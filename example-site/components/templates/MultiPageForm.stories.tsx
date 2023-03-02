import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { FormExampleMultiStep } from '../FormExampleMultiStep/FormExampleMultiStep';
import { MultiPageFormIntro } from './MultiPageFormIntro';
import { MultiPageFormSuccess } from './MultiPageFormSuccess';

export default {
	title: 'Templates/Multi-page Form',
	parameters: {
		layout: 'fullscreen',
	},
};

export const IntroPage = () => {
	return (
		<PageTemplate>
			<MultiPageFormIntro />
		</PageTemplate>
	);
};

export const FormPage = () => {
	return (
		<PageTemplate focusMode>
			<FormExampleMultiStep />
		</PageTemplate>
	);
};

export const SuccessPage = () => {
	return (
		<PageTemplate>
			<MultiPageFormSuccess />
		</PageTemplate>
	);
};
