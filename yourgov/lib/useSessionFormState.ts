import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
	InviteStaffFormSchema,
	FormState as StepsFormState,
} from '../components/FormMobileFoodVendorPermit/steps/FormState';
import { FormState } from '../components/FormMobileFoodVendorPermit/FormState';
import { StaffMember } from '../components/Staff/lib/types';
import { StaffMemberAccessRequest } from '../components/Staff/lib/accessRequests';
import { DeepPartial } from './types';

type SetStateValue<TValue> = TValue | ((prevState: TValue) => TValue);

/**
 * Node does not support sessionStorage.
 * This provides an easy way to use sessionStorage without getting any errors in Node.
 */
export const safeSessionStorage =
	'sessionStorage' in globalThis ? globalThis.sessionStorage : undefined;

/**
 * This hook sets, stores, and synchronises all state between the session
 * storage and the global React state.
 *
 * TODO: single responsibility
 */
export function useSessionFormState<GlobalState extends DeepPartial<FormState>>(
	key: string,
	initialValue: Partial<GlobalState>
) {
	const [hasSynced, setHasSynced] = useState(false);
	const [globalState, setGlobalState] = useState(initialValue);

	useEffect(() => {
		if (!safeSessionStorage) return;
		const value = safeSessionStorage.getItem(key);
		const parsedValue = value ? (JSON.parse(value) as GlobalState) : null;
		if (parsedValue) setGlobalState(parsedValue);
		setHasSynced(true);
	}, [initialValue, key]);

	const globalStateRef = useRef(globalState);
	globalStateRef.current = globalState;

	// TODO: migrate this to a function called `setGlobalState` that calls a function `syncGlobalStateAndSessionStorage` rather than doing everything in the 'session storage manager' hook
	const setAndSyncGlobalStateAndSessionStorage = useCallback(
		(value: SetStateValue<Partial<GlobalState>>) => {
			function writeStorage(key: string, value: Partial<GlobalState>) {
				safeSessionStorage?.setItem(key, JSON.stringify(value));
				setGlobalState(value);
			}
			value instanceof Function
				? writeStorage(key, value(globalStateRef.current))
				: writeStorage(key, value);
		},
		[key]
	);

	const stateGettersAndSettersPerStep = useMemo(
		() => ({
			stepOwnerDetailsGetState: () => {
				return globalState.steps?.stepOwnerDetails;
			},
			stepOwnerDetailsSetState: (
				newState: Partial<StepsFormState['stepOwnerDetails']>
			) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => {
					return {
						...prevState,
						lastUpdated: Date.now(),
						steps: {
							...prevState.steps,
							stepOwnerDetails: {
								...prevState.steps?.stepOwnerDetails, // User details, e.g. name and email are saved against step 1 but not always included during form submisssions for step 1 - TODO: either migrate this data to hidden form fields in step 1 or include it separately in the confirm and submit page
								...newState,
							},
						},
					};
				});
			},
			stepBusinessDetailsSetState: (
				newState: Partial<StepsFormState['stepBusinessDetails']>
			) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					lastUpdated: Date.now(),
					steps: {
						...prevState.steps,
						stepBusinessDetails: newState,
					},
				}));
			},
			stepBusinessAddressSetState: (
				newState: Partial<StepsFormState['stepBusinessAddress']>
			) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					lastUpdated: Date.now(),
					steps: {
						...prevState.steps,
						stepBusinessAddress: newState,
					},
				}));
			},
			stepVehicleRegistrationSetState: (
				newState: Partial<StepsFormState['stepVehicleRegistration']>
			) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					lastUpdated: Date.now(),
					steps: {
						...prevState.steps,
						stepVehicleRegistration: newState,
					},
				}));
			},
			stepTradingTimeSetState: (
				newState: Partial<StepsFormState['stepTradingTime']>
			) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					lastUpdated: Date.now(),
					steps: {
						...prevState.steps,
						stepTradingTime: newState,
					},
				}));
			},
			stepFoodServedSetState: (
				newState: Partial<StepsFormState['stepFoodServed']>
			) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					lastUpdated: Date.now(),
					steps: {
						...prevState.steps,
						stepFoodServed: newState,
					},
				}));
			},
			stepEmployeesGetState: () => {
				return globalState.steps?.stepEmployees;
			},
			stepEmployeesReviewEditGetState: () => {
				return globalState.steps?.stepEmployeesReviewEdit;
			},
			stepEmployeesSetState: (
				newState: DeepPartial<StepsFormState['stepEmployees']>
			) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					lastUpdated: Date.now(),
					steps: {
						...prevState.steps,
						stepEmployees: {
							started: true,
							...newState,
						},
					},
				}));
			},
			stepEmployeesReviewEditSetState: (
				newState: DeepPartial<
					StepsFormState['stepEmployees' | 'stepEmployeesReviewEdit']
				>
			) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					lastUpdated: Date.now(),
					steps: {
						...prevState.steps,
						stepEmployeesReviewEdit: {
							started: true,
							...newState,
						},
					},
				}));
			},
			stepFoodSafetySupervisorGetState: () => {
				return globalState.steps?.stepFoodSafetySupervisor;
			},
			stepFoodSafetySupervisorSetState: (
				newState: Partial<StepsFormState['stepFoodSafetySupervisor']>
			) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					lastUpdated: Date.now(),
					steps: {
						...prevState.steps,
						stepFoodSafetySupervisor: newState,
					},
				}));
			},
			stepUploadDocumentsGetState: () => {
				return globalState.steps?.stepUploadDocuments;
			},
			stepUploadDocumentsSetState: (
				newState: Partial<StepsFormState['stepUploadDocuments']>
			) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					lastUpdated: Date.now(),
					steps: {
						...prevState.steps,
						stepUploadDocuments: { ...newState, started: true },
					},
				}));
			},
			// This is the review and submit step
			stepReviewAndSubmitSetState: (
				newState: Partial<StepsFormState['stepReviewAndSubmit']>
			) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					lastUpdated: Date.now(),
					completed: true,
					steps: {
						...prevState.steps,
						stepReviewAndSubmit: newState,
					},
				}));
			},
		}),
		[globalState, setAndSyncGlobalStateAndSessionStorage]
	);

	const generateNewStaffMember = useCallback(
		(
			newState: Partial<
				(InviteStaffFormSchema | Omit<StaffMemberAccessRequest, 'status'>) & {
					status: 'Active' | StaffMemberAccessRequest['status'];
				}
			>
		) => {
			const name = `${newState.firstName} ${newState.lastName}`;
			const dateJoined = new Date().toISOString();
			const status = newState.status || 'Invited';

			return {
				...newState,
				age: '18',
				dateJoined,
				foodSafetyCertificate: false,
				lastActive: dateJoined,
				name,
				status,
			};
		},
		[]
	);

	const stateGettersAndSettersForStaff = useMemo(
		() => ({
			accessRequestsGetState: () => {
				// TODO StaffMemberAccessRequest can't be partial, maybe exclude from DeepPartial?
				return (
					(globalState.staff?.accessRequests as StaffMemberAccessRequest[]) ||
					[]
				);
			},
			accessRequestsDelete: (
				accessRequestsToRemove:
					| StaffMemberAccessRequest
					| StaffMemberAccessRequest[]
			) => {
				// Make everything an array for simpler deleting
				const accessRequestsToRemoveAsArray = Array.isArray(
					accessRequestsToRemove
				)
					? accessRequestsToRemove
					: [accessRequestsToRemove];

				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					staff: {
						...prevState.staff,
						accessRequests: (prevState?.staff?.accessRequests || []).filter(
							(accessRequest) =>
								!accessRequestsToRemoveAsArray.some(
									(accessRequestToRemove) =>
										accessRequest?.id === accessRequestToRemove.id
								)
						),
					},
				}));
			},
			accessRequestsUpdate: ({
				accessRequestsToUpdate,
				updates,
			}: {
				accessRequestsToUpdate:
					| StaffMemberAccessRequest
					| StaffMemberAccessRequest[];
				updates: Partial<
					Omit<StaffMemberAccessRequest, 'id' | 'status'> & {
						status: StaffMemberAccessRequest['status'] | 'Active';
					}
				>;
			}) => {
				// Make everything an array for simpler updating
				const accessRequestsToUpdateAsArray = Array.isArray(
					accessRequestsToUpdate
				)
					? accessRequestsToUpdate
					: [accessRequestsToUpdate];

				setAndSyncGlobalStateAndSessionStorage((prevState) => {
					const currentAccessRequests = (prevState?.staff?.accessRequests ||
						[]) as StaffMemberAccessRequest[];

					// When the status is updated to `Active`, then we create a staff member using the access request data
					if (updates.status === 'Active') {
						const newStaff = accessRequestsToUpdateAsArray
							.map((staffMember) => ({ ...staffMember, ...updates }))
							.map(generateNewStaffMember);

						return {
							...prevState,
							staff: {
								...prevState.staff,
								accessRequests: (prevState?.staff?.accessRequests || []).filter(
									(accessRequest) =>
										!accessRequestsToUpdateAsArray.some(
											// Approved requests are no longer needed here, so we remove them
											(accessRequestToRemove) =>
												accessRequest?.id === accessRequestToRemove.id
										)
								),
								staffMembers: [
									...(prevState?.staff?.staffMembers || []),
									...newStaff,
								],
							},
						};
					}

					// All other updates can be kept within the `accessRequests` list
					return {
						...prevState,
						staff: {
							...prevState.staff,
							accessRequests: currentAccessRequests.map((accessRequest) => {
								const shouldUpdate = accessRequestsToUpdateAsArray.some(
									(accessRequestToUpdate) =>
										accessRequest.id === accessRequestToUpdate.id
								);

								return shouldUpdate
									? { ...accessRequest, ...updates }
									: accessRequest;
							}),
						},
					};
				});
			},
			staffMembersGetState: () => {
				// TODO StaffMember can't be partial, maybe exclude from DeepPartial?
				return (globalState.staff?.staffMembers as StaffMember[]) || [];
			},
			staffMembersCreate: (newState: Partial<InviteStaffFormSchema>) => {
				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					staff: {
						...prevState.staff,
						staffMembers: [
							...(prevState?.staff?.staffMembers || []),
							generateNewStaffMember(newState),
						],
					},
				}));
			},
			staffMembersDelete: (staffToRemove: StaffMember | StaffMember[]) => {
				// Make everything an array for simpler deleting
				const staffToRemoveAsArray = Array.isArray(staffToRemove)
					? staffToRemove
					: [staffToRemove];

				setAndSyncGlobalStateAndSessionStorage((prevState) => ({
					...prevState,
					staff: {
						...prevState.staff,
						staffMembers: (prevState?.staff?.staffMembers || []).filter(
							(staffMember) =>
								!staffToRemoveAsArray.some(
									(staffToRemove) => staffMember?.id === staffToRemove.id
								)
						),
					},
				}));
			},
			staffMembersUpdate: ({
				staffToUpdate,
				updates,
			}: {
				staffToUpdate: StaffMember | StaffMember[];
				updates: Partial<Omit<StaffMember, 'id'>>;
			}) => {
				// Make everything an array for simpler updating
				const staffToUpdateAsArray = Array.isArray(staffToUpdate)
					? staffToUpdate
					: [staffToUpdate];

				setAndSyncGlobalStateAndSessionStorage((prevState) => {
					const currentStaffMembers = (prevState?.staff?.staffMembers ||
						[]) as StaffMember[];

					return {
						...prevState,
						staff: {
							...prevState.staff,
							staffMembers: currentStaffMembers.map((staffMember) => {
								const shouldUpdate = staffToUpdateAsArray.some(
									(staffMemberToUpdate) =>
										staffMember.id === staffMemberToUpdate.id
								);

								return shouldUpdate
									? { ...staffMember, ...updates }
									: staffMember;
							}),
						},
					};
				});
			},
		}),
		[
			generateNewStaffMember,
			globalState,
			setAndSyncGlobalStateAndSessionStorage,
		]
	);

	return {
		hasSynced,
		formState: globalState,
		setFormState: setAndSyncGlobalStateAndSessionStorage,
		...stateGettersAndSettersPerStep,
		...stateGettersAndSettersForStaff,
	} as const;
}

export function useHasStartedSessionForm(key: string) {
	const [hasStartedForm, setHasStartedForm] = useState(false);

	useEffect(() => {
		if (!safeSessionStorage) return;
		const value = safeSessionStorage.getItem(key);
		setHasStartedForm(Boolean(value));
	}, [key]);

	return hasStartedForm;
}
