import { Flex } from '@ag.ds-next/box';
import { SuccessFilledIcon, AlertFilledIcon } from '@ag.ds-next/icon';
import { proseBlockClassname } from '@ag.ds-next/prose';

export const DoHeading = () => (
	<Flex as="p" gap={0.5} className={proseBlockClassname}>
		<SuccessFilledIcon color="success" />
		<strong>Do</strong>
	</Flex>
);

export const DontHeading = () => (
	<Flex as="p" gap={0.5} className={proseBlockClassname}>
		<AlertFilledIcon color="error" />
		<strong>Don&apos;t</strong>
	</Flex>
);
