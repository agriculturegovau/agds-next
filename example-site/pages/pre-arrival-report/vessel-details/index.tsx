import { Stack } from '@ag.ds-next/react/box';
import { tokens } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import {
	Frame,
	values,
	FieldSetSummaryList,
	labelMapper,
} from '../../../components/preArrival';

export default function VesselDetails() {
	return (
		<>
			<DocumentTitle title="Vessel Details | Pre-arrival report" />
			<AppLayout>
				<Frame currentPath="#vessel-details">
					<Text maxWidth={tokens.maxWidth.bodyText}>
						It is a requirement of the Biosecurity Act 2015, Section 193 for all
						commercial vessels entering Australian waters to provide the
						information requested in this Pre-Arrival Report form 96 - 12 hours
						before anticipated vessel arrival. The vessel operator is
						responsible for providing true and correct information. False or
						misleading information may result in civil penalty. If the vessel
						operator becomes aware of any changes to the information provided,
						they must provide updated intormation immediatelv. The operator will
						be notified of biosecurity status and pratique via the MARS portal.
					</Text>

					<Stack gap={3}>
						<FieldSetSummaryList
							title="Vessel Particulars"
							fields={(
								Object.entries(values.vesselParticulars) as [
									keyof typeof values.vesselParticulars,
									string
								][]
							).map(([key, value]) => [
								labelMapper[key] || key,
								value,
								`edit-vessel-particulars#${key}`,
							])}
						/>

						<FieldSetSummaryList
							title="Additional vessel information"
							fields={(
								Object.entries(values.additionalVesselInformation) as [
									keyof typeof values.additionalVesselInformation,
									string
								][]
							).map(([key, value]) => [
								labelMapper[key] || key,
								value,
								`edit-additional-information#${key}`,
							])}
						/>
						<FieldSetSummaryList
							title="Ship sanitation"
							fields={(
								Object.entries(values.shipSanitation) as [
									keyof typeof values.shipSanitation,
									string
								][]
							).map(([key, value]) => [
								labelMapper[key] || key,
								value,
								`edit-ship-sanitation#${key}`,
							])}
						/>

						<FieldSetSummaryList
							title="Certificate details"
							fields={(
								Object.entries(values.certificateDetails) as [
									keyof typeof values.certificateDetails,
									string
								][]
							).map(([key, value]) => [
								labelMapper[key] || key,
								value,
								`edit-certificate-details#${key}`,
							])}
						/>
					</Stack>
				</Frame>
			</AppLayout>
		</>
	);
}
