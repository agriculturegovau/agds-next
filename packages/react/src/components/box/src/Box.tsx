import { forwardRefWithAs } from '../../core/src';
import { BoxProps, boxStyles } from './styles';

export const Box = forwardRefWithAs<'div', BoxProps>(function Box(
	{ as: Tag = 'div', ...props },
	ref
) {
	const [styles, attrs] = boxStyles(props);
	return <Tag ref={ref} css={styles} {...attrs} />;
});
