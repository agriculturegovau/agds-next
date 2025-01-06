import { Fragment, ReactNode } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import { Columns } from '@ag.ds-next/react/columns';
import { boxPalette, tokens, Spacing, FontSize } from '@ag.ds-next/react/core';
import { proseBlockClassname } from '@ag.ds-next/react/prose';
import { Text } from '@ag.ds-next/react/text';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
	TableRow,
} from '@ag.ds-next/react/table';
import { TextLink } from './designSystemComponents';

type Entries<T> = {
	[K in keyof T]: [K, T[K]];
}[keyof T][];

export const BreakpointsTokenChart = () => {
	const breakpoints = tokens.breakpoint;
	return (
		<div className={proseBlockClassname}>
			<TableWrapper>
				<Table>
					<TableCaption>Our Breakpoint tokens</TableCaption>
					<TableHead>
						<TableRow>
							<TableHeader scope="col">Token</TableHeader>
							<TableHeader scope="col">Value</TableHeader>
							<TableHeader scope="col">Media query</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						{Object.entries(breakpoints).map(([token, value]) => {
							return (
								<TableRow key={token}>
									<TableCell as="th" scope="row">
										{token}
									</TableCell>
									<TableCell>{value}px and up</TableCell>
									<TableCell>
										{value === 0 ? (
											'Mobile devices'
										) : (
											<code>{`@media (min-width: ${value}px) { ... }`}</code>
										)}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableWrapper>
		</div>
	);
};

export const BorderWidthTokenChart = () => {
	const borderWidths = tokens.borderWidth;

	return (
		<Flex className={proseBlockClassname} gap={0.5}>
			{(Object.entries(borderWidths) as Entries<typeof borderWidths>).map(
				([token, value]) => {
					const label = `${token} (${value}px)`;
					return (
						<Flex
							alignItems="center"
							border
							borderWidth={token}
							key={token}
							padding={0.5}
						>
							{label}
						</Flex>
					);
				}
			)}
		</Flex>
	);
};

export const SpacingTokenChart = () => {
	// copied from types for mapSpacing
	const spacingTokens: Spacing[] = [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6];

	return (
		<Stack className={proseBlockClassname} gap={0.5}>
			{spacingTokens.map((token) => {
				const label = `${token} (${token * 16}px)`;
				return (
					<Flex gap={0.25} key={token}>
						<Box
							css={{
								backgroundColor: boxPalette.systemInfoMuted,
								width: token * 16,
							}}
						></Box>
						<Text>{label}</Text>
					</Flex>
				);
			})}
		</Stack>
	);
};

export const LineHeightTokenChart = () => {
	const fontSizes = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'] as FontSize[];
	return (
		<Flex className={proseBlockClassname} gap={1}>
			<Flex flexDirection="column" gap={1}>
				<Text fontSize="sm" fontWeight="bold">
					Default
				</Text>
				{fontSizes.map((size) => (
					<Box background="shade" key={size}>
						<Text fontSize={size}>{size.toUpperCase()}</Text>
					</Box>
				))}
			</Flex>
			<Flex flexDirection="column" gap={1}>
				<Text fontSize="sm" fontWeight="bold">
					Heading
				</Text>
				{fontSizes.map((size) => (
					<Box background="shade" key={size}>
						<Text fontSize={size} lineHeight="heading">
							{size.toUpperCase()}
						</Text>
					</Box>
				))}
			</Flex>
			<Flex flexDirection="column" gap={1}>
				<Text fontSize="sm" fontWeight="bold">
					Nospace
				</Text>
				{fontSizes.map((size) => (
					<Box background="shade" key={size}>
						<Text fontSize={size} lineHeight="nospace">
							{size.toUpperCase()}
						</Text>
					</Box>
				))}
			</Flex>
		</Flex>
	);
};

export const ZIndexTokenChart = () => {
	const zIndextokens: Record<
		keyof typeof tokens.zIndex,
		{ value: number; description: ReactNode }
	> = {
		base: {
			value: tokens.zIndex.base,
			description: 'The base z-index.',
		},
		elevated: {
			value: tokens.zIndex.elevated,
			description:
				'Used to elevate elements above adjacent elements that sit on the base z-index.',
		},
		overlay: {
			value: tokens.zIndex.overlay,
			description: (
				<Fragment>
					Used for overlays in modals and other components that sit on top of
					the page - e.g. <TextLink href="/components/modal">Modal</TextLink>,{' '}
					<TextLink href="/components/drawer">Drawer</TextLink>,{' '}
					<TextLink href="/components/main-nav">Main nav (mobile)</TextLink>.
				</Fragment>
			),
		},
		dialog: {
			value: tokens.zIndex.dialog,
			description: (
				<Fragment>
					Used for the main dialog element in modals and other components that
					sit on top of the - e.g.{' '}
					<TextLink href="/components/modal">Modal</TextLink>,{' '}
					<TextLink href="/components/drawer">Drawer</TextLink>,{' '}
					<TextLink href="/components/main-nav">Main nav (mobile)</TextLink>.
				</Fragment>
			),
		},
		popover: {
			value: tokens.zIndex.popover,
			description: (
				<Fragment>
					Used for popover elements - e.g. the calendar popover in the{' '}
					<TextLink href="/components/date-picker">Date picker</TextLink>.
				</Fragment>
			),
		},
		skipLink: {
			value: tokens.zIndex.skipLink,
			description: (
				<Fragment>
					Used for focused{' '}
					<TextLink href="/components/skip-link">Skip links</TextLink>.
				</Fragment>
			),
		},
	};
	return (
		<div className={proseBlockClassname}>
			<TableWrapper>
				<Table>
					<TableCaption>All z-Index tokens</TableCaption>
					<TableHead>
						<TableRow>
							<TableHeader scope="col" width="25%">
								Token
							</TableHeader>
							<TableHeader scope="col" width="25%">
								Value
							</TableHeader>
							<TableHeader scope="col" width="50%">
								Description
							</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						{Object.entries(zIndextokens).map(
							([token, { value, description }]) => {
								return (
									<TableRow key={token}>
										<TableCell>{token}</TableCell>
										<TableCell>{value}</TableCell>
										<TableCell>{description}</TableCell>
									</TableRow>
								);
							}
						)}
					</TableBody>
				</Table>
			</TableWrapper>
		</div>
	);
};

export const ShadowTokenChart = () => {
	const shadowTokens = Object.entries(tokens.shadow) as [
		keyof typeof tokens.shadow,
		string,
	][];

	return (
		<Columns className={proseBlockClassname} cols={3} gap={1.5}>
			{shadowTokens.map(([token, shadow]) => (
				<Flex
					css={{ boxShadow: shadow }}
					flexDirection="column"
					key={token}
					paddingX={1}
					paddingY={2}
					rounded
				>
					<Text fontWeight="bold">{token}</Text>
					<Text fontSize="xs">{shadow}</Text>
				</Flex>
			))}
		</Columns>
	);
};
