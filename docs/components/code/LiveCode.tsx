import {
	type KeyboardEvent,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import copy from 'clipboard-copy';
import { createUrl } from 'playroom';
import { LiveContext, LiveEditor, LivePreview } from 'react-live';
import { ExternalLinkCallout } from '@ag.ds-next/react/a11y';
import { Box } from '@ag.ds-next/react/box';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { CardHeader } from '@ag.ds-next/react/card';
import {
	globalPalette,
	mapSpacing,
	packs,
	tokens,
	useId,
	useToggleState,
} from '@ag.ds-next/react/core';
import { Flex } from '@ag.ds-next/react/flex';
import { Heading } from '@ag.ds-next/react/heading';
import {
	ChevronDownIcon,
	ChevronUpIcon,
	CopyIcon,
} from '@ag.ds-next/react/icon';
import {
	proseBlockClassname,
	unsetProseStylesClassname,
} from '@ag.ds-next/react/prose';
import { prismTheme } from './prism-theme';
import { ResponsivePreviewLink } from './ResponsivePreviewLink';
import { checkAndModifyCode } from './utils';

export function LiveCode({
	enableProse = false,
	exampleContentHeading,
	exampleContentHeadingType,
	padding = true,
	previewTitle,
	showCode = false,
}: {
	enableProse?: boolean;
	exampleContentHeading?: string;
	exampleContentHeadingType?: 'h2' | 'h3' | 'h4';
	padding?: boolean;
	previewTitle: string;
	showCode?: boolean;
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

	const handleChange = useCallback(
		(code: string) => {
			liveOnChange(code);
			setLocalCopy(code);
		},
		[liveOnChange]
	);

	const copyLiveCode = useCallback(() => {
		copy(localCopy);
	}, [localCopy]);
	const codeUrl = useCallback(() => checkAndModifyCode(live.code), [live.code]);

	const playroomUrl = createUrl({
		baseUrl: process.env.NEXT_PUBLIC_PLAYROOM_URL,
		code: codeUrl(),
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
					padding: padding ? mapSpacing(1.5) : 0,
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
				<ResponsivePreviewLink
					code={live.code}
					padding={padding}
					title={previewTitle}
				>
					Open responsive preview
				</ResponsivePreviewLink>
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
