import { Fragment, ReactElement } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { Content, SectionContent } from '@ag.ds-next/react/content';
import { H2, H3 } from '@ag.ds-next/react/heading';
import {
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from '@ag.ds-next/react/hero-banner';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/react/button';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Text } from '@ag.ds-next/react/text';
import { Columns } from '@ag.ds-next/react/columns';
import { Flex } from '@ag.ds-next/react/flex';
import { SiteLayout } from '../components/Layout/SiteLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { useWithBasePath } from '../lib/useWithBasePath';

export default function Page() {
	const withBasePath = useWithBasePath();
	return (
		<Fragment>
			<DocumentTitle title="Home" />
			<HeroBanner
				background="bodyAlt"
				image={
					<img
						src={withBasePath('/hero-banner.png')}
						role="presentation"
						alt=""
					/>
				}
			>
				<HeroBannerTitleContainer>
					<HeroBannerTitle>Find and access government services</HeroBannerTitle>
					<HeroBannerSubtitle>
						Manage all your government services in one secure and easy to access
						place online.
					</HeroBannerSubtitle>
					<ButtonGroup>
						<ButtonLink href="/not-found" variant="primary">
							Create account
						</ButtonLink>
						<ButtonLink href="/sign-in" variant="secondary">
							Sign in
						</ButtonLink>
					</ButtonGroup>
				</HeroBannerTitleContainer>
			</HeroBanner>

			<SectionContent>
				<Stack gap={1.5}>
					<H2>Why create an account?</H2>
					<Columns as="ul" cols={{ xs: 1, sm: 2, md: 4 }}>
						<Stack as="li" gap={1}>
							<PictogramProfile />
							<H3>Secure and easy way to share your details</H3>
							<Text>
								Use your yourGov profile to easily provide your personal details
								when you access any government service.
							</Text>
						</Stack>
						<Stack as="li" gap={1}>
							<PictogramDocumentTick />
							<H3>Find and manage business approvals</H3>
							<Text>
								Search, apply and manage business licences and permits online in
								one place.
							</Text>
						</Stack>
						<Stack as="li" gap={1}>
							<PictogramCalculator />
							<H3>Manage benefits and payments</H3>
							<Text>
								Find what you are eligible for and then claim and manage your
								payments online.
							</Text>
						</Stack>
						<Stack as="li" gap={1}>
							<PictogramTrack />
							<H3>Track the progress of applications</H3>
							<Text>
								Receive real-time alerts for your government approvals,
								applications and transactions.
							</Text>
						</Stack>
					</Columns>
				</Stack>
			</SectionContent>

			<Content as="section" background="bodyAlt">
				<Columns cols={{ xs: 1, sm: 2 }} gap={3}>
					<Stack
						gap={1.5}
						alignItems="flex-start"
						paddingBottom={{ xs: 0, sm: 3, md: 4 }}
						paddingTop={{ xs: 3, md: 4 }}
					>
						<H2>Intending to make, serve or sell alcohol?</H2>
						<Text as="p">
							Get tailored step-by-step guidance on what approvals your business
							will need to sell and or serve alcohol. Just answer a few quick
							questions about your business.
						</Text>
						<ButtonLink href="/not-found">Find liquor licence tool</ButtonLink>
					</Stack>
					<Flex alignItems="flex-end" paddingTop={{ md: 4 }}>
						<img
							src={withBasePath('/screenshot.png')}
							alt="Screenshot of the Find your liquor licence tool home page"
							css={{ display: 'block', maxWidth: '100%' }}
						/>
					</Flex>
				</Columns>
			</Content>

			<SectionContent>
				<Columns as="ul" cols={{ xs: 1, sm: 2 }}>
					<Card as="li" shadow clickable>
						<CardInner>
							<Stack gap={1}>
								<H3>
									<CardLink href="/services">Services</CardLink>
								</H3>
								<Text as="p">
									An easier and faster way to connect with government services
									for your business.
								</Text>
							</Stack>
						</CardInner>
					</Card>
					<Card as="li" shadow clickable>
						<CardInner>
							<Stack gap={1}>
								<H3>
									<CardLink href="/help">Help</CardLink>
								</H3>
								<Text as="p">
									Information and support to help you use yourGov.
								</Text>
							</Stack>
						</CardInner>
					</Card>
				</Columns>
			</SectionContent>
		</Fragment>
	);
}

Page.getLayout = function getLayout(page: ReactElement) {
	return <SiteLayout>{page}</SiteLayout>;
};

function PictogramProfile() {
	return (
		<svg
			width="64"
			height="64"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
		>
			<path
				d="M11.5235 50.2603C11.038 50.5235 10.8577 51.1304 11.1208 51.616C11.384 52.1016 11.9909 52.2819 12.4765 52.0187L11.5235 50.2603ZM31.9996 45.3341V44.3341V45.3341ZM35.2719 46.5249C35.8207 46.5874 36.3161 46.1931 36.3786 45.6444C36.441 45.0956 36.0468 44.6002 35.498 44.5378L35.2719 46.5249ZM38.9842 60.1532C39.5204 60.0206 39.8475 59.4785 39.7149 58.9424C39.5824 58.4062 39.0403 58.0791 38.5041 58.2117L38.9842 60.1532ZM58.9619 33.4473C58.9328 33.9988 59.3563 34.4695 59.9078 34.4986C60.4593 34.5277 60.93 34.1042 60.9591 33.5527L58.9619 33.4473ZM12.4765 52.0187C18.3795 48.8196 25.3566 46.3341 31.9996 46.3341V44.3341C24.8983 44.3341 17.5842 46.9758 11.5235 50.2603L12.4765 52.0187ZM32 59C17.0883 59 5 46.9117 5 32H3C3 48.0163 15.9837 61 32 61V59ZM5 32C5 17.0883 17.0883 5 32 5V3C15.9837 3 3 15.9837 3 32H5ZM32 5C46.9117 5 59 17.0883 59 32H61C61 15.9837 48.0163 3 32 3V5ZM31.9996 46.3341C33.0823 46.3341 34.175 46.4001 35.2719 46.5249L35.498 44.5378C34.3318 44.405 33.1634 44.3341 31.9996 44.3341V46.3341ZM38.5041 58.2117C36.422 58.7266 34.2436 59 32 59V61C34.4067 61 36.7462 60.7066 38.9842 60.1532L38.5041 58.2117ZM59 32C59 32.4856 58.9872 32.9682 58.9619 33.4473L60.9591 33.5527C60.9863 33.0385 61 32.5208 61 32H59Z"
				fill="currentColor"
			/>
			<circle cx="32" cy="26" r="11" stroke="currentColor" strokeWidth="2" />
			<path
				d="M42 40L52 38L62 40C62 40 62 46 62 50C62 54 58.5 58 52 60C45.5 58 42 54 42 50C42 46 42 40 42 40Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M47 49.0275L50.3333 52.3608L57.6941 45"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function PictogramDocumentTick() {
	return (
		<svg
			width="64"
			height="64"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
		>
			<path
				d="M29.0039 36H15.0039"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M47.8314 34.3194C47.9267 34.2329 48.072 34.2329 48.1673 34.3194L51.4351 37.2842C51.4836 37.3282 51.5474 37.3514 51.6128 37.3489L56.0218 37.1782C56.1504 37.1732 56.2617 37.2667 56.2792 37.3942L56.8767 41.7658C56.8856 41.8307 56.9195 41.8895 56.9712 41.9296L60.4585 44.6329C60.5602 44.7117 60.5854 44.8549 60.5168 44.9637L58.1645 48.6967C58.1296 48.7521 58.1178 48.8189 58.1316 48.8829L59.0653 53.1953C59.0926 53.3211 59.0199 53.447 58.8974 53.4863L54.6959 54.8339C54.6335 54.8539 54.5815 54.8975 54.551 54.9554L52.4943 58.859C52.4344 58.9729 52.2978 59.0226 52.1786 58.974L48.0939 57.3056C48.0333 57.2809 47.9654 57.2809 47.9048 57.3056L43.8201 58.974C43.7009 59.0226 43.5643 58.9729 43.5044 58.859L41.4477 54.9554C41.4172 54.8975 41.3652 54.8539 41.3028 54.8339L37.1013 53.4863C36.9788 53.447 36.9061 53.3211 36.9334 53.1953L37.867 48.8829C37.8809 48.8189 37.8691 48.7521 37.8342 48.6967L35.4819 44.9637C35.4133 44.8549 35.4385 44.7117 35.5402 44.6329L39.0275 41.9296C39.0792 41.8895 39.1131 41.8307 39.122 41.7658L39.7195 37.3942C39.737 37.2667 39.8483 37.1732 39.9769 37.1782L44.3859 37.3489C44.4513 37.3514 44.5151 37.3282 44.5636 37.2842L47.8314 34.3194Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M42.4453 48.1105L45.7786 51.4438L53.1394 44.083"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M25.0039 46H15.0039"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M39.0039 26H15.0039"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M31.0029 59H9.00285C7.8985 59 7.00316 58.1049 7.00288 57.0006C6.99866 40.3336 6.99945 23.6666 7.00285 6.99957C7.00307 5.89517 7.89853 5 9.00293 5V5H40.0802C40.664 5 41.2186 5.25505 41.5985 5.69823L52.5212 18.4382C52.832 18.8007 53.0029 19.2625 53.0029 19.74V30"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M41.0042 6L41.0039 17C41.0039 18.1045 41.8994 19 43.0039 19H52.0039"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function PictogramCalculator() {
	return (
		<svg
			width="64"
			height="64"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
		>
			<path
				d="M33.5 59H9C7.89543 59 7 58.1046 7 57V7C7 5.89543 7.89543 5 9 5H51C52.1046 5 53 5.89543 53 7V30"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<rect
				x="14"
				y="13"
				width="32"
				height="10"
				rx="2"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<circle cx="49" cy="48" r="11" stroke="currentColor" strokeWidth="2" />
			<path
				d="M52 45.7273C52 43.9091 50.5 43 49 43C47.5 43 46 43.9091 46 45.7273C46 46.6364 46.9199 47.6218 49 48C51.0801 48.3782 52 48.9091 52 50.2727C52 52.0909 50.5 53 49 53C47.5 53 46 51.6364 46 50.2727"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M49 53V55M49 43V41"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 29L14 29L14 34"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 38L14 38L14 43"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 47L14 47L14 52"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M34 29L26 29L26 34"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M46 29L38 29L38 34"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M34 38L26 38L26 43"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M34 47L26 47L26 52"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function PictogramTrack() {
	return (
		<svg
			width="64"
			height="64"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
		>
			<path
				d="M29.0039 36H15.0039"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M47 59C54.732 59 61 49 61 49C61 49 54.732 39 47 39C39.268 39 33 49 33 49C33 49 39.268 59 47 59Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M25.0039 46H15.0039"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M39.0039 26H15.0039"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M31.0029 59H9.00285C7.8985 59 7.00316 58.1049 7.00288 57.0006C6.99866 40.3336 6.99945 23.6666 7.00285 6.99957C7.00307 5.89517 7.89853 5 9.00293 5V5H40.0802C40.664 5 41.2186 5.25505 41.5985 5.69823L52.5212 18.4382C52.832 18.8007 53.0029 19.2625 53.0029 19.74V34"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M41.0042 6L41.0039 17C41.0039 18.1045 41.8994 19 43.0039 19H52.0039"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle cx="47" cy="49" r="6" stroke="currentColor" strokeWidth="2" />
			<circle
				cx="2"
				cy="2"
				r="2"
				transform="matrix(1 0 0 -1 45 51)"
				fill="currentColor"
			/>
		</svg>
	);
}
