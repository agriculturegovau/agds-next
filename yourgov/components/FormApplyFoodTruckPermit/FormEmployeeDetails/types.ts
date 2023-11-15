export type Employee = {
	givenName: string;
	familyName: string;
};

export function formatEmployeeName(employee: Employee) {
	return [employee.givenName, employee.familyName].join(' ');
}
