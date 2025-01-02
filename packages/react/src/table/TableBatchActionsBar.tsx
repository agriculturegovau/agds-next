import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Stack } from '../stack';

export type TableBatchActionsProps = PropsWithChildren<{}>;

export function TableBatchActionsBar({ children }: TableBatchActionsProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(
			([e]) => setIsSticky(e.intersectionRatio < 1),
			{ threshold: [1] }
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<Stack
			background="bodyAlt"
			border
			borderColor="muted"
			borderWidth="sm"
			css={{
				position: 'sticky',
				bottom: -1,
				...(isSticky && {
					borderBottomLeftRadius: 0,
					borderBottomRightRadius: 0,
					borderBottomWidth: 0,
					boxShadow: `0 -2px 4px rgba(0, 0, 0, 0.3)`,
				}),
			}}
			gap={1}
			padding={1}
			ref={ref}
			rounded
		>
			{children}
		</Stack>
	);
}
