import {
	ButtonHTMLAttributes,
	forwardRef,
	InputHTMLAttributes,
	PropsWithChildren,
} from 'react';
import { BaseButton } from '@ag.ds-next/button';
import { CloseIcon, SearchIcon } from '@ag.ds-next/icon';
import { Field } from '@ag.ds-next/field';
import { Flex } from '@ag.ds-next/box';
import { mapSpacing, tokens } from '@ag.ds-next/core';
import { textInputStyles } from '@ag.ds-next/text-input';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseSearchInputProps = {
	autoFocus?: NativeInputProps['autoFocus'];
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onFocus?: NativeInputProps['onFocus'];
};

export type SearchInputProps = BaseSearchInputProps & {
	/** Describes the purpose of the field. */
	label: string;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** If true, the field will stretch to the fill the width of its container. */
	block?: boolean;
	/** The value of the input. */
	value: string;
	onChange: (value: string) => void;
	onClear?: () => void;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
	function SearchInput(
		{
			label,
			required,
			hint,
			message,
			invalid,
			block,
			id,
			disabled,
			value,
			onChange,
			onClear,
			...props
		},
		ref
	) {
		const showClearButton = Boolean(value && onClear);

		const styles = searchInputStyles({
			block,
			invalid,
			showClearButton,
		});

		return (
			<Field
				label={label}
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				id={id}
			>
				{(a11yProps) => (
					<SearchInputContainer maxWidth={styles.maxWidth}>
						<SearchInputIcon disabled={disabled} />
						<input
							ref={ref}
							type="search"
							disabled={disabled}
							value={value}
							onChange={(event) => onChange(event.target.value)}
							css={{ ...styles, maxWidth: undefined }}
							{...a11yProps}
							{...props}
						/>
						{showClearButton ? (
							<SearchInputClearButton disabled={disabled} onClick={onClear} />
						) : null}
					</SearchInputContainer>
				)}
			</Field>
		);
	}
);

function SearchInputContainer({
	children,
	maxWidth,
}: PropsWithChildren<{ maxWidth: string }>) {
	return <div css={{ position: 'relative', maxWidth }}>{children}</div>;
}

function SearchInputIcon({ disabled }: { disabled?: boolean }) {
	return (
		<SearchIcon
			size="md"
			weight="regular"
			color="muted"
			css={{
				position: 'absolute',
				top: '50%',
				left: `calc(${mapSpacing(1)} + ${tokens.borderWidth.lg}px)`, // Align from the inner border
				transform: 'translateY(-50%)',
				pointerEvents: 'none',
				opacity: disabled ? 0.3 : undefined,
			}}
		/>
	);
}

function SearchInputClearButton({
	disabled,
	onClick,
}: Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'onClick'>) {
	return (
		<Flex
			as={BaseButton}
			alignItems="center"
			justifyContent="center"
			disabled={disabled}
			aria-label="Clear search"
			onClick={onClick}
			focus
			css={{
				position: 'absolute',
				top: '50%',
				right: `calc(${mapSpacing(1)} + ${tokens.borderWidth.lg}px)`, // Align from the inner border
				transform: 'translateY(-50%)',
				opacity: disabled ? 0.3 : 1,
			}}
		>
			<CloseIcon size="md" weight="regular" color="muted" />
		</Flex>
	);
}

const searchInputStyles = ({
	block,
	invalid,
	showClearButton,
}: {
	block?: boolean;
	invalid?: boolean;
	showClearButton: boolean;
}) =>
	({
		...textInputStyles({ block, invalid }),
		width: '100%',
		paddingLeft: '3rem',
		...(showClearButton && {
			paddingRight: '3rem',
		}),
		'&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
			{
				display: 'none',
			},
	} as const);
