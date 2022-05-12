import React, { useState, useCallback, Fragment } from 'react';
import { useRouter } from 'next/router';
import {
	LiveProvider,
	LiveEditor,
	LivePreview,
	Editor as StaticEditor,
	withLive,
} from 'react-live';
import { createUrl } from 'playroom/utils';
import { Language } from 'prism-react-renderer';
import copy from 'clipboard-copy';

import { visuallyHiddenStyles } from '@ag.ds-next/a11y';
import { globalPalette, mapSpacing, tokens } from '@ag.ds-next/core';
import { Box, Flex } from '@ag.ds-next/box';
import { unsetBodyStylesClassname } from '@ag.ds-next/body';
import { Button, ButtonLink } from '@ag.ds-next/button';
import {
	CopyIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	ExternalLinkIcon,
} from '@ag.ds-next/icon';

import { designSystemComponents } from './design-system-components';
import { prismTheme } from './prism-theme';

type CodeProps = {
	children: string;
	className: string;
	live: boolean;
};

const PlaceholderImage = () => (
	<img
		src="/agds-next/img/placeholder/600X260.png"
		alt="Grey placeholder image"
		css={{ width: '100%' }}
	/>
);

const LiveCode = withLive((props: unknown) => {
	const { query } = useRouter();

	// The types on `withLive` are kind of useless.
	const { live } = props as {
		live: {
			code: string;
			error: string | undefined;
			language: Language;
			disabled: boolean;
			onChange: (code: string) => void;
		};
	};

	const liveOnChange = live.onChange;
	const [localCopy, setLocalCopy] = useState<string>(live.code);
	const [isCodeVisible, setCodeVisible] = useState(false);

	const copyLiveCode = useCallback(() => {
		copy(localCopy);
	}, [localCopy]);

	const handleChange = useCallback(
		(code) => {
			liveOnChange(code);
			setLocalCopy(code);
		},
		[liveOnChange]
	);

	const playroomUrl = createUrl({
		baseUrl: '/playroom',
		code: live.code,
	});

	return (
		<Box
			as="aside"
			aria-label="Code example"
			border
			rounded
			borderColor="muted"
			css={{
				marginTop: mapSpacing(1.5),
			}}
		>
			<Box as="figure">
				<figcaption css={visuallyHiddenStyles}>Rendered example</figcaption>
				<LivePreview
					// Prevents body styles from being inherited in live code examples (except for the body example)
					className={
						query.slug === 'body' ? undefined : unsetBodyStylesClassname
					}
					css={{
						// The mdx codeblock transform wraps the code component in a pre which
						// applies some weirdness here. This resets back to normal things
						whiteSpace: 'normal', // other wise text content will not wrap and long lines can break the layout
						fontFamily: tokens.font.body, // because pre applies gets monospace font.
						padding: mapSpacing(2),
					}}
				/>
			</Box>
			<Flex palette="light" padding={1} gap={0.5} borderTop borderColor="muted">
				<Button
					size="sm"
					variant="tertiary"
					onClick={() => setCodeVisible(!isCodeVisible)}
					iconAfter={isCodeVisible ? ChevronUpIcon : ChevronDownIcon}
					aria-expanded={isCodeVisible}
					aria-label="Show code snippet"
				>
					{isCodeVisible ? 'Hide code' : 'Show code'}
				</Button>

				<Button
					size="sm"
					variant="tertiary"
					onClick={copyLiveCode}
					iconAfter={CopyIcon}
					aria-label="Copy code snippet to clipboard"
				>
					Copy code
				</Button>
				<ButtonLink
					href={playroomUrl}
					target="_blank"
					rel="noopener noreferrer"
					size="sm"
					variant="tertiary"
					iconAfter={ExternalLinkIcon}
					aria-label="Open example in Playroom"
				>
					Open in Playroom
				</ButtonLink>
			</Flex>
			{isCodeVisible && (
				<Box as="figure" borderTop borderColor="muted" id="code-example">
					<figcaption css={visuallyHiddenStyles}>Code snippet</figcaption>
					<LiveEditor
						theme={prismTheme}
						code={live.code}
						language={live.language}
						disabled={live.disabled}
						onChange={handleChange}
						css={{
							'textarea, pre': {
								padding: `${mapSpacing(1)} !important`,
							},
							'& ::selection': {
								color: globalPalette.darkBackgroundBody,
								backgroundColor: globalPalette.darkForegroundAction,
							},
						}}
					/>
				</Box>
			)}
			{live.error ? (
				<Box
					fontFamily="monospace"
					fontSize="xs"
					padding={1}
					color="error"
					background="shade"
				>
					{live.error}
				</Box>
			) : null}
		</Box>
	);
});

const StaticCode = ({
	code,
	language,
}: {
	code: string;
	language: Language;
}) => {
	return (
		<Box
			css={{
				boxShadow: `0 0 1px ${globalPalette.lightBorder}`,
				marginTop: mapSpacing(1.5),

				'textarea, pre': {
					padding: `${mapSpacing(1)} !important`,
				},

				'& ::selection': {
					color: globalPalette.darkBackgroundBody,
					backgroundColor: globalPalette.darkForegroundAction,
				},
			}}
		>
			<StaticEditor
				code={code}
				theme={prismTheme}
				language={language}
				disabled
			/>
			<Flex palette="light" padding={1}>
				<Button size="sm" variant="secondary" onClick={() => copy(code)}>
					Copy
				</Button>
			</Flex>
		</Box>
	);
};

const LIVE_SCOPE = {
	...designSystemComponents,
	PlaceholderImage,
	useState,
	Fragment,
	React,
};

export function Code({ children, live, className }: CodeProps) {
	const language = className?.replace(/language-/, '') as Language;
	if (live) {
		return (
			<LiveProvider
				code={children.trim()}
				scope={LIVE_SCOPE}
				language={language}
			>
				<LiveCode />
			</LiveProvider>
		);
	}

	return <StaticCode language={language} code={children.trim()} />;
}
