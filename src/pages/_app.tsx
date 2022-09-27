import type { AppProps } from 'next/app';
import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { GlobalStyle } from '../styles';

const AppContainer = styled.div`
    max-width: 1240px;
    margin: 0 auto;
`;

function App({ Component, pageProps }: AppProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    console.log(menuOpen);

    return (
        <>
            <GlobalStyle />
            <Layout onHamburgerClick={() => setMenuOpen(!menuOpen)}>
                <AppContainer>
                    <Component {...pageProps} />
                </AppContainer>
            </Layout>
        </>
    );
}

export default App;
