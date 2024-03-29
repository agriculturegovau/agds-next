import { AppLayout } from '../__shared/AppLayout';
import { SiteLayout } from '../__shared/SiteLayout';
import { NotFound as NotFoundPage } from './NotFound';
import { Maintenance as MaintenancePage } from './Maintenance';
import { ServerError as ServerErrorPage } from './ServerError';
import { ScheduledThirdPartyOutage as ScheduledThirdPartyOutagePage } from './ScheduledOutage';
import { ThirdPartyOutage as ThirdPartyPage } from './ThirdPartyOutage';
import { ErrorPage } from './ErrorPage';

const meta = {
	title: 'Templates/Error page',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const Template = {
	name: 'Website layout',
	render: () => (
		<SiteLayout>
			<ErrorPage />
		</SiteLayout>
	),
};

export const ApplicationTemplate = {
	name: 'Application layout',
	render: () => (
		<AppLayout>
			<ErrorPage />
		</AppLayout>
	),
};

export const NotFound = {
	name: 'Page not found (404)',
	render: () => (
		<SiteLayout>
			<NotFoundPage />
		</SiteLayout>
	),
};

export const Maintenance = {
	name: 'Planned maintenance (503)',
	render: () => (
		<SiteLayout>
			<MaintenancePage />
		</SiteLayout>
	),
};

export const ServerError = {
	name: 'Internal server error (500)',
	render: () => (
		<SiteLayout>
			<ServerErrorPage />
		</SiteLayout>
	),
};

export const ThirdParty = {
	name: 'Third party outage (503)',
	render: () => (
		<SiteLayout>
			<ThirdPartyPage />
		</SiteLayout>
	),
};

export const ScheduledThirdPartyOutage = {
	name: 'Scheduled third party outage (503)',
	render: () => (
		<SiteLayout>
			<ScheduledThirdPartyOutagePage />
		</SiteLayout>
	),
};
