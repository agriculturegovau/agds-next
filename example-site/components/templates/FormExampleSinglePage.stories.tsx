import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { FormExampleSinglePage } from './FormExampleSinglePage';

export default {
	title: 'Templates/Single Page Form',
};

export const SinglePageForm = () => {
	return (
		<PageTemplate>
			<FormExampleSinglePage
				onSubmit={() => console.log('navigate to success page')}
			/>
		</PageTemplate>
	);
};
