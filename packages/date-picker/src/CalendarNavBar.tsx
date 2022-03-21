import React, { Fragment } from 'react';
import { mapSpacing } from '@ag.ds-next/core';
import type { NavbarElementProps } from 'react-day-picker';
import { ChevronLeftIcon, ChevronRightIcon } from '@ag.ds-next/icon';
import { Button } from '@ag.ds-next/button';

export const CalendarNavbar = ({
	onPreviousClick,
	onNextClick,
}: NavbarElementProps) => (
	<Fragment>
		<Button
			variant="tertiary"
			onClick={() => onPreviousClick()}
			css={{
				position: 'absolute',
				left: mapSpacing(1.5),
				top: '0.5rem',
				paddingLeft: 0,
				paddingRight: 0,
			}}
			aria-label="Previous month"
		>
			<ChevronLeftIcon size="md" weight="bold" />
		</Button>
		<Button
			variant="tertiary"
			onClick={() => onNextClick()}
			css={{
				position: 'absolute',
				right: mapSpacing(1.5),
				top: '0.5rem',
				paddingLeft: 0,
				paddingRight: 0,
			}}
			aria-label="Next month"
		>
			<ChevronRightIcon size="md" weight="bold" />
		</Button>
	</Fragment>
);
