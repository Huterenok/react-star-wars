import PropTypes from 'prop-types';
import styles from './SearchPageInfo.module.css'
import { NavLink } from 'react-router-dom';

const SearchPageInfo = ({people}) => {
	return (
		<>
			{people.length 
				?	(
					<ul className={styles.list__container}>
						{people.map(({id,name,img})=> (
							<li key={id} className={styles.list__item}>
								<NavLink to={`/people/${id}`}>
									<img src={img} alt={name} className={styles.person__photo}/>
									<p className={styles.person__name}>{name}</p>
								</NavLink>
							</li>
						))}
					</ul>
				)
				: <h2 className={styles.person__comment}>No results</h2>
			}
		</>
	)
}



SearchPageInfo.propTypes = {
	people:PropTypes.array
}

export default SearchPageInfo;

