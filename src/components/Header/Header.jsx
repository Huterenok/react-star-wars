import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';
import Favorite from '../Favorite';
import { useTheme,THEME_LIGHT,THEME_DARK,THEME_NEUTRAL } from '@context/ThemeProvider';

import imgDroid from './img/droid.png'
import imgLightsaber from './img/lightsaber.png'
import imgSpaceStation from './img/space-station.png'
import { useEffect, useState } from 'react';

const Header = () => {
	const isTheme = useTheme()
	const [icon,setIcon] = useState(imgSpaceStation)
	useEffect(() => {
		switch (isTheme.theme){
			case THEME_LIGHT:
				setIcon(imgLightsaber)
				break
			case THEME_DARK:
				setIcon(imgSpaceStation)
				break
			case THEME_NEUTRAL:
				setIcon(imgDroid)
				break
			default:
				setIcon(imgSpaceStation)
		}
	},[isTheme])

	return (
		<div className={styles.container}>
			<img src={icon} alt="Star Wars" className={styles.logo}/>
				<ul className={styles.list__container}>
						<li><NavLink to="">Home</NavLink></li>
						<li><NavLink to="/people/?page=1">People</NavLink></li>
						<li><NavLink to="/not-found">Not Found</NavLink></li>
						<li><NavLink to='/search'>Search</NavLink></li>
						<li><NavLink to='/fail'>Fail</NavLink></li>
				</ul>
				<Favorite/>
		</div>
)
}
export default Header;

