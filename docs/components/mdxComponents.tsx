import {
	AnchorHTMLAttributes,
	HTMLAttributes,
	Fragment,
	ReactNode,
} from 'react';
import Link from 'next/link';
import { proseBlockClassname } from '@ag.ds-next/prose';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import { slugify } from '../lib/slugify';
import generatedComponentPropsData from '../__generated__/componentProps.json';
import { Code } from './Code';
import { ComponentPropsTable } from './ComponentPropsTable';

// Note: We are using `any` here because of a typescript bug with react v18 and next-mdx-remote v3
// Upgrading to v4 causes issues with our pre and code inline components. Be careful when upgrading

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mdxComponents: Record<string, any> = {
	// avoid wrapping live examples in pre tag
	pre: Fragment,
	code: Code,
	Fragment,
	Text,
	TextLink,
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
	Info: ({ children }: { children: ReactNode }) => (
		<div className={proseBlockClassname}>
			<PageAlert tone="info">{children}</PageAlert>
		</div>
	),
	Warning: ({ children }: { children: ReactNode }) => (
		<div className={proseBlockClassname}>
			<PageAlert tone="warning">{children}</PageAlert>
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
};
