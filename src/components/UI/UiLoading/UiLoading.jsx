import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './UiLoading.module.css'

import loaderGreen from './img/loader-green.svg'
const UiLoading = () => {
	return (
		<img src={loaderGreen} alt="loading..." className={styles.loader} />
	)
}



UiLoading.propTypes = {
	isShadow:PropTypes.bool
}

export default UiLoading;

