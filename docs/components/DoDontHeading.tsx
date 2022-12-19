import { Flex } from '@ag.ds-next/box';
import { SuccessFilledIcon, AlertFilledIcon } from '@ag.ds-next/icon';

export const DoHeading = () => (
	<p>
		<Flex as="span" alignItems="center" gap={0.5}>
			<SuccessFilledIcon color="success" />
			<strong>Do</strong>
		</Flex>
	</p>
);

export const DontHeading = () => (
	<p>
		<Flex as="span" alignItems="center" gap={0.5}>
			<AlertFilledIcon color="error" />
			<strong>Don&apos;t</strong>
		</Flex>
	</p>
);
