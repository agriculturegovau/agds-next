import { ButtonHTMLAttributes } from 'react';
import { Box } from '@ag.ds-next/box';

export type TextButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'color'
>;

export const TextButton = (props: TextButtonProps) => {
	return (
		<Box
			as="button"
			fontFamily="body"
			fontSize="sm"
			color="action"
			css={{
				appearance: 'none',
				background: 'transparent',
				cursor: 'pointer',
				textAlign: 'left',

				'&:disabled': {
					cursor: 'not-allowed',
					opacity: 0.3,
				},
			}}
			link
			focus
			{...props}
		/>
	);
};
