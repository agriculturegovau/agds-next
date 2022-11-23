import {
	ButtonHTMLAttributes,
	ChangeEvent,
	forwardRef,
	InputHTMLAttributes,
	KeyboardEvent,
	PropsWithChildren,
	useCallback,
	useRef,
	useState,
} from 'react';
import { BaseButton } from '@ag.ds-next/button';
import { CloseIcon, SearchIcon } from '@ag.ds-next/icon';
import { Field } from '@ag.ds-next/field';
import { Flex } from '@ag.ds-next/box';
import { mapSpacing, mergeRefs, tokens } from '@ag.ds-next/core';
import { textInputStyles } from '@ag.ds-next/text-input';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseSearchInputProps = {
	autoFocus?: NativeInputProps['autoFocus'];
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onFocus?: NativeInputProps['onFocus'];
	onChange?: NativeInputProps['onChange'];
	value?: NativeInputProps['value'];
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
	/** Function to be called when the input is cleared. */
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
			value: valueProp,
			onChange: onChangeProp,
			onClear,
			...props
		},
		forwardedRef
	) {
		const ref = useRef<HTMLInputElement>(null);
		const [internalValue, setInternalValue] = useState(valueProp || '');

		const value = typeof valueProp === 'string' ? valueProp : internalValue;

		const onChange = useCallback(
			(event: ChangeEvent<HTMLInputElement>) => {
				onChangeProp?.(event);
				setInternalValue(event.target.value);
			},
			[onChangeProp]
		);

		// Clears the input while also triggering the `onChange` event to consumers
		// Note: There may be a better way to do this in the future, but this keeps the API similar to other text field components
		// https://github.com/carbon-design-system/carbon/blob/main/packages/react/src/components/Search/Search.js
		const clearInput = useCallback(() => {
			if (!value) return;
			if (!ref?.current) return;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			onChange({
				target: Object.assign({}, ref?.current, { value: '' }),
				type: 'change',
			});
			ref?.current?.focus();
			onClear?.();
		}, [value, onChange, onClear]);

		// Clear the input if the user presses the escape key
		const onKeyDown = useCallback(
			(e: KeyboardEvent<HTMLInputElement>) => {
				if (e.code !== 'Escape') return;
				clearInput();
			},
			[clearInput]
		);

		const showClearButton = Boolean(value);

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
							ref={mergeRefs([ref, forwardedRef])}
							type="search"
							disabled={disabled}
							value={value}
							onChange={onChange}
							css={{ ...styles, maxWidth: undefined }}
							onKeyDown={onKeyDown}
							{...a11yProps}
							{...props}
						/>
						{showClearButton ? (
							<SearchInputClearButton
								disabled={disabled}
								onClick={clearInput}
							/>
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
			aria-label="Clear search input"
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
