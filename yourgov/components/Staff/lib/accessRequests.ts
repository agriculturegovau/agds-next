export const defaultAccessRequests = [
	{
		email: 'Finley@test.com',
		firstName: 'Finley',
		id: crypto.randomUUID(),
		lastName: 'Campbell',
		mobile: '0411222333',
		role: 'Employee',
		status: 'Access requested',
	},
	{
		email: 'Parker@test.com',
		firstName: 'Parker',
		id: crypto.randomUUID(),
		lastName: 'Ellis',
		mobile: '0411222333',
		role: 'Employee',
		status: 'Access requested',
	},
	{
		email: 'Cameron@test.com',
		firstName: 'Cameron',
		id: crypto.randomUUID(),
		lastName: 'Blake',
		mobile: '0411222333',
		role: 'Employee',
		status: 'Access requested',
	},
	{
		email: 'Quinn@test.com',
		firstName: 'Quinn',
		id: crypto.randomUUID(),
		lastName: 'Sullivan',
		mobile: '0411222333',
		role: 'Employee',
		status: 'Access requested',
	},
	{
		email: 'Casey@test.com',
		firstName: 'Casey',
		id: crypto.randomUUID(),
		lastName: 'Parker',
		mobile: '0411222333',
		role: 'Employee',
		status: 'Access requested',
	},
] as const;

export type StaffMemberAccessRequest = (typeof defaultAccessRequests)[number];
