/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github, Vercel } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import ThemeSwitcher from '@components/ui/ThemeSwitcher'
import s from './Footer.module.css'
const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Material',
    description:
      'Solid walnut base with rare earth magnets and powder coated steel card cover',
  },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  {
    name: 'Considerations',
    description:
      'Made from natural materials. Grain and color vary with each item.',
  },
]
interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accent-2 py-12 text-primary bg-primary transition-colors duration-150">
          {' '}
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Technical Specifications
                </h2>
                <p className="mt-4 text-gray-500">
                  The walnut wood card tray is precision milled to perfectly fit
                  a stack of Focus cards. The powder coated steel divider
                  separates active cards from new ones, or can be used to
                  archive important task lists.
                </p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="border-t border-gray-200 pt-4"
                    >
                      <dt className="font-medium text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="rounded-lg bg-gray-100"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accent-2 py-12 text-primary bg-primary transition-colors duration-150">
          {' '}
          <div className="bg-white">
            <div className="2xl:mx-auto 2xl:container flex justify-center items-center   md:py-12 py-9 xl:px-20 sm:px-6 px-4 ">
              <div className=" xl:w-auto md:flex hidden flex-col space-y-6 xl:space-y-0 xl:flex-row justify-center items-center">
                <div className="flex  justify-between w-full   items-center space-x-6 xl:space-x-8 ">
                  <div className="flex justify-center items-center">
                    <img
                      className
                      src="https://i.ibb.co/YDKkv5H/heather-ford-5gk-Ysr-H-eb-Y-unsplash-1.png"
                      alt="shoes and clothes"
                    />
                  </div>
                  <div className="flex flex-col justify-between  xl:mt-0  items-center space-y-6  xl:space-y-8">
                    <div className="flex flex-col xl:flex-row justify-between h-full xl:justify-center items-center space-y-8 xl:space-y-0 xl:space-x-8">
                      <div className="md:w-72 mx-1 md:h-64 lg:mt-4 xl:mt-0  flex flex-col justify-center items-center text-center">
                        <p className=" text-3xl xl:text-4xl font-semibold  leading-7 xl:leading-9 text-center text-gray-800">
                          Our Instagram
                        </p>
                        <p className=" text-base leading-6 mt-3 text-center text-gray-600">
                          Follow us on instagram and tag us to get featured on
                          our timeline
                        </p>
                        <a
                          href="javascript:void(0)"
                          className="focus:outline-none mt-4 focus:underline text-base leading-4 hover:underline text-center text-gray-800"
                        >
                          @Ourinstaname
                        </a>
                      </div>
                      <div className=" ">
                        <img
                          className="hidden xl:block"
                          src="https://i.ibb.co/XYPJ0pQ/nordwood-themes-Nv4-QHk-TVEa-I-unsplash-1.png"
                          alt="jewellery"
                        />
                        <img
                          className="xl:hidden"
                          src="https://i.ibb.co/b51F6gj/nordwood-themes-Nv4-QHk-TVEa-I-unsplash-1-1.png"
                          alt="shoes and clothes"
                        />
                      </div>
                    </div>
                    <div className="hidden xl:flex flex-row justify-center  items-center space-x-6 xl:space-x-8">
                      <div className>
                        <img
                          className
                          src="https://i.ibb.co/FD9ZHbF/camilla-carvalho-Y9dc-Qp-OIMHQ-unsplash-1.png"
                          alt="jewellery"
                        />
                      </div>
                      <div className>
                        <img
                          className
                          src="https://i.ibb.co/KxxFD8R/jonathan-francisca-YHbcum51-JB0-unsplash-1.png"
                          alt="watch"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" xl:hidden flex flex-row justify-between   space-x-6 xl:space-x-8">
                  <div className>
                    <img
                      className
                      src="https://i.ibb.co/FD9ZHbF/camilla-carvalho-Y9dc-Qp-OIMHQ-unsplash-1.png"
                      alt="jewellery"
                    />
                  </div>
                  <div className>
                    <img
                      className
                      src="https://i.ibb.co/KxxFD8R/jonathan-francisca-YHbcum51-JB0-unsplash-1.png"
                      alt="watch"
                    />
                  </div>
                </div>
              </div>
              {/* mobile responsive */}
              <div className="md:hidden flex justify-center items-center flex-col">
                <div className="w-80  flex flex-col justify-center items-center text-center">
                  <p className=" text-3xl lg:text-4xl font-semibold  leading-7 lg:leading-9 text-center text-gray-800">
                    Our Instagram
                  </p>
                  <p className=" text-base leading-6 mt-3 text-center text-gray-600">
                    Follow us on instagram and tag us to get featured on our
                    timeline
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none mt-4 focus:underline text-base leading-4 hover:underline text-center text-gray-800"
                  >
                    @Ourinstaname
                  </a>
                </div>
                <div className="mt-8 flex flex-col justify-center space-y-4">
                  <img
                    src="https://i.ibb.co/dpQZWPz/heather-ford-5gk-Ysr-H-eb-Y-unsplash-1.png"
                    alt="shoes and clothes"
                  />
                  <img
                    src="https://i.ibb.co/b51F6gj/nordwood-themes-Nv4-QHk-TVEa-I-unsplash-1-1.png"
                    alt="shoes and clothes"
                  />
                  <img
                    src="https://i.ibb.co/2c03gv4/camilla-carvalho-Y9dc-Qp-OIMHQ-unsplash-1.png"
                    alt="jewellery"
                  />
                  <img
                    src="https://i.ibb.co/PDMYNxh/jonathan-francisca-YHbcum51-JB0-unsplash-1.png"
                    alt="watch"
                  />
                </div>
              </div>
            </div>{' '}
          </div>
        </div>
      </Container>
    </footer>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
