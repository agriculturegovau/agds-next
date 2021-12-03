import { useLiveCode } from '@untitled-docs/live-code';
import { useEffect, useRef, useState } from 'react';
import Editor from 'react-simple-code-editor';
import copy from 'clipboard-copy';

import { Button } from '@ag.ds-next/button';
import { Box } from '@ag.ds-next/box';

import { CodeHighlight } from '../CodeHighlight';
import styles from './styles.module.css';

const codeStyles = {
	backgroundColor: 'var(--code-bg)',
	color: 'var(--code)',
	fontFamily: 'var(--font-mono)',
	fontSize: '0.875rem',
	maxWidth: '100%',

	code: {
		fontFamily: 'inherit',
	},
};

function highlightCode(code: string) {
	return <CodeHighlight code={code} language="jsx" />;
}

function Header({ code }: { code: string }) {
	return (
		<div className={styles.header}>
			<Box>
				<Button onClick={() => copy(code)}>Copy</Button>
			</Box>
		</div>
	);
}

type ReactLiveProps = {
	code: string;
	demo?: boolean;
	scope: Record<string, any>;
	initialCompiledResult: any;
};

export function ReactLive({
	code,
	demo,
	scope,
	initialCompiledResult,
}: ReactLiveProps) {
	const collapsible = useRef(false);
	const wrapper = useRef<HTMLDivElement>(null);
	const [collapsed, setCollapsed] = useState(true);
	const [liveCode, setLiveCode] = useState(code);

	const { element, error, latestSuccessfulCompiledResult } = useLiveCode({
		code: liveCode,
		scope,
		initialCompiledResult: () => JSON.parse(initialCompiledResult),
	});

	const gutter = '1rem';
	const COLLAPSE_BUTTON_HEIGHT = '1rem';
	const COLLAPSE_BUTTON_HEIGHT_PX = 16;
	const COLLAPSED_HEIGHT = 200;

	useEffect(() => {
		const el = wrapper.current;

		if (el && el.scrollHeight > COLLAPSED_HEIGHT + COLLAPSE_BUTTON_HEIGHT_PX) {
			collapsible.current = true;
		}
	}, []);

	if (demo) {
		return (
			<div
				style={{
					borderRadius: '3px',
					borderTopLeftRadius: '3px',
					borderTopRightRadius: '3px',
					boxShadow: '0 0 0 1px var(--border)',
					padding: gutter,
				}}
			>
				{element}
			</div>
		);
	}

	return (
		<div
			style={{
				borderRadius: '3px',
				boxShadow: '0 0 0 1px var(--border)',
				margin: '1rem 0',
				whiteSpace: 'break-spaces',
				wordWrap: 'break-word',
			}}
		>
			<div>
				<div
					style={{
						borderTopLeftRadius: '3px',
						borderTopRightRadius: '3px',
						padding: gutter,
					}}
				>
					{element}
				</div>
				{latestSuccessfulCompiledResult && <Header code={liveCode} />}
				<div
					style={{
						overflow: 'hidden',
						borderBottomLeftRadius: '3px',
						borderBottomRightRadius: '3px',
						position: 'relative',
						maxHeight:
							collapsible.current && collapsed ? COLLAPSED_HEIGHT : undefined,
						paddingBottom:
							collapsible.current && !collapsed
								? COLLAPSE_BUTTON_HEIGHT
								: undefined,
					}}
					ref={wrapper}
				>
					<Editor
						value={liveCode}
						padding="1rem"
						highlight={highlightCode}
						onValueChange={setLiveCode}
						style={{
							...codeStyles,
							...(error
								? {}
								: {
										borderBottomLeftRadius: '3px',
										borderBottomRightRadius: '3px',
								  }),
						}}
					/>
					{collapsible.current && (
						<button
							style={{
								background: 'var(--code-bg)',
								border: 0,
								bottom: 0,
								borderBottomLeftRadius: '3px',
								borderBottomRightRadius: '3px',
								boxSizing: 'border-box',
								color: 'var(--code)',
								cursor: 'pointer',
								fontSize: '0.875rem',
								fontWeight: 500,
								height: COLLAPSE_BUTTON_HEIGHT,
								left: 0,
								padding: 0,
								position: 'absolute',
								textTransform: 'uppercase',
								width: '100%',
							}}
							onClick={() => setCollapsed((v) => !v)}
						>
							Show {collapsed ? 'more' : 'less'}
						</button>
					)}
				</div>
			</div>
			{error && (
				<pre
					style={{
						backgroundColor: 'var(--danger-bg)',
						color: 'var(--danger)',
						borderBottomLeftRadius: '3px',
						borderBottomRightRadius: '3px',
						margin: 0,
						maxWidth: '100%',
						padding: gutter,
						whiteSpace: 'pre-wrap',
						wordWrap: 'break-word',
					}}
				>
					{error}
				</pre>
			)}
		</div>
	);
}
