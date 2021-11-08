import React from 'react';
import * as styles from './style.css';
import { forwardRefWithAs } from '@ag.ds-next/utils';
import { Box, BoxProps } from '@ag.ds-next/box';

export const Body = forwardRefWithAs<'div', BoxProps>(function Body(
	props,
	ref
) {
	return <Box ref={ref} color="text" className={styles.body} {...props} />;
});
