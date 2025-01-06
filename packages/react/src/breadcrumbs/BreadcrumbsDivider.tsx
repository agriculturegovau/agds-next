import { ChevronRightIcon } from '../icon';

export const BreadcrumbsDivider = () => (
	<ChevronRightIcon
		color="border"
		css={{
			flexShrink: 0,
			// Ensure this aligns nicely the line height of `BreadcrumbsItem`
			position: 'relative',
			top: 1,
		}}
		size="sm"
	/>
);
