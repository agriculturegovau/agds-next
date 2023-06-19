import { AppLayout } from '../__shared/AppLayout';
import { MultiPageFormIntroduction } from './MultiPageFormIntroduction';
import { MultiPageFormStep } from './MultiPageFormStep';
import { MultiPageFormSummary } from './MultiPageFormSummary';
import { MultiPageFormSuccess } from './MultiPageFormSuccess';

export default {
	title: 'Templates/Multi-page form/Application layout',
	parameters: {
		layout: 'fullscreen',
	},
};

export const IntroPage = {
	render: () => (
		<AppLayout>
			<MultiPageFormIntroduction />
		</AppLayout>
	),
};

export const FormPage = {
	render: () => (
		<AppLayout focusMode>
			<MultiPageFormStep />
		</AppLayout>
	),
};

export const SummaryPage = {
	render: () => (
		<AppLayout focusMode>
			<MultiPageFormSummary />
		</AppLayout>
	),
};

export const SuccessPage = {
	render: () => (
		<AppLayout>
			<MultiPageFormSuccess />
		</AppLayout>
	),
};
