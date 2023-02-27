import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Flex, Stack } from '@ag.ds-next/react/box';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { PageContent } from '@ag.ds-next/react/content';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { scrollFieldIntoView } from '@ag.ds-next/react/field';

// # pre-arrival-report
// ## vessel-particulars
// ## arrival-details
// ## sanitation
// ## human-health
// ## biofouling
// ## biosecurity
// ## covid19

export const PreArrivalReportLayout = ({
	id,
	children,
}: {
	id: string;
	children: React.ReactNode;
}) => {
	return (
		<PageContent>
			<Stack gap={3}>
				<Breadcrumbs
					links={[
						{ href: '#', label: 'Home' },
						{ href: '#', label: 'Pre-arrival reports' },
						{ label: '#PA123456789' },
					]}
				/>
				<Stack gap={1.5}>
					<Stack>
						<Text
							fontSize="sm"
							color="muted"
							fontWeight="bold"
							lineHeight="heading"
						>
							{id}
						</Text>
						<Flex gap={1} alignItems="center">
							<H1 as="h2">Pre-arrival report</H1>
						</Flex>
					</Stack>
				</Stack>
				{children}
			</Stack>
		</PageContent>
	);
};

export function useScrollAndFocusField() {
	const router = useRouter();
	const fieldId = router.query?.field;

	useEffect(() => {
		if (typeof fieldId !== 'string') return;
		const el = document.querySelector(`#${fieldId}`);
		if (el instanceof HTMLInputElement) {
			el.focus();
			scrollFieldIntoView(fieldId);
		}
	}, [fieldId]);
}
