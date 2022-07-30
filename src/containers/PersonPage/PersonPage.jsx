import React from 'react';
import PropTypes from 'prop-types';
import { useEffect,useState ,Suspense} from 'react';
import { useSelector } from 'react-redux/es/exports';


import {getApiResource} from '@utils/network'
import { useParams } from 'react-router';
import { API_PERSON } from '@constants/api';
import { getPeopleImage } from '@services/getPeopleData';

import { withErrorApi } from '@hoc-helpers/withErrorApi';

import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import UiLoading from '@components/UI/UiLoading';

import styles from './PersonPage.module.css'


const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))


const PersonPage = ({setErrorApi}) => {
	const [personId,setPersonId] = useState(null)
	const [personPhoto,setPersonPhoto] = useState(null)
	const [personInfo,setPersonInfo] = useState(null)
	const [personName,setPersonName] = useState(null)
	const [personFilms,serPersonFilms] = useState(null)
	const [personFavorite,setPersonFavorite] = useState(false)
	let {id} = useParams()
	const storeData = useSelector(state => state.favoriteReducer)
	useEffect(() => {
		(async () => {
			const res = await getApiResource(`${API_PERSON}/${id}/`)

			storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

			setPersonId(id)

			if(res){
				setPersonInfo([
					{ title: 'Height', data: res.height },
					{ title: 'Mass', data: res.mass },
					{ title: 'Hair Color', data: res.hair_color },
					{ title: 'Skin Color', data: res.skin_color },
					{ title: 'Eye Color', data: res.eye_color },
					{ title: 'Birth Year', data: res.birth_year },
					{ title: 'Gender', data: res.gender },
			]);
				setPersonName(res.name)
				setPersonPhoto(getPeopleImage(id))
				res.films.length && serPersonFilms(res.films)
			}
			setErrorApi(!res)
		})()
	},[])




	return (
		<>
		<PersonLinkBack/>
			<div className={styles.wrapper}>
				<span className={styles.person__name}>{personName}</span>
				<div className={styles.container}>
					<PersonPhoto personId={personId} personPhoto={personPhoto} personName={personName} setPersonFavorite={setPersonFavorite} personFavorite={personFavorite}></PersonPhoto>
					{personInfo && <PersonInfo personInfo={personInfo}/>}
					{personFilms && (
						<Suspense fallback={<UiLoading/>}>
							<PersonFilms personFilms={personFilms}/>
						</Suspense>
						)}
				</div>

			</div>
		</>
	)
}



PersonPage.propTypes = {
	setErrorApi:PropTypes.func
}

export default withErrorApi(PersonPage);

