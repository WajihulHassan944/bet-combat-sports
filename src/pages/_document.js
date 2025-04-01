import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Preconnect for Faster Google Font Loading */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

                {/* Google Fonts Preload */}
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Trebuchet+MS&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />

                {/* Preload Local Fonts */}
                <link rel="preload" href="/Fonts/UFCSans-CondensedMedium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="/Fonts/UFCSans-CondensedBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="/Fonts/UFCSans-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="/Assets/affiliateDashboard/edosz.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
