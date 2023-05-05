import React, { FC, ReactNode, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import { useTheme } from 'next-themes'
import { AuthProvider } from '@descope/react-sdk'
import { useRouter } from 'next/router'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/nextjs'
import Dash from '../components/dash'

import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'
import { builder } from '@builder.io/react'

builder.init('ba26b1f01a7a45cdbbff41a67447be22')
const privatePages = ['/dashboard']

const projectId = process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  // Get the pathname
  const { pathname } = useRouter()

  // Check if the current route matches a public page
  const isPrivatePage = privatePages.includes(pathname)
  return (
    <>
      <ClerkProvider>
        {isPrivatePage ? (
          <>
            <Head />
            <SignedIn>
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
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        ) : (
          <>
            <Head />
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
          </>
        )}
      </ClerkProvider>
    </>
  )
}
