import { ChangeEvent, Component } from "react";
import { SelectProps, SelectState } from "./select.props.ts";
import styles from './select.module.css';


class Select extends Component<SelectProps, SelectState> {
	handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		this.props.onChangeLanguage(event.target.value);
	}

	render() {
		return (
			<select className={styles.select} name="selectedLang" value={ this.props.activeLanguage } onChange={ this.handleChange }>
				{ this.props.lang.map( ( langValue, index ) => (
					<option key={ index } value={ langValue }>{ langValue }</option>
				) ) }
			</select>
		)
	}
}

export default Select;