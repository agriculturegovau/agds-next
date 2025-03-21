import React, {
	ReactNode,
	useState,
	useCallback,
	Fragment,
	useRef,
	KeyboardEvent,
	useContext,
	useEffect,
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
import { prismTheme } from './prism-theme';

// Add support for diff language support
// https://github.com/FormidableLabs/prism-react-renderer#custom-language-support
(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-diff');

const PlaceholderImage = () => (
	<img
		alt="Grey placeholder image"
		css={{ width: '100%' }}
		src={withBasePath('/img/placeholder/600X260.png')}
	/>
);

function LiveCode({
	showCode = false,
	enableProse = false,
	exampleContentHeading,
	exampleContentHeadingType,
}: {
	showCode?: boolean;
	enableProse?: boolean;
	exampleContentHeading?: string;
	exampleContentHeadingType?: 'h2' | 'h3' | 'h4';
}) {
	const liveEditorRef = useRef<HTMLDivElement>(null);
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

	// LiveEditor doesn't support aria-label, so we have to do it the DOM way
	useEffect(() => {
		const pre = liveEditorRef.current?.querySelector('pre');
		if (pre) {
			pre.ariaLabel = `Live code editor ${id}`;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore Property 'role' does not exist on type 'HTMLPreElement'
			pre.role = 'region';
		}
	}, [id]);

	// Using `Box` here instead of Code snippets with popovers (date picker, combobox, dropdown menu etc) need overflow
	return (
		<Box border borderColor="muted" className={proseBlockClassname} rounded>
			{exampleContentHeadingType && (
				<CardHeader>
					<Heading type={exampleContentHeadingType}>
						{exampleContentHeading}
					</Heading>
				</CardHeader>
			)}
			<LivePreview
				aria-label={`Rendered code snippet example ${id}`}
				// Prevents prose styles from being inherited in live code examples (except for the prose example)
				className={enableProse ? undefined : unsetProseStylesClassname}
				css={{
					// The mdx codeblock transform wraps the code component in a pre which
					// applies some weirdness here. This resets back to normal things
					whiteSpace: 'normal', // other wise text content will not wrap and long lines can break the layout
					fontFamily: tokens.font.body, // because pre applies gets monospace font.
					padding: mapSpacing(1.5),
				}}
				role="region"
			/>
			<Flex
				borderColor="muted"
				borderTop
				css={packs.print.hidden}
				flexWrap="wrap"
				gap={0.5}
				padding={0.5}
			>
				<Button
					aria-controls={codeId}
					aria-expanded={isCodeVisible}
					iconAfter={isCodeVisible ? ChevronUpIcon : ChevronDownIcon}
					onClick={toggleIsCodeVisible}
					ref={liveCodeToggleButton}
					size="sm"
					variant="tertiary"
				>
					{isCodeVisible ? 'Hide live code' : 'Show live code'}
				</Button>
				<Button
					iconAfter={CopyIcon}
					onClick={copyLiveCode}
					size="sm"
					variant="tertiary"
				>
					Copy code
				</Button>
				<ButtonLink href={playroomUrl} size="sm" variant="tertiary">
					Open in Playroom
					<ExternalLinkCallout />
				</ButtonLink>
			</Flex>
			<Box
				css={packs.print.visible}
				display={isCodeVisible ? 'block' : 'none'}
				id={codeId}
				onKeyDown={onLiveEditorContainerKeyDown}
				palette="dark"
				ref={liveEditorRef}
			>
				<LiveEditor
					code={live.code}
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
					disabled={live.disabled}
					language={live.language}
					onChange={handleChange}
					tabMode="focus"
					theme={prismTheme}
				/>
			</Box>
			{live.error ? (
				<Box
					background="shade"
					color="error"
					fontFamily="monospace"
					fontSize="xs"
					padding={1}
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
			borderColor="muted"
			css={{
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
			rounded
		>
			<Box dark>
				<Highlight code={code} language={language} theme={prismTheme}>
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
					aria-label="Copy code snippet to clipboard"
					iconAfter={CopyIcon}
					onClick={() => copy(code)}
					size="sm"
					variant="tertiary"
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
	showCode?: boolean;
	enableProse?: boolean;
	exampleContentHeading?: string;
	exampleContentHeadingType?: 'h2' | 'h3' | 'h4';
};

export function Code({
	children,
	live,
	showCode,
	enableProse,
	className,
	exampleContentHeading = 'Example',
	exampleContentHeadingType,
}: CodeProps) {
	const childrenAsString = children?.toString().trim();
	const language = className?.replace(/language-/, '');

	if (!childrenAsString) return null;

	if (live) {
		return (
			<LiveProvider
				code={childrenAsString}
				language={language}
				scope={LIVE_SCOPE}
			>
				<LiveCode
					enableProse={enableProse}
					exampleContentHeading={exampleContentHeading}
					exampleContentHeadingType={exampleContentHeadingType}
					showCode={showCode}
				/>
			</LiveProvider>
		);
	}

	return <StaticCode code={childrenAsString} language={language} />;
}
