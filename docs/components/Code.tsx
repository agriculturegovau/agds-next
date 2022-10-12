import copy from 'clipboard-copy';
import { useRouter } from 'next/router';
import { createUrl } from 'playroom/utils';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import React, { Fragment, ReactNode, useCallback, useState } from 'react';
import { LiveEditor, LivePreview, LiveProvider, withLive } from 'react-live';
import {
	Box,
	Button,
	ButtonLink,
	ChevronDownIcon,
	ChevronUpIcon,
	CopyIcon,
	ExternalLinkCallout,
	Flex,
	globalPalette,
	mapSpacing,
	packs,
	proseBlockClassname,
	tokens,
	unsetProseStylesClassname,
	useId,
	useToggleState,
} from '@ag.ds-next/design-system';
import * as designSystemComponents from './designSystemComponents';
import { prismTheme } from './prism-theme';

const PlaceholderImage = () => (
	<img
		src="/agds-next/img/placeholder/600X260.png"
		alt="Grey placeholder image"
		css={{ width: '100%' }}
	/>
);

const LiveCode = withLive(function LiveCode(props: unknown) {
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
	const [isCodeVisible, toggleIsCodeVisible] = useToggleState(false, true);

	const copyLiveCode = useCallback(() => {
		copy(localCopy);
	}, [localCopy]);

	const handleChange = useCallback(
		(code: string) => {
			liveOnChange(code);
			setLocalCopy(code);
		},
		[liveOnChange]
	);

	const playroomUrl = createUrl({
		baseUrl: 'https://steelthreads.github.io/agds-next/playroom',
		code: live.code,
	});

	const id = useId();
	const codeId = `live-code-${id}`;

	return (
		<Box border rounded borderColor="muted" className={proseBlockClassname}>
			<LivePreview
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
			/>
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
			<Box
				id={codeId}
				display={isCodeVisible ? 'block' : 'none'}
				css={packs.print.visible}
				palette="dark"
			>
				<LiveEditor
					theme={prismTheme}
					code={live.code}
					language={live.language}
					disabled={live.disabled}
					onChange={handleChange}
					css={{
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
				<Highlight
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
				</Highlight>
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
};

const LIVE_SCOPE = {
	...designSystemComponents,
	PlaceholderImage,
	useState,
	Fragment,
	React,
};

type CodeProps = {
	children?: ReactNode;
	className?: string;
	live?: boolean;
};

export function Code({ children, live, className }: CodeProps) {
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
				<LiveCode />
			</LiveProvider>
		);
	}

	return <StaticCode language={language} code={childrenAsString} />;
}
