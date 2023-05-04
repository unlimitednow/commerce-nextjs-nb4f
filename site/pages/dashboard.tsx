import { useClerkSWR } from '../lib/fetcher'
import { orders, wishlist } from '@prisma/client'
import { ShowcaseWebsites } from 'types/types'
import { useUser } from '@clerk/react'

const Dashboard = () => {
  const { data: notionSites, error } = useClerkSWR<wishlist[]>(
    '/api/getAllSites/notion'
  )
  const { data: githubSites, error: errorFetchingGithubSites } = useClerkSWR<
    orders[]
  >('/api/getAllSites/github')
  const { data: showcaseWebsites } = useClerkSWR<ShowcaseWebsites[]>(
    '/api/getShowcaseWebsites'
  )

  const { user } = useUser()

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {githubSites?.map((site) => (
        <tr key={site.id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Time{' '}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {site.siteName}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {site.customCss}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a
              href={site.subdomain}
              className="text-orange-600 hover:text-orange-900"
            >
              View receipt
            </a>
          </td>
        </tr>
      ))}
      <style jsx>{`
        #showcase-websites::-webkit-scrollbar {
          display: none;
        }
        #showcase-websites {
          -ms-overflow-style: none;
        }
        #websites::-webkit-scrollbar {
          display: none;
        }
        #websites {
          -ms-overflow-style: none;
        }
      `}</style>
    </tbody>
  )
}
