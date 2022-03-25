import React, { Fragment } from 'react';
import { mapSpacing } from '@ag.ds-next/core';
import type { NavbarElementProps } from 'react-day-picker';
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
				css={{
					position: 'absolute',
					top: mapSpacing(1),
					left: mapSpacing(1.5),
					paddingLeft: 0,
					paddingRight: 0,
				}}
				aria-label="Previous month"
			>
				<ChevronLeftIcon size="md" weight="bold" />
			</Button>
		) : null}
		{showNextButton ? (
			<Button
				variant="tertiary"
				onClick={() => onNextClick()}
				css={{
					position: 'absolute',
					top: mapSpacing(1),
					right: mapSpacing(1.5),
					paddingLeft: 0,
					paddingRight: 0,
				}}
				aria-label="Next month"
			>
				<ChevronRightIcon size="md" weight="bold" />
			</Button>
		) : null}
	</Fragment>
);
