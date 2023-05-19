import { SiteLayout } from '../../../.storybook/components/SiteLayout';
import { Content as ContentComponent } from './Content';

export default {
	title: 'Templates/Content page',
	parameters: {
		layout: 'fullscreen',
	},
};

export function Basic() {
	return (
		<SiteLayout applyMainElement={false}>
			<ContentComponent />
		</SiteLayout>
	);
}

export function WithoutSideNav() {
	return (
		<SiteLayout applyMainElement={false}>
			<ContentComponent sideNav={false} />
		</SiteLayout>
	);
}

WithoutSideNav.storyName = 'Without SideNav';
