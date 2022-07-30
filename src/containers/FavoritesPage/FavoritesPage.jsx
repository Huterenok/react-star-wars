import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

import PeopleList from '@components/PeoplePage/PeopleList'

import styles from './FavoritesPage.module.css'


const FavoritesPage = () => {
	const [people,setPeople] = useState()
	const storeData = useSelector(state => state.favoriteReducer)
	useEffect(() => {
		const arr = Object.entries(storeData)
		if(arr.length){
			const res = arr.map(el => {
				return {
					id : el[0],
					...el[1]
				}
			})

			setPeople(res)
		}
	},[])
	return (
		<>
			<h1 className='header__text'>Favorites Page</h1>
			{people ?
				<PeopleList people={people}/>
				: <h2 className={styles.comment}> No Data </h2>
			}
		</>
	)
}



export default FavoritesPage;

