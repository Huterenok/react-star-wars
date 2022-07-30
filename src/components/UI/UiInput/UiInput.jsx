import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../index.css'
import icon from './img/close.png'
import styles from './UiInput.module.css'


const UiInput = ({value,handleInputChange,placeholder,classes}) => {
	return (
		<>
			<div className={classNames(styles.wrapper__input,classes)}>
				<input type='text' value={value} onChange={(e) => handleInputChange(e.target.value)} placeholder={placeholder} className={styles.input}></input>
				<img onClick={() => value && handleInputChange('')} src={icon} alt="Clear" className={classNames(styles.clear,!value && styles.clear__disabled)} />
			</div>
		</>
	)
}



UiInput.propTypes = {
	value:PropTypes.string,
	handleInputChange:PropTypes.func,
	placeholder:PropTypes.string,
	classes:PropTypes.string,

}

export default UiInput;

