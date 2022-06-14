import { AnchorHTMLAttributes, HTMLAttributes, Fragment } from 'react';
import Link from 'next/link';
import { TextLinkExternal } from '@ag.ds-next/text-link';
import { slugify } from '../lib/slugify';
import { Code } from './Code';
import { Box } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';

// Note: We are using `any` here because of a typescript bug with react v18 and next-mdx-remote v3
// Upgrading to v4 causes issues with our pre and code inline components. Be careful when upgrading

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mdxComponents: Record<string, any> = {
	// avoid wrapping live examples in pre tag
	pre: Fragment,
	code: Code,
	Fragment,
	a: ({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
		if (!href) return <a {...props} />;
		// Render an external link icon and open page in new tab
		if (/^(https?:\/\/|\/\/)/i.test(href)) {
			return <TextLinkExternal href={href} {...props} />;
		}
		return <Link href={href} {...props} />;
	},
	h2: ({ children }: HTMLAttributes<HTMLHeadingElement>) => {
		return (
			<h2 id={children ? slugify(children.toString()) : undefined}>
				{children}
			</h2>
		);
	},
	StoryBookPreview: ({ src }: { src: string }) => {
		return (
			<Box border borderColor="muted" rounded>
				<iframe src={src} width="100%" height="100px" frameBorder="0" />
				<Box
					flexWrap="wrap"
					padding={0.5}
					gap={0.5}
					borderTop
					borderColor="muted"
				>
					<Button size="sm" variant="tertiary">
						View in Storybook
					</Button>
				</Box>
			</Box>
		);
	},
};
