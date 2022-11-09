import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content="Developed by Wildbelle." />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
