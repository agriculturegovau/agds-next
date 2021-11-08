import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export type ButtonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export function Button(props: ButtonProps) {
	return <button {...props} />;
}
