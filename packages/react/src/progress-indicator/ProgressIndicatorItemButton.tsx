import { BaseButton } from '../button';
import { ProgressIndicatorItem } from './ProgressIndicatorItem';
import { type ProgressIndicatorItemButtonProps } from './types';

export const ProgressIndicatorItemButton = ({
	children,
	...props
}: ProgressIndicatorItemButtonProps) => (
	<ProgressIndicatorItem as={BaseButton} {...props}>
		{children}
	</ProgressIndicatorItem>
);
