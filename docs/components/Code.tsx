import React, { useState, useCallback, Fragment } from 'react';
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

import { globalPalette, mapSpacing, tokens } from '@ag.ds-next/core';
import { Box, Flex } from '@ag.ds-next/box';
import { excludeBodyStylesClassname } from '@ag.ds-next/body';
import { Button, ButtonLink } from '@ag.ds-next/button';
import { ExternalLinkIcon } from '@ag.ds-next/icon';

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
		<Box css={{ boxShadow: `0 0 1px ${globalPalette.lightBorder}` }}>
			<Box padding={1}>
				<LivePreview
					// Prevents body styles from being inherited in live code examples
					className={excludeBodyStylesClassname}
					css={{
						// The mdx codeblock transform wraps the code component in a pre which
						// applies some weirdness here. This resets back to normal things
						whiteSpace: 'normal', // other wise text content will not wrap and long lines can break the layout
						fontFamily: tokens.font.body, // because pre applies gets monospace font.
					}}
				/>
			</Box>
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
					boxShadow: `0 1px 3px -2px ${globalPalette.lightBorder}`,
				}}
			/>
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
			<Flex palette="light" padding={1} gap={0.5}>
				<Button size="sm" variant="secondary" onClick={copyLiveCode}>
					Copy
				</Button>
				<ButtonLink
					href={playroomUrl}
					target="_blank"
					rel="noopener noreferrer"
					size="sm"
					variant="tertiary"
					iconAfter={ExternalLinkIcon}
				>
					Open in Playroom
				</ButtonLink>
			</Flex>
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
