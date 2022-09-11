import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { GlobalStyle } from '../styles';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;
