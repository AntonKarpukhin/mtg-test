import { Component } from "react";
import { ListViewProps } from "./list-view.props.ts";
import styles from './list-view.module.css';

class ListView extends Component<ListViewProps> {

	formatClientName = (fullName: string) =>  {
		const nameParts = fullName.split(' ');
		const lastName = nameParts[0];
		const firstNameInitial = nameParts.length > 1 ? nameParts[1].charAt(0).toUpperCase() + '.' : '';
		return `${lastName} ${firstNameInitial}`;
	}

	render() {
		const viewData = this.props.dataView.map(item => {
			return (
				<div className={styles.wrapper} key={ item.name }>
					<p className={styles.name}>{ this.formatClientName(item.name) }</p>
					<p className={styles.review}>{ item.review }</p>
					<p className={styles.date}>{ item.date }</p>
				</div>
			)
		} )

		return (
			<div className={styles.ListView}>
				{ viewData }
			</div>
		)
	}
}

export default ListView;