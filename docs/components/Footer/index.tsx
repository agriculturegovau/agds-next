import React from 'react';

type FooterProps = {
	style?: React.CSSProperties;
};

export function Footer(props: FooterProps) {
	return (
		<footer
			style={{
				textAlign: 'center',
				background: 'var(--code-bg)',
				padding: 'var(--space-xlarge) 0',
				borderTop: '2px dashed var(--border)',
				...props.style,
			}}
		>
			<div
				style={{
					display: 'inline-grid',
					gridTemplateColumns: 'max-content max-content max-content',
					alignItems: 'center',
					gap: '0.5rem',
				}}
			>
				&copy; Dept of Agriculture
			</div>
		</footer>
	);
}
