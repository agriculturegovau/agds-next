import { Meta } from '@storybook/react';
import { SiteLayout } from '../__shared/SiteLayout';
import { NotFound as NotFoundPage } from './NotFound';
import { Maintenance as MaintenancePage } from './Maintenance';
import { ServerError as ServerErrorPage } from './ServerError';
import { ScheduledOutage as ScheduledOutagePage } from './ScheduledOutage';
import { ThirdParty as ThirdPartyPage } from './ThirdParty';
import { ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
	title: 'Templates/Error page',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const Template = {
	name: 'Error page template',
	render: () => (
		<SiteLayout>
			<ErrorPage />
		</SiteLayout>
	),
};

export const NotFound = {
	name: 'Not found (404)',
	render: () => (
		<SiteLayout>
			<NotFoundPage />
		</SiteLayout>
	),
};

export const Maintenance = {
	name: 'Under maintenance',
	render: () => (
		<SiteLayout>
			<MaintenancePage />
		</SiteLayout>
	),
};
// Maintenance.name =

export const ServerError = {
	name: 'Server error (500)',
	render: () => (
		<SiteLayout>
			<ServerErrorPage />
		</SiteLayout>
	),
};

export const ScheduledOutage = {
	name: 'Scheduled outage (503)',
	render: () => (
		<SiteLayout>
			<ScheduledOutagePage />
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
