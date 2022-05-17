import { Button } from '@ag.ds-next/button';
import { Flex, Stack } from '@ag.ds-next/box';
import { useFormExampleMultiStepProdiver } from './FormExampleMultiStep';
import { Fragment } from 'react';
import { boxPalette } from '@ag.ds-next/core';

export const FormExampleMultiStepActions = () => {
	const { submittingStep, saveAndExit, saving, cancel } =
		useFormExampleMultiStepProdiver();

	return (
		<Fragment>
			<hr
				aria-hidden="true"
				css={{
					boxSizing: 'content-box',
					height: 0,
					margin: 0,
					overflow: 'visible',
					border: 'none',
					borderTopWidth: 1,
					borderTopStyle: 'solid',
					borderColor: boxPalette.borderMuted,
					width: '100%',
				}}
			/>
			<Flex gap={1}>
				<Button type="submit" variant="primary" loading={submittingStep}>
					Continue
				</Button>
				<Button
					type="button"
					variant="secondary"
					loading={saving}
					onClick={saveAndExit}
				>
					Save and exit
				</Button>
				<Button type="button" variant="tertiary" onClick={cancel}>
					Cancel
				</Button>
			</Flex>
		</Fragment>
	);
};
