import type { AppProps } from 'next/app';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { GlobalStyle } from '../styles';

const AppContainer = styled.div`
    max-width: 1240px;
    margin: 0 auto;
`;

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <AppContainer>
                    <Component {...pageProps} />
                </AppContainer>
            </Layout>
        </>
    );
}

export default App;
