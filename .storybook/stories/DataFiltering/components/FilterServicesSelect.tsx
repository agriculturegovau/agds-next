import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { useSortAndFilterContext } from '../lib/contexts';
import { services } from '../lib/generateBusinessData';
import { tableId } from './DataTable';

export const FilterServicesSelect = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();
	return (
		<ControlGroup
			label="Services"
			block={block}
			hideOptionalLabel
			aria-controls={tableId}
		>
			{services.map((service) => (
				<Checkbox
					key={service}
					value={service}
					checked={(filters.services || []).includes(service)}
					onChange={(e) => {
						const checked = e.target.checked;
						setFilter({
							services: checked
								? [...(filters.services || []), service]
								: filters.services?.filter((s) => s !== service),
						});
					}}
				>
					{service}
				</Checkbox>
			))}
		</ControlGroup>
	);
};
