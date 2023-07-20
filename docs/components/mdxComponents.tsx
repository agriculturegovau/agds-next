import {
	Fragment,
	Children,
	isValidElement,
	HTMLAttributes,
	AnchorHTMLAttributes,
	ImgHTMLAttributes,
	ReactNode,
	PropsWithChildren,
} from 'react';
import type { MDXRemoteProps } from 'next-mdx-remote';
import Link from 'next/link';
import { Box } from '@ag.ds-next/react/box';
import { proseBlockClassname } from '@ag.ds-next/react/prose';
import { PageAlert, PageAlertProps } from '@ag.ds-next/react/page-alert';
import { ButtonLink } from '@ag.ds-next/react/button';
import {
	Table as TableComponent,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { boxPalette, fontGrid, mapSpacing } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Card, CardHeader, CardInner } from '@ag.ds-next/react/card';
import { H3, H4 } from '@ag.ds-next/react/heading';
import { slugify } from '../lib/slugify';
import { withBasePath } from '../lib/img';
import generatedComponentPropsData from '../__generated__/componentProps.json';
import { Code } from './Code';
import { ComponentPropsTable } from './ComponentPropsTable';
import { DoHeading, DontHeading } from './DoDontHeading';
import { AllIconsPlayground } from './AllIconsPlayground';
import { BreakpointsTokenChart } from './TokenCharts';

export const mdxComponents: MDXRemoteProps['components'] = {
	Fragment,
	pre: ({
		children,
		live,
		showCode,
		enableProse,
		exampleContentHeadingType,
	}: HTMLAttributes<HTMLPreElement> & {
		live?: boolean;
		showCode?: boolean;
		enableProse?: boolean;
		exampleContentHeadingType?: 'h2' | 'h3' | 'h4';
	}) => {
		return (
			<Fragment>
				{Children.map(children, (element) => {
					if (!isValidElement(element)) return null;
					return (
						<Code
							key={element.key}
							live={live}
							showCode={showCode}
							enableProse={enableProse}
							exampleContentHeadingType={exampleContentHeadingType}
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
			<img src={withBasePath(src)} alt={alt} {...props} />
		</Box>
	),
	ButtonLink,
	FigmaEmbed: ({ src }: { src: string }) => (
		<Box
			width="100%"
			height="0"
			border
			borderColor="muted"
			css={{
				position: 'relative',
				paddingBottom: '56.25%',
				overflow: 'hidden',
			}}
		>
			<Box
				as="iframe"
				frameBorder="0"
				src={src}
				allowFullScreen
				height="100%"
				width="100%"
				css={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
				}}
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
	TableCell,
	TableHeader,
	TableCaption,
	Text,
	TextLink,
	AllIconsPlayground,
	BackToTop: () => (
		<DirectionLink
			direction="up"
			href="#main-content"
			className={proseBlockClassname}
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
};
