import { useCallback, useMemo, useState } from 'react'

import type { ProductFragment, ProductVariant } from '../sdk-gen/generated'

type BareBonesVariant = Pick<
  ProductVariant,
  'availableForSale' | 'compareAtPriceV2' | 'priceV2' | 'selectedOptions' | 'id'
>

type BareBonesProduct = Pick<
  ProductFragment,
  'options' | 'availableForSale'
> & {
  variants: { nodes: Array<BareBonesVariant> }
} & { [key: string]: unknown }

export const useProductFormHelper = (product: BareBonesProduct) => {
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string | undefined>
  >(() => {
    const opts: Record<string, string | undefined> = {}

    product.options.forEach((o) => {
      if (o.name.toLowerCase() !== 'title') opts[o.name] = undefined
    })

    return opts
  })

  const handleSelectOption = useCallback(
    (name: string, value: string | undefined) =>
      setSelectedOptions((p) => ({ ...p, [name]: value })),
    []
  )

  const selectedVariant = useMemo(() => {
    if (product.variants.nodes.length === 1) return product.variants.nodes[0]

    const _selectedOptions = Object.entries(selectedOptions)
    const selectedVariant = product.variants.nodes.find((variant) => {
      return _selectedOptions.every(([name, value]) =>
        variant.selectedOptions.find(
          (option) => option.name === name && option.value === value
        )
      )
    })

    return selectedVariant
  }, [selectedOptions, product.variants])

  const optionsToSelect = useMemo(
    () =>
      product.options
        .filter((o) => o.name.toLowerCase() !== 'title')
        .map((option) => ({
          ...option,
          values: option.values.map((value) => {
            const variants = product.variants.nodes.filter((variant) => {
              return variant.selectedOptions.every((optionInVariant) => {
                if (optionInVariant.name === option.name) {
                  return optionInVariant.value === value
                } else if (selectedOptions[optionInVariant.name]) {
                  return (
                    optionInVariant.value ===
                    selectedOptions[optionInVariant.name]
                  )
                } else {
                  return true
                }
              })
            })

            const isNotAvailable = variants.every((v) =>
              v ? !v.availableForSale : true
            )

            return { value, disabled: isNotAvailable }
          })
        })),
    [product.options, product.variants.nodes, selectedOptions]
  )

  const { hasOneOptionSelected, hasAllOptionsSelected, hasNoOptions } =
    useMemo(() => {
      const selectedOptionsKeys = Object.keys(selectedOptions)
      return {
        hasOneOptionSelected: selectedOptionsKeys.some(
          (o) => !!selectedOptions[o]
        ),
        hasAllOptionsSelected: selectedOptionsKeys.every(
          (o) => !!selectedOptions[o]
        ),
        hasNoOptions: selectedOptionsKeys.length === 0
      }
    }, [selectedOptions])

  const discount = useMemo(() => {
    if (!selectedVariant || !selectedVariant.compareAtPriceV2) return null
    const raw =
      selectedVariant.priceV2.amount - selectedVariant.compareAtPriceV2.amount
    const percentage = (raw / selectedVariant.compareAtPriceV2.amount) * 100
    return { percentage, raw }
  }, [selectedVariant])

  const isProductSoldOut = useMemo(() => {
    return !product.availableForSale
  }, [product.availableForSale])

  const isSelectedVariantSoldOut = useMemo(() => {
    return selectedVariant?.availableForSale
  }, [selectedVariant])

  return {
    handleSelectOption,
    optionsToSelect,
    selectedVariant,
    discount,
    isProductSoldOut,
    isSelectedVariantSoldOut,
    selectedOptions,
    hasOneOptionSelected,
    hasAllOptionsSelected,
    hasNoOptions
  }
}
