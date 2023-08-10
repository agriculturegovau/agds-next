import { ChevronRightIcon } from '../icon';

export const BreadcrumbsDivider = () => (
	<ChevronRightIcon
		color="border"
		css={{
			flexShrink: 0,
			// We are using a custom size here which should be avoided in most cases. Instead, use the `size` prop
			width: 12,
			height: 12,
			// Ensure this aligns nicely the line height of `BreadcrumbsItem`
			position: 'relative',
			top: 1,
		}}
	/>
);
