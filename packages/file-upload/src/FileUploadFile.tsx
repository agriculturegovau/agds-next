import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { Button } from '@ag.ds-next/button';

import { formatFileSize } from './utils';

export const FileUploadFile = ({ file }: { file: File }) => (
	<Flex
		background="shade"
		rounded
		alignItems="center"
		as="li"
		key={file.name}
		justifyContent="space-between"
	>
		<Text padding={1}>
			{file.name} ({formatFileSize(file.size)})
		</Text>

		<Button variant="tertiary">Remove file</Button>
	</Flex>
);
