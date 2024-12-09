import { randomUUID } from '../../../lib/randomUUID';

export const defaultAccessRequests = [
	{
		email: 'Finley@test.com',
		firstName: 'Finley',
		id: randomUUID(),
		lastName: 'Campbell',
		mobile: '0411222333',
		role: 'Employee',
		status: 'Access requested',
	},
	{
		email: 'Parker@test.com',
		firstName: 'Parker',
		id: randomUUID(),
		lastName: 'Ellis',
		mobile: '0411222333',
		role: 'Employee',
		status: 'Access requested',
	},
	{
		email: 'Cameron@test.com',
		firstName: 'Cameron',
		id: randomUUID(),
		lastName: 'Blake',
		mobile: '0411222333',
		role: 'Employee',
		status: 'Access requested',
	},
	{
		email: 'Quinn@test.com',
		firstName: 'Quinn',
		id: randomUUID(),
		lastName: 'Sullivan',
		mobile: '0411222333',
		role: 'Employee',
		status: 'Access requested',
	},
	{
		email: 'Casey@test.com',
		firstName: 'Casey',
		id: randomUUID(),
		lastName: 'Parker',
		mobile: '0411222333',
		role: 'Employee',
		status: 'Access requested',
	},
] as const;

export type StaffMemberAccessRequest = (typeof defaultAccessRequests)[number];
