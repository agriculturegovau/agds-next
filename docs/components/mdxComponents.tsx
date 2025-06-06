import {
	Children,
	Fragment,
	isValidElement,
	type AnchorHTMLAttributes,
	type HTMLAttributes,
	type ImgHTMLAttributes,
	type PropsWithChildren,
	type ReactNode,
} from 'react';
import { type MDXRemoteProps } from 'next-mdx-remote';
import Link from 'next/link';
import { Box } from '@ag.ds-next/react/box';
import { proseBlockClassname } from '@ag.ds-next/react/prose';
import {
	PageAlert,
	PageAlertTitle,
	type PageAlertProps,
} from '@ag.ds-next/react/page-alert';
import { ButtonLink } from '@ag.ds-next/react/button';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import {
	Table as TableComponent,
	TableBody,
	TableCaption,
	TableRow,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { boxPalette, fontGrid, mapSpacing } from '@ag.ds-next/react/core';
import { Callout } from '@ag.ds-next/react/callout';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Card, CardHeader, CardInner } from '@ag.ds-next/react/card';
import { H3, H4 } from '@ag.ds-next/react/heading';
import { slugify } from '../lib/slugify';
import { withBasePath } from '../lib/img';
import generatedComponentPropsData from '../__generated__/componentProps.json';
import { AllIconsPlayground } from './AllIconsPlayground';
import { Code } from './Code';
import { ComponentPropsTable } from './ComponentPropsTable';
import { DoHeading, DontHeading } from './DoDontHeading';
import {
	BreakpointsTokenChart,
	SpacingTokenChart,
	ZIndexTokenChart,
	ShadowTokenChart,
} from './TokenCharts';
import { ResponsivePreviewLink } from './code/ResponsivePreviewLink';

export const mdxComponents: MDXRemoteProps['components'] = {
	Fragment,
	blockquote: ({ children }) => (
		<div className={proseBlockClassname}>
			<Callout>{children}</Callout>
		</div>
	),
	pre: ({
		children,
		disablePadding,
		enableProse,
		exampleContentHeading = 'Example',
		exampleContentHeadingType,
		iframe,
		live,
		previewHeading,
		showCode,
	}: HTMLAttributes<HTMLPreElement> & {
		disablePadding?: boolean;
		enableProse?: boolean;
		exampleContentHeading?: string;
		exampleContentHeadingType?: 'h2' | 'h3' | 'h4';
		iframe?: boolean;
		live?: boolean;
		previewHeading?: string;
		showCode?: boolean;
	}) => {
		return (
			<Fragment>
				{Children.map(children, (element) => {
					if (!isValidElement(element)) return null;
					return (
						<Code
							disablePadding={disablePadding}
							enableProse={enableProse}
							exampleContentHeading={exampleContentHeading}
							exampleContentHeadingType={exampleContentHeadingType}
							iframe={iframe}
							key={element.key}
							live={live}
							previewHeading={previewHeading}
							showCode={showCode}
							{...element.props}
						/>
					);
				})}
			</Fragment>
		);
	},
	img: ({ alt, src, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
		<img alt={alt} src={withBasePath(src)} {...props} />
	),
	ImageWithBorder: ({
		alt,
		src,
		...props
	}: ImgHTMLAttributes<HTMLImageElement>) => (
		<Box
			border
			borderColor="muted"
			css={{ marginTop: mapSpacing(1.5), img: { display: 'block' } }}
		>
			<img alt={alt} src={withBasePath(src)} {...props} />
		</Box>
	),
	ButtonLink,
	FigmaEmbed: ({ src, title }: { src: string; title: string }) => (
		<Box
			border
			borderColor="muted"
			css={{
				position: 'relative',
				paddingBottom: '56.25%',
				overflow: 'hidden',
			}}
			height="0"
			width="100%"
		>
			<Box
				allowFullScreen
				as="iframe"
				css={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
				}}
				frameBorder="0"
				height="100%"
				src={src}
				title={title}
				width="100%"
			/>
		</Box>
	),
	a: ({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
		if (!href) return <a {...props} />;
		return <Link href={href} {...props} />;
	},
	// Automatically assign an ID to h2 and h3 elements so they can be linked to
	h2: ({ children }: HTMLAttributes<HTMLHeadingElement>) => {
		return (
			<h2 id={children ? slugify(children.toString()) : undefined}>
				{children}
			</h2>
		);
	},
	h3: ({ children }: HTMLAttributes<HTMLHeadingElement>) => {
		return (
			<h3 id={children ? slugify(children.toString()) : undefined}>
				{children}
			</h3>
		);
	},
	H3,
	H4,
	PageAlert: (props: PageAlertProps) => (
		<div className={proseBlockClassname}>
			<PageAlert {...props} />
		</div>
	),
	PageAlertTitle,
	ComponentPropsTable: ({ name }: { name: string }) => {
		if (!(name in generatedComponentPropsData)) {
			return (
				<Fragment>
					<h3>{name} Props</h3>
					<p>{name} does not have any props.</p>
				</Fragment>
			);
		}
		return (
			<ComponentPropsTable
				data={
					generatedComponentPropsData[
						name as keyof typeof generatedComponentPropsData
					]
				}
			/>
		);
	},
	DoHeading,
	DontHeading,
	Table: ({ children, ...props }: HTMLAttributes<HTMLTableElement>) => (
		<div className={proseBlockClassname}>
			<TableWrapper>
				<TableComponent {...props}>{children}</TableComponent>
			</TableWrapper>
		</div>
	),
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	TableHeader,
	TableCaption,
	Text,
	TextLink,
	AllIconsPlayground,
	BackToTop: () => (
		<DirectionLink
			className={proseBlockClassname}
			direction="up"
			href="#main-content"
		>
			Back to top
		</DirectionLink>
	),
	ExampleContent: ({
		heading = <H4>Example</H4>,
		children,
	}: PropsWithChildren<{
		heading?: ReactNode;
	}>) => (
		<Card className={proseBlockClassname}>
			{heading ? <CardHeader>{heading}</CardHeader> : null}
			<CardInner>{children}</CardInner>
		</Card>
	),
	Box,
	FootnotesList: ({ children }: HTMLAttributes<HTMLOListElement>) => (
		<ol
			css={{
				...fontGrid('sm', 'default'),
				color: boxPalette.foregroundMuted,
				marginTop: mapSpacing(1.5),
				marginBottom: '0rem',
			}}
		>
			{children}
		</ol>
	),
	BreakpointsTokenChart,
	SpacingTokenChart,
	ZIndexTokenChart,
	ShadowTokenChart,
	SummaryList: ({ children }: PropsWithChildren<{}>) => (
		<div className={proseBlockClassname}>
			<SummaryList>{children}</SummaryList>
		</div>
	),
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
	Callout: ({ children, ...props }: PropsWithChildren<{}>) => (
		<div className={proseBlockClassname}>
			<Callout {...props}>
				<Stack css={{ '* + *': { marginTop: '0 !important' } }} gap={1}>
					{children}
				</Stack>
			</Callout>
		</div>
	),
	ResponsivePreview: ({
		disablePadding = false,
		href,
		label,
		title,
	}: {
		disablePadding: boolean;
		href: string;
		label: string;
		title: string;
	}) => (
		<ResponsivePreviewLink
			disablePadding={disablePadding}
			frameAddress={href}
			standalone
			title={title}
		>
			{label}
		</ResponsivePreviewLink>
	),
};
