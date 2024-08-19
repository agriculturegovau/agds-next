import { TextLink } from '../text-link';
import { ProgressIndicatorItem } from './ProgressIndicatorItem';
import { type ProgressIndicatorItemLinkProps } from './types';

export const ProgressIndicatorItemLink = ({
	children,
	isActive,
	status,
	...props
}: ProgressIndicatorItemLinkProps) => (
	<ProgressIndicatorItem
		as={TextLink}
		isActive={Boolean(isActive)}
		status={status}
		{...props}
	>
		{children}
	</ProgressIndicatorItem>
);
