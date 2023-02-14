import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { HomePage } from './HomePage';

export default {
	title: 'Templates/Home',
};

export const Home = () => {
	return (
		<PageTemplate>
			<HomePage />
		</PageTemplate>
	);
};
