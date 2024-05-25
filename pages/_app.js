import '@/css/prism.css'
import '@/css/tailwind.css'
import 'katex/dist/katex.css'

// import '@fontsource/inter/variable-full.css'
import '@fontsource/outfit'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Analytics from '@/components/analytics'
import { ClientReload } from '@/components/ClientReload'
import LayoutWrapper from '@/components/LayoutWrapper'
import siteMetadata from '@/data/siteMetadata'
import { AnimatePresence } from 'framer-motion'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </LayoutWrapper>
    </ThemeProvider>
  )
}
