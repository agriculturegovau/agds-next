import { Flex } from '../flex';
import { Text } from '../text';
import { BUTTON_SIZE_SM } from './utils';

export function PaginationItemSeparator() {
	return (
		<Flex
			as="li"
			width={{ sm: BUTTON_SIZE_SM }}
			height={{ sm: BUTTON_SIZE_SM }}
			alignItems="center"
			justifyContent="center"
		>
			<Text>&hellip;</Text>
		</Flex>
	);
}
