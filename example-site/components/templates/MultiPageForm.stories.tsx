import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { FormExampleMultiStep } from '../FormExampleMultiStep/FormExampleMultiStep';
import { MultiPageFormHome } from './MultiPageFormHome';
// import { FormExampleSinglePage } from './FormExampleSinglePage';
import { MultiPageFormSuccess } from './MultiPageFormSuccess';

export default {
	title: 'Templates/Multi-page Form',
};

export const HomePage = () => {
	return (
		<PageTemplate>
			<MultiPageFormHome />
		</PageTemplate>
	);
};

export const FormPage = () => {
	return (
		<PageTemplate>
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
