import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Layout } from '../components';
import { GlobalStyle } from '../styles';

function App({ Component, pageProps }: AppProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    console.log(menuOpen);

    return (
        <>
            <GlobalStyle />
            <Layout onHamburgerClick={() => setMenuOpen(!menuOpen)}>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;
