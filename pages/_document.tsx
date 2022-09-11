import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link href="https://fonts.gstatic.com" rel="preconnect" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Karla&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Karla&family=Playfair+Display:wght@900&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
