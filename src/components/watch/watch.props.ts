export interface WatchState {
	time: string;
}

export type Time = ReturnType<typeof setInterval> | null;