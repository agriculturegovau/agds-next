import React, { useState, useCallback, Fragment } from 'react';
import {
	LiveProvider,
	LiveEditor,
	LivePreview,
	Editor as StaticEditor,
	withLive,
} from 'react-live';
import { Language } from 'prism-react-renderer';
import copy from 'clipboard-copy';

import { globalVars, tokens } from '@ag.ds-next/core';
import { Box, Flex } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';

import { designSystemComponents } from './design-system-components';
import { agTheme as theme } from './prism-theme';

type CodeProps = {
	children: string;
	className: string;
	live: boolean;
};

const PlaceholderImage = () => (
	<img
		src="/agds-next/img/placeholder/600X260.png"
		alt="Grey placeholder image"
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

	const resetLiveCode = useCallback(() => {
		handleChange(live.code);
	}, [handleChange, live.code]);

	return (
		<Box
			css={{
				boxShadow: `0 0 1px ${globalVars.light.border}`,
			}}
		>
			<Box padding={0.5}>
				<LivePreview
					css={{
						// The mdx codeblock transform wraps the code component in a pre which
						// applies some weirdness here. This resets back to normal things
						whiteSpace: 'normal', // other wise text content will not wrap and long lines can break the layout
						fontFamily: tokens.font.body, // because pre applies gets monospace font.
					}}
				/>
			</Box>
			<LiveEditor
				theme={theme}
				code={live.code}
				language={live.language}
				disabled={live.disabled}
				onChange={handleChange}
				css={{
					'& ::selection': {
						color: globalVars.dark.background.body,
						backgroundColor: globalVars.dark.foreground.action,
					},
					boxShadow: `0 1px 3px -2px ${globalVars.light.border}`,
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
			<Flex theme="light" padding={0.5} gap={0.5} justifyContent="flex-end">
				<Button size="sm" variant="secondary" onClick={copyLiveCode}>
					Copy
				</Button>
				<Button size="sm" variant="tertiary" onClick={resetLiveCode}>
					Reset
				</Button>
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
				boxShadow: `0 0 1px ${globalVars.light.border}`,
				'& ::selection': {
					color: globalVars.dark.background.body,
					backgroundColor: globalVars.dark.foreground.action,
				},
			}}
		>
			<StaticEditor code={code} theme={theme} language={language} disabled />
			<Flex theme="light" padding={0.5} gap={0.5} justifyContent="flex-end">
				<Button size="sm" onClick={() => copy(code)}>
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
