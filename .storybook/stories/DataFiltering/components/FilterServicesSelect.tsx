import { ControlGroup } from '../../../../packages/react/src/control-group';
import { Checkbox } from '../../../../packages/react/src/checkbox';
import { useSortAndFilterContext } from '../lib/contexts';
import { services } from '../lib/generateBusinessData';
import { tableId } from './DataTable';

export const FilterServicesSelect = ({ block }: { block?: boolean }) => {
	const { filters, setFilter } = useSortAndFilterContext();
	return (
		<ControlGroup
			aria-controls={tableId}
			block={block}
			hideOptionalLabel
			label="Services"
		>
			{services.map((service) => (
				<Checkbox
					checked={(filters.services || []).includes(service)}
					key={service}
					onChange={(e) => {
						const checked = e.target.checked;
						setFilter({
							services: checked
								? [...(filters.services || []), service]
								: filters.services?.filter((s) => s !== service),
						});
					}}
					value={service}
				>
					{service}
				</Checkbox>
			))}
		</ControlGroup>
	);
};
