import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';

import { Icon, IconNameType } from './Icon';
import { ICONS } from './icons_old';

const IconExample = ({ iconName }: { iconName: keyof typeof ICONS }) => {
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			flexShrink={0}
			rounded
			gap={1}
			padding={2}
			background="shade"
			css={{ width: 180 }}
		>
			<Icon size={3} icon={iconName} />
			<Text>{iconName}</Text>
		</Flex>
	);
};

export const IconExamples = () => {
	return (
		<Flex gap={0.5} flexWrap="wrap">
			{(Object.keys(ICONS) as IconNameType[]).sort().map((iconName) => (
				<IconExample iconName={iconName} key={iconName} />
			))}
		</Flex>
	);
};
