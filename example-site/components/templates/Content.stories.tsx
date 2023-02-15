import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { Content as ContentComponent } from './Content';

export default {
	title: 'Templates/Content',
};

export function Content() {
	return (
		<PageTemplate>
			<ContentComponent />
		</PageTemplate>
	);
}
