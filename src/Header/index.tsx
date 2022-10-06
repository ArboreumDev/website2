import styled from 'styled-components';

const HeaderStyled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	height: 60px;
	z-index: 100;
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 20px;
	color: #fff;
	box-sizing: border-box;

	img {
		height: 100%;
	}
`;

function Header() {
	return (
		<HeaderStyled>
			<img src="/assets/arboreumLogoLight.png" alt="arboreum logo light" />
			<a href="https://test-arboreum.netlify.app">Back to Home</a>
		</HeaderStyled>
	);
}

export default Header;
