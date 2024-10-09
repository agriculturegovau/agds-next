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
			as="li"
			aria-label={`… Pages ${missingLeftPageNumber} to ${missingRightPageNumber} are hidden.
					Use the Previous and Next ${isLinks ? 'links' : 'buttons'} to navigate`}
			width={{ sm: BUTTON_SIZE_SM }}
			height={{ sm: BUTTON_SIZE_SM }}
			alignItems="center"
			justifyContent="center"
		>
			<Text>…</Text>
		</Flex>
	);
}
