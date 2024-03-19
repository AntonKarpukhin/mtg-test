import { Component, MouseEvent } from "react";
import { PaginationProps, PaginationState } from "./pagination.porps.ts";
import styles from './pagination.module.css';


class Pagination extends Component<PaginationProps, PaginationState> {
	constructor(props: PaginationProps) {
		super(props);
		this.state = {
			number: 1
		};
	}

	generatePageNumbers = (): (number | string)[] => {
		const { totalItems, itemsPerPage } = this.props;
		const totalPages = Math.ceil(totalItems / itemsPerPage);
		const pageNumbers: (number | string)[] = [];
		const maxVisiblePages = 3;
		const middleIndex = Math.floor(maxVisiblePages / 2);

		let startPage = Math.max(this.state.number - middleIndex, 1);
		let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

		if (endPage - startPage + 1 < maxVisiblePages) {
			startPage = Math.max(endPage - maxVisiblePages + 1, 1);
		}
		if (endPage - startPage + 1 < maxVisiblePages) {
			endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
		}

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(i);
		}

		if (startPage > 2) {
			pageNumbers.unshift('...');
		}
		if (endPage < totalPages - 1) {
			pageNumbers.push('...');
		}

		if (!pageNumbers.includes(1)) {
			pageNumbers.unshift(1);
		}
		if (!pageNumbers.includes(totalPages)) {
			pageNumbers.push(totalPages);
		}
		return pageNumbers;
	};

	changePage = (e: MouseEvent<HTMLSpanElement>, pageNumber: number | string): void => {
		e.preventDefault();
		if (pageNumber === "...") {
			return;
		} else if (typeof pageNumber === 'number' && pageNumber === this.state.number) {
			return;
		}
		if (typeof pageNumber === 'number') {
			this.setState({ number: pageNumber });
			if (this.props.onChangePage) {
				this.props.onChangePage(pageNumber);
			}
		}
	}

	render() {
		const { number } = this.state;

		return (
			<div className={styles.Pagination}>
				{this.generatePageNumbers().map((pageNumber, index) => {
					const active = pageNumber === number ? styles.active : '';
					const dots = pageNumber === "..." ? styles.dots : '';
					return (
						<span
							key={ index }
							className={`${styles.PaginationItem} ${active} ${dots}`}
							onClick={ ( e ) => this.changePage( e, pageNumber as number | string ) }
						>
							{ pageNumber }
						</span>
					)
				} ) }
			</div>
		);
	}
}

export default Pagination;
