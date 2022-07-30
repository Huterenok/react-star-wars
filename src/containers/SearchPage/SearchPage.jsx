import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import {withErrorApi} from '@hoc-helpers/withErrorApi'
import {getApiResource} from '@utils/network'
import { API_SEARCH } from '@constants/api';
import {getPeopleId,getPeopleImage} from '@services/getPeopleData'
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import { debounce } from 'lodash';
import UiInput from '@ui/UiInput';
import styles from './SearchPage.module.css'



const SearchPage = ({setErrorApi}) => {
	const [people,setPeople] = useState([])
	const [inputSearchValue,setInputSearchValue] = useState('')

	const getResponse = async (value) => {
		const res = await getApiResource(API_SEARCH+value)
		if(res){
			const peopleList = res.results.map(({name,url}) => {
				const id = getPeopleId(url)
				const img = getPeopleImage(id)
				return {
					id,
					name,
					img
				}
			})
			setPeople(peopleList)
			setErrorApi(false)
		}else{
			setErrorApi(true)
		}
	}
	useEffect(() => {
		getResponse('')
	},[])

	const debouncedGetResponse = useCallback(debounce(value => getResponse(value),300),[])

	
	const handleInputChange = (event) => {
		setInputSearchValue(event)
		debouncedGetResponse(event)
	}


	return (
		<>
			<h1 className='header__text'>Search</h1>
			<UiInput value={inputSearchValue} handleInputChange={handleInputChange} placeholder="Input character's name" classes={styles.input__search}/>
			<SearchPageInfo people={people}></SearchPageInfo>
		</>
	)
}



SearchPage.propTypes = {
	setErrorApi:PropTypes.func
}

export default withErrorApi(SearchPage);

