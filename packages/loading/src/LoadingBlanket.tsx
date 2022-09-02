import { ReactNode } from 'react';
import { LoadingBlanketContainer } from './LoadingBlanketContainer';
import { LoadingBlanketContent } from './LoadingBlanketContent';
import { LoadingBlanketLabel } from './LoadingBlanketLabel';
import { LoadingDots } from './LoadingDots';

export type LoadingBlanketProps = {
	/** If true, the blanket will cover the entire screen. */
	fullScreen?: boolean;
	/** The text to accompany the dots. */
	label: ReactNode;
};

export const LoadingBlanket = ({
	fullScreen = false,
	label,
}: LoadingBlanketProps) => (
	<LoadingBlanketContainer fullScreen={fullScreen}>
		<LoadingBlanketContent>
			<LoadingDots size={fullScreen ? 'lg' : 'md'} />
			<LoadingBlanketLabel role="status">{label}</LoadingBlanketLabel>
		</LoadingBlanketContent>
	</LoadingBlanketContainer>
);
