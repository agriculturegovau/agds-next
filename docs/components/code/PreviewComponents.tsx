import { useCallback } from 'react';
import copy from 'clipboard-copy';
import { ExternalLinkCallout } from '@ag.ds-next/react/a11y';
import { CardHeader } from '@ag.ds-next/react/card';
import { packs } from '@ag.ds-next/react/core';
import { Flex } from '@ag.ds-next/react/flex';
import { Heading } from '@ag.ds-next/react/heading';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { CopyIcon } from '@ag.ds-next/react/icon';
import { ResponsivePreviewLink } from './ResponsivePreviewLink';

export function CodeHeading({
	children,
	exampleContentHeadingType,
}: {
	children: React.ReactNode;
	exampleContentHeadingType?: 'h2' | 'h3' | 'h4';
}) {
	return (
		<CardHeader>
			<Heading type={exampleContentHeadingType}>{children}</Heading>
		</CardHeader>
	);
}

export const PreviewActionContainer = ({
	children,
}: {
	children: React.ReactNode;
}) => (
	<Flex
		borderColor="muted"
		borderTop
		css={packs.print.hidden}
		flexWrap="wrap"
		gap={0.5}
		padding={0.5}
	>
		{children}
	</Flex>
);

export const CopyCodeButton = ({ code }: { code: string }) => {
	const copyLiveCode = useCallback(() => {
		copy(code);
	}, [code]);

	return (
		<Button
			iconAfter={CopyIcon}
			onClick={copyLiveCode}
			size="sm"
			variant="tertiary"
		>
			Copy code
		</Button>
	);
};

export const OpenInPlayroomButton = ({
	playroomUrl,
}: {
	playroomUrl: string;
}) => (
	<ButtonLink href={playroomUrl} size="sm" variant="tertiary">
		Open in Playroom
		<ExternalLinkCallout />
	</ButtonLink>
);

export const ResponsivePreviewButton = ({
	code,
	disablePadding,
	title,
}: {
	code: string;
	disablePadding?: boolean;
	title: string;
}) => (
	<ResponsivePreviewLink
		code={code}
		disablePadding={disablePadding}
		title={title}
	>
		Preview responsive component
	</ResponsivePreviewLink>
);
