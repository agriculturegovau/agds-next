import React, {
	ReactNode,
	useState,
	useCallback,
	Fragment,
	useRef,
	KeyboardEvent,
	useContext,
} from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveContext } from 'react-live';
import { createUrl } from 'playroom/utils';
import { Highlight, Prism } from 'prism-react-renderer';
import copy from 'clipboard-copy';
import { ExternalLinkCallout } from '@ag.ds-next/react/a11y';
import { CardHeader } from '@ag.ds-next/react/card';
import {
	globalPalette,
	mapSpacing,
	packs,
	tokens,
	useId,
	useToggleState,
} from '@ag.ds-next/react/core';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { Heading } from '@ag.ds-next/react/heading';
import {
	unsetProseStylesClassname,
	proseBlockClassname,
} from '@ag.ds-next/react/prose';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import {
	CopyIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from '@ag.ds-next/react/icon';
import { withBasePath } from '../lib/img';
import * as designSystemComponents from './designSystemComponents';
import { ConditionalFieldContainer } from './ConditionalFieldContainer';
import { prismTheme } from './prism-theme';

// Add support for diff language support
// https://github.com/FormidableLabs/prism-react-renderer#custom-language-support
(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-diff');

const PlaceholderImage = () => (
	<img
		src={withBasePath('/img/placeholder/600X260.png')}
		alt="Grey placeholder image"
		css={{ width: '100%' }}
	/>
);

function LiveCode({
	showCode = false,
	enableProse = false,
	exampleContentHeadingType,
}: {
	showCode?: boolean;
	enableProse?: boolean;
	exampleContentHeadingType?: 'h2' | 'h3' | 'h4';
}) {
	const liveCodeToggleButton = useRef<HTMLButtonElement>(null);
	const live = useContext(LiveContext);

	const liveOnChange = live.onChange;
	const [localCopy, setLocalCopy] = useState<string>(live.code);
	const [isCodeVisible, toggleIsCodeVisible] = useToggleState(
		showCode,
		!showCode
	);

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
		baseUrl: process.env.NEXT_PUBLIC_PLAYROOM_URL,
		code: live.code.startsWith('<')
			? live.code
			: `<Render>\n    {${live.code
					.slice(0, -1)
					.split('\n')
					.join('\n    ')}}\n</Render>`,
	});

	const id = useId();
	const codeId = `live-code-${id}`;

	const onLiveEditorContainerKeyDown = useCallback(
		(event: KeyboardEvent<HTMLDivElement>) => {
			if (event.code === 'Escape') {
				toggleIsCodeVisible();
				liveCodeToggleButton.current?.focus();
			}
		},
		[toggleIsCodeVisible]
	);

	// Using `Box` here instead of Code snippets with popovers (date picker, combobox, dropdown menu etc) need overflow
	return (
		<Box border borderColor="muted" rounded className={proseBlockClassname}>
			{exampleContentHeadingType && (
				<CardHeader>
					<Heading type={exampleContentHeadingType}>Example</Heading>
				</CardHeader>
			)}
			<LivePreview
				aria-label="Rendered code snippet example"
				// Prevents prose styles from being inherited in live code examples (except for the prose example)
				className={enableProse ? undefined : unsetProseStylesClassname}
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
					ref={liveCodeToggleButton}
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
				onKeyDown={onLiveEditorContainerKeyDown}
			>
				<LiveEditor
					tabMode="focus"
					aria-label="Live code editor, press the escape key to leave the editor"
					theme={prismTheme}
					code={live.code}
					language={live.language}
					disabled={live.disabled}
					onChange={handleChange}
					css={{
						'&:focus-within': packs.outline,
						'textarea, pre': {
							padding: `${mapSpacing(1.5)} !important`,
							tabSize: `4 !important`,
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
}

const StaticCode = ({
	code,
	language = '', // By default render as plain text (ie. no language)
}: {
	code: string;
	language?: string;
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
					tabSize: `4 !important`,
					overflowX: 'auto',
				},

				'& ::selection': {
					color: globalPalette.darkBackgroundBody,
					backgroundColor: globalPalette.darkForegroundAction,
				},
			}}
		>
			<Box dark>
				<Highlight code={code} theme={prismTheme} language={language}>
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
	ConditionalFieldContainer,
	PlaceholderImage,
	useState,
	Fragment,
	React,
};

type CodeProps = {
	children?: ReactNode;
	className?: string;
	live?: boolean;
	showCode?: boolean;
	enableProse?: boolean;
	exampleContentHeadingType?: 'h2' | 'h3' | 'h4';
};

export function Code({
	children,
	live,
	showCode,
	enableProse,
	className,
	exampleContentHeadingType,
}: CodeProps) {
	const childrenAsString = children?.toString().trim();
	const language = className?.replace(/language-/, '');

	if (!childrenAsString) return null;

	if (live) {
		return (
			<LiveProvider
				code={childrenAsString}
				scope={LIVE_SCOPE}
				language={language}
			>
				<LiveCode
					showCode={showCode}
					enableProse={enableProse}
					exampleContentHeadingType={exampleContentHeadingType}
				/>
			</LiveProvider>
		);
	}

	return <StaticCode language={language} code={childrenAsString} />;
}
