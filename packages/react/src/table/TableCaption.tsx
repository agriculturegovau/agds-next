import { ReactNode } from 'react';
import { Text } from '../text';
import { SCROLL_OVERLAY_Z_INDEX } from './TableScroller';

export type TableCaptionProps = {
	children: ReactNode;
};

export const TableCaption = ({ children }: TableCaptionProps) => {
	return (
		<Text
			as="caption"
			css={{
				background: 'var(--agds-background-body)',
				height: 'min-content',
				left: 0,
				position: 'fixed',
				top: 0,
				width: '100%',
				zIndex: SCROLL_OVERLAY_Z_INDEX + 1,
			}}
			display="table-caption"
			fontSize="md"
			fontWeight="bold"
			paddingBottom={0.5}
			textAlign="left"
		>
			{children}
		</Text>
	);
};
