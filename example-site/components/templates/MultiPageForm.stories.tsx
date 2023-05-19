import { SiteLayout } from '../../../.storybook/components/SiteLayout';
import { AppLayout } from '../../../.storybook/components/AppLayout';
import { FormExampleMultiStep } from '../FormExampleMultiStep/FormExampleMultiStep';
import { MultiPageFormIntro } from './MultiPageFormIntro';
import { MultiPageFormSuccess } from './MultiPageFormSuccess';

export default {
	title: 'Templates/Multi-page form',
	parameters: {
		layout: 'fullscreen',
	},
};

export const IntroPage = () => {
	return (
		<SiteLayout>
			<MultiPageFormIntro />
		</SiteLayout>
	);
};

export const FormPage = () => {
	return (
		<SiteLayout focusMode>
			<FormExampleMultiStep />
		</SiteLayout>
	);
};

export const SuccessPage = () => {
	return (
		<SiteLayout>
			<MultiPageFormSuccess />
		</SiteLayout>
	);
};

export const AppIntroPage = () => {
	return (
		<AppLayout>
			<MultiPageFormIntro />
		</AppLayout>
	);
};

export const AppFormPage = () => {
	return (
		<AppLayout focusMode>
			<FormExampleMultiStep />
		</AppLayout>
	);
};

export const AppSuccessPage = () => {
	return (
		<AppLayout>
			<MultiPageFormSuccess />
		</AppLayout>
	);
};
