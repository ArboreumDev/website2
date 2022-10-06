import Vision from './Vision';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    font-size: 16px;
    color:#252D44;
    margin: 0;
    padding: 0;
  }
  
  h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 48px;
    line-height: 1.25;
    margin:0 0 10px 0;
    font-weight: normal;
  }

  h2 {
    font-size: 30px;
    line-height: 1.25;
    margin:0 0 10px 0;
    font-weight: normal;
  }

  h3 {
    font-weight: normal;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
  }

  h4 {
    font-weight: bold;
    font-size: 16px;
  }

  .bold {
    font-weight: bold;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 880px) {
    
    h1 {
      font-size: 36px;
    }
  }
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<Vision />
		</>
	);
}

export default App;
