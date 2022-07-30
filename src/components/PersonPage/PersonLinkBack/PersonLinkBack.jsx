import { useNavigate } from 'react-router'


import styles from './PersonLinkBack.module.css'
import icon from './img/left-arrow.png'

const PersonLinkBack = () => {
const navigate = useNavigate()
	const handleGoBack = e => {
		e.preventDefault()
		navigate(-1)
	}

	return (
		<a
			href='#'
			onClick={handleGoBack}
			className={styles.link}
		>
			<div className={styles.link__img} />
			<span>Go Back</span>
		</a>
	)
}


export default PersonLinkBack;

