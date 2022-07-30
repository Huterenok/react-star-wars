import PropTypes from 'prop-types';
import styles from './UiVideo.module.css'
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

const UiVideo = ({src,playbackRate=1.0,classes}) => {
	const videoRef = useRef(null)

	useEffect(() => {
		videoRef.current.playbackRate = playbackRate
	},[])
	return (
		<>
			<video ref={videoRef} loop={true} autoPlay={true} muted={true} className={classNames(styles.video,classes)}>
				<source src={src}/>
			</video>
		</>
	)
}



UiVideo.propTypes = {
	src:PropTypes.string,
	classes:PropTypes.string,
	playBackRate:PropTypes.number
}

export default UiVideo;

