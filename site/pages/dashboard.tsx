import { useClerkSWR } from '@/lib/fetcher'
import { orders, wishlist } from '@prisma/client'
import { ShowcaseWebsites } from 'types/types'

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
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200">
        {githubSites?.map((site) => (
          <tr key={site.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              <time>{site.createdAt}</time>
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
      </tbody>
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
    </>
  )
}

export default Dashboard
