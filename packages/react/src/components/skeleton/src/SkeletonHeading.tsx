import { HeadingType, headingFontSizeMap } from '../../heading/src';
import { SkeletonBox, SkeletonBoxProps } from './SkeletonBox';

export type SkeletonHeadingProps = {
	/** The type/level of heading is used to control the height of the element. */
	type: HeadingType;
} & Pick<SkeletonBoxProps, 'width'>;

export const SkeletonHeading = ({
	type,
	width = '100%',
}: SkeletonHeadingProps) => {
	return (
		<SkeletonBox
			fontSize={headingFontSizeMap[type]}
			lineHeight="heading"
			width={width}
		/>
	);
};
