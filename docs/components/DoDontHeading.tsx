import { Flex } from '@ag.ds-next/react/flex';
import { SuccessFilledIcon, AlertFilledIcon } from '@ag.ds-next/react/icon';

export const DoHeading = () => (
	<p>
		<Flex alignItems="center" as="span" gap={0.5}>
			<SuccessFilledIcon color="success" />
			<strong>Do</strong>
		</Flex>
	</p>
);

export const DontHeading = () => (
	<p>
		<Flex alignItems="center" as="span" gap={0.5}>
			<AlertFilledIcon color="error" />
			<strong>Don’t</strong>
		</Flex>
	</p>
);
