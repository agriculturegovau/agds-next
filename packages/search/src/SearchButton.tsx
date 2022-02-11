import type { ReactNode } from 'react';
import { Button } from '@ag.ds-next/button';

export type SearchButtonProps = {
	children: ReactNode;
};

export const SearchButton = ({ children }: SearchButtonProps) => {
	const styles = buttonStyles();
	return (
		<div css={{ position: 'relative' }}>
			<Button type="submit" css={styles}>
				{children}
			</Button>
		</div>
	);
};

const buttonStyles = () => ({
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
});
