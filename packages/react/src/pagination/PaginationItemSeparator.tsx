import { Flex } from '../flex';
import { Text } from '../text';
import { BUTTON_SIZE_SM } from './utils';

export function PaginationItemSeparator({
	isLinks,
	missingLeftPageNumber,
	missingRightPageNumber,
}: {
	isLinks: boolean;
	missingLeftPageNumber: number;
	missingRightPageNumber: number;
}) {
	return (
		<Flex
			alignItems="center"
			aria-label={`… Pages ${missingLeftPageNumber} to ${missingRightPageNumber} are hidden.
			as="li"
			height={{ sm: BUTTON_SIZE_SM }}
			justifyContent="center"
			Use the Previous and Next ${isLinks ? 'links' : 'buttons'} to navigate`}
			width={{ sm: BUTTON_SIZE_SM }}
		>
			<Text>…</Text>
		</Flex>
	);
}
