import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import { FC, ReactNode, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import { builder, Builder, withChildren } from '@builder.io/react'
import { useTheme } from 'next-themes'
import { AuthProvider } from '@descope/react-sdk'
import { useRouter } from 'next/router'

const projectId = process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID

builder.init('ba26b1f01a7a45cdbbff41a67447be22')

const privatePages = ['/dashboard']

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      {' '}
      <ClerkProvider {...pageProps}>
        {privatePages.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <>
            {' '}
            <AuthProvider projectId={projectId || 'DEFAULT_PROJECT_ID'}>
              <div>
                <Head />
                <ManagedUIContext>
                  <Layout pageProps={pageProps}>
                    <Component {...pageProps} />
                  </Layout>
                </ManagedUIContext>
              </div>
            </AuthProvider>{' '}
          </>
        )}
      </ClerkProvider>
    </>
  )
}
