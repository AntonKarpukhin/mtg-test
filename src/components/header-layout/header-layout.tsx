import { Component } from "react";
import { HeaderLayoutProps } from "./header-layout.props.ts";
import styles from './header-layout.module.css';


class HeaderLayout extends Component<HeaderLayoutProps> {
	render() {
		return (
			<div className={styles.HeaderLayout}>{this.props.children}</div>
		)
	}
}

export default HeaderLayout;