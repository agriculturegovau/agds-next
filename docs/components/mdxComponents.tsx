import {
	Fragment,
	Children,
	isValidElement,
	HTMLAttributes,
	AnchorHTMLAttributes,
} from 'react';
import type { MDXRemoteProps } from 'next-mdx-remote';
import Link from 'next/link';
import { proseBlockClassname } from '@ag.ds-next/prose';
import { PageAlert, PageAlertProps } from '@ag.ds-next/page-alert';
import { ButtonLink } from '@ag.ds-next/button';
import { slugify } from '../lib/slugify';
import generatedComponentPropsData from '../__generated__/componentProps.json';
import { Code } from './Code';
import { ComponentPropsTable } from './ComponentPropsTable';
import { FigmaLogo } from './FigmaLogo';

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
	FigmaLogo,
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
};
