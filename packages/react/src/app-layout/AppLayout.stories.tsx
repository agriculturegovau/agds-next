import {
	Fragment,
	useMemo,
	useState,
	MouseEvent,
	useRef,
	forwardRef,
	AnchorHTMLAttributes,
} from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../ag-branding';
import { PageContent } from '../content';
import { CoreProvider, mergeRefs, tokens, useTernaryState } from '../core';
import { LinkList } from '../link-list';
import { SkipLinks } from '../skip-link';
import { Text } from '../text';
import { Prose } from '../prose';
import { GlobalAlert } from '../global-alert';
import { Modal } from '../modal';
import { Button, ButtonGroup } from '../button';
import {
	navigationItems,
	ExampleAccountDropdown,
	exampleData,
} from './test-utils';
import {
	AppLayout,
	AppLayoutProps,
	AppLayoutHeader,
	AppLayoutSidebar,
	AppLayoutContent,
	AppLayoutFooter,
	AppLayoutFooterDivider,
} from './index';

function AppLayoutTemplate({
	focusMode = false,
	namesLength = 'regular',
	businessDetails,
}: AppLayoutProps & {
	namesLength?: 'regular' | 'short' | 'medium' | 'long';
	businessDetails?: {
		businesses: string[];
		businessName: string;
		setBusinessName: (businessName: string) => void;
	};
}) {
	const year = useMemo(() => new Date().getFullYear(), []);

	// State for managing selected business
	// Use values in props if passed, otherwise use internal state
	const businesses =
		businessDetails?.businesses ?? exampleData.businessNames[namesLength];
	const [_businessName, _setBusinessName] = useState(businesses[0]);
	const businessName = businessDetails?.businessName ?? _businessName;
	const setBusinessName = businessDetails?.setBusinessName ?? _setBusinessName;

	return (
		<Fragment>
			<SkipLinks
				links={[{ href: '#main-content', label: 'Skip to main content' }]}
			/>
			<AppLayout focusMode={focusMode}>
				<AppLayoutHeader
					href="/"
					heading="Export Service"
					subLine="Supporting Australian agricultural exports"
					badgeLabel="Beta"
					logo={<Logo />}
					accountDetails={{
						name: exampleData.userNames[namesLength],
						secondaryText: businessName,
						dropdown: (
							<ExampleAccountDropdown
								businesses={businesses}
								selectedBusinessName={businessName}
								onBusinessChange={setBusinessName}
							/>
						),
					}}
				/>
				<AppLayoutSidebar
					activePath="/"
					items={navigationItems(businessName)}
				/>
				<AppLayoutContent>
					<main
						id="main-content"
						tabIndex={-1}
						css={{ '&:focus': { outline: 'none' } }}
					>
						<PageContent>
							<Prose>
								<h2>Content heading</h2>
								<p>See Template stories for more in context examples</p>
								<p>
									Etiam porta sem malesuada magna mollis euismod. Maecenas
									faucibus mollis interdum. Aenean lacinia bibendum nulla sed
									consectetur. Aenean eu leo quam. Pellentesque ornare sem
									lacinia quam venenatis vestibulum. Donec ullamcorper nulla non
									metus auctor fringilla.
								</p>
								<p>
									Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
									auctor. Cras justo odio, dapibus ac facilisis in, egestas eget
									quam. Donec sed odio dui. Maecenas sed diam eget risus varius
									blandit sit amet non magna. Nullam id dolor id nibh ultricies
									vehicula ut id elit.
								</p>
							</Prose>
						</PageContent>
					</main>
					<AppLayoutFooter>
						<nav aria-label="footer">
							<LinkList
								links={[
									{ label: 'Home', href: '/' },
									{
										label: 'Storybook',
										href: 'https://design-system.agriculture.gov.au/storybook/index.html',
									},
									{
										label: 'Playroom',
										href: 'https://design-system.agriculture.gov.au/playroom/index.html',
									},
									{
										label: 'Starter kit',
										href: 'https://github.com/steelthreads/agds-starter-kit',
									},
								]}
								horizontal
							/>
						</nav>
						<AppLayoutFooterDivider />
						<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
							We acknowledge the traditional owners of country throughout
							Australia and recognise their continuing connection to land,
							waters and culture. We pay our respects to their Elders past,
							present and emerging.
						</Text>
						<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
							&copy; {year} Department of Agriculture, Fisheries and Forestry
						</Text>
					</AppLayoutFooter>
				</AppLayoutContent>
			</AppLayout>
		</Fragment>
	);
}

const meta: Meta<typeof AppLayout> = {
	title: 'Layout/AppLayout',
	parameters: {
		layout: 'fullscreen',
	},
	component: AppLayout,
	render: (args) => <AppLayoutTemplate {...args} />,
};

export default meta;

export const Default: StoryObj<typeof AppLayout> = {
	args: {},
};

export const FocusMode: StoryObj<typeof AppLayout> = {
	args: { focusMode: true },
};

export const FocusModeWithModal: StoryObj<typeof AppLayout> = {
	args: { focusMode: true },
	render: function Render(args: AppLayoutProps) {
		const { focusMode } = args;
		// If true, the "Are you sure you want to leave this page" modal is open
		const [isModalOpen, openModal, closeModal] = useTernaryState(false);

		// The link the user wants to go to
		const [destinationHref, setDestinationHref] = useState<string>();

		// The business the user wants to switch to
		const [destinationBusiness, setDestinationBusiness] = useState<string>();

		const businesses = exampleData.businessNames.medium;
		const [businessName, setBusinessName] = useState(businesses[0]);

		// When a user attempts to change business, open the modal
		function onBusinessChange(businessName: string) {
			setDestinationBusiness(businessName);
			openModal();
		}

		// When a user confirms they want to leave the page, change the page url or change the business
		function onModalConfirm() {
			if (destinationHref) {
				window.location.href = destinationHref;
				setDestinationHref(undefined);
			} else if (destinationBusiness) {
				setBusinessName(destinationBusiness);
				setDestinationBusiness(undefined);
			}
			closeModal();
		}

		// This is a custom link component that demonstrates how to trigger a modal when a link is pressed
		// The modal should only be triggered in focus mode, and only for internal links
		const appLayoutLinkComponent = useMemo(() => {
			return forwardRef<
				HTMLAnchorElement,
				AnchorHTMLAttributes<HTMLAnchorElement>
			>(function LinkComponent(linkProps, ref) {
				const internalRef = useRef<HTMLAnchorElement>(null);

				function onClick(event: MouseEvent<HTMLAnchorElement>) {
					if (!focusMode) {
						linkProps.onClick?.(event);
					} else {
						linkProps.onClick?.(event);
						if (linkProps.target !== '_blank') {
							event.preventDefault();
							setDestinationHref(linkProps.href);
							openModal();
						}
					}
				}

				return (
					<a
						ref={mergeRefs([internalRef, ref])}
						{...linkProps}
						onClick={onClick}
					/>
				);
			});
		}, [focusMode, openModal]);

		return (
			<Fragment>
				<CoreProvider linkComponent={appLayoutLinkComponent}>
					<AppLayoutTemplate
						{...args}
						businessDetails={{
							businesses,
							businessName,
							setBusinessName: onBusinessChange,
						}}
					/>
				</CoreProvider>
				<Modal
					isOpen={isModalOpen}
					onDismiss={closeModal}
					title="Are you sure you want to leave this page?"
					actions={
						<ButtonGroup>
							<Button onClick={() => onModalConfirm()}>Leave this page</Button>
							<Button variant="secondary" onClick={closeModal}>
								Stay on this page
							</Button>
						</ButtonGroup>
					}
				>
					<Text as="p">
						You will lose all changes made since your last save.
					</Text>
				</Modal>
			</Fragment>
		);
	},
};

export const WithGlobalAlert: StoryObj<typeof AppLayout> = {
	render: (args) => (
		<Fragment>
			<GlobalAlert onDismiss={console.log}>
				<Text as="p">
					This application will be down for maintenance on Sunday from 11am to
					2pm.
				</Text>
			</GlobalAlert>
			<AppLayoutTemplate {...args} />
		</Fragment>
	),
};

export const WithLongNames: StoryObj<typeof AppLayout> = {
	render: (args) => <AppLayoutTemplate {...args} namesLength="long" />,
};

export const WithMediumNames: StoryObj<typeof AppLayout> = {
	render: (args) => <AppLayoutTemplate {...args} namesLength="medium" />,
};

export const WithShortNames: StoryObj<typeof AppLayout> = {
	render: (args) => <AppLayoutTemplate {...args} namesLength="short" />,
};
