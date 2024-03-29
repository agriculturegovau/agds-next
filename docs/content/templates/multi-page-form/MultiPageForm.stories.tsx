import { SiteLayout } from '../__shared/SiteLayout';
import { MultiPageFormIntroduction } from './MultiPageFormIntroduction';
import { MultiPageFormStep } from './MultiPageFormStep';
import { MultiPageFormSummary } from './MultiPageFormSummary';
import { MultiPageFormSuccess } from './MultiPageFormSuccess';

const meta = {
	title: 'Templates/Multi-page form',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const IntroPage = {
	render: () => (
		<SiteLayout>
			<MultiPageFormIntroduction />
		</SiteLayout>
	),
};

export const FormPage = {
	render: () => (
		<SiteLayout focusMode>
			<MultiPageFormStep />
		</SiteLayout>
	),
};

export const SummaryPage = {
	render: () => (
		<SiteLayout focusMode>
			<MultiPageFormSummary />
		</SiteLayout>
	),
};

export const SuccessPage = {
	render: () => (
		<SiteLayout>
			<MultiPageFormSuccess />
		</SiteLayout>
	),
};
