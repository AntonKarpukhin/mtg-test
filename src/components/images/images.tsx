import { Component } from "react";
import { ImagesProps } from "./images.props.ts";
import styles from './imeges.module.css';


class Images extends Component<ImagesProps> {
	render() {
		return (
			<img className={styles.img} src={this.props.src} alt={this.props.alt}/>
		)
	}
}

export default Images;