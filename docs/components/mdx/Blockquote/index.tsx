import cn from 'classnames';

import * as styles from './style.css';

type BlockquoteProps = React.AllHTMLAttributes<HTMLQuoteElement>;

export function Blockquote({ className, ...props }: BlockquoteProps) {
	return <blockquote className={cn(styles.blockquote, className)} {...props} />;
}
