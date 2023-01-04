import { SkeletonBox, SkeletonBoxProps } from './SkeletonBox';

export type SkeletonTextProps = Omit<SkeletonBoxProps, 'height'>;

export const SkeletonText = ({
	fontSize = 'sm',
	lineHeight = 'default',
	width = '100%',
}: SkeletonTextProps) => {
	return (
		<SkeletonBox fontSize={fontSize} lineHeight={lineHeight} width={width} />
	);
};
