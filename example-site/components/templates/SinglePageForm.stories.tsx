import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { FormExampleSinglePage } from './SinglePageForm';
import { SinglePageFormSuccess } from './SinglePageFormSuccess';

export default {
	title: 'Templates/Single-page Form',
};

export const FormPage = () => {
	return (
		<PageTemplate>
			<FormExampleSinglePage />
		</PageTemplate>
	);
};

export const SuccessPage = () => {
	return (
		<PageTemplate>
			<SinglePageFormSuccess />
		</PageTemplate>
	);
};
