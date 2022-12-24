import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Layout } from '../components';
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

export default appWithTranslation(App);
