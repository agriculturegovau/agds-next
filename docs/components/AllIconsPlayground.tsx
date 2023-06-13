import { useState } from 'react';
import { allIcons } from '@ag.ds-next/react/icon';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { Select } from '@ag.ds-next/react/select';
import { Columns } from '@ag.ds-next/react/columns';
import { proseBlockClassname } from '@ag.ds-next/react/prose';

type IconSize = 'sm' | 'md' | 'lg' | 'xl';
type IconWeight = 'regular' | 'bold';

export function AllIconsPlayground() {
	const [size, setSize] = useState<IconSize>('md');
	const [weight, setWeight] = useState<IconWeight>('regular');
	return (
		<Stack gap={1.5} className={proseBlockClassname}>
			<Columns cols={{ xs: 1, sm: 2, md: 3 }} gap={1}>
				<Select
					label="Size"
					hideOptionalLabel
					maxWidth="xl"
					value={size}
					onChange={(e) => setSize(e.target.value as IconSize)}
					options={[
						{ label: 'Small (sm)', value: 'sm' },
						{ label: 'Medium (md)', value: 'md' },
						{ label: 'Large (lg)', value: 'lg' },
						{ label: 'X-Large (xl)', value: 'xl' },
					]}
				/>
				<Select
					label="Weight"
					hideOptionalLabel
					maxWidth="xl"
					value={weight}
					onChange={(e) => setWeight(e.target.value as IconWeight)}
					options={[
						{ label: 'Regular', value: 'regular' },
						{ label: 'Bold', value: 'bold' },
					]}
				/>
			</Columns>
			<Columns cols={{ xs: 1, sm: 2, md: 3 }} gap={1}>
				{Object.keys(allIcons)
					.sort()
					.map((iconName) => {
						const Icon = allIcons[iconName as keyof typeof allIcons];
						return (
							<Flex
								key={iconName}
								flexDirection="column"
								alignItems="center"
								justifyContent="center"
								flexShrink={0}
								rounded
								gap={1}
								padding={2}
								background="shade"
							>
								<Icon size={size} weight={weight} />
								<Text>{iconName}</Text>
							</Flex>
						);
					})}
			</Columns>
		</Stack>
	);
}
