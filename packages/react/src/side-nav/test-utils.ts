import { SideNavProps } from './SideNav';

export const defaultTestingProps: SideNavProps = {
	title: 'Lodging your tax return',
	titleLink: '/',
	collapseTitle: 'In this section',
	items: [
		{
			href: '/welcome',
			label: 'Welcome',
		},
		{
			href: '/do-you-need-to-lodge-a-tax-return',
			label: 'Do you need to lodge a tax return?',
		},
		{
			href: '/lodge-online',
			label: 'Lodge online',
			items: [
				{
					href: '/lodge-online/pre-filling',
					label: 'Pre-filling your online tax return',
				},
			],
		},
		{
			href: '/whats-new-for-individuals',
			label: "What's new for individuals",
		},
		{
			href: '/why-you-may-receive-a-tax-bill',
			label: 'Why you may receive a tax bill',
		},
		{
			href: '/in-detail',
			label: 'In detail',
			items: [
				{
					href: '/in-detail/record-keeping',
					label: 'Record keeping',
					items: [
						{
							href: '/in-detail/record-keeping/tax',
							label: 'Keeping your tax records',
						},
						{
							href: '/in-detail/record-keeping/incorrect-amounts',
							label: 'Incorrect amounts',
						},
					],
				},
				{
					href: '/tax-receipt',
					label: 'Tax receipt',
				},
				{
					href: '/pre-fill availability',
					label: 'Pre-fill availability',
				},
			],
		},
	],
	activePath: '/in-detail',
};
