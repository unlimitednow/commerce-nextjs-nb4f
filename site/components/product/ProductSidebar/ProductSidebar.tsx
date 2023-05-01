import s from './ProductSidebar.module.css'
import { useAddItem } from '@framework/cart'
import { FC, useEffect, useState } from 'react'
import { ProductOptions } from '@components/product'
import type { Product } from '@commerce/types/product'
import { Button, Text, Rating, Collapse, useUI } from '@components/ui'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'
import ErrorMessage from '@components/ui/ErrorMessage'

interface ProductSidebarProps {
  product: Product
  className?: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
  const addItem = useAddItem()
  const { openSidebar, setSidebarView } = useUI()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | Error>(null)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setLoading(true)
    setError(null)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0]?.id),
      })
      setSidebarView('CART_VIEW')
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      if (err instanceof Error) {
        console.error(err)
        setError({
          ...err,
          message: 'Could not add item to cart. Please try again.',
        })
      }
    }
  }

  return (
    <div className={className}>
      <ProductOptions
        options={product.options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <Text
        className="pb-4 break-words w-full max-w-xl"
        html={product.descriptionHtml || product.description}
      />
      <div className="flex flex-row justify-between items-center">
        <Rating value={4} />
        <div className="text-accent-6 pr-1 font-medium text-sm">36 reviews</div>
      </div>
      <div>
        {error && <ErrorMessage error={error} className="my-5" />}
        {process.env.COMMERCE_CART_ENABLED && (
          <Button
            aria-label="Add to Cart"
            type="button"
            className={s.button}
            onClick={addToCart}
            loading={loading}
            disabled={variant?.availableForSale === false}
          >
            {variant?.availableForSale === false
              ? 'Not Available'
              : 'Add To Cart'}
          </Button>
        )}
      </div>
      <div className="mt-6">
        <Collapse title="Guaranteed safe & secure checkout">
          <>
            <div className="div">
              <div className="div-2">
                <div className="div-3">
                  <p className="p">Guaranteed safe & secure checkout</p>
                  <div className="div-4">
                    <ul className="ul">
                      <span className="span">Payment methods</span>
                      <li className="li">
                        <div className="div-5">
                          <picture>
                            <source
                              srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=29 29w"
                              type="image/webp"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=29"
                              sizes="(max-width: 638px) 5vw, (max-width: 998px) 3vw, 3vw"
                              srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=29 29w"
                              className="image"
                            />
                          </picture>
                          <div className="builder-image-sizer image-sizer" />
                        </div>
                      </li>
                      <li className="li">
                        <div className="div-6">
                          <picture>
                            <source
                              srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=29 29w"
                              type="image/webp"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=29"
                              sizes="(max-width: 638px) 5vw, (max-width: 998px) 3vw, 3vw"
                              srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=29 29w"
                              className="image"
                            />
                          </picture>
                          <div className="builder-image-sizer image-sizer" />
                        </div>
                      </li>
                      <li className="li">
                        <div className="div-7">
                          <picture>
                            <source
                              srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=29 29w"
                              type="image/webp"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=29"
                              sizes="(max-width: 638px) 5vw, (max-width: 998px) 3vw, 3vw"
                              srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=29 29w"
                              className="image"
                            />
                          </picture>
                          <div className="builder-image-sizer image-sizer" />
                        </div>
                      </li>
                      <li className="li">
                        <div className="div-8">
                          <picture>
                            <source
                              srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?format=webp&width=29 29w"
                              type="image/webp"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=29"
                              sizes="(max-width: 638px) 5vw, (max-width: 998px) 3vw, 3vw"
                              srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=29 29w"
                              className="image"
                            />
                          </picture>
                          <div className="builder-image-sizer image-sizer" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <style jsx>{`
              .div {
                border-bottom: 0px;
                border-bottom-color: rgb(68, 68, 68);
                border-color: rgb(68, 68, 68);
                border-left: 0px;
                border-left-color: rgb(68, 68, 68);
                border-right: 0px;
                border-right-color: rgb(68, 68, 68);
                border-top: 0px;
                border-top-color: rgb(68, 68, 68);
                font-family: Poppins, sans-serif;
                line-height: 24px;
                block-size: 82.1172px;
                border-block-color: rgb(68, 68, 68);
                border-block-end-color: rgb(68, 68, 68);
                border-block-start-color: rgb(68, 68, 68);
                border-inline-color: rgb(68, 68, 68);
                border-inline-end-color: rgb(68, 68, 68);
                border-inline-start-color: rgb(68, 68, 68);
                caret-color: rgb(68, 68, 68);
                color: rgb(68, 68, 68);
                column-rule-color: rgb(68, 68, 68);
                inline-size: 545px;
                list-style-type: none;
                outline-color: rgb(68, 68, 68);
                perspective-origin: 272.5px 41.0547px;
                text-decoration: none solid rgb(68, 68, 68);
                text-decoration-color: rgb(68, 68, 68);
                text-rendering: optimizelegibility;
                text-size-adjust: 100%;
              }
              @media (max-width: 640px) {
                .div {
                  width: auto;
                  align-self: center;
                }
              }
              .div-2 {
                border-bottom: 0px;
                border-bottom-color: rgb(68, 68, 68);
                border-color: rgb(68, 68, 68);
                border-left: 0px;
                border-left-color: rgb(68, 68, 68);
                border-right: 0px;
                border-right-color: rgb(68, 68, 68);
                border-top: 0px;
                border-top-color: rgb(68, 68, 68);
                font-family: Poppins, sans-serif;
                line-height: 24px;
                padding-bottom: 16px;
                padding-left: 16px;
                padding-right: 16px;
                padding-top: 16px;
                background-color: rgb(250, 248, 255);
                block-size: 82.1172px;
                border-block-color: rgb(68, 68, 68);
                border-block-end-color: rgb(68, 68, 68);
                border-block-start-color: rgb(68, 68, 68);
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
                border-end-end-radius: 6px;
                border-end-start-radius: 6px;
                border-inline-color: rgb(68, 68, 68);
                border-inline-end-color: rgb(68, 68, 68);
                border-inline-start-color: rgb(68, 68, 68);
                border-radius: 6px;
                border-start-end-radius: 6px;
                border-start-start-radius: 6px;
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
                caret-color: rgb(68, 68, 68);
                color: rgb(68, 68, 68);
                column-rule-color: rgb(68, 68, 68);
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                inline-size: 545px;
                justify-content: center;
                list-style-type: none;
                outline-color: rgb(68, 68, 68);
                padding: 16px;
                padding-block: 16px;
                padding-block-end: 16px;
                padding-block-start: 16px;
                padding-inline: 16px;
                padding-inline-end: 16px;
                padding-inline-start: 16px;
                perspective-origin: 272.5px 41.0547px;
                text-decoration: none solid rgb(68, 68, 68);
                text-decoration-color: rgb(68, 68, 68);
                text-rendering: optimizelegibility;
                text-size-adjust: 100%;
                transform-origin: 272.5px 41.0586px;
              }
              @media (max-width: 640px) {
                .div-2 {
                  width: auto;
                  align-self: center;
                  padding-bottom: 39px;
                }
              }
              .div-3 {
                border-bottom: 0px;
                border-bottom-color: rgb(68, 68, 68);
                border-color: rgb(68, 68, 68);
                border-left: 0px;
                border-left-color: rgb(68, 68, 68);
                border-right: 0px;
                border-right-color: rgb(68, 68, 68);
                border-top: 0px;
                border-top-color: rgb(68, 68, 68);
                font-family: Poppins, sans-serif;
                line-height: 24px;
                block-size: 50.1172px;
                border-block-color: rgb(68, 68, 68);
                border-block-end-color: rgb(68, 68, 68);
                border-block-start-color: rgb(68, 68, 68);
                border-inline-color: rgb(68, 68, 68);
                border-inline-end-color: rgb(68, 68, 68);
                border-inline-start-color: rgb(68, 68, 68);
                caret-color: rgb(68, 68, 68);
                color: rgb(68, 68, 68);
                column-rule-color: rgb(68, 68, 68);
                display: flex;
                flex-direction: column;
                inline-size: 513px;
                list-style-type: none;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                outline-color: rgb(68, 68, 68);
                perspective-origin: 256.5px 25.0547px;
                text-align: center;
                text-decoration: none solid rgb(68, 68, 68);
                text-decoration-color: rgb(68, 68, 68);
                text-rendering: optimizelegibility;
                text-size-adjust: 100%;
                transform-origin: 256.5px 25.0586px;
              }
              @media (max-width: 640px) {
                .div-3 {
                  width: auto;
                  align-self: center;
                }
              }
              .p {
                border-bottom: 0px;
                border-bottom-color: rgb(68, 68, 68);
                border-color: rgb(68, 68, 68);
                border-left: 0px;
                border-left-color: rgb(68, 68, 68);
                border-right: 0px;
                border-right-color: rgb(68, 68, 68);
                border-top: 0px;
                border-top-color: rgb(68, 68, 68);
                font-family: Poppins, sans-serif;
                line-height: 24px;
                margin-top: 8px;
                block-size: 24px;
                border-block-color: rgb(68, 68, 68);
                border-block-end-color: rgb(68, 68, 68);
                border-block-start-color: rgb(68, 68, 68);
                border-inline-color: rgb(68, 68, 68);
                border-inline-end-color: rgb(68, 68, 68);
                border-inline-start-color: rgb(68, 68, 68);
                caret-color: rgb(68, 68, 68);
                color: rgb(68, 68, 68);
                column-rule-color: rgb(68, 68, 68);
                inline-size: 513px;
                list-style-type: none;
                margin: 8px 0px 0px;
                margin-block: 8px 0px;
                margin-block-start: 8px;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                order: 1;
                outline-color: rgb(68, 68, 68);
                perspective-origin: 256.5px 12px;
                text-align: center;
                text-decoration: none solid rgb(68, 68, 68);
                text-decoration-color: rgb(68, 68, 68);
                text-rendering: optimizelegibility;
                text-size-adjust: 100%;
                transform-origin: 256.5px 12px;
              }
              @media (max-width: 640px) {
                .p {
                  width: auto;
                  align-self: center;
                }
              }
              .div-4 {
                border-bottom: 0px;
                border-bottom-color: rgb(68, 68, 68);
                border-color: rgb(68, 68, 68);
                border-left: 0px;
                border-left-color: rgb(68, 68, 68);
                border-right: 0px;
                border-right-color: rgb(68, 68, 68);
                border-top: 0px;
                border-top-color: rgb(68, 68, 68);
                font-family: Poppins, sans-serif;
                line-height: 24px;
                block-size: 18.1172px;
                border-block-color: rgb(68, 68, 68);
                border-block-end-color: rgb(68, 68, 68);
                border-block-start-color: rgb(68, 68, 68);
                border-inline-color: rgb(68, 68, 68);
                border-inline-end-color: rgb(68, 68, 68);
                border-inline-start-color: rgb(68, 68, 68);
                caret-color: rgb(68, 68, 68);
                color: rgb(68, 68, 68);
                column-rule-color: rgb(68, 68, 68);
                inline-size: 513px;
                list-style-type: none;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                outline-color: rgb(68, 68, 68);
                perspective-origin: 256.5px 9.05469px;
                text-align: center;
                text-decoration: none solid rgb(68, 68, 68);
                text-decoration-color: rgb(68, 68, 68);
                text-rendering: optimizelegibility;
                text-size-adjust: 100%;
                transform-origin: 256.5px 9.05859px;
              }
              @media (max-width: 640px) {
                .div-4 {
                  width: auto;
                  align-self: center;
                }
              }
              .ul {
                list-style: none;
                list-style-type: none;
                border-bottom: 0px;
                border-bottom-color: rgb(68, 68, 68);
                border-color: rgb(68, 68, 68);
                border-left: 0px;
                border-left-color: rgb(68, 68, 68);
                border-right: 0px;
                border-right-color: rgb(68, 68, 68);
                border-top: 0px;
                border-top-color: rgb(68, 68, 68);
                font-family: Poppins, sans-serif;
                line-height: 24px;
                margin-bottom: -8px;
                margin-right: -8px;
                block-size: 26.1172px;
                border-block-color: rgb(68, 68, 68);
                border-block-end-color: rgb(68, 68, 68);
                border-block-start-color: rgb(68, 68, 68);
                border-inline-color: rgb(68, 68, 68);
                border-inline-end-color: rgb(68, 68, 68);
                border-inline-start-color: rgb(68, 68, 68);
                caret-color: rgb(68, 68, 68);
                color: rgb(68, 68, 68);
                column-rule-color: rgb(68, 68, 68);
                inline-size: 521px;
                margin: 0px -8px -8px 0px;
                margin-block: 0px -8px;
                margin-block-end: -8px;
                margin-inline-end: -8px;
                outline-color: rgb(68, 68, 68);
                perspective-origin: 260.5px 13.0547px;
                text-align: center;
                text-decoration: none solid rgb(68, 68, 68);
                text-decoration-color: rgb(68, 68, 68);
                text-rendering: optimizelegibility;
                text-size-adjust: 100%;
                transform-origin: 260.5px 13.0586px;
              }
              @media (max-width: 640px) {
                .ul {
                  width: auto;
                  align-self: center;
                }
              }
              .span {
                border-bottom: 0px;
                border-bottom-color: rgb(68, 68, 68);
                border-color: rgb(68, 68, 68);
                border-left: 0px;
                border-left-color: rgb(68, 68, 68);
                border-right: 0px;
                border-right-color: rgb(68, 68, 68);
                border-top: 0px;
                border-top-color: rgb(68, 68, 68);
                font-family: Poppins, sans-serif;
                line-height: 24px;
                margin-bottom: 8px;
                vertical-align: middle;
                block-size: 1px;
                border-block-color: rgb(68, 68, 68);
                border-block-end-color: rgb(68, 68, 68);
                border-block-start-color: rgb(68, 68, 68);
                border-inline-color: rgb(68, 68, 68);
                border-inline-end-color: rgb(68, 68, 68);
                border-inline-start-color: rgb(68, 68, 68);
                bottom: 241.117px;
                caret-color: rgb(68, 68, 68);
                clip: rect(0px, 0px, 0px, 0px);
                color: rgb(68, 68, 68);
                column-rule-color: rgb(68, 68, 68);
                display: block;
                height: 1px;
                inline-size: 1px;
                inset: 512.5px 496.25px 241.117px 759.75px;
                inset-block: 512.5px 241.117px;
                inset-block-end: 241.117px;
                inset-block-start: 512.5px;
                inset-inline: 759.75px 496.25px;
                inset-inline-end: 496.25px;
                inset-inline-start: 759.75px;
                left: 759.75px;
                list-style-type: none;
                margin-block-end: 8px;
                margin-inline-end: 8px;
                outline-color: rgb(68, 68, 68);
                overflow: hidden;
                overflow-x: hidden;
                overflow-y: hidden;
                perspective-origin: 0.5px 0.5px;
                position: absolute;
                right: 496.25px;
                text-align: center;
                text-decoration: none solid rgb(68, 68, 68);
                text-decoration-color: rgb(68, 68, 68);
                text-rendering: optimizelegibility;
                text-size-adjust: 100%;
                top: 512.5px;
                transform-origin: 0.5px 0.5px;
                width: 1px;
              }
              .li {
                border-bottom: 0px;
                border-bottom-color: rgb(68, 68, 68);
                border-color: rgb(68, 68, 68);
                border-left: 0px;
                border-left-color: rgb(68, 68, 68);
                border-right: 0px;
                border-right-color: rgb(68, 68, 68);
                border-top: 0px;
                border-top-color: rgb(68, 68, 68);
                font-family: Poppins, sans-serif;
                line-height: 0px;
                margin-bottom: 8px;
                margin-right: 8px;
                vertical-align: middle;
                block-size: 18px;
                border-block-color: rgb(68, 68, 68);
                border-block-end-color: rgb(68, 68, 68);
                border-block-start-color: rgb(68, 68, 68);
                border-inline-color: rgb(68, 68, 68);
                border-inline-end-color: rgb(68, 68, 68);
                border-inline-start-color: rgb(68, 68, 68);
                caret-color: rgb(68, 68, 68);
                color: rgb(68, 68, 68);
                column-rule-color: rgb(68, 68, 68);
                display: inline-block;
                inline-size: 28.5px;
                list-style-type: none;
                margin-block-end: 8px;
                margin-inline-end: 8px;
                outline-color: rgb(68, 68, 68);
                perspective-origin: 14.25px 9px;
                text-align: center;
                text-decoration: none solid rgb(68, 68, 68);
                text-decoration-color: rgb(68, 68, 68);
                text-rendering: optimizelegibility;
                text-size-adjust: 100%;
                transform-origin: 14.25px 9px;
              }
              .div-5 {
                display: flex;
                flex-direction: column;
                position: relative;
                width: 100%;
                min-height: 20px;
                min-width: 20px;
                overflow: hidden;
              }
              .image {
                object-fit: cover;
                object-position: center;
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
              }
              .image-sizer {
                width: 100%;
                padding-top: 70.41%;
                pointer-events: none;
                font-size: 0;
              }
              .div-6 {
                display: flex;
                flex-direction: column;
                position: relative;
                width: 100%;
                min-height: 20px;
                min-width: 20px;
                overflow: hidden;
              }
              .div-7 {
                display: flex;
                flex-direction: column;
                position: relative;
                width: 100%;
                min-height: 20px;
                min-width: 20px;
                overflow: hidden;
              }
              .div-8 {
                display: flex;
                flex-direction: column;
                position: relative;
                width: 100%;
                min-height: 20px;
                min-width: 20px;
                overflow: hidden;
              }
            `}</style>
          </>
        </Collapse>
      </div>
    </div>
  )
}

export default ProductSidebar
