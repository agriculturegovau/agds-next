import { Fragment } from 'react';
import type { NavbarElementProps } from 'react-day-picker';
import { mapResponsiveProp, mapSpacing, mq } from '@ag.ds-next/core';
import { ChevronLeftIcon, ChevronRightIcon } from '@ag.ds-next/icon';
import { Button } from '@ag.ds-next/button';

export const CalendarNavbar = ({
	showPreviousButton,
	onPreviousClick,
	showNextButton,
	onNextClick,
}: NavbarElementProps) => (
	<Fragment>
		{showPreviousButton ? (
			<Button
				variant="tertiary"
				onClick={() => onPreviousClick()}
				css={mq({
					position: 'absolute',
					top: mapResponsiveProp([0.25 as const, 1 as const], mapSpacing),
					left: mapResponsiveProp([0.5 as const, 1.5 as const], mapSpacing),
					paddingLeft: 0,
					paddingRight: 0,
				})}
				aria-label="Previous month"
			>
				<ChevronLeftIcon size="md" weight="bold" />
			</Button>
		) : null}
		{showNextButton ? (
			<Button
				variant="tertiary"
				onClick={() => onNextClick()}
				css={mq({
					position: 'absolute',
					top: mapResponsiveProp([0.25 as const, 1 as const], mapSpacing),
					right: mapResponsiveProp([0.5 as const, 1.5 as const], mapSpacing),
					paddingLeft: 0,
					paddingRight: 0,
				})}
				aria-label="Next month"
			>
				<ChevronRightIcon size="md" weight="bold" />
			</Button>
		) : null}
	</Fragment>
);
