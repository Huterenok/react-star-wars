import PropTypes from 'prop-types'
import classNames from 'classnames'


import styles from './UiButton.module.css'
import '../index.css'


const UiButton = ({text,onClick,disabled,theme='dark',classes}) => {
	return (
		<>
			<button onClick={onClick} disabled={disabled} className={classNames(styles.btn,styles[theme],classes)}>{text}</button>
		</>
	)
}

UiButton.propTypes = {
	text : PropTypes.string,
	onClick : PropTypes.func,
	disabled : PropTypes.bool,
	theme:PropTypes.string,
	classes:PropTypes.string,
}


export default UiButton;

