export type DeepPartial<T> = T extends Date
	? T
	: T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;
