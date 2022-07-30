import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton';


import styles from './PeopleNavigation.module.css'


const PeopleNavigation = ({getResource,prevPage,nextPage,counterPage}) => {
	const handleChangeNext = () => {
		getResource(nextPage)
	}
	const handleChangePrevious = () => {
		getResource(prevPage)
	}

	return (
		<div className={styles.container}>
			<Link to={`/people/?page=${counterPage-1}`} className={styles.link}>
				<UiButton text='Previous' onClick={handleChangePrevious} disabled={!prevPage} ></UiButton>
			</Link>
			<Link to={`/people/?page=${counterPage+1}` } className={styles.link}>
				<UiButton disabled={!nextPage} onClick={handleChangeNext} text='Next'></UiButton>
			</Link>
		</div>
	)
}



PeopleNavigation.propTypes = {
	getResource:PropTypes.func,
	prevPage:PropTypes.string,
	nextPage:PropTypes.string,
	counterPage:PropTypes.number
}

export default PeopleNavigation;

