import useSWR, { SWRConfiguration } from 'swr'
import useUrlWithSession from './useUrlWithSession'

type FetcherFn<T> = (url: string, options?: RequestInit) => Promise<T>

export const useClerkSWR = <T>(
  url: string,
  fetcher?: FetcherFn<T>,
  options?: SWRConfiguration<T>
) => {
  const newUrl = useUrlWithSession(url)

  const defaultFetcher: FetcherFn<T> = (url, options) => {
    return fetch(url, { ...options, credentials: 'include' }).then((r) =>
      r.json()
    )
  }

  return useSWR<T>(newUrl, fetcher || defaultFetcher, options)
}
