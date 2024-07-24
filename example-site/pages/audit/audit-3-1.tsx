import { AuditPageLayout } from './audit-1-1';

export default function AuditPageL31() {
	return (
		<AuditPageLayout
			breadcrumbs={[
				{ href: '/audit-1-2', label: 'Level 1 page - 2' },
				{ href: '/audit-2-2', label: 'Level 2 page - 2' },
			]}
			title="Level 3 page - 1"
		/>
	);
}
