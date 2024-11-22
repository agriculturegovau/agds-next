import { Meta, StoryObj } from '@storybook/react';
import { FeatureLinkList } from './FeatureLinkList';

const meta: Meta<typeof FeatureLinkList> = {
	title: 'navigation/FeatureLinkList',
	component: FeatureLinkList,
	args: {},
};

export default meta;

type Story = StoryObj<typeof FeatureLinkList>;

export const Basic: Story = {
	args: {
		links: [
			{
				label: 'Add a business with RAM',
				description:
					'Set up a business to act on behalf of it or invite others to. You can do this if you are responsible for this business in Relationship Authorisation Manager (RAM).',
				href: '#',
			},
			{
				label: 'Accept an invite',
				description:
					'Use an invite code from an email to act on behalf of a business.',
				href: '#',
			},
			{
				label: 'External Google',
				description: 'This is an external link.',
				href: 'https://www.google.com',
				target: '_blank',
			},
		],
	},
};

export const WithNoDescription: Story = {
	args: {
		links: [
			{
				label: 'Add a business with RAM',
				href: '#',
			},
			{
				label: 'Accept an invite',
				href: '#',
			},
			{
				label: 'External Google',
				href: 'https://www.google.com',
				target: '_blank',
			},
		],
	},
};
