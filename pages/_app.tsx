import { FC } from 'react'

import { EmotionCache } from '@emotion/react'
import { AppProps } from 'next/app'

import HeaderNavigation from '../src/components/Header/HeaderNavigation'
import PageProvider from '../src/theme/helpers/PageProvider'

export interface MUIAppProps extends AppProps {
    emotionCache?: EmotionCache
}

const App: FC<MUIAppProps> = ({
    Component,
    pageProps: { session, ...pageProps },
    emotionCache,
}) => (
    <PageProvider emotionCache={emotionCache}>
        <HeaderNavigation />
        <Component {...pageProps} />
    </PageProvider>
)

export default App
