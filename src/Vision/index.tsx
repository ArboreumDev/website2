import { useState, useEffect } from 'react';
import LandscapeVision from './LandscapeVision';
import PortraitVision from './PortraitVision';

function Vision() {
	const [orientation, setOrientation] = useState<
		'portrait' | 'landscape' | null
	>(null);
	useEffect(() => {
		const changeOrientationHandler = () => {
			let vh = window.innerHeight * 0.01;
			let vw = window.innerWidth * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
			document.documentElement.style.setProperty('--vw', `${vw}px`);
			if (vh > vw) setOrientation('portrait');
			else setOrientation('landscape');
		};
		// for initial setup
		changeOrientationHandler();
		window.addEventListener('resize', changeOrientationHandler);
		return () => {
			window.removeEventListener('resize', changeOrientationHandler);
		};
	});
	return (
		<>
			{orientation === 'landscape' ? <LandscapeVision /> : <PortraitVision />}
		</>
	);
}

export default Vision;
