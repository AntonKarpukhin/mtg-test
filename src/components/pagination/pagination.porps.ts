export interface PaginationProps {
	itemsPerPage: number;
	totalItems: number;
	onChangePage?: (pageNumber: number) => void;
}

export interface PaginationState {
	number: number;
}