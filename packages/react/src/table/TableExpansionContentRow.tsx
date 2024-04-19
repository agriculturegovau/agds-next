import { Interpolation } from '@emotion/react';
import { ReactNode, useEffect, useRef } from 'react';
import { Theme } from '../core';
import { Box } from '../box';
import { ExpansionProps } from './TableExpansionButtonCell';

type ExpansionContentCellProps<ExpansionKey extends string> =
	ExpansionProps<ExpansionKey> & {
		children: ReactNode;
		colSpan: number;
		animationTime?: number;
	};

export function TableExpansionContentRow<ExpansionKey extends string>({
	dataKey,
	expansionState,
	children,
	colSpan,
	animationTime = 500,
}: ExpansionContentCellProps<ExpansionKey>) {
	const isExpanded = expansionState[dataKey] || false;
	const contentRef = useRef<HTMLDivElement>(null);

	const contentHeight = contentRef.current?.offsetHeight || 0;

	const hiddenStyles: Interpolation<Theme> = {
		overflow: 'hidden',
		visibility: 'hidden',
		maxHeight: 0,
		transition: `visibility ${animationTime}ms, max-height ${animationTime}ms`,
	};

	const visibleStyles: Interpolation<Theme> = {
		overflow: 'hidden',
		visibility: 'visible',
		transition: `visibility 0s, max-height ${animationTime}ms`,
		maxHeight: contentHeight,
	};

	const animationStyles: Interpolation<Theme> = isExpanded
		? visibleStyles
		: hiddenStyles;

	useEffect(() => {
		if (isExpanded) {
			contentRef.current?.focus();
		}
	}, [isExpanded]);

	return (
		<tr aria-hidden={!isExpanded}>
			<td colSpan={colSpan} css={{ border: 'none', padding: 0 }}>
				<div css={animationStyles}>
					<Box
						borderBottom
						borderColor="muted"
						color="text"
						background="shade"
						css={{ verticalAlign: 'top' }}
						focus
						padding={0.75}
						ref={contentRef}
						key={String(isExpanded)}
						tabIndex={-1}
					>
						{children}
					</Box>
				</div>
			</td>
		</tr>
	);
}
