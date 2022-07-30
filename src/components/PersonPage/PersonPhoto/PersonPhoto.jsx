import PropTypes from 'prop-types';
import styles from './PersonPhoto.module.css'
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions';

import starWhite from './img/star-white1.png'
import starYellow from './img/star-yellow.png'

const PersonPhoto = ({personId,personPhoto,personName,setPersonFavorite,personFavorite}) => {

	const dispatch = useDispatch()

const dispatchFavoritePeople = () =>{
	if(personFavorite){
		dispatch(removePersonFromFavorite(personId))
		setPersonFavorite(false)
	}else{
		dispatch(setPersonToFavorite({
			[personId] : {
				name : personName,
				img : personPhoto
			}
		}))
		setPersonFavorite(true)
	}
}

	return (
		<>
			<div className={styles.container}>
				<img className={styles.photo} src={personPhoto} alt={personName} />
				<img src={personFavorite ? starYellow : starWhite} alt="" onClick={dispatchFavoritePeople} className={styles.favorite}/>
			</div>
			
		</>
	)
}



PersonPhoto.propTypes = {
	personPhoto:PropTypes.string,
	personName:PropTypes.string,
	personId:PropTypes.string,
	personFavorite:PropTypes.bool,
	setPersonFavorite:PropTypes.func
}

export default PersonPhoto;

