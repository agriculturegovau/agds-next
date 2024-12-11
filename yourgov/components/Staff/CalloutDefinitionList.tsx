import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { mapSpacing } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';

export const CalloutDefinitionList = () => {
	return (
		<Box as="dl">
			<DT>Manager</DT>
			<DD>View who has access to a business.</DD>
			<DD>Set and change notification preferences.</DD>
			<DD>Receive business notifications and messages.</DD>

			<DT>Employee</DT>
			<DD>Set and change notification preferences.</DD>
			<DD>Receive business notifications and messages</DD>

			<DT>Trainee</DT>
			<DD>Receive business notifications and messages.</DD>
		</Box>
	);
};

const DT = ({ children }: { children: ReactNode }) => (
	<Text
		as="dt"
		css={{
			paddingBottom: mapSpacing(1),
			':not(:first-of-type)': { paddingTop: mapSpacing(1) },
		}}
	>
		{children}
	</Text>
);

const DD = ({ children }: { children: ReactNode }) => (
	<Text
		as="dd"
		css={{
			display: 'list-item',
			listStyleType: 'disc',
			marginLeft: mapSpacing(2),
			paddingBottom: mapSpacing(0.25),
		}}
	>
		{children}
	</Text>
);
