import { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Text } from '@ag.ds-next/react/text';
import { Prose } from '@ag.ds-next/react/prose';
import { Callout } from '@ag.ds-next/react/callout';
import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { NotFound as NotFoundComponent, ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
	title: 'Templates/Error page',
	component: ErrorPage,
	parameters: {
		layout: 'fullscreen',
	},
	render: (props) => {
		return (
			<PageTemplate>
				<ErrorPage {...props} />
			</PageTemplate>
		);
	},
};

export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const NotFound: Story = {
	name: 'Not found (404)',
	render: () => (
		<PageTemplate>
			<NotFoundComponent />
		</PageTemplate>
	),
};

export const Maintenance: Story = {
	name: 'Under maintenance',
	args: {
		title: "We're updating the Export Service",
		errorCode: undefined,
		children: (
			<Fragment>
				<Text as="p" fontSize="md">
					While we&apos;re down for planned maintenance, you won&apos;t be able
					to access our services.
				</Text>

				<Text>Please check back soon.</Text>

				<Callout title="Need help?">
					<Prose>
						<p>
							Call <strong>000 000 000</strong> (9am to 5pm AEST Monday to
							Friday)
							<br />
							Email{' '}
							<a href="mailto:emailaccount@agriculture.gov.au">
								emailaccount@agriculture.gov.au
							</a>
						</p>
					</Prose>
				</Callout>
			</Fragment>
		),
	},
};

export const FiveHundredError: Story = {
	name: 'Server error (500)',
	args: {
		title: "Something's not right",
		errorCode: '500',
		children: (
			<Fragment>
				<Text as="p" fontSize="md">
					There&apos;s a problem with the Export Service. We&apos;re working to
					fix it. Please try again later.
				</Text>

				<Prose>
					<p>
						You may be able to access other parts of the{' '}
						<TextLink href="/">Export Service</TextLink>.
					</p>

					<p>If you need help:</p>

					<ul>
						<li>
							Call <a href="tel:1800 571 125">1800 571 125</a>, Monday to
							Friday, 9 am to 5 pm AEST
						</li>
						<li>
							Email{' '}
							<a href="exportservive@agriculture.gov.au">
								exportservive@agriculture.gov.au
							</a>
						</li>
					</ul>
				</Prose>
			</Fragment>
		),
	},
};

export const ThirdParty: Story = {
	name: 'Third party outage (503)',
	args: {
		title: "There's a problem with the Export Service",
		errorCode: '503',
		children: (
			<Prose>
				<p>
					Digital Identity is currently experiencing an outage. You can&apos;t
					create an account or sign into the Export Service right now. Please
					try again later.
				</p>

				<p>If you need help:</p>

				<ul>
					<li>
						Call <a href="tel:1800 571 125">1800 571 125</a>, Monday to Friday,
						9 am to 5 pm AEST
					</li>
					<li>
						Email{' '}
						<a href="exportservive@agriculture.gov.au">
							exportservive@agriculture.gov.au
						</a>
					</li>
				</ul>
			</Prose>
		),
	},
};

export const ScheduledOutage: Story = {
	name: 'Scheduled outage (503)',
	args: {
		title: "There's a problem with the Export Service",
		errorCode: '503',
		children: (
			<Prose>
				<p>
					Relationship Autorisation Manager (RAM) is down for system maintenance
					from 11:30 pm, 15 October to 7pm, 16 October.
				</p>

				<p>
					During this time you can&apos;t create an account or sign into the
					Export Service. Please try again later.
				</p>

				<p>If you need help:</p>

				<ul>
					<li>
						Call <a href="tel:1800 571 125">1800 571 125</a>, Monday to Friday,
						9 am to 5 pm AEST
					</li>
					<li>
						Email{' '}
						<a href="exportservive@agriculture.gov.au">
							exportservive@agriculture.gov.au
						</a>
					</li>
				</ul>
			</Prose>
		),
	},
};
