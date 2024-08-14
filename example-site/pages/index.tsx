import { useMemo } from 'react';
import AsyncSelect from 'react-select/async';
import {
	List,
	AutoSizer,
	CellMeasurer,
	CellMeasurerCache,
} from 'react-virtualized';
import type { MenuListProps, GroupBase } from 'react-select';
import type { ListRowProps } from 'react-virtualized';
import { Box, Stack } from '@ag.ds-next/react/box';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/react/button';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { SectionContent } from '@ag.ds-next/react/content';
import { H2, H3, Heading } from '@ag.ds-next/react/heading';
import {
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from '@ag.ds-next/react/hero-banner';
import { Text } from '@ag.ds-next/react/text';
import { Field } from '@ag.ds-next/react/field';
// These have been extracted to be reusable across the site
import { SiteLayout } from '../components/SiteLayout';
import { DocumentTitle } from '../components/DocumentTitle';

export default function HomePage() {
	return (
		<>
			<DocumentTitle title="Home" />
			<SiteLayout template={{ name: 'Home', slug: 'home' }}>
				<HeroBanner
					image={
						<img
							src="/example-site/placeholder/hero-banner.jpeg"
							role="presentation"
							alt=""
						/>
					}
				>
					<HeroBannerTitleContainer>
						<HeroBannerTitle>
							Website hero banner title - xxxl/display (H1)
						</HeroBannerTitle>
						<HeroBannerSubtitle>
							Short sentence providing more detail about the hero banner and
							actions - md/default (P)
						</HeroBannerSubtitle>
					</HeroBannerTitleContainer>
					<ButtonGroup>
						<ButtonLink href="/sign-in-form">Create account</ButtonLink>
						<ButtonLink href="/sign-in-form" variant="secondary">
							Sign in
						</ButtonLink>
					</ButtonGroup>
				</HeroBanner>

				<SectionContent>
					<VirtualisedListExample />
				</SectionContent>

				<SectionContent>
					<Stack gap={1.5}>
						<H2>Content heading (H2)</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 4 }}>
							{Array.from(Array(4).keys()).map((idx) => (
								<Stack key={idx} as="li" gap={1.5}>
									<H3>Content heading (H3)</H3>
									<Text as="p">
										Short descriptive paragraph designed to fit in this space -
										sm/default (P). Short descriptive paragraph designed to fit
										in this space - sm/default (P).
									</Text>
								</Stack>
							))}
						</Columns>
					</Stack>
				</SectionContent>
				<SectionContent background="bodyAlt">
					<Columns cols={{ xs: 1, md: 2 }}>
						<Stack gap={2}>
							<Stack gap={1.5}>
								<H2>Highlighted content row heading (H2)</H2>
								<Text as="p">
									Short descriptive paragraph designed to fit in this space -
									sm/default (P). Short descriptive paragraph designed to fit in
									this space - sm/default (P).
								</Text>
							</Stack>
							<CallToActionLink href="/category/subcategory/content">
								Read more
							</CallToActionLink>
						</Stack>
						<img
							src="/example-site/placeholder/hero-banner.jpeg"
							role="presentation"
							alt=""
							css={{ display: 'block', maxWidth: '100%' }}
						/>
					</Columns>
				</SectionContent>
				<SectionContent>
					<Stack gap={1.5}>
						<H2>Articles heading (H2)</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							{Array.from(Array(3).keys()).map((idx) => (
								<Card as="li" key={idx} clickable shadow>
									<img
										src="/example-site/placeholder/hero-banner.jpeg"
										role="presentation"
										alt=""
										css={{ width: '100%' }}
									/>
									<CardInner>
										<Stack gap={1}>
											<Heading type="h3">
												<CardLink href="/category/subcategory/content">
													Title of article (H3)
												</CardLink>
											</Heading>
											<Text as="p">
												Short descriptive paragraph designed to fit in this
												space
											</Text>
										</Stack>
									</CardInner>
								</Card>
							))}
						</Columns>
						<CallToActionLink href="/category">
							See more articles
						</CallToActionLink>
					</Stack>
				</SectionContent>
			</SiteLayout>
		</>
	);
}

type ListOption = {
	label: string;
	value: string;
};

const VirtualisedList = ({
	children,
}: MenuListProps<ListOption, true, GroupBase<ListOption>>) => {
	const rows = children;

	const cellCache = useMemo(() => {
		return new CellMeasurerCache({
			fixedWidth: true,
			defaultHeight: 30,
		});
	}, []);

	if (!Array.isArray(rows)) {
		// For children like: "Loading" or "No Options" provided by 'react-select'
		return <>{children}</>;
	}

	const rowRenderer = ({ key, parent, index, style }: ListRowProps) => (
		<CellMeasurer
			cache={cellCache}
			key={key}
			columnIndex={0}
			rowIndex={index}
			parent={parent}
		>
			<Box key={key} style={style}>
				{rows[index]}
			</Box>
		</CellMeasurer>
	);

	return (
		<Box height="18.75rem">
			<AutoSizer>
				{({ width, height }) => (
					<List
						width={width}
						height={height}
						deferredMeasurementCache={cellCache}
						rowHeight={cellCache.rowHeight}
						rowCount={rows.length}
						rowRenderer={rowRenderer}
					/>
				)}
			</AutoSizer>
		</Box>
	);
};

const VirtualisedListExample = () => {
	return (
		<Box as="form" maxWidth="20rem">
			<Field hint="" label="Virtualised example" message="" required={false}>
				<AsyncSelect
					id="test"
					isMulti={true}
					cacheOptions
					components={{ MenuList: VirtualisedList }}
					defaultOptions={options}
					onChange={console.log}
					styles={{
						menu: ({ position, fontWeight, ...provided }) => ({
							...provided,
							position: 'static',
						}),
					}}
				/>
			</Field>
		</Box>
	);
};

const options = Array.from({ length: 3000 }).map((_, index) => ({
	label: `Item ${index}`,
	value: index.toString(),
}));
