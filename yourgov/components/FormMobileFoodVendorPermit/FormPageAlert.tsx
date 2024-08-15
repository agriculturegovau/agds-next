import { type FieldError } from 'react-hook-form';
import { useScrollToField } from '@ag.ds-next/react/field';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';

export function FormPageAlert({
	errors,
}: {
	errors: {
		[key: string]: {
			message?: string;
			from?: FieldError;
			to?: FieldError;
			value?: FieldError;
			formatted?: FieldError;
		};
	};
}) {
	const scrollToField = useScrollToField();

	// As our form schema contains nested objects, we are converting the errors from a nested object to a simple flat array
	const flatErrors = Object.entries(errors)
		.map(([key, value]) => {
			if ('message' in value) return { key, message: value.message };
			if ('from' in value) return { key, message: value.from?.message };
			if ('to' in value) return { key, message: value.to?.message };
		})
		.filter((item): item is { key: string; message: string } =>
			Boolean(item?.message)
		);

	return (
		<PageAlert
			focusOnMount
			tabIndex={-1}
			title="There is a problem"
			tone="error"
		>
			<Text as="p">Please correct the following fields and try again</Text>
			<UnorderedList>
				{flatErrors.map(({ key, message }) => (
					<ListItem key={key}>
						<TextLink href={`#${key}`} onClick={scrollToField}>
							{message}
						</TextLink>
					</ListItem>
				))}
			</UnorderedList>
		</PageAlert>
	);
}
