import { AuditPageLayout } from './audit-1-1';

export default function AuditPageL21() {
	return (
		<AuditPageLayout
			breadcrumbs={[{ href: '/audit-1-2', label: 'Level 1 page - 2' }]}
			title="Level 2 page - 1"
		/>
	);
}
