import { createContext, PropsWithChildren, useContext } from 'react';
import { useSessionFormState } from '../../lib/useSessionFormState';
import { DeepPartial } from '../../lib/types';
import { FormState } from '../FormMobileFoodVendorPermit/FormState';
import { staffMembers } from './lib/staffMembers';
import { StaffMember } from './lib/types';

const defaultStaffState: DeepPartial<FormState> = {
	staff: {
		accessRequests: [],
		staffMembers: staffMembers as unknown as StaffMember[],
	},
};

type GlobalState = Omit<ReturnType<typeof useSessionFormState>, 'hasSynced'>;

type ContextType = GlobalState & {
	formTitle: string;
};

const context = createContext<ContextType | undefined>(undefined);

type StaffProviderProps = PropsWithChildren<{}>;

export function StaffProvider({ children }: StaffProviderProps) {
	const {
		hasSynced,
		formState,
		setFormState,
		...stateGettersAndSettersForStaff
	} = useSessionFormState('Staff', defaultStaffState);

	const formTitle = `Apply for a ${formState.type} permit`;

	// Prevent the form rendering until the user's progress has been loaded from session storage
	if (!hasSynced) return null;

	const contextValue: ContextType = {
		formState,
		formTitle,
		setFormState,
		...stateGettersAndSettersForStaff,
	};

	return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export function useStaffGlobalState() {
	const value = useContext(context);

	if (!value) {
		throw new Error('StaffProvider not found');
	}

	return value;
}
