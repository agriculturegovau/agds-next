import {
	Fragment,
	Children,
	isValidElement,
	HTMLAttributes,
	AnchorHTMLAttributes,
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
import { slugify } from '../lib/slugify';
import generatedComponentPropsData from '../__generated__/componentProps.json';
import { Code } from './Code';
import { ComponentPropsTable } from './ComponentPropsTable';
import { DoHeading, DontHeading } from './DoDontHeading';
import { AllIconsPlayground } from './AllIconsPlayground';

export const mdxComponents: MDXRemoteProps['components'] = {
	Fragment,
	pre: ({
		children,
		live,
	}: HTMLAttributes<HTMLPreElement> & { live?: boolean }) => {
		return (
			<Fragment>
				{Children.map(children, (element) => {
					if (!isValidElement(element)) return null;
					return <Code key={element.key} live={live} {...element.props} />;
				})}
			</Fragment>
		);
	},
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
	AllIconsPlayground,
};
