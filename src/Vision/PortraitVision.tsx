import styled from 'styled-components';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const LandscapeVisionDiv = styled.div`
	height: 100vh;
	width: 100vw;
	@media (max-width: 880px) {
		width: calc(var(--vw, 1) * 100);
		height: calc(var(--vh, 1) * 100);
	}
	position: relative;
	background: #042d51;
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
	height: 9%;
	width: 22%;
	top: 71%;
	left: 63%;
	background-color: red;
	opacity: 0;
	z-index: 10000;
`;

function LandscapeVision() {
	return (
		<LandscapeVisionDiv>
			<TransformWrapper
				initialScale={1}
				minScale={1}
				centerOnInit={true}
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
						>
							<div style={{ position: 'relative' }}>
								<NftAnchor
									href="https://opensea.io/collection/arboreum"
									target="_blank"
								>
									nft
								</NftAnchor>
								<img
									width="100%"
									src="assets/vision-port.png"
									alt="vision of arboreum"
								/>
							</div>
						</TransformComponent>
					</>
				)}
			</TransformWrapper>
		</LandscapeVisionDiv>
	);
}

export default LandscapeVision;
