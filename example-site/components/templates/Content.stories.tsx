import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { Content as ContentComponent } from './Content';

export default {
	title: 'Templates/Content',
};

export function Basic() {
	return (
		<PageTemplate>
			<ContentComponent />
		</PageTemplate>
	);
}

export function WithoutSideNav() {
	return (
		<PageTemplate>
			<ContentComponent sideNav={false} />
		</PageTemplate>
	);
}

WithoutSideNav.storyName = 'Without SideNav';
