import { slugify } from '../../../lib/slugify';
import React, { HTMLAttributes } from 'react';
import { Box } from '@ag.ds-next/box';

function AnchorLink({ slug }: { slug: string }) {
	return (
		<Box
			as="a"
			data-helper
			href={`#${slug}`}
			color="action"
			css={{
				position: 'absolute',
				left: '-1.5em',
				top: 0,
				right: 0,
				bottom: 0,
				lineHeight: 'inherit',
				paddingRight: '0.5rem',
				textDecoration: 'none',
				fontSize: '0.75em',
				border: 'none !important',
				opacity: 0,
				'&:hover, &:focus': {
					opacity: 1,
					textDecoration: 'none',
				},
			}}
		>
			#
		</Box>
	);
}

type HeadingProps = HTMLAttributes<HTMLHeadingElement>;

function DocsHeading({
	type,
	children,
	...props
}: React.PropsWithChildren<
	{
		type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	} & HeadingProps
>) {
	const slug = typeof children === 'string' ? slugify(children) : undefined;
	const Heading = type;

	if (slug) {
		return (
			<Heading css={{ position: 'relative' }} id={slug} {...props}>
				<AnchorLink slug={slug} />
				{children}
			</Heading>
		);
	}

	return <Heading {...props}>{children}</Heading>;
}

export function H1(props: HeadingProps) {
	return <DocsHeading type="h1" {...props} />;
}

export function H2(props: HeadingProps) {
	return <DocsHeading type="h2" {...props} />;
}

export function H3(props: HeadingProps) {
	return <DocsHeading type="h3" {...props} />;
}

export function H4(props: HeadingProps) {
	return <DocsHeading type="h4" {...props} />;
}

export function H5(props: HeadingProps) {
	return <DocsHeading type="h5" {...props} />;
}

export function H6(props: HeadingProps) {
	return <DocsHeading type="h6" {...props} />;
}
