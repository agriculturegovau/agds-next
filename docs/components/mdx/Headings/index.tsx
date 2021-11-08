import { slugify } from '../../../lib/slugify';
import { Heading, HeadingProps } from '@ag.ds-next/heading';
import React from 'react';

function DocsHeading({
	type,
	children,
	...props
}: React.PropsWithChildren<HeadingProps>) {
	const slug = typeof children === 'string' ? slugify(children) : '';
	return (
		<Heading type={type} id={slug} {...props}>
			<a
				data-helper
				href={`#${slug}`}
				style={{
					padding: 'absolute',
					transform: 'translateX(-0.5rem)',
					paddingRight: '0.5rem',
					fontSize: '0.75em',
					color: 'var(--link) !important',
					border: 'none !important',
				}}
			>
				#
			</a>
			{children}
		</Heading>
	);
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
