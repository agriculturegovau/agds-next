import { useLiveCode } from '@untitled-docs/live-code';
import copy from 'clipboard-copy';
import { useRouter } from 'next/router';
import { createUrl } from 'playroom/utils';
import PrismHighlight, { defaultProps, Language } from 'prism-react-renderer';
import React, { Fragment, ReactNode, useState } from 'react';
import { LiveProvider, withLive } from 'react-live';
import LiveEditor from 'react-simple-code-editor';
import {
	proseBlockClassname,
	unsetProseStylesClassname,
} from '@ag.ds-next/prose';
import { ChevronDownIcon, ChevronUpIcon, CopyIcon } from '@ag.ds-next/icon';
import {
	globalPalette,
	mapSpacing,
	packs,
	tokens,
	useId,
	useToggleState,
} from '@ag.ds-next/core';
import { Button, ButtonLink } from '@ag.ds-next/button';
import { Box, Flex } from '@ag.ds-next/box';
import { ExternalLinkCallout } from '@ag.ds-next/a11y';
import * as designSystemComponents from './designSystemComponents';
import { prismTheme } from './prism-theme';
import { Highlight } from './Highlight';

const LiveCode = withLive(function LiveCode(props: unknown) {
	const { query } = useRouter();

	// The types on `withLive` are kind of useless.
	const { live, initialCompiledResult } = props as {
		live: {
			code: string;
			error: string | undefined;
			language: Language;
			disabled: boolean;
			onChange: (code: string) => void;
		};
		initialCompiledResult: string;
		metastring?: string;
	};

	const { element, error, latestSuccessfulCompiledResult } = useLiveCode({
		code: live.code,
		scope: LIVE_SCOPE,
		initialCompiledResult: () => JSON.parse(initialCompiledResult),
	});

	const [liveCode, setLiveCode] = useState(live.code);
	const [isCodeVisible, toggleIsCodeVisible] = useToggleState(false, true);

	const codeId = `live-code-${useId}`;

	return (
		<Box border rounded borderColor="muted" className={proseBlockClassname}>
			<Box
				aria-label="Rendered code snippet example"
				// Prevents prose styles from being inherited in live code examples (except for the prose example)
				className={
					query.slug === 'prose' ? undefined : unsetProseStylesClassname
				}
				css={{
					// The mdx codeblock transform wraps the code component in a pre which
					// applies some weirdness here. This resets back to normal things
					whiteSpace: 'normal', // other wise text content will not wrap and long lines can break the layout
					fontFamily: tokens.font.body, // because pre applies gets monospace font.
					padding: mapSpacing(1.5),
				}}
			>
				{element}
			</Box>
			{latestSuccessfulCompiledResult && (
				<Controls
					code={live.code}
					codeId={codeId}
					exampleType={latestSuccessfulCompiledResult.exampleType}
					isCodeVisible={isCodeVisible}
					toggleIsCodeVisible={toggleIsCodeVisible}
				/>
			)}
			<Box
				css={packs.print.visible}
				display={isCodeVisible ? 'block' : 'none'}
				id={codeId}
				palette="dark"
			>
				<LiveEditor
					value={liveCode}
					highlight={(code: string) => <Highlight code={code} language="jsx" />}
					onValueChange={setLiveCode}
					css={{
						background: globalPalette.darkBackgroundBody,
						'textarea, pre': {
							padding: `${mapSpacing(1.5)} !important`,
						},
						'& ::selection': {
							color: globalPalette.darkBackgroundBody,
							backgroundColor: globalPalette.darkForegroundAction,
						},
					}}
				/>
			</Box>
			{error && (
				<Box
					fontFamily="monospace"
					fontSize="xs"
					padding={1}
					color="error"
					background="shade"
				>
					{error}
				</Box>
			)}
		</Box>
	);
});

function Controls({
	code,
	codeId,
	exampleType,
	isCodeVisible,
	toggleIsCodeVisible,
}: {
	code: string;
	codeId: string;
	exampleType: 'jsx' | 'function';
	isCodeVisible: boolean;
	toggleIsCodeVisible: () => void;
}) {
	const playroomUrl = createUrl({
		baseUrl:
			process.env.NODE_ENV === 'production'
				? 'https://steelthreads.github.io/agds-next/playroom'
				: 'http://localhost:9000/',
		code:
			exampleType === 'jsx'
				? code
				: `<Render>\n  {() => {\n    ${code
						.split('\n')
						.join('\n    ')}\n  }}\n</Render>`,
	});

	const copyLiveCode = () => copy(code);

	return (
		<Flex
			flexWrap="wrap"
			padding={0.5}
			gap={0.5}
			borderTop
			borderColor="muted"
			css={packs.print.hidden}
		>
			<Button
				size="sm"
				variant="tertiary"
				onClick={toggleIsCodeVisible}
				iconAfter={isCodeVisible ? ChevronUpIcon : ChevronDownIcon}
				aria-expanded={isCodeVisible}
				aria-label={isCodeVisible ? 'Hide code snippet' : 'Show code snippet'}
				aria-controls={codeId}
			>
				{isCodeVisible ? 'Hide live code' : 'Show live code'}
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
				size="sm"
				variant="tertiary"
				aria-label="Open code snippet in Playroom"
			>
				Open in Playroom
				<ExternalLinkCallout />
			</ButtonLink>
		</Flex>
	);
}

function StaticCode({ code, language }: { code: string; language: Language }) {
	return (
		<Box
			border
			rounded
			borderColor="muted"
			css={{
				overflow: 'hidden',
				marginTop: mapSpacing(1.5),

				pre: {
					padding: `${mapSpacing(1.5)} !important`,
					overflowX: 'auto',
				},

				'& ::selection': {
					color: globalPalette.darkBackgroundBody,
					backgroundColor: globalPalette.darkForegroundAction,
				},
			}}
		>
			<Box dark>
				<PrismHighlight
					{...defaultProps}
					code={code}
					theme={prismTheme}
					language={language}
				>
					{({ className, style, tokens, getLineProps, getTokenProps }) => (
						<pre
							className={[className, unsetProseStylesClassname].join(' ')}
							style={style}
						>
							<code>
								{tokens.map((line, lineKey) => (
									<div key={lineKey} {...getLineProps({ line, key: lineKey })}>
										{line.map((token, tokenKey) => (
											<span
												key={tokenKey}
												{...getTokenProps({ token, key: tokenKey })}
											/>
										))}
									</div>
								))}
							</code>
						</pre>
					)}
				</PrismHighlight>
			</Box>
			<Flex padding={0.5}>
				<Button
					size="sm"
					variant="tertiary"
					onClick={() => copy(code)}
					iconAfter={CopyIcon}
					aria-label="Copy code snippet to clipboard"
				>
					Copy code
				</Button>
			</Flex>
		</Box>
	);
}

type CodeProps = {
	children?: ReactNode;
	className?: string;
	live?: boolean;
};

export function Code({ children, live, className, ...mdxProps }: CodeProps) {
	const childrenAsString = children?.toString().trim();
	const language = className?.replace(/language-/, '') as Language;

	if (!childrenAsString) return null;

	if (live) {
		return (
			<LiveProvider
				code={childrenAsString}
				scope={LIVE_SCOPE}
				language={language}
			>
				<LiveCode {...mdxProps} />
			</LiveProvider>
		);
	}

	return <StaticCode language={language} code={childrenAsString} />;
}

const PlaceholderImage = () => (
	<img
		src="/agds-next/img/placeholder/600X260.png"
		alt="Grey placeholder image"
		css={{ width: '100%' }}
	/>
);

const LIVE_SCOPE = {
	...designSystemComponents,
	PlaceholderImage,
	useState,
	Fragment,
	React,
};
