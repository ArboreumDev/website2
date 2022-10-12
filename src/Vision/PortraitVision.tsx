import styled from 'styled-components';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const PortraitVisionDiv = styled.div`
	height: 100vh;
	width: 100vw;
	@media (max-width: 880px) {
		width: calc(var(--vw, 1) * 100);
		height: calc(var(--vh, 1) * 100);
	}
	position: relative;
	background: #042d51;
`;

const HeaderElement = styled.div`
	position: fixed;
	right: 0;
	top: 0;
	height: 100%;
	z-index: 900;
	width: 60px;
	display: flex;
	justify-content: space-between;
	padding: 20px;
	color: #fff;
	box-sizing: border-box;
	writing-mode: vertical-rl;
	text-orientation: mixed;

	img {
		width: 100%;
	}
`;

const TransformTools = styled.div`
	position: fixed;

	background: #ffffff22;
	backdrop-filter: blur(10px);
	bottom: 20px;
	left: -96px;
	z-index: 900;
	padding: 5px;
	border-radius: 80px;
	display: flex;
	align-items: center;
	gap: 5px;
	transform-origin: right bottom;
	transform: rotate(90deg);

	button {
		background: #eeeeeeaa;
		border: none;
		height: 32px;
		padding: 5px;
		border-radius: 50%;
		outline: none;
		transition: all 0.3s;
		cursor: pointer;
		img {
			height: 100%;
		}
	}

	button:hover {
		background: #eee;
	}
`;

const NftAnchor = styled.a`
	display: block;
	position: absolute;
	height: 8%;
	top: 72%;
	left: 62%;
	z-index: 10000;

	img {
		height: 100%;
	}
	&::before,
	&::after {
		content: '';
		position: absolute;
		top: -2px;
		right: 0;
		border-radius: 50%;
		background-color: transparent;
		z-index: -1;
		height: 10px;
		width: 10px;
	}

	&::after {
		animation: shockwave 1s 0.65s ease-out infinite;
	}

	&::before {
		animation: shockwave 1s 0s ease-out infinite;
	}

	@keyframes shockwave {
		0% {
			transform: scale(1);
			box-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
				inset 0 0 10px rgba(255, 255, 255, 0.5);
		}
		95% {
			box-shadow: 0 0 50px rgba(255, 255, 255, 0),
				inset 0 0 30px rgba(255, 255, 255, 0);
		}
		100% {
			transform: scale(5.25);
		}
	}
`;

function PortraitVision() {
	return (
		<PortraitVisionDiv>
			<TransformWrapper
				initialScale={1}
				minScale={1}
				alignmentAnimation={{
					disabled: true,
					sizeX: 0,
					sizeY: 0,
					velocityAlignmentTime: 0,
				}}
				zoomAnimation={{
					size: 0,
				}}
			>
				{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
					<>
						<HeaderElement>
							<img
								src="./assets/arboreumLogoLight-port.png"
								alt="arboreum logo light"
							/>
							<a href="https://test-arboreum.netlify.app">Back to Home</a>
						</HeaderElement>
						<TransformTools>
							<button onClick={() => zoomIn()}>
								<img src="./assets/icons/zoom-in.png" alt="zoom in logo" />
							</button>
							<button onClick={() => zoomOut()}>
								<img src="./assets/icons/zoom-out.png" alt="zoom out logo" />
							</button>
							<button onClick={() => resetTransform()}>
								<img
									src="./assets/icons/zoom-reset.png"
									alt="zoom reset logo"
								/>
							</button>
						</TransformTools>
						<TransformComponent
							wrapperStyle={{
								width: '100%',
								height: '100%',
								margin: '0 auto',
							}}
							contentStyle={{
								height: '100vh',
							}}
						>
							<div style={{ position: 'relative', height: '100%' }}>
								<NftAnchor
									href="https://opensea.io/collection/arboreum"
									target="_blank"
								>
									<img src="/assets/squirrel-port.png" alt="squirrel nft" />
								</NftAnchor>
								<img
									height="100%"
									src="assets/vision-port-new.png"
									alt="vision of arboreum"
								/>
							</div>
						</TransformComponent>
					</>
				)}
			</TransformWrapper>
		</PortraitVisionDiv>
	);
}

export default PortraitVision;
