import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { FormExampleSinglePage } from './FormExampleSinglePage';
import { SinglePageFormSuccess } from './SinglePageFormSucces';

export default {
	title: 'Templates/Single Page Form',
};

export const FormPage = () => {
	return (
		<PageTemplate>
			<FormExampleSinglePage
				onSubmit={() => console.log('navigate to success page')}
			/>
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
