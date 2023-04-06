import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { Content as ContentComponent } from './Content';

export default {
	title: 'Templates/Content page',
	parameters: {
		layout: 'fullscreen',
	},
};

export function Basic() {
	return (
		<PageTemplate applyMainElement={false}>
			<ContentComponent />
		</PageTemplate>
	);
}

export function WithoutSideNav() {
	return (
		<PageTemplate applyMainElement={false}>
			<ContentComponent sideNav={false} />
		</PageTemplate>
	);
}

WithoutSideNav.storyName = 'Without SideNav';
