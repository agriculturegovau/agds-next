import { ChevronRightIcon } from '@ag.ds-next/icon';

export const BreadcrumbsDivider = () => (
	<ChevronRightIcon
		color="border"
		weight="bold"
		css={{
			flexShrink: 0,
			// We are using a custom size here which should be avoided in most cases. Instead, use the `size` prop
			width: 10,
			height: 10,
			// Ensure this aligns nicely the line height of `BreadcrumbsItem`
			position: 'relative',
			top: 1,
		}}
	/>
);
