import styles from './Favorite.module.css'
import icon from './img/bookmark.png'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import { useEffect, useState } from 'react'

const Favorite = () => {
	const [count,setCount] = useState(2)
	const storeData = useSelector(store => store.favoriteReducer)

useEffect(() => {
	const length = Object.keys(storeData).length

	length.toString().length > 2 ? setCount('...') : setCount(length)

})

	return (
		<div className={styles.container}>
			<NavLink to="/favorites">
				<span className={styles.counter}>{count}</span>
				<img src={icon} alt="Favorites" className={styles.icon} />
			</NavLink>
		</div>
	)
}



export default Favorite;

