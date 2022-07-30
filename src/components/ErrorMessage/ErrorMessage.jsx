import styles from './ErrorMessage.module.css'
import UiVideo from '@ui/UiVideo';
import video from './video/han-solo.mp4'
const ErrorMessage = () => {
	return (
		<>
			<p className={styles.text}>
					The dark side of the force has won.<br></br>
					We cannot display data.<br></br>
					Come back when we fix everything.<br></br>
			</p>
			<UiVideo src={video} classes={styles.video} playbackRate={1.0}></UiVideo>
		</>
	)
}
export default ErrorMessage;

