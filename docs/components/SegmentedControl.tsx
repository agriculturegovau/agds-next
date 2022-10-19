import { Button, ButtonGroup } from '@ag.ds-next/button';

export function SegmentedControl({ options, selected, onChange }) {
	return (
		<ButtonGroup>
			{options.map((option) => (
				<Button variant="secondary" key={option}>
					{option}
				</Button>
			))}
		</ButtonGroup>
	);
}
