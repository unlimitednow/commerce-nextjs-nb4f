/* eslint-disable @next/next/no-img-element */
import cn from 'clsx'
import Image from 'next/image'
import s from './ProductView.module.css'
import { FC } from 'react'
import type { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'
import { WishlistButton } from '@components/wishlist'
import { ProductSlider, ProductCard } from '@components/product'
import { Container, Text } from '@components/ui'
import { SEO } from '@components/common'
import ProductSidebar from '../ProductSidebar'
import ProductTag from '../ProductTag'
interface ProductViewProps {
  product: Product
  relatedProducts: Product[]
}
const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc:
      'https://res.cloudinary.com/unlimitednow/image/upload/v1680770683/nb4f/french_terry_hoodie_set_latte_frylcu.png',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://res.cloudinary.com/unlimitednow/image/upload/v1680770681/nb4f/Solid_Halter_Tie_Cut_Out_Dress_Baby_Blue_haatiu.png',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      'https://res.cloudinary.com/unlimitednow/image/upload/v1671919587/nb4f/IMG_6301_magic_d4hwpb.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://res.cloudinary.com/unlimitednow/image/upload/v1671919495/nb4f/IMG_6294_pleg9l.png',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]
const ProductView: FC<ProductViewProps> = ({ product, relatedProducts }) => {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  return (
    <>
      <Container className="max-w-none w-full" clean>
        <div className={cn(s.root, 'fit')}>
          <div className={cn(s.main, 'fit')}>
           
            <div className={s.sliderContainer}>
              <ProductSlider key={product.id}>
                {product.images.map((image, i) => (
                  <div key={image.url} className={s.imageContainer}>
                    <Image
                      className={s.img}
                      src={image.url!}
                      alt={image.alt || 'Product Image'}
                      width={600}
                      height={600}
                      priority={i === 0}
                      quality="85"
                    />
                  </div>
                ))}
              </ProductSlider>
            </div>
            {process.env.COMMERCE_WISHLIST_ENABLED && (
              <WishlistButton
                className={s.wishlistButton}
                productId={product.id}
                variant={product.variants[0]}
              />
            )}
          </div>
          <ProductTag
              name={product.name}
              price={`${price} ${product.price?.currencyCode}`}
              fontSize={32}
            />
          <ProductSidebar
            key={product.id}
            product={product}
            className={s.sidebar}
          />
        </div>
        <hr className="mt-7 border-accent-2" />
        <section className="py-12 px-6 mb-10">
          <Text variant="sectionHeading">Trending Products</Text>
          <div>
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {products.map((product) => (
                    <a key={product.id} href={product.href} className="group">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <h3 className="mt-4 text-sm text-gray-700">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-gray-900">
                        {product.price}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <SEO
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0]?.url!,
              width: '800',
              height: '600',
              alt: product.name,
            },
          ],
        }}
      />
    </>
  )
}

export default ProductView
