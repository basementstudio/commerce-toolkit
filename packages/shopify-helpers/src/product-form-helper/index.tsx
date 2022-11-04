import { useCallback, useMemo, useState } from 'react'

import type { _ProductFragment } from '../sdk-gen/generated'

type BareBonesVariant = Pick<
  _ProductFragment['variants']['edges'][0]['node'],
  'availableForSale' | 'compareAtPriceV2' | 'priceV2' | 'selectedOptions' | 'id'
>

type BareBonesProduct = Pick<
  _ProductFragment,
  'options' | 'availableForSale'
> & {
  variants: { edges: Array<{ node: BareBonesVariant }> }
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
    if (product.variants.edges.length === 1) return product.variants.edges[0]

    const _selectedOptions = Object.entries(selectedOptions)
    const selectedVariant = product.variants.edges.find((variant) => {
      return _selectedOptions.every(([name, value]) =>
        variant.node.selectedOptions.find(
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
            const variants = product.variants.edges.filter((variant) => {
              return variant.node.selectedOptions.every((optionInVariant) => {
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
              v ? !v.node.availableForSale : true
            )

            return { value, disabled: isNotAvailable }
          })
        })),
    [product.options, product.variants.edges, selectedOptions]
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
    if (!selectedVariant || !selectedVariant.node.compareAtPriceV2) return null
    const raw =
      selectedVariant.node.priceV2.amount -
      selectedVariant.node.compareAtPriceV2.amount
    const percentage =
      (raw / selectedVariant.node.compareAtPriceV2.amount) * 100
    return { percentage, raw }
  }, [selectedVariant])

  const isProductSoldOut = useMemo(() => {
    return !product.availableForSale
  }, [product.availableForSale])

  const isSelectedVariantSoldOut = useMemo(() => {
    return selectedVariant?.node.availableForSale
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
