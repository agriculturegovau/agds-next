import {
	Table,
	TableHead,
	TableHeader,
	TableBody,
	TableCell,
	TableCaption,
	TableRow,
} from '@ag.ds-next/react/table';

export type ComponentPropsTableProps = {
	data: {
		displayName: string;
		description: string; // Can be empty string
		props: Record<
			string,
			{
				name: string;
				description: string; // Can be empty string
				defaultValue: { value?: unknown } | null;
				type: { name: string };
				required: boolean;
			}
		>;
	};
};

export const ComponentPropsTable = ({ data }: ComponentPropsTableProps) => (
	<Table striped>
		<TableCaption>{data.displayName} Props</TableCaption>
		<TableHead>
			<TableRow>
				<TableHeader scope="col" width="25%">
					Prop
				</TableHeader>
				<TableHeader scope="col" width="35%">
					Type
				</TableHeader>
				<TableHeader scope="col" width="40%">
					Description
				</TableHeader>
			</TableRow>
		</TableHead>
		<TableBody>
			{Object.values(data.props).map((prop) => {
				return (
					<TableRow key={prop.name}>
						<TableCell>
							<span css={{ wordBreak: 'break-word' }}>
								{prop.name}
								{prop.required ? '' : '?'}
							</span>
						</TableCell>
						<TableCell>
							<span css={{ wordBreak: 'break-word' }}>
								{prop.type.name}
								{prop.defaultValue?.value ? (
									<span css={{ display: 'block' }}>
										<strong>Default: </strong>
										{JSON.stringify(prop.defaultValue.value)}
									</span>
								) : null}
							</span>
						</TableCell>
						<TableCell>
							<span css={{ wordBreak: 'break-word' }}>{prop.description}</span>
						</TableCell>
					</TableRow>
				);
			})}
		</TableBody>
	</Table>
);
