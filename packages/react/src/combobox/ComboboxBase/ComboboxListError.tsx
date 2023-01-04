<<<<<<< HEAD:packages/react/src/combobox/ComboboxBase/ComboboxListError.tsx
import { Flex } from '@ag.ds-next/box';
import { AlertFilledIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';
=======
import { Flex } from '../box';
import { AlertIcon } from '../icon';
import { Text } from '../text';
>>>>>>> d50511948 (create pkg):packages/react/src/combobox/ComboboxListError.tsx
import { ComboboxListItem } from './ComboboxListItem';

export function ComboboxListError() {
	return (
		<ComboboxListItem isActiveItem={false} isInteractive={false}>
			<Flex alignItems="center" gap={0.5}>
				<AlertFilledIcon color="error" css={{ flexShrink: 0 }} />
				<Text>Something went wrong.</Text>
			</Flex>
		</ComboboxListItem>
	);
}
