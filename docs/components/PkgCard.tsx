import { Box } from '@ag.ds-next/box';
import { H3 } from '@ag.ds-next/heading';
import { TextLink } from '@ag.ds-next/text-link';

export const PkgCard = ({
	pkg,
}: {
	pkg: {
		slug: string;
		group: string;
		title: string;
	};
}) => (
	<Box key={pkg.slug} border rounded padding={2}>
		<TextLink href={`./${pkg.group}/${pkg.slug}`}>
			<H3>{pkg.title}</H3>
		</TextLink>
	</Box>
);
