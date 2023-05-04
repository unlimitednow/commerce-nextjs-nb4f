import { ClerkProvider } from '@clerk/nextjs'
import { FC, ReactNode, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import { useTheme } from 'next-themes'
import { AuthProvider } from '@descope/react-sdk'

import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'
import { builder } from '@builder.io/react'

builder.init('ba26b1f01a7a45cdbbff41a67447be22')

const projectId = process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID
const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <ClerkProvider>
        <AuthProvider projectId={projectId || 'DEFAULT_PROJECT_ID'}>
          <div>
            <Head />
            <ManagedUIContext>
              <Layout pageProps={pageProps}>
                <Component {...pageProps} />
              </Layout>
            </ManagedUIContext>
          </div>
        </AuthProvider>
      </ClerkProvider>
    </>
  )
}
