import React from 'react';
import styled from 'styled-components';
import { LandscapeRotate } from './assets/svg';

interface LoaderProps {
	isLoading: boolean;
}

const LoaderScreen = styled.div`
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background: #00000088;
	backdrop-filter: blur(6px);
	z-index: 1000;
	text-align: center;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	box-sizing: border-box;

	.loading-img {
		height: 20%;
	}

	h3 {
		font-weight: 600;
	}

	p {
		font-weight: 200;
	}
`;

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
	return isLoading ? (
		<LoaderScreen>
			<LandscapeRotate className="loading-img" />
			<h3>Please keep your device in landscape mode...!!</h3>
			<p>This page is best viewed in landscape orientation</p>
		</LoaderScreen>
	) : (
		<></>
	);
};

export default Loader;
