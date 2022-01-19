import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

import { Icon } from './Icon';
import { ICONS } from './icons';

const IconExample = ({ iconName }: { iconName: keyof typeof ICONS }) => {
	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			flexDirection="column"
			rounded
			gap={1}
			padding={2}
			background="shade"
		>
			<Icon size={3} icon={iconName} />
			<Text>{iconName}</Text>
		</Flex>
	);
};

export const IconExamples = () => {
	return (
		<Flex gap={0.5} flexWrap="wrap" flexDirection="row">
			{Object.keys(ICONS).map((iconName) => (
				<IconExample iconName={iconName} key={iconName} />
			))}
		</Flex>
	);
};
