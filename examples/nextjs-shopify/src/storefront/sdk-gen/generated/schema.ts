/* eslint-disable */

// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Color: any,
    DateTime: any,
    Decimal: any,
    Float: number,
    HTML: any,
    ID: string,
    Int: number,
    JSON: any,
    String: string,
    URL: any,
    UnsignedInt64: any,
}


/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 * 
 */
export interface ApiVersion {
    /** The human-readable name of the version. */
    displayName: Scalars['String']
    /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
    handle: Scalars['String']
    /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
    supported: Scalars['Boolean']
    __typename: 'ApiVersion'
}


/** Details about the gift card used on the checkout. */
export interface AppliedGiftCard {
    /** The amount that was taken from the gift card by applying it. */
    amountUsed: MoneyV2
    /**
     * @deprecated Use `amountUsed` instead.
     * The amount that was taken from the gift card by applying it.
     */
    amountUsedV2: MoneyV2
    /** The amount left on the gift card. */
    balance: MoneyV2
    /**
     * @deprecated Use `balance` instead.
     * The amount left on the gift card.
     */
    balanceV2: MoneyV2
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The last characters of the gift card. */
    lastCharacters: Scalars['String']
    /** The amount that was applied to the checkout in its currency. */
    presentmentAmountUsed: MoneyV2
    __typename: 'AppliedGiftCard'
}


/** An article in an online store blog. */
export interface Article {
    /**
     * @deprecated Use `authorV2` instead.
     * The article's author.
     */
    author: ArticleAuthor
    /** The article's author. */
    authorV2: (ArticleAuthor | null)
    /** The blog that the article belongs to. */
    blog: Blog
    /** List of comments posted on the article. */
    comments: CommentConnection
    /** Stripped content of the article, single line with HTML tags removed. */
    content: Scalars['String']
    /** The content of the article, complete with HTML formatting. */
    contentHtml: Scalars['HTML']
    /** Stripped excerpt of the article, single line with HTML tags removed. */
    excerpt: (Scalars['String'] | null)
    /** The excerpt of the article, complete with HTML formatting. */
    excerptHtml: (Scalars['HTML'] | null)
    /**
     * A human-friendly unique string for the Article automatically generated from its title.
     * 
     */
    handle: Scalars['String']
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The image associated with the article. */
    image: (Image | null)
    /** Returns a metafield found by namespace and key. */
    metafield: (Metafield | null)
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields: (Metafield | null)[]
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl: (Scalars['URL'] | null)
    /** The date and time when the article was published. */
    publishedAt: Scalars['DateTime']
    /** The article’s SEO information. */
    seo: (SEO | null)
    /** A categorization that a article can be tagged with. */
    tags: Scalars['String'][]
    /** The article’s name. */
    title: Scalars['String']
    __typename: 'Article'
}


/** The author of an article. */
export interface ArticleAuthor {
    /** The author's bio. */
    bio: (Scalars['String'] | null)
    /** The author’s email. */
    email: Scalars['String']
    /** The author's first name. */
    firstName: Scalars['String']
    /** The author's last name. */
    lastName: Scalars['String']
    /** The author's full name. */
    name: Scalars['String']
    __typename: 'ArticleAuthor'
}


/**
 * An auto-generated type for paginating through multiple Articles.
 * 
 */
export interface ArticleConnection {
    /** A list of edges. */
    edges: ArticleEdge[]
    /** A list of the nodes contained in ArticleEdge. */
    nodes: Article[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'ArticleConnection'
}


/**
 * An auto-generated type which holds one Article and a cursor during pagination.
 * 
 */
export interface ArticleEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of ArticleEdge. */
    node: Article
    __typename: 'ArticleEdge'
}


/** The set of valid sort keys for the Article query. */
export type ArticleSortKeys = 'TITLE' | 'BLOG_TITLE' | 'AUTHOR' | 'UPDATED_AT' | 'PUBLISHED_AT' | 'ID' | 'RELEVANCE'


/** Represents a generic custom attribute. */
export interface Attribute {
    /** Key or name of the attribute. */
    key: Scalars['String']
    /** Value of the attribute. */
    value: (Scalars['String'] | null)
    __typename: 'Attribute'
}


/**
 * Automatic discount applications capture the intentions of a discount that was automatically applied.
 * 
 */
export interface AutomaticDiscountApplication {
    /** The method by which the discount's value is allocated to its entitled items. */
    allocationMethod: DiscountApplicationAllocationMethod
    /** Which lines of targetType that the discount is allocated over. */
    targetSelection: DiscountApplicationTargetSelection
    /** The type of line that the discount is applicable towards. */
    targetType: DiscountApplicationTargetType
    /** The title of the application. */
    title: Scalars['String']
    /** The value of the discount application. */
    value: PricingValue
    __typename: 'AutomaticDiscountApplication'
}


/** A collection of available shipping rates for a checkout. */
export interface AvailableShippingRates {
    /**
     * Whether or not the shipping rates are ready.
     * The `shippingRates` field is `null` when this value is `false`.
     * This field should be polled until its value becomes `true`.
     * 
     */
    ready: Scalars['Boolean']
    /** The fetched shipping rates. `null` until the `ready` field is `true`. */
    shippingRates: (ShippingRate[] | null)
    __typename: 'AvailableShippingRates'
}


/** An online store blog. */
export interface Blog {
    /** Find an article by its handle. */
    articleByHandle: (Article | null)
    /** List of the blog's articles. */
    articles: ArticleConnection
    /** The authors who have contributed to the blog. */
    authors: ArticleAuthor[]
    /**
     * A human-friendly unique string for the Blog automatically generated from its title.
     * 
     */
    handle: Scalars['String']
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** Returns a metafield found by namespace and key. */
    metafield: (Metafield | null)
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields: (Metafield | null)[]
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl: (Scalars['URL'] | null)
    /** The blog's SEO information. */
    seo: (SEO | null)
    /** The blogs’s title. */
    title: Scalars['String']
    __typename: 'Blog'
}


/**
 * An auto-generated type for paginating through multiple Blogs.
 * 
 */
export interface BlogConnection {
    /** A list of edges. */
    edges: BlogEdge[]
    /** A list of the nodes contained in BlogEdge. */
    nodes: Blog[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'BlogConnection'
}


/**
 * An auto-generated type which holds one Blog and a cursor during pagination.
 * 
 */
export interface BlogEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of BlogEdge. */
    node: Blog
    __typename: 'BlogEdge'
}


/** The set of valid sort keys for the Blog query. */
export type BlogSortKeys = 'HANDLE' | 'TITLE' | 'ID' | 'RELEVANCE'


/**
 * The store's [branding configuration](https://help.shopify.com/en/manual/promoting-marketing/managing-brand-assets).
 * 
 */
export interface Brand {
    /** The colors of the store's brand. */
    colors: BrandColors
    /** The store's cover image. */
    coverImage: (MediaImage | null)
    /** The store's default logo. */
    logo: (MediaImage | null)
    /** The store's short description. */
    shortDescription: (Scalars['String'] | null)
    /** The store's slogan. */
    slogan: (Scalars['String'] | null)
    /** The store's preferred logo for square UI elements. */
    squareLogo: (MediaImage | null)
    __typename: 'Brand'
}


/**
 * A group of related colors for the shop's brand.
 * 
 */
export interface BrandColorGroup {
    /** The background color. */
    background: (Scalars['Color'] | null)
    /** The foreground color. */
    foreground: (Scalars['Color'] | null)
    __typename: 'BrandColorGroup'
}


/**
 * The colors of the shop's brand.
 * 
 */
export interface BrandColors {
    /** The shop's primary brand colors. */
    primary: BrandColorGroup[]
    /** The shop's secondary brand colors. */
    secondary: BrandColorGroup[]
    __typename: 'BrandColors'
}


/** Card brand, such as Visa or Mastercard, which can be used for payments. */
export type CardBrand = 'VISA' | 'MASTERCARD' | 'DISCOVER' | 'AMERICAN_EXPRESS' | 'DINERS_CLUB' | 'JCB'


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 * 
 */
export interface Cart {
    /** An attribute associated with the cart. */
    attribute: (Attribute | null)
    /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
    attributes: Attribute[]
    /** Information about the buyer that is interacting with the cart. */
    buyerIdentity: CartBuyerIdentity
    /** The URL of the checkout for the cart. */
    checkoutUrl: Scalars['URL']
    /** The estimated costs that the buyer will pay at checkout. The costs are subject to change and changes will be reflected at checkout. The `cost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing). */
    cost: CartCost
    /** The date and time when the cart was created. */
    createdAt: Scalars['DateTime']
    /**
     * The delivery groups available for the cart, based on the buyer identity default
     * delivery address preference or the default address of the logged-in customer.
     * 
     */
    deliveryGroups: CartDeliveryGroupConnection
    /** The discounts that have been applied to the entire cart. */
    discountAllocations: CartDiscountAllocation[]
    /**
     * The case-insensitive discount codes that the customer added at checkout.
     * 
     */
    discountCodes: CartDiscountCode[]
    /**
     * @deprecated Use `cost` instead.
     * The estimated costs that the buyer will pay at checkout.
     * The estimated costs are subject to change and changes will be reflected at checkout.
     * The `estimatedCost` field uses the `buyerIdentity` field to determine
     * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
     * 
     */
    estimatedCost: CartEstimatedCost
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** A list of lines containing information about the items the customer intends to purchase. */
    lines: CartLineConnection
    /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
    note: (Scalars['String'] | null)
    /** The total number of items in the cart. */
    totalQuantity: Scalars['Int']
    /** The date and time when the cart was updated. */
    updatedAt: Scalars['DateTime']
    __typename: 'Cart'
}


/** Return type for `cartAttributesUpdate` mutation. */
export interface CartAttributesUpdatePayload {
    /** The updated cart. */
    cart: (Cart | null)
    /** The list of errors that occurred from executing the mutation. */
    userErrors: CartUserError[]
    __typename: 'CartAttributesUpdatePayload'
}


/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
export interface CartAutomaticDiscountAllocation {
    /** The discounted amount that has been applied to the cart line. */
    discountedAmount: MoneyV2
    /** The title of the allocated discount. */
    title: Scalars['String']
    __typename: 'CartAutomaticDiscountAllocation'
}


/** Represents information about the buyer that is interacting with the cart. */
export interface CartBuyerIdentity {
    /** The country where the buyer is located. */
    countryCode: (CountryCode | null)
    /** The customer account associated with the cart. */
    customer: (Customer | null)
    /**
     * An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
     * The rank of the preferences is determined by the order of the addresses in the array. Preferences
     * can be used to populate relevant fields in the checkout flow.
     * 
     */
    deliveryAddressPreferences: DeliveryAddress[]
    /** The email address of the buyer that is interacting with the cart. */
    email: (Scalars['String'] | null)
    /** The phone number of the buyer that is interacting with the cart. */
    phone: (Scalars['String'] | null)
    __typename: 'CartBuyerIdentity'
}


/** Return type for `cartBuyerIdentityUpdate` mutation. */
export interface CartBuyerIdentityUpdatePayload {
    /** The updated cart. */
    cart: (Cart | null)
    /** The list of errors that occurred from executing the mutation. */
    userErrors: CartUserError[]
    __typename: 'CartBuyerIdentityUpdatePayload'
}


/** The discount that has been applied to the cart line using a discount code. */
export interface CartCodeDiscountAllocation {
    /** The code used to apply the discount. */
    code: Scalars['String']
    /** The discounted amount that has been applied to the cart line. */
    discountedAmount: MoneyV2
    __typename: 'CartCodeDiscountAllocation'
}


/**
 * The costs that the buyer will pay at checkout.
 * The cart cost uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
 * 
 */
export interface CartCost {
    /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to `subtotalAmount`. */
    checkoutChargeAmount: MoneyV2
    /** The amount, before taxes and cart-level discounts, for the customer to pay. */
    subtotalAmount: MoneyV2
    /** Whether the subtotal amount is estimated. */
    subtotalAmountEstimated: Scalars['Boolean']
    /** The total amount for the customer to pay. */
    totalAmount: MoneyV2
    /** Whether the total amount is estimated. */
    totalAmountEstimated: Scalars['Boolean']
    /** The duty amount for the customer to pay at checkout. */
    totalDutyAmount: (MoneyV2 | null)
    /** Whether the total duty amount is estimated. */
    totalDutyAmountEstimated: Scalars['Boolean']
    /** The tax amount for the customer to pay at checkout. */
    totalTaxAmount: (MoneyV2 | null)
    /** Whether the total tax amount is estimated. */
    totalTaxAmountEstimated: Scalars['Boolean']
    __typename: 'CartCost'
}


/** Return type for `cartCreate` mutation. */
export interface CartCreatePayload {
    /** The new cart. */
    cart: (Cart | null)
    /** The list of errors that occurred from executing the mutation. */
    userErrors: CartUserError[]
    __typename: 'CartCreatePayload'
}


/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
export interface CartCustomDiscountAllocation {
    /** The discounted amount that has been applied to the cart line. */
    discountedAmount: MoneyV2
    /** The title of the allocated discount. */
    title: Scalars['String']
    __typename: 'CartCustomDiscountAllocation'
}


/** Information about the options available for one or more line items to be delivered to a specific address. */
export interface CartDeliveryGroup {
    /** A list of cart lines for the delivery group. */
    cartLines: CartLineConnection
    /** The destination address for the delivery group. */
    deliveryAddress: MailingAddress
    /** The delivery options available for the delivery group. */
    deliveryOptions: CartDeliveryOption[]
    /** The ID for the delivery group. */
    id: Scalars['ID']
    /** The selected delivery option for the delivery group. */
    selectedDeliveryOption: (CartDeliveryOption | null)
    __typename: 'CartDeliveryGroup'
}


/**
 * An auto-generated type for paginating through multiple CartDeliveryGroups.
 * 
 */
export interface CartDeliveryGroupConnection {
    /** A list of edges. */
    edges: CartDeliveryGroupEdge[]
    /** A list of the nodes contained in CartDeliveryGroupEdge. */
    nodes: CartDeliveryGroup[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'CartDeliveryGroupConnection'
}


/**
 * An auto-generated type which holds one CartDeliveryGroup and a cursor during pagination.
 * 
 */
export interface CartDeliveryGroupEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of CartDeliveryGroupEdge. */
    node: CartDeliveryGroup
    __typename: 'CartDeliveryGroupEdge'
}


/** Information about a delivery option. */
export interface CartDeliveryOption {
    /** The code of the delivery option. */
    code: (Scalars['String'] | null)
    /** The method for the delivery option. */
    deliveryMethodType: DeliveryMethodType
    /** The description of the delivery option. */
    description: (Scalars['String'] | null)
    /** The estimated cost for the delivery option. */
    estimatedCost: MoneyV2
    /** The unique identifier of the delivery option. */
    handle: Scalars['String']
    /** The title of the delivery option. */
    title: (Scalars['String'] | null)
    __typename: 'CartDeliveryOption'
}


/** The discounts that have been applied to the cart line. */
export type CartDiscountAllocation = (CartAutomaticDiscountAllocation | CartCodeDiscountAllocation | CartCustomDiscountAllocation) & { __isUnion?: true }


/** The discount codes applied to the cart. */
export interface CartDiscountCode {
    /** Whether the discount code is applicable to the cart's current contents. */
    applicable: Scalars['Boolean']
    /** The code for the discount. */
    code: Scalars['String']
    __typename: 'CartDiscountCode'
}


/** Return type for `cartDiscountCodesUpdate` mutation. */
export interface CartDiscountCodesUpdatePayload {
    /** The updated cart. */
    cart: (Cart | null)
    /** The list of errors that occurred from executing the mutation. */
    userErrors: CartUserError[]
    __typename: 'CartDiscountCodesUpdatePayload'
}


/** Possible error codes that can be returned by `CartUserError`. */
export type CartErrorCode = 'INVALID' | 'LESS_THAN' | 'INVALID_MERCHANDISE_LINE' | 'MISSING_DISCOUNT_CODE' | 'MISSING_NOTE'


/**
 * The estimated costs that the buyer will pay at checkout.
 * The estimated cost uses
 * [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity)
 * to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
 * 
 */
export interface CartEstimatedCost {
    /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to`subtotal_amount`. */
    checkoutChargeAmount: MoneyV2
    /** The estimated amount, before taxes and discounts, for the customer to pay. */
    subtotalAmount: MoneyV2
    /** The estimated total amount for the customer to pay. */
    totalAmount: MoneyV2
    /** The estimated duty amount for the customer to pay at checkout. */
    totalDutyAmount: (MoneyV2 | null)
    /** The estimated tax amount for the customer to pay at checkout. */
    totalTaxAmount: (MoneyV2 | null)
    __typename: 'CartEstimatedCost'
}


/** Represents information about the merchandise in the cart. */
export interface CartLine {
    /** An attribute associated with the cart line. */
    attribute: (Attribute | null)
    /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
    attributes: Attribute[]
    /** The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout. */
    cost: CartLineCost
    /** The discounts that have been applied to the cart line. */
    discountAllocations: CartDiscountAllocation[]
    /**
     * @deprecated Use `cost` instead.
     * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
     */
    estimatedCost: CartLineEstimatedCost
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The merchandise that the buyer intends to purchase. */
    merchandise: Merchandise
    /** The quantity of the merchandise that the customer intends to purchase. */
    quantity: Scalars['Int']
    /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
    sellingPlanAllocation: (SellingPlanAllocation | null)
    __typename: 'CartLine'
}


/**
 * An auto-generated type for paginating through multiple CartLines.
 * 
 */
export interface CartLineConnection {
    /** A list of edges. */
    edges: CartLineEdge[]
    /** A list of the nodes contained in CartLineEdge. */
    nodes: CartLine[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'CartLineConnection'
}


/** The cost of the merchandise line that the buyer will pay at checkout. */
export interface CartLineCost {
    /** The amount of the merchandise line. */
    amountPerQuantity: MoneyV2
    /** The compare at amount of the merchandise line. */
    compareAtAmountPerQuantity: (MoneyV2 | null)
    /** The cost of the merchandise line before line-level discounts. */
    subtotalAmount: MoneyV2
    /** The total cost of the merchandise line. */
    totalAmount: MoneyV2
    __typename: 'CartLineCost'
}


/**
 * An auto-generated type which holds one CartLine and a cursor during pagination.
 * 
 */
export interface CartLineEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of CartLineEdge. */
    node: CartLine
    __typename: 'CartLineEdge'
}


/** The estimated cost of the merchandise line that the buyer will pay at checkout. */
export interface CartLineEstimatedCost {
    /** The amount of the merchandise line. */
    amount: MoneyV2
    /** The compare at amount of the merchandise line. */
    compareAtAmount: (MoneyV2 | null)
    /** The estimated cost of the merchandise line before discounts. */
    subtotalAmount: MoneyV2
    /** The estimated total cost of the merchandise line. */
    totalAmount: MoneyV2
    __typename: 'CartLineEstimatedCost'
}


/** Return type for `cartLinesAdd` mutation. */
export interface CartLinesAddPayload {
    /** The updated cart. */
    cart: (Cart | null)
    /** The list of errors that occurred from executing the mutation. */
    userErrors: CartUserError[]
    __typename: 'CartLinesAddPayload'
}


/** Return type for `cartLinesRemove` mutation. */
export interface CartLinesRemovePayload {
    /** The updated cart. */
    cart: (Cart | null)
    /** The list of errors that occurred from executing the mutation. */
    userErrors: CartUserError[]
    __typename: 'CartLinesRemovePayload'
}


/** Return type for `cartLinesUpdate` mutation. */
export interface CartLinesUpdatePayload {
    /** The updated cart. */
    cart: (Cart | null)
    /** The list of errors that occurred from executing the mutation. */
    userErrors: CartUserError[]
    __typename: 'CartLinesUpdatePayload'
}


/** Return type for `cartNoteUpdate` mutation. */
export interface CartNoteUpdatePayload {
    /** The updated cart. */
    cart: (Cart | null)
    /** The list of errors that occurred from executing the mutation. */
    userErrors: CartUserError[]
    __typename: 'CartNoteUpdatePayload'
}


/** Return type for `cartSelectedDeliveryOptionsUpdate` mutation. */
export interface CartSelectedDeliveryOptionsUpdatePayload {
    /** The updated cart. */
    cart: (Cart | null)
    /** The list of errors that occurred from executing the mutation. */
    userErrors: CartUserError[]
    __typename: 'CartSelectedDeliveryOptionsUpdatePayload'
}


/** Represents an error that happens during execution of a cart mutation. */
export interface CartUserError {
    /** The error code. */
    code: (CartErrorCode | null)
    /** The path to the input field that caused the error. */
    field: (Scalars['String'][] | null)
    /** The error message. */
    message: Scalars['String']
    __typename: 'CartUserError'
}


/** A container for all the information required to checkout items and pay. */
export interface Checkout {
    /** The gift cards used on the checkout. */
    appliedGiftCards: AppliedGiftCard[]
    /**
     * The available shipping rates for this Checkout.
     * Should only be used when checkout `requiresShipping` is `true` and
     * the shipping address is valid.
     * 
     */
    availableShippingRates: (AvailableShippingRates | null)
    /** The identity of the customer associated with the checkout. */
    buyerIdentity: CheckoutBuyerIdentity
    /** The date and time when the checkout was completed. */
    completedAt: (Scalars['DateTime'] | null)
    /** The date and time when the checkout was created. */
    createdAt: Scalars['DateTime']
    /** The currency code for the checkout. */
    currencyCode: CurrencyCode
    /** A list of extra information that is added to the checkout. */
    customAttributes: Attribute[]
    /** Discounts that have been applied on the checkout. */
    discountApplications: DiscountApplicationConnection
    /** The email attached to this checkout. */
    email: (Scalars['String'] | null)
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** A list of line item objects, each one containing information about an item in the checkout. */
    lineItems: CheckoutLineItemConnection
    /** The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded. */
    lineItemsSubtotalPrice: MoneyV2
    /** The note associated with the checkout. */
    note: (Scalars['String'] | null)
    /** The resulting order from a paid checkout. */
    order: (Order | null)
    /** The Order Status Page for this Checkout, null when checkout is not completed. */
    orderStatusUrl: (Scalars['URL'] | null)
    /** The amount left to be paid. This is equal to the cost of the line items, taxes, and shipping, minus discounts and gift cards. */
    paymentDue: MoneyV2
    /**
     * @deprecated Use `paymentDue` instead.
     * The amount left to be paid. This is equal to the cost of the line items, duties, taxes, and shipping, minus discounts and gift cards.
     */
    paymentDueV2: MoneyV2
    /**
     * Whether or not the Checkout is ready and can be completed. Checkouts may
     * have asynchronous operations that can take time to finish. If you want
     * to complete a checkout or ensure all the fields are populated and up to
     * date, polling is required until the value is true.
     * 
     */
    ready: Scalars['Boolean']
    /** States whether or not the fulfillment requires shipping. */
    requiresShipping: Scalars['Boolean']
    /** The shipping address to where the line items will be shipped. */
    shippingAddress: (MailingAddress | null)
    /**
     * The discounts that have been allocated onto the shipping line by discount applications.
     * 
     */
    shippingDiscountAllocations: DiscountAllocation[]
    /** Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object. */
    shippingLine: (ShippingRate | null)
    /** The price at checkout before shipping and taxes. */
    subtotalPrice: MoneyV2
    /**
     * @deprecated Use `subtotalPrice` instead.
     * The price at checkout before duties, shipping, and taxes.
     */
    subtotalPriceV2: MoneyV2
    /** Whether the checkout is tax exempt. */
    taxExempt: Scalars['Boolean']
    /** Whether taxes are included in the line item and shipping line prices. */
    taxesIncluded: Scalars['Boolean']
    /** The sum of all the duties applied to the line items in the checkout. */
    totalDuties: (MoneyV2 | null)
    /** The sum of all the prices of all the items in the checkout, including taxes and duties. */
    totalPrice: MoneyV2
    /**
     * @deprecated Use `totalPrice` instead.
     * The sum of all the prices of all the items in the checkout, including taxes and duties.
     */
    totalPriceV2: MoneyV2
    /** The sum of all the taxes applied to the line items and shipping lines in the checkout. */
    totalTax: MoneyV2
    /**
     * @deprecated Use `totalTax` instead.
     * The sum of all the taxes applied to the line items and shipping lines in the checkout.
     */
    totalTaxV2: MoneyV2
    /** The date and time when the checkout was last updated. */
    updatedAt: Scalars['DateTime']
    /** The url pointing to the checkout accessible from the web. */
    webUrl: Scalars['URL']
    __typename: 'Checkout'
}


/** Return type for `checkoutAttributesUpdateV2` mutation. */
export interface CheckoutAttributesUpdateV2Payload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutAttributesUpdateV2Payload'
}


/** The identity of the customer associated with the checkout. */
export interface CheckoutBuyerIdentity {
    /** The country code for the checkout. For example, `CA`. */
    countryCode: (CountryCode | null)
    __typename: 'CheckoutBuyerIdentity'
}


/** Return type for `checkoutCompleteFree` mutation. */
export interface CheckoutCompleteFreePayload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutCompleteFreePayload'
}


/** Return type for `checkoutCompleteWithCreditCardV2` mutation. */
export interface CheckoutCompleteWithCreditCardV2Payload {
    /** The checkout on which the payment was applied. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /** A representation of the attempted payment. */
    payment: (Payment | null)
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutCompleteWithCreditCardV2Payload'
}


/** Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation. */
export interface CheckoutCompleteWithTokenizedPaymentV3Payload {
    /** The checkout on which the payment was applied. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /** A representation of the attempted payment. */
    payment: (Payment | null)
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutCompleteWithTokenizedPaymentV3Payload'
}


/** Return type for `checkoutCreate` mutation. */
export interface CheckoutCreatePayload {
    /** The new checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /** The checkout queue token. Available only to selected stores. */
    queueToken: (Scalars['String'] | null)
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutCreatePayload'
}


/** Return type for `checkoutCustomerAssociateV2` mutation. */
export interface CheckoutCustomerAssociateV2Payload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /** The associated customer object. */
    customer: (Customer | null)
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutCustomerAssociateV2Payload'
}


/** Return type for `checkoutCustomerDisassociateV2` mutation. */
export interface CheckoutCustomerDisassociateV2Payload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutCustomerDisassociateV2Payload'
}


/** Return type for `checkoutDiscountCodeApplyV2` mutation. */
export interface CheckoutDiscountCodeApplyV2Payload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutDiscountCodeApplyV2Payload'
}


/** Return type for `checkoutDiscountCodeRemove` mutation. */
export interface CheckoutDiscountCodeRemovePayload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutDiscountCodeRemovePayload'
}


/** Return type for `checkoutEmailUpdateV2` mutation. */
export interface CheckoutEmailUpdateV2Payload {
    /** The checkout object with the updated email. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutEmailUpdateV2Payload'
}


/** Possible error codes that can be returned by `CheckoutUserError`. */
export type CheckoutErrorCode = 'BLANK' | 'INVALID' | 'TOO_LONG' | 'PRESENT' | 'LESS_THAN' | 'GREATER_THAN_OR_EQUAL_TO' | 'LESS_THAN_OR_EQUAL_TO' | 'ALREADY_COMPLETED' | 'LOCKED' | 'NOT_SUPPORTED' | 'BAD_DOMAIN' | 'INVALID_FOR_COUNTRY' | 'INVALID_FOR_COUNTRY_AND_PROVINCE' | 'INVALID_STATE_IN_COUNTRY' | 'INVALID_PROVINCE_IN_COUNTRY' | 'INVALID_REGION_IN_COUNTRY' | 'SHIPPING_RATE_EXPIRED' | 'GIFT_CARD_UNUSABLE' | 'GIFT_CARD_DISABLED' | 'GIFT_CARD_CODE_INVALID' | 'GIFT_CARD_ALREADY_APPLIED' | 'GIFT_CARD_CURRENCY_MISMATCH' | 'GIFT_CARD_EXPIRED' | 'GIFT_CARD_DEPLETED' | 'GIFT_CARD_NOT_FOUND' | 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE' | 'DISCOUNT_EXPIRED' | 'DISCOUNT_DISABLED' | 'DISCOUNT_LIMIT_REACHED' | 'HIGHER_VALUE_DISCOUNT_APPLIED' | 'MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED' | 'DISCOUNT_NOT_FOUND' | 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE' | 'DISCOUNT_CODE_APPLICATION_FAILED' | 'EMPTY' | 'NOT_ENOUGH_IN_STOCK' | 'MISSING_PAYMENT_INPUT' | 'TOTAL_PRICE_MISMATCH' | 'LINE_ITEM_NOT_FOUND' | 'UNABLE_TO_APPLY' | 'DISCOUNT_ALREADY_APPLIED' | 'THROTTLED_DURING_CHECKOUT' | 'EXPIRED_QUEUE_TOKEN' | 'INVALID_QUEUE_TOKEN' | 'INVALID_COUNTRY_AND_CURRENCY'


/** Return type for `checkoutGiftCardRemoveV2` mutation. */
export interface CheckoutGiftCardRemoveV2Payload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutGiftCardRemoveV2Payload'
}


/** Return type for `checkoutGiftCardsAppend` mutation. */
export interface CheckoutGiftCardsAppendPayload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutGiftCardsAppendPayload'
}


/** A single line item in the checkout, grouped by variant and attributes. */
export interface CheckoutLineItem {
    /** Extra information in the form of an array of Key-Value pairs about the line item. */
    customAttributes: Attribute[]
    /** The discounts that have been allocated onto the checkout line item by discount applications. */
    discountAllocations: DiscountAllocation[]
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The quantity of the line item. */
    quantity: Scalars['Int']
    /** Title of the line item. Defaults to the product's title. */
    title: Scalars['String']
    /** Unit price of the line item. */
    unitPrice: (MoneyV2 | null)
    /** Product variant of the line item. */
    variant: (ProductVariant | null)
    __typename: 'CheckoutLineItem'
}


/**
 * An auto-generated type for paginating through multiple CheckoutLineItems.
 * 
 */
export interface CheckoutLineItemConnection {
    /** A list of edges. */
    edges: CheckoutLineItemEdge[]
    /** A list of the nodes contained in CheckoutLineItemEdge. */
    nodes: CheckoutLineItem[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'CheckoutLineItemConnection'
}


/**
 * An auto-generated type which holds one CheckoutLineItem and a cursor during pagination.
 * 
 */
export interface CheckoutLineItemEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of CheckoutLineItemEdge. */
    node: CheckoutLineItem
    __typename: 'CheckoutLineItemEdge'
}


/** Return type for `checkoutLineItemsAdd` mutation. */
export interface CheckoutLineItemsAddPayload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutLineItemsAddPayload'
}


/** Return type for `checkoutLineItemsRemove` mutation. */
export interface CheckoutLineItemsRemovePayload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutLineItemsRemovePayload'
}


/** Return type for `checkoutLineItemsReplace` mutation. */
export interface CheckoutLineItemsReplacePayload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    userErrors: CheckoutUserError[]
    __typename: 'CheckoutLineItemsReplacePayload'
}


/** Return type for `checkoutLineItemsUpdate` mutation. */
export interface CheckoutLineItemsUpdatePayload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutLineItemsUpdatePayload'
}


/** Return type for `checkoutShippingAddressUpdateV2` mutation. */
export interface CheckoutShippingAddressUpdateV2Payload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutShippingAddressUpdateV2Payload'
}


/** Return type for `checkoutShippingLineUpdate` mutation. */
export interface CheckoutShippingLineUpdatePayload {
    /** The updated checkout object. */
    checkout: (Checkout | null)
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors: CheckoutUserError[]
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CheckoutShippingLineUpdatePayload'
}


/** Represents an error that happens during execution of a checkout mutation. */
export interface CheckoutUserError {
    /** The error code. */
    code: (CheckoutErrorCode | null)
    /** The path to the input field that caused the error. */
    field: (Scalars['String'][] | null)
    /** The error message. */
    message: Scalars['String']
    __typename: 'CheckoutUserError'
}


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export interface Collection {
    /** Stripped description of the collection, single line with HTML tags removed. */
    description: Scalars['String']
    /** The description of the collection, complete with HTML formatting. */
    descriptionHtml: Scalars['HTML']
    /**
     * A human-friendly unique string for the collection automatically generated from its title.
     * Limit of 255 characters.
     * 
     */
    handle: Scalars['String']
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** Image associated with the collection. */
    image: (Image | null)
    /** Returns a metafield found by namespace and key. */
    metafield: (Metafield | null)
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields: (Metafield | null)[]
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl: (Scalars['URL'] | null)
    /** List of products in the collection. */
    products: ProductConnection
    /** The collection's SEO information. */
    seo: SEO
    /** The collection’s name. Limit of 255 characters. */
    title: Scalars['String']
    /** The date and time when the collection was last modified. */
    updatedAt: Scalars['DateTime']
    __typename: 'Collection'
}


/**
 * An auto-generated type for paginating through multiple Collections.
 * 
 */
export interface CollectionConnection {
    /** A list of edges. */
    edges: CollectionEdge[]
    /** A list of the nodes contained in CollectionEdge. */
    nodes: Collection[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'CollectionConnection'
}


/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 * 
 */
export interface CollectionEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of CollectionEdge. */
    node: Collection
    __typename: 'CollectionEdge'
}


/** The set of valid sort keys for the Collection query. */
export type CollectionSortKeys = 'TITLE' | 'UPDATED_AT' | 'ID' | 'RELEVANCE'


/** A comment on an article. */
export interface Comment {
    /** The comment’s author. */
    author: CommentAuthor
    /** Stripped content of the comment, single line with HTML tags removed. */
    content: Scalars['String']
    /** The content of the comment, complete with HTML formatting. */
    contentHtml: Scalars['HTML']
    /** A globally-unique ID. */
    id: Scalars['ID']
    __typename: 'Comment'
}


/** The author of a comment. */
export interface CommentAuthor {
    /** The author's email. */
    email: Scalars['String']
    /** The author’s name. */
    name: Scalars['String']
    __typename: 'CommentAuthor'
}


/**
 * An auto-generated type for paginating through multiple Comments.
 * 
 */
export interface CommentConnection {
    /** A list of edges. */
    edges: CommentEdge[]
    /** A list of the nodes contained in CommentEdge. */
    nodes: Comment[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'CommentConnection'
}


/**
 * An auto-generated type which holds one Comment and a cursor during pagination.
 * 
 */
export interface CommentEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of CommentEdge. */
    node: Comment
    __typename: 'CommentEdge'
}


/** A country. */
export interface Country {
    /** The languages available for the country. */
    availableLanguages: Language[]
    /** The currency of the country. */
    currency: Currency
    /** The ISO code of the country. */
    isoCode: CountryCode
    /** The name of the country. */
    name: Scalars['String']
    /** The unit system used in the country. */
    unitSystem: UnitSystem
    __typename: 'Country'
}


/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 * 
 */
export type CountryCode = 'AF' | 'AX' | 'AL' | 'DZ' | 'AD' | 'AO' | 'AI' | 'AG' | 'AR' | 'AM' | 'AW' | 'AC' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'KH' | 'CA' | 'CV' | 'BQ' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'HR' | 'CU' | 'CW' | 'CY' | 'CZ' | 'CI' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'SZ' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KP' | 'XK' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'AN' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MK' | 'NO' | 'OM' | 'PK' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'QA' | 'CM' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'KR' | 'SS' | 'ES' | 'LK' | 'VC' | 'SD' | 'SR' | 'SJ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TA' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW' | 'ZZ'


/** Credit card information used for a payment. */
export interface CreditCard {
    /** The brand of the credit card. */
    brand: (Scalars['String'] | null)
    /** The expiry month of the credit card. */
    expiryMonth: (Scalars['Int'] | null)
    /** The expiry year of the credit card. */
    expiryYear: (Scalars['Int'] | null)
    /** The credit card's BIN number. */
    firstDigits: (Scalars['String'] | null)
    /** The first name of the card holder. */
    firstName: (Scalars['String'] | null)
    /** The last 4 digits of the credit card. */
    lastDigits: (Scalars['String'] | null)
    /** The last name of the card holder. */
    lastName: (Scalars['String'] | null)
    /** The masked credit card number with only the last 4 digits displayed. */
    maskedNumber: (Scalars['String'] | null)
    __typename: 'CreditCard'
}


/** The part of the image that should remain after cropping. */
export type CropRegion = 'CENTER' | 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT'


/** A currency. */
export interface Currency {
    /** The ISO code of the currency. */
    isoCode: CurrencyCode
    /** The name of the currency. */
    name: Scalars['String']
    /** The symbol of the currency. */
    symbol: Scalars['String']
    __typename: 'Currency'
}


/**
 * The three-letter currency codes that represent the world currencies used in stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 * 
 */
export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AFN' | 'ALL' | 'DZD' | 'AOA' | 'ARS' | 'AMD' | 'AWG' | 'AUD' | 'BBD' | 'AZN' | 'BDT' | 'BSD' | 'BHD' | 'BIF' | 'BZD' | 'BMD' | 'BTN' | 'BAM' | 'BRL' | 'BOB' | 'BWP' | 'BND' | 'BGN' | 'MMK' | 'KHR' | 'CVE' | 'KYD' | 'XAF' | 'CLP' | 'CNY' | 'COP' | 'KMF' | 'CDF' | 'CRC' | 'HRK' | 'CZK' | 'DKK' | 'DOP' | 'XCD' | 'EGP' | 'ETB' | 'XPF' | 'FJD' | 'GMD' | 'GHS' | 'GTQ' | 'GYD' | 'GEL' | 'HTG' | 'HNL' | 'HKD' | 'HUF' | 'ISK' | 'INR' | 'IDR' | 'ILS' | 'IQD' | 'JMD' | 'JPY' | 'JEP' | 'JOD' | 'KZT' | 'KES' | 'KWD' | 'KGS' | 'LAK' | 'LVL' | 'LBP' | 'LSL' | 'LRD' | 'LTL' | 'MGA' | 'MKD' | 'MOP' | 'MWK' | 'MVR' | 'MXN' | 'MYR' | 'MUR' | 'MDL' | 'MAD' | 'MNT' | 'MZN' | 'NAD' | 'NPR' | 'ANG' | 'NZD' | 'NIO' | 'NGN' | 'NOK' | 'OMR' | 'PAB' | 'PKR' | 'PGK' | 'PYG' | 'PEN' | 'PHP' | 'PLN' | 'QAR' | 'RON' | 'RUB' | 'RWF' | 'WST' | 'SAR' | 'RSD' | 'SCR' | 'SGD' | 'SDG' | 'SYP' | 'ZAR' | 'KRW' | 'SSP' | 'SBD' | 'LKR' | 'SRD' | 'SZL' | 'SEK' | 'CHF' | 'TWD' | 'THB' | 'TZS' | 'TTD' | 'TND' | 'TRY' | 'TMT' | 'UGX' | 'UAH' | 'AED' | 'UYU' | 'UZS' | 'VUV' | 'VND' | 'XOF' | 'YER' | 'ZMW' | 'BYN' | 'BYR' | 'DJF' | 'ERN' | 'FKP' | 'GIP' | 'GNF' | 'IRR' | 'KID' | 'LYD' | 'MRU' | 'SLL' | 'SHP' | 'SOS' | 'STD' | 'STN' | 'TJS' | 'TOP' | 'VED' | 'VEF' | 'VES' | 'XXX'


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export interface Customer {
    /** Indicates whether the customer has consented to be sent marketing material via email. */
    acceptsMarketing: Scalars['Boolean']
    /** A list of addresses for the customer. */
    addresses: MailingAddressConnection
    /** The date and time when the customer was created. */
    createdAt: Scalars['DateTime']
    /** The customer’s default address. */
    defaultAddress: (MailingAddress | null)
    /** The customer’s name, email or phone number. */
    displayName: Scalars['String']
    /** The customer’s email address. */
    email: (Scalars['String'] | null)
    /** The customer’s first name. */
    firstName: (Scalars['String'] | null)
    /** A unique ID for the customer. */
    id: Scalars['ID']
    /** The customer's most recently updated, incomplete checkout. */
    lastIncompleteCheckout: (Checkout | null)
    /** The customer’s last name. */
    lastName: (Scalars['String'] | null)
    /** Returns a metafield found by namespace and key. */
    metafield: (Metafield | null)
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields: (Metafield | null)[]
    /** The number of orders that the customer has made at the store in their lifetime. */
    numberOfOrders: Scalars['UnsignedInt64']
    /** The orders associated with the customer. */
    orders: OrderConnection
    /** The customer’s phone number. */
    phone: (Scalars['String'] | null)
    /**
     * A comma separated list of tags that have been added to the customer.
     * Additional access scope required: unauthenticated_read_customer_tags.
     * 
     */
    tags: Scalars['String'][]
    /** The date and time when the customer information was updated. */
    updatedAt: Scalars['DateTime']
    __typename: 'Customer'
}


/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
export interface CustomerAccessToken {
    /** The customer’s access token. */
    accessToken: Scalars['String']
    /** The date and time when the customer access token expires. */
    expiresAt: Scalars['DateTime']
    __typename: 'CustomerAccessToken'
}


/** Return type for `customerAccessTokenCreate` mutation. */
export interface CustomerAccessTokenCreatePayload {
    /** The newly created customer access token object. */
    customerAccessToken: (CustomerAccessToken | null)
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CustomerAccessTokenCreatePayload'
}


/** Return type for `customerAccessTokenCreateWithMultipass` mutation. */
export interface CustomerAccessTokenCreateWithMultipassPayload {
    /** An access token object associated with the customer. */
    customerAccessToken: (CustomerAccessToken | null)
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    __typename: 'CustomerAccessTokenCreateWithMultipassPayload'
}


/** Return type for `customerAccessTokenDelete` mutation. */
export interface CustomerAccessTokenDeletePayload {
    /** The destroyed access token. */
    deletedAccessToken: (Scalars['String'] | null)
    /** ID of the destroyed customer access token. */
    deletedCustomerAccessTokenId: (Scalars['String'] | null)
    /** The list of errors that occurred from executing the mutation. */
    userErrors: UserError[]
    __typename: 'CustomerAccessTokenDeletePayload'
}


/** Return type for `customerAccessTokenRenew` mutation. */
export interface CustomerAccessTokenRenewPayload {
    /** The renewed customer access token object. */
    customerAccessToken: (CustomerAccessToken | null)
    /** The list of errors that occurred from executing the mutation. */
    userErrors: UserError[]
    __typename: 'CustomerAccessTokenRenewPayload'
}


/** Return type for `customerActivateByUrl` mutation. */
export interface CustomerActivateByUrlPayload {
    /** The customer that was activated. */
    customer: (Customer | null)
    /** A new customer access token for the customer. */
    customerAccessToken: (CustomerAccessToken | null)
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    __typename: 'CustomerActivateByUrlPayload'
}


/** Return type for `customerActivate` mutation. */
export interface CustomerActivatePayload {
    /** The customer object. */
    customer: (Customer | null)
    /** A newly created customer access token object for the customer. */
    customerAccessToken: (CustomerAccessToken | null)
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CustomerActivatePayload'
}


/** Return type for `customerAddressCreate` mutation. */
export interface CustomerAddressCreatePayload {
    /** The new customer address object. */
    customerAddress: (MailingAddress | null)
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CustomerAddressCreatePayload'
}


/** Return type for `customerAddressDelete` mutation. */
export interface CustomerAddressDeletePayload {
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    /** ID of the deleted customer address. */
    deletedCustomerAddressId: (Scalars['String'] | null)
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CustomerAddressDeletePayload'
}


/** Return type for `customerAddressUpdate` mutation. */
export interface CustomerAddressUpdatePayload {
    /** The customer’s updated mailing address. */
    customerAddress: (MailingAddress | null)
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CustomerAddressUpdatePayload'
}


/** Return type for `customerCreate` mutation. */
export interface CustomerCreatePayload {
    /** The created customer object. */
    customer: (Customer | null)
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CustomerCreatePayload'
}


/** Return type for `customerDefaultAddressUpdate` mutation. */
export interface CustomerDefaultAddressUpdatePayload {
    /** The updated customer object. */
    customer: (Customer | null)
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CustomerDefaultAddressUpdatePayload'
}


/** Possible error codes that can be returned by `CustomerUserError`. */
export type CustomerErrorCode = 'BLANK' | 'INVALID' | 'TAKEN' | 'TOO_LONG' | 'TOO_SHORT' | 'UNIDENTIFIED_CUSTOMER' | 'CUSTOMER_DISABLED' | 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE' | 'CONTAINS_HTML_TAGS' | 'CONTAINS_URL' | 'TOKEN_INVALID' | 'ALREADY_ENABLED' | 'NOT_FOUND' | 'BAD_DOMAIN' | 'INVALID_MULTIPASS_REQUEST'


/** Return type for `customerRecover` mutation. */
export interface CustomerRecoverPayload {
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CustomerRecoverPayload'
}


/** Return type for `customerResetByUrl` mutation. */
export interface CustomerResetByUrlPayload {
    /** The customer object which was reset. */
    customer: (Customer | null)
    /** A newly created customer access token object for the customer. */
    customerAccessToken: (CustomerAccessToken | null)
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CustomerResetByUrlPayload'
}


/** Return type for `customerReset` mutation. */
export interface CustomerResetPayload {
    /** The customer object which was reset. */
    customer: (Customer | null)
    /** A newly created customer access token object for the customer. */
    customerAccessToken: (CustomerAccessToken | null)
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CustomerResetPayload'
}


/** Return type for `customerUpdate` mutation. */
export interface CustomerUpdatePayload {
    /** The updated customer object. */
    customer: (Customer | null)
    /**
     * The newly created customer access token. If the customer's password is updated, all previous access tokens
     * (including the one used to perform this mutation) become invalid, and a new token is generated.
     * 
     */
    customerAccessToken: (CustomerAccessToken | null)
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors: CustomerUserError[]
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors: UserError[]
    __typename: 'CustomerUpdatePayload'
}


/** Represents an error that happens during execution of a customer mutation. */
export interface CustomerUserError {
    /** The error code. */
    code: (CustomerErrorCode | null)
    /** The path to the input field that caused the error. */
    field: (Scalars['String'][] | null)
    /** The error message. */
    message: Scalars['String']
    __typename: 'CustomerUserError'
}


/** A delivery address of the buyer that is interacting with the cart. */
export type DeliveryAddress = (MailingAddress) & { __isUnion?: true }


/** List of different delivery method types. */
export type DeliveryMethodType = 'SHIPPING' | 'PICK_UP' | 'RETAIL' | 'LOCAL' | 'PICKUP_POINT' | 'NONE'


/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export type DigitalWallet = 'APPLE_PAY' | 'ANDROID_PAY' | 'GOOGLE_PAY' | 'SHOPIFY_PAY'


/**
 * An amount discounting the line that has been allocated by a discount.
 * 
 */
export interface DiscountAllocation {
    /** Amount of discount allocated. */
    allocatedAmount: MoneyV2
    /** The discount this allocated amount originated from. */
    discountApplication: DiscountApplication
    __typename: 'DiscountAllocation'
}


/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 * 
 */
export type DiscountApplication = (AutomaticDiscountApplication | DiscountCodeApplication | ManualDiscountApplication | ScriptDiscountApplication) & { __isUnion?: true }


/** The method by which the discount's value is allocated onto its entitled lines. */
export type DiscountApplicationAllocationMethod = 'ACROSS' | 'EACH' | 'ONE'


/**
 * An auto-generated type for paginating through multiple DiscountApplications.
 * 
 */
export interface DiscountApplicationConnection {
    /** A list of edges. */
    edges: DiscountApplicationEdge[]
    /** A list of the nodes contained in DiscountApplicationEdge. */
    nodes: DiscountApplication[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'DiscountApplicationConnection'
}


/**
 * An auto-generated type which holds one DiscountApplication and a cursor during pagination.
 * 
 */
export interface DiscountApplicationEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of DiscountApplicationEdge. */
    node: DiscountApplication
    __typename: 'DiscountApplicationEdge'
}


/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 * 
 */
export type DiscountApplicationTargetSelection = 'ALL' | 'ENTITLED' | 'EXPLICIT'


/**
 * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
 * 
 */
export type DiscountApplicationTargetType = 'LINE_ITEM' | 'SHIPPING_LINE'


/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
 * 
 */
export interface DiscountCodeApplication {
    /** The method by which the discount's value is allocated to its entitled items. */
    allocationMethod: DiscountApplicationAllocationMethod
    /** Specifies whether the discount code was applied successfully. */
    applicable: Scalars['Boolean']
    /** The string identifying the discount code that was used at the time of application. */
    code: Scalars['String']
    /** Which lines of targetType that the discount is allocated over. */
    targetSelection: DiscountApplicationTargetSelection
    /** The type of line that the discount is applicable towards. */
    targetType: DiscountApplicationTargetType
    /** The value of the discount application. */
    value: PricingValue
    __typename: 'DiscountCodeApplication'
}


/** Represents an error in the input of a mutation. */
export type DisplayableError = (CartUserError | CheckoutUserError | CustomerUserError | UserError) & { __isUnion?: true }


/** Represents a web address. */
export interface Domain {
    /** The host name of the domain (eg: `example.com`). */
    host: Scalars['String']
    /** Whether SSL is enabled or not. */
    sslEnabled: Scalars['Boolean']
    /** The URL of the domain (eg: `https://example.com`). */
    url: Scalars['URL']
    __typename: 'Domain'
}


/** Represents a video hosted outside of Shopify. */
export interface ExternalVideo {
    /** A word or phrase to share the nature or contents of a media. */
    alt: (Scalars['String'] | null)
    /** The embed URL of the video for the respective host. */
    embedUrl: Scalars['URL']
    /**
     * @deprecated Use `originUrl` instead.
     * The URL.
     */
    embeddedUrl: Scalars['URL']
    /** The host of the external video. */
    host: MediaHost
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The media content type. */
    mediaContentType: MediaContentType
    /** The origin URL of the video on the respective host. */
    originUrl: Scalars['URL']
    /** The preview image for the media. */
    previewImage: (Image | null)
    __typename: 'ExternalVideo'
}


/** A filter that is supported on the parent field. */
export interface Filter {
    /** A unique identifier. */
    id: Scalars['String']
    /** A human-friendly string for this filter. */
    label: Scalars['String']
    /** An enumeration that denotes the type of data this filter represents. */
    type: FilterType
    /** The list of values for this filter. */
    values: FilterValue[]
    __typename: 'Filter'
}


/**
 * The type of data that the filter group represents.
 * 
 * For more information, refer to [Filter products in a collection with the Storefront API]
 * (https://shopify.dev/custom-storefronts/products-collections/filter-products).
 * 
 */
export type FilterType = 'LIST' | 'PRICE_RANGE' | 'BOOLEAN'


/** A selectable value within a filter. */
export interface FilterValue {
    /** The number of results that match this filter value. */
    count: Scalars['Int']
    /** A unique identifier. */
    id: Scalars['String']
    /**
     * An input object that can be used to filter by this value on the parent field.
     * 
     * The value is provided as a helper for building dynamic filtering UI. For example, if you have a list of selected `FilterValue` objects, you can combine their respective `input` values to use in a subsequent query.
     * 
     */
    input: Scalars['JSON']
    /** A human-friendly string for this filter value. */
    label: Scalars['String']
    __typename: 'FilterValue'
}


/** Represents a single fulfillment in an order. */
export interface Fulfillment {
    /** List of the fulfillment's line items. */
    fulfillmentLineItems: FulfillmentLineItemConnection
    /** The name of the tracking company. */
    trackingCompany: (Scalars['String'] | null)
    /**
     * Tracking information associated with the fulfillment,
     * such as the tracking number and tracking URL.
     * 
     */
    trackingInfo: FulfillmentTrackingInfo[]
    __typename: 'Fulfillment'
}


/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
export interface FulfillmentLineItem {
    /** The associated order's line item. */
    lineItem: OrderLineItem
    /** The amount fulfilled in this fulfillment. */
    quantity: Scalars['Int']
    __typename: 'FulfillmentLineItem'
}


/**
 * An auto-generated type for paginating through multiple FulfillmentLineItems.
 * 
 */
export interface FulfillmentLineItemConnection {
    /** A list of edges. */
    edges: FulfillmentLineItemEdge[]
    /** A list of the nodes contained in FulfillmentLineItemEdge. */
    nodes: FulfillmentLineItem[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'FulfillmentLineItemConnection'
}


/**
 * An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.
 * 
 */
export interface FulfillmentLineItemEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of FulfillmentLineItemEdge. */
    node: FulfillmentLineItem
    __typename: 'FulfillmentLineItemEdge'
}


/** Tracking information associated with the fulfillment. */
export interface FulfillmentTrackingInfo {
    /** The tracking number of the fulfillment. */
    number: (Scalars['String'] | null)
    /** The URL to track the fulfillment. */
    url: (Scalars['URL'] | null)
    __typename: 'FulfillmentTrackingInfo'
}


/** The generic file resource lets you manage files in a merchant’s store. Generic files include any file that doesn’t fit into a designated type such as image or video. Example: PDF, JSON. */
export interface GenericFile {
    /** A word or phrase to indicate the contents of a file. */
    alt: (Scalars['String'] | null)
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The MIME type of the file. */
    mimeType: (Scalars['String'] | null)
    /** The size of the original file in bytes. */
    originalFileSize: (Scalars['Int'] | null)
    /** The preview image for the file. */
    previewImage: (Image | null)
    /** The URL of the file. */
    url: (Scalars['URL'] | null)
    __typename: 'GenericFile'
}


/** Represents information about the metafields associated to the specified resource. */
export type HasMetafields = (Article | Blog | Collection | Customer | Order | Page | Product | ProductVariant | Shop) & { __isUnion?: true }


/** Represents an image resource. */
export interface Image {
    /** A word or phrase to share the nature or contents of an image. */
    altText: (Scalars['String'] | null)
    /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
    height: (Scalars['Int'] | null)
    /** A unique ID for the image. */
    id: (Scalars['ID'] | null)
    /**
     * @deprecated Use `url` instead.
     * The location of the original image as a URL.
     * 
     * If there are any existing transformations in the original source URL, they will remain and not be stripped.
     * 
     */
    originalSrc: Scalars['URL']
    /**
     * @deprecated Use `url` instead.
     * The location of the image as a URL.
     */
    src: Scalars['URL']
    /**
     * @deprecated Use `url(transform:)` instead
     * The location of the transformed image as a URL.
     * 
     * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
     * Otherwise any transformations which an image type does not support will be ignored.
     * 
     */
    transformedSrc: Scalars['URL']
    /**
     * The location of the image as a URL.
     * 
     * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
     * 
     * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
     * 
     * If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).
     * 
     */
    url: Scalars['URL']
    /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
    width: (Scalars['Int'] | null)
    __typename: 'Image'
}


/**
 * An auto-generated type for paginating through multiple Images.
 * 
 */
export interface ImageConnection {
    /** A list of edges. */
    edges: ImageEdge[]
    /** A list of the nodes contained in ImageEdge. */
    nodes: Image[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'ImageConnection'
}


/** List of supported image content types. */
export type ImageContentType = 'PNG' | 'JPG' | 'WEBP'


/**
 * An auto-generated type which holds one Image and a cursor during pagination.
 * 
 */
export interface ImageEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of ImageEdge. */
    node: Image
    __typename: 'ImageEdge'
}


/** A language. */
export interface Language {
    /** The name of the language in the language itself. If the language uses capitalization, it is capitalized for a mid-sentence position. */
    endonymName: Scalars['String']
    /** The ISO code. */
    isoCode: LanguageCode
    /** The name of the language in the current language. */
    name: Scalars['String']
    __typename: 'Language'
}


/** ISO 639-1 language codes supported by Shopify. */
export type LanguageCode = 'AF' | 'AK' | 'AM' | 'AR' | 'AS' | 'AZ' | 'BE' | 'BG' | 'BM' | 'BN' | 'BO' | 'BR' | 'BS' | 'CA' | 'CE' | 'CS' | 'CY' | 'DA' | 'DE' | 'DZ' | 'EE' | 'EL' | 'EN' | 'EO' | 'ES' | 'ET' | 'EU' | 'FA' | 'FF' | 'FI' | 'FO' | 'FR' | 'FY' | 'GA' | 'GD' | 'GL' | 'GU' | 'GV' | 'HA' | 'HE' | 'HI' | 'HR' | 'HU' | 'HY' | 'IA' | 'ID' | 'IG' | 'II' | 'IS' | 'IT' | 'JA' | 'JV' | 'KA' | 'KI' | 'KK' | 'KL' | 'KM' | 'KN' | 'KO' | 'KS' | 'KU' | 'KW' | 'KY' | 'LB' | 'LG' | 'LN' | 'LO' | 'LT' | 'LU' | 'LV' | 'MG' | 'MI' | 'MK' | 'ML' | 'MN' | 'MR' | 'MS' | 'MT' | 'MY' | 'NB' | 'ND' | 'NE' | 'NL' | 'NN' | 'NO' | 'OM' | 'OR' | 'OS' | 'PA' | 'PL' | 'PS' | 'PT_BR' | 'PT_PT' | 'QU' | 'RM' | 'RN' | 'RO' | 'RU' | 'RW' | 'SD' | 'SE' | 'SG' | 'SI' | 'SK' | 'SL' | 'SN' | 'SO' | 'SQ' | 'SR' | 'SU' | 'SV' | 'SW' | 'TA' | 'TE' | 'TG' | 'TH' | 'TI' | 'TK' | 'TO' | 'TR' | 'TT' | 'UG' | 'UK' | 'UR' | 'UZ' | 'VI' | 'WO' | 'XH' | 'YI' | 'YO' | 'ZH_CN' | 'ZH_TW' | 'ZU' | 'ZH' | 'PT' | 'CU' | 'VO'


/** Information about the localized experiences configured for the shop. */
export interface Localization {
    /** The list of countries with enabled localized experiences. */
    availableCountries: Country[]
    /** The list of languages available for the active country. */
    availableLanguages: Language[]
    /** The country of the active localized experience. Use the `@inContext` directive to change this value. */
    country: Country
    /** The language of the active localized experience. Use the `@inContext` directive to change this value. */
    language: Language
    __typename: 'Localization'
}


/** Represents a location where product inventory is held. */
export interface Location {
    /** The address of the location. */
    address: LocationAddress
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The name of the location. */
    name: Scalars['String']
    __typename: 'Location'
}


/**
 * Represents the address of a location.
 * 
 */
export interface LocationAddress {
    /** The first line of the address for the location. */
    address1: (Scalars['String'] | null)
    /** The second line of the address for the location. */
    address2: (Scalars['String'] | null)
    /** The city of the location. */
    city: (Scalars['String'] | null)
    /** The country of the location. */
    country: (Scalars['String'] | null)
    /** The country code of the location. */
    countryCode: (Scalars['String'] | null)
    /** A formatted version of the address for the location. */
    formatted: Scalars['String'][]
    /** The latitude coordinates of the location. */
    latitude: (Scalars['Float'] | null)
    /** The longitude coordinates of the location. */
    longitude: (Scalars['Float'] | null)
    /** The phone number of the location. */
    phone: (Scalars['String'] | null)
    /** The province of the location. */
    province: (Scalars['String'] | null)
    /**
     * The code for the province, state, or district of the address of the location.
     * 
     */
    provinceCode: (Scalars['String'] | null)
    /** The ZIP code of the location. */
    zip: (Scalars['String'] | null)
    __typename: 'LocationAddress'
}


/**
 * An auto-generated type for paginating through multiple Locations.
 * 
 */
export interface LocationConnection {
    /** A list of edges. */
    edges: LocationEdge[]
    /** A list of the nodes contained in LocationEdge. */
    nodes: Location[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'LocationConnection'
}


/**
 * An auto-generated type which holds one Location and a cursor during pagination.
 * 
 */
export interface LocationEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of LocationEdge. */
    node: Location
    __typename: 'LocationEdge'
}


/** The set of valid sort keys for the Location query. */
export type LocationSortKeys = 'ID' | 'NAME' | 'CITY' | 'DISTANCE'


/** Represents a mailing address for customers and shipping. */
export interface MailingAddress {
    /** The first line of the address. Typically the street address or PO Box number. */
    address1: (Scalars['String'] | null)
    /**
     * The second line of the address. Typically the number of the apartment, suite, or unit.
     * 
     */
    address2: (Scalars['String'] | null)
    /**
     * The name of the city, district, village, or town.
     * 
     */
    city: (Scalars['String'] | null)
    /**
     * The name of the customer's company or organization.
     * 
     */
    company: (Scalars['String'] | null)
    /**
     * The name of the country.
     * 
     */
    country: (Scalars['String'] | null)
    /**
     * @deprecated Use `countryCodeV2` instead.
     * The two-letter code for the country of the address.
     * 
     * For example, US.
     * 
     */
    countryCode: (Scalars['String'] | null)
    /**
     * The two-letter code for the country of the address.
     * 
     * For example, US.
     * 
     */
    countryCodeV2: (CountryCode | null)
    /** The first name of the customer. */
    firstName: (Scalars['String'] | null)
    /** A formatted version of the address, customized by the provided arguments. */
    formatted: Scalars['String'][]
    /** A comma-separated list of the values for city, province, and country. */
    formattedArea: (Scalars['String'] | null)
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The last name of the customer. */
    lastName: (Scalars['String'] | null)
    /** The latitude coordinate of the customer address. */
    latitude: (Scalars['Float'] | null)
    /** The longitude coordinate of the customer address. */
    longitude: (Scalars['Float'] | null)
    /**
     * The full name of the customer, based on firstName and lastName.
     * 
     */
    name: (Scalars['String'] | null)
    /**
     * A unique phone number for the customer.
     * 
     * Formatted using E.164 standard. For example, _+16135551111_.
     * 
     */
    phone: (Scalars['String'] | null)
    /** The region of the address, such as the province, state, or district. */
    province: (Scalars['String'] | null)
    /**
     * The two-letter code for the region.
     * 
     * For example, ON.
     * 
     */
    provinceCode: (Scalars['String'] | null)
    /** The zip or postal code of the address. */
    zip: (Scalars['String'] | null)
    __typename: 'MailingAddress'
}


/**
 * An auto-generated type for paginating through multiple MailingAddresses.
 * 
 */
export interface MailingAddressConnection {
    /** A list of edges. */
    edges: MailingAddressEdge[]
    /** A list of the nodes contained in MailingAddressEdge. */
    nodes: MailingAddress[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'MailingAddressConnection'
}


/**
 * An auto-generated type which holds one MailingAddress and a cursor during pagination.
 * 
 */
export interface MailingAddressEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of MailingAddressEdge. */
    node: MailingAddress
    __typename: 'MailingAddressEdge'
}


/**
 * Manual discount applications capture the intentions of a discount that was manually created.
 * 
 */
export interface ManualDiscountApplication {
    /** The method by which the discount's value is allocated to its entitled items. */
    allocationMethod: DiscountApplicationAllocationMethod
    /** The description of the application. */
    description: (Scalars['String'] | null)
    /** Which lines of targetType that the discount is allocated over. */
    targetSelection: DiscountApplicationTargetSelection
    /** The type of line that the discount is applicable towards. */
    targetType: DiscountApplicationTargetType
    /** The title of the application. */
    title: Scalars['String']
    /** The value of the discount application. */
    value: PricingValue
    __typename: 'ManualDiscountApplication'
}


/** Represents a media interface. */
export type Media = (ExternalVideo | MediaImage | Model3d | Video) & { __isUnion?: true }


/**
 * An auto-generated type for paginating through multiple Media.
 * 
 */
export interface MediaConnection {
    /** A list of edges. */
    edges: MediaEdge[]
    /** A list of the nodes contained in MediaEdge. */
    nodes: Media[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'MediaConnection'
}


/** The possible content types for a media object. */
export type MediaContentType = 'EXTERNAL_VIDEO' | 'IMAGE' | 'MODEL_3D' | 'VIDEO'


/**
 * An auto-generated type which holds one Media and a cursor during pagination.
 * 
 */
export interface MediaEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of MediaEdge. */
    node: Media
    __typename: 'MediaEdge'
}


/** Host for a Media Resource. */
export type MediaHost = 'YOUTUBE' | 'VIMEO'


/** Represents a Shopify hosted image. */
export interface MediaImage {
    /** A word or phrase to share the nature or contents of a media. */
    alt: (Scalars['String'] | null)
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The image for the media. */
    image: (Image | null)
    /** The media content type. */
    mediaContentType: MediaContentType
    /** The preview image for the media. */
    previewImage: (Image | null)
    __typename: 'MediaImage'
}


/**
 * A [navigation menu](https://help.shopify.com/manual/online-store/menus-and-links) representing a hierarchy
 * of hyperlinks (items).
 * 
 */
export interface Menu {
    /** The menu's handle. */
    handle: Scalars['String']
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The menu's child items. */
    items: MenuItem[]
    /** The count of items on the menu. */
    itemsCount: Scalars['Int']
    /** The menu's title. */
    title: Scalars['String']
    __typename: 'Menu'
}


/**
 * A menu item within a parent menu.
 * 
 */
export interface MenuItem {
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The menu item's child items. */
    items: MenuItem[]
    /** The ID of the linked resource. */
    resourceId: (Scalars['ID'] | null)
    /** The menu item's tags to filter a collection. */
    tags: Scalars['String'][]
    /** The menu item's title. */
    title: Scalars['String']
    /** The menu item's type. */
    type: MenuItemType
    /** The menu item's URL. */
    url: (Scalars['URL'] | null)
    __typename: 'MenuItem'
}


/** A menu item type. */
export type MenuItemType = 'FRONTPAGE' | 'COLLECTION' | 'COLLECTIONS' | 'PRODUCT' | 'CATALOG' | 'PAGE' | 'BLOG' | 'ARTICLE' | 'SEARCH' | 'SHOP_POLICY' | 'HTTP'


/** The merchandise to be purchased at checkout. */
export type Merchandise = (ProductVariant) & { __isUnion?: true }


/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 * 
 */
export interface Metafield {
    /** The date and time when the storefront metafield was created. */
    createdAt: Scalars['DateTime']
    /** The description of a metafield. */
    description: (Scalars['String'] | null)
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The unique identifier for the metafield within its namespace. */
    key: Scalars['String']
    /** The container for a group of metafields that the metafield is associated with. */
    namespace: Scalars['String']
    /** The type of resource that the metafield is attached to. */
    parentResource: MetafieldParentResource
    /** Returns a reference object if the metafield's type is a resource reference. */
    reference: (MetafieldReference | null)
    /** A list of reference objects if the metafield's type is a resource reference list. */
    references: (MetafieldReferenceConnection | null)
    /**
     * The type name of the metafield.
     * Refer to the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
     * 
     */
    type: Scalars['String']
    /** The date and time when the metafield was last updated. */
    updatedAt: Scalars['DateTime']
    /** The data stored in the metafield. Always stored as a string, regardless of the metafield's type. */
    value: Scalars['String']
    __typename: 'Metafield'
}


/** A resource that the metafield belongs to. */
export type MetafieldParentResource = (Article | Blog | Collection | Customer | Order | Page | Product | ProductVariant | Shop) & { __isUnion?: true }


/**
 * Returns the resource which is being referred to by a metafield.
 * 
 */
export type MetafieldReference = (Collection | GenericFile | MediaImage | Metaobject | Page | Product | ProductVariant | Video) & { __isUnion?: true }


/**
 * An auto-generated type for paginating through multiple MetafieldReferences.
 * 
 */
export interface MetafieldReferenceConnection {
    /** A list of edges. */
    edges: MetafieldReferenceEdge[]
    /** A list of the nodes contained in MetafieldReferenceEdge. */
    nodes: MetafieldReference[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'MetafieldReferenceConnection'
}


/**
 * An auto-generated type which holds one MetafieldReference and a cursor during pagination.
 * 
 */
export interface MetafieldReferenceEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of MetafieldReferenceEdge. */
    node: MetafieldReference
    __typename: 'MetafieldReferenceEdge'
}


/** An instance of a user-defined model based on a MetaobjectDefinition. */
export interface Metaobject {
    /** Accesses a field of the object by key. */
    field: (MetaobjectField | null)
    /**
     * All object fields with defined values.
     * Omitted object keys can be assumed null, and no guarantees are made about field order.
     * 
     */
    fields: MetaobjectField[]
    /** The unique handle of the metaobject. Useful as a custom ID. */
    handle: Scalars['String']
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The type of the metaobject. Defines the namespace of its associated metafields. */
    type: Scalars['String']
    /** The date and time when the metaobject was last updated. */
    updatedAt: Scalars['DateTime']
    __typename: 'Metaobject'
}


/**
 * An auto-generated type for paginating through multiple Metaobjects.
 * 
 */
export interface MetaobjectConnection {
    /** A list of edges. */
    edges: MetaobjectEdge[]
    /** A list of the nodes contained in MetaobjectEdge. */
    nodes: Metaobject[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'MetaobjectConnection'
}


/**
 * An auto-generated type which holds one Metaobject and a cursor during pagination.
 * 
 */
export interface MetaobjectEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of MetaobjectEdge. */
    node: Metaobject
    __typename: 'MetaobjectEdge'
}


/** Provides the value of a Metaobject field. */
export interface MetaobjectField {
    /** The field key. */
    key: Scalars['String']
    /** A referenced object if the field type is a resource reference. */
    reference: (MetafieldReference | null)
    /** A list of referenced objects if the field type is a resource reference list. */
    references: (MetafieldReferenceConnection | null)
    /**
     * The type name of the field.
     * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
     * 
     */
    type: Scalars['String']
    /** The field value. */
    value: (Scalars['String'] | null)
    __typename: 'MetaobjectField'
}


/** Represents a Shopify hosted 3D model. */
export interface Model3d {
    /** A word or phrase to share the nature or contents of a media. */
    alt: (Scalars['String'] | null)
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The media content type. */
    mediaContentType: MediaContentType
    /** The preview image for the media. */
    previewImage: (Image | null)
    /** The sources for a 3d model. */
    sources: Model3dSource[]
    __typename: 'Model3d'
}


/** Represents a source for a Shopify hosted 3d model. */
export interface Model3dSource {
    /** The filesize of the 3d model. */
    filesize: Scalars['Int']
    /** The format of the 3d model. */
    format: Scalars['String']
    /** The MIME type of the 3d model. */
    mimeType: Scalars['String']
    /** The URL of the 3d model. */
    url: Scalars['String']
    __typename: 'Model3dSource'
}


/**
 * A monetary value with currency.
 * 
 */
export interface MoneyV2 {
    /** Decimal money amount. */
    amount: Scalars['Decimal']
    /** Currency of the money. */
    currencyCode: CurrencyCode
    __typename: 'MoneyV2'
}


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface Mutation {
    /** Updates the attributes on a cart. */
    cartAttributesUpdate: (CartAttributesUpdatePayload | null)
    /**
     * Updates customer information associated with a cart.
     * Buyer identity is used to determine
     * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
     * and should match the customer's shipping address.
     * 
     */
    cartBuyerIdentityUpdate: (CartBuyerIdentityUpdatePayload | null)
    /** Creates a new cart. */
    cartCreate: (CartCreatePayload | null)
    /** Updates the discount codes applied to the cart. */
    cartDiscountCodesUpdate: (CartDiscountCodesUpdatePayload | null)
    /** Adds a merchandise line to the cart. */
    cartLinesAdd: (CartLinesAddPayload | null)
    /** Removes one or more merchandise lines from the cart. */
    cartLinesRemove: (CartLinesRemovePayload | null)
    /** Updates one or more merchandise lines on a cart. */
    cartLinesUpdate: (CartLinesUpdatePayload | null)
    /** Updates the note on the cart. */
    cartNoteUpdate: (CartNoteUpdatePayload | null)
    /** Update the selected delivery options for a delivery group. */
    cartSelectedDeliveryOptionsUpdate: (CartSelectedDeliveryOptionsUpdatePayload | null)
    /** Updates the attributes of a checkout if `allowPartialAddresses` is `true`. */
    checkoutAttributesUpdateV2: (CheckoutAttributesUpdateV2Payload | null)
    /** Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card. */
    checkoutCompleteFree: (CheckoutCompleteFreePayload | null)
    /** Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to  [_request payment processing_](https://shopify.dev/apps/channels/getting-started#request-payment-processing). */
    checkoutCompleteWithCreditCardV2: (CheckoutCompleteWithCreditCardV2Payload | null)
    /** Completes a checkout with a tokenized payment. */
    checkoutCompleteWithTokenizedPaymentV3: (CheckoutCompleteWithTokenizedPaymentV3Payload | null)
    /** Creates a new checkout. */
    checkoutCreate: (CheckoutCreatePayload | null)
    /** Associates a customer to the checkout. */
    checkoutCustomerAssociateV2: (CheckoutCustomerAssociateV2Payload | null)
    /** Disassociates the current checkout customer from the checkout. */
    checkoutCustomerDisassociateV2: (CheckoutCustomerDisassociateV2Payload | null)
    /** Applies a discount to an existing checkout using a discount code. */
    checkoutDiscountCodeApplyV2: (CheckoutDiscountCodeApplyV2Payload | null)
    /** Removes the applied discounts from an existing checkout. */
    checkoutDiscountCodeRemove: (CheckoutDiscountCodeRemovePayload | null)
    /** Updates the email on an existing checkout. */
    checkoutEmailUpdateV2: (CheckoutEmailUpdateV2Payload | null)
    /** Removes an applied gift card from the checkout. */
    checkoutGiftCardRemoveV2: (CheckoutGiftCardRemoveV2Payload | null)
    /** Appends gift cards to an existing checkout. */
    checkoutGiftCardsAppend: (CheckoutGiftCardsAppendPayload | null)
    /** Adds a list of line items to a checkout. */
    checkoutLineItemsAdd: (CheckoutLineItemsAddPayload | null)
    /** Removes line items from an existing checkout. */
    checkoutLineItemsRemove: (CheckoutLineItemsRemovePayload | null)
    /** Sets a list of line items to a checkout. */
    checkoutLineItemsReplace: (CheckoutLineItemsReplacePayload | null)
    /** Updates line items on a checkout. */
    checkoutLineItemsUpdate: (CheckoutLineItemsUpdatePayload | null)
    /** Updates the shipping address of an existing checkout. */
    checkoutShippingAddressUpdateV2: (CheckoutShippingAddressUpdateV2Payload | null)
    /** Updates the shipping lines on an existing checkout. */
    checkoutShippingLineUpdate: (CheckoutShippingLineUpdatePayload | null)
    /**
     * Creates a customer access token.
     * The customer access token is required to modify the customer object in any way.
     * 
     */
    customerAccessTokenCreate: (CustomerAccessTokenCreatePayload | null)
    /**
     * Creates a customer access token using a
     * [multipass token](https://shopify.dev/api/multipass) instead of email and
     * password. A customer record is created if the customer doesn't exist. If a customer
     * record already exists but the record is disabled, then the customer record is enabled.
     * 
     */
    customerAccessTokenCreateWithMultipass: (CustomerAccessTokenCreateWithMultipassPayload | null)
    /** Permanently destroys a customer access token. */
    customerAccessTokenDelete: (CustomerAccessTokenDeletePayload | null)
    /**
     * Renews a customer access token.
     * 
     * Access token renewal must happen *before* a token expires.
     * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
     * 
     */
    customerAccessTokenRenew: (CustomerAccessTokenRenewPayload | null)
    /** Activates a customer. */
    customerActivate: (CustomerActivatePayload | null)
    /** Activates a customer with the activation url received from `customerCreate`. */
    customerActivateByUrl: (CustomerActivateByUrlPayload | null)
    /** Creates a new address for a customer. */
    customerAddressCreate: (CustomerAddressCreatePayload | null)
    /** Permanently deletes the address of an existing customer. */
    customerAddressDelete: (CustomerAddressDeletePayload | null)
    /** Updates the address of an existing customer. */
    customerAddressUpdate: (CustomerAddressUpdatePayload | null)
    /** Creates a new customer. */
    customerCreate: (CustomerCreatePayload | null)
    /** Updates the default address of an existing customer. */
    customerDefaultAddressUpdate: (CustomerDefaultAddressUpdatePayload | null)
    /**
     * Sends a reset password email to the customer. The reset password
     * email contains a reset password URL and token that you can pass to
     * the [`customerResetByUrl`](https://shopify.dev/api/storefront/latest/mutations/customerResetByUrl) or
     * [`customerReset`](https://shopify.dev/api/storefront/latest/mutations/customerReset) mutation to reset the
     * customer password.
     * 
     * This mutation is throttled by IP. With authenticated access,
     * you can provide a [`Shopify-Storefront-Buyer-IP`](https://shopify.dev/api/usage/authentication#optional-ip-header) instead of the request IP.
     * 
     * Make sure that the value provided to `Shopify-Storefront-Buyer-IP` is trusted. Unthrottled access to this
     * mutation presents a security risk.
     * 
     */
    customerRecover: (CustomerRecoverPayload | null)
    /**
     * "Resets a customer’s password with the token received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation."
     * 
     */
    customerReset: (CustomerResetPayload | null)
    /**
     * "Resets a customer’s password with the reset password URL received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation."
     * 
     */
    customerResetByUrl: (CustomerResetByUrlPayload | null)
    /** Updates an existing customer. */
    customerUpdate: (CustomerUpdatePayload | null)
    __typename: 'Mutation'
}


/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 * 
 */
export type Node = (AppliedGiftCard | Article | Blog | Cart | CartLine | Checkout | CheckoutLineItem | Collection | Comment | ExternalVideo | GenericFile | Location | MailingAddress | MediaImage | Menu | MenuItem | Metafield | Metaobject | Model3d | Order | Page | Payment | Product | ProductOption | ProductVariant | Shop | ShopPolicy | UrlRedirect | Video) & { __isUnion?: true }


/** Represents a resource that can be published to the Online Store sales channel. */
export type OnlineStorePublishable = (Article | Blog | Collection | Page | Product) & { __isUnion?: true }


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface Order {
    /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
    cancelReason: (OrderCancelReason | null)
    /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
    canceledAt: (Scalars['DateTime'] | null)
    /** The code of the currency used for the payment. */
    currencyCode: CurrencyCode
    /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order. */
    currentSubtotalPrice: MoneyV2
    /** The total cost of duties for the order, including refunds. */
    currentTotalDuties: (MoneyV2 | null)
    /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
    currentTotalPrice: MoneyV2
    /** The total of all taxes applied to the order, excluding taxes for returned line items. */
    currentTotalTax: MoneyV2
    /** A list of the custom attributes added to the order. */
    customAttributes: Attribute[]
    /** The locale code in which this specific order happened. */
    customerLocale: (Scalars['String'] | null)
    /** The unique URL that the customer can use to access the order. */
    customerUrl: (Scalars['URL'] | null)
    /** Discounts that have been applied on the order. */
    discountApplications: DiscountApplicationConnection
    /** Whether the order has had any edits applied or not. */
    edited: Scalars['Boolean']
    /** The customer's email address. */
    email: (Scalars['String'] | null)
    /** The financial status of the order. */
    financialStatus: (OrderFinancialStatus | null)
    /** The fulfillment status for the order. */
    fulfillmentStatus: OrderFulfillmentStatus
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** List of the order’s line items. */
    lineItems: OrderLineItemConnection
    /** Returns a metafield found by namespace and key. */
    metafield: (Metafield | null)
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields: (Metafield | null)[]
    /**
     * Unique identifier for the order that appears on the order.
     * For example, _#1000_ or _Store1001.
     * 
     */
    name: Scalars['String']
    /** A unique numeric identifier for the order for use by shop owner and customer. */
    orderNumber: Scalars['Int']
    /** The total cost of duties charged at checkout. */
    originalTotalDuties: (MoneyV2 | null)
    /** The total price of the order before any applied edits. */
    originalTotalPrice: MoneyV2
    /** The customer's phone number for receiving SMS notifications. */
    phone: (Scalars['String'] | null)
    /**
     * The date and time when the order was imported.
     * This value can be set to dates in the past when importing from other systems.
     * If no value is provided, it will be auto-generated based on current date and time.
     * 
     */
    processedAt: Scalars['DateTime']
    /** The address to where the order will be shipped. */
    shippingAddress: (MailingAddress | null)
    /**
     * The discounts that have been allocated onto the shipping line by discount applications.
     * 
     */
    shippingDiscountAllocations: DiscountAllocation[]
    /** The unique URL for the order's status page. */
    statusUrl: Scalars['URL']
    /** Price of the order before shipping and taxes. */
    subtotalPrice: (MoneyV2 | null)
    /**
     * @deprecated Use `subtotalPrice` instead.
     * Price of the order before duties, shipping and taxes.
     */
    subtotalPriceV2: (MoneyV2 | null)
    /** List of the order’s successful fulfillments. */
    successfulFulfillments: (Fulfillment[] | null)
    /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
    totalPrice: MoneyV2
    /**
     * @deprecated Use `totalPrice` instead.
     * The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).
     */
    totalPriceV2: MoneyV2
    /** The total amount that has been refunded. */
    totalRefunded: MoneyV2
    /**
     * @deprecated Use `totalRefunded` instead.
     * The total amount that has been refunded.
     */
    totalRefundedV2: MoneyV2
    /** The total cost of shipping. */
    totalShippingPrice: MoneyV2
    /**
     * @deprecated Use `totalShippingPrice` instead.
     * The total cost of shipping.
     */
    totalShippingPriceV2: MoneyV2
    /** The total cost of taxes. */
    totalTax: (MoneyV2 | null)
    /**
     * @deprecated Use `totalTax` instead.
     * The total cost of taxes.
     */
    totalTaxV2: (MoneyV2 | null)
    __typename: 'Order'
}


/** Represents the reason for the order's cancellation. */
export type OrderCancelReason = 'CUSTOMER' | 'DECLINED' | 'FRAUD' | 'INVENTORY' | 'OTHER'


/**
 * An auto-generated type for paginating through multiple Orders.
 * 
 */
export interface OrderConnection {
    /** A list of edges. */
    edges: OrderEdge[]
    /** A list of the nodes contained in OrderEdge. */
    nodes: Order[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** The total count of Orders. */
    totalCount: Scalars['UnsignedInt64']
    __typename: 'OrderConnection'
}


/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 * 
 */
export interface OrderEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of OrderEdge. */
    node: Order
    __typename: 'OrderEdge'
}


/** Represents the order's current financial status. */
export type OrderFinancialStatus = 'PENDING' | 'AUTHORIZED' | 'PARTIALLY_PAID' | 'PARTIALLY_REFUNDED' | 'VOIDED' | 'PAID' | 'REFUNDED'


/** Represents the order's aggregated fulfillment status for display purposes. */
export type OrderFulfillmentStatus = 'UNFULFILLED' | 'PARTIALLY_FULFILLED' | 'FULFILLED' | 'RESTOCKED' | 'PENDING_FULFILLMENT' | 'OPEN' | 'IN_PROGRESS' | 'ON_HOLD' | 'SCHEDULED'


/** Represents a single line in an order. There is one line item for each distinct product variant. */
export interface OrderLineItem {
    /** The number of entries associated to the line item minus the items that have been removed. */
    currentQuantity: Scalars['Int']
    /** List of custom attributes associated to the line item. */
    customAttributes: Attribute[]
    /** The discounts that have been allocated onto the order line item by discount applications. */
    discountAllocations: DiscountAllocation[]
    /** The total price of the line item, including discounts, and displayed in the presentment currency. */
    discountedTotalPrice: MoneyV2
    /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency. */
    originalTotalPrice: MoneyV2
    /** The number of products variants associated to the line item. */
    quantity: Scalars['Int']
    /** The title of the product combined with title of the variant. */
    title: Scalars['String']
    /** The product variant object associated to the line item. */
    variant: (ProductVariant | null)
    __typename: 'OrderLineItem'
}


/**
 * An auto-generated type for paginating through multiple OrderLineItems.
 * 
 */
export interface OrderLineItemConnection {
    /** A list of edges. */
    edges: OrderLineItemEdge[]
    /** A list of the nodes contained in OrderLineItemEdge. */
    nodes: OrderLineItem[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'OrderLineItemConnection'
}


/**
 * An auto-generated type which holds one OrderLineItem and a cursor during pagination.
 * 
 */
export interface OrderLineItemEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of OrderLineItemEdge. */
    node: OrderLineItem
    __typename: 'OrderLineItemEdge'
}


/** The set of valid sort keys for the Order query. */
export type OrderSortKeys = 'PROCESSED_AT' | 'TOTAL_PRICE' | 'ID' | 'RELEVANCE'


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export interface Page {
    /** The description of the page, complete with HTML formatting. */
    body: Scalars['HTML']
    /** Summary of the page body. */
    bodySummary: Scalars['String']
    /** The timestamp of the page creation. */
    createdAt: Scalars['DateTime']
    /** A human-friendly unique string for the page automatically generated from its title. */
    handle: Scalars['String']
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** Returns a metafield found by namespace and key. */
    metafield: (Metafield | null)
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields: (Metafield | null)[]
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl: (Scalars['URL'] | null)
    /** The page's SEO information. */
    seo: (SEO | null)
    /** The title of the page. */
    title: Scalars['String']
    /** The timestamp of the latest page update. */
    updatedAt: Scalars['DateTime']
    __typename: 'Page'
}


/**
 * An auto-generated type for paginating through multiple Pages.
 * 
 */
export interface PageConnection {
    /** A list of edges. */
    edges: PageEdge[]
    /** A list of the nodes contained in PageEdge. */
    nodes: Page[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'PageConnection'
}


/**
 * An auto-generated type which holds one Page and a cursor during pagination.
 * 
 */
export interface PageEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of PageEdge. */
    node: Page
    __typename: 'PageEdge'
}


/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 * For more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).
 * 
 */
export interface PageInfo {
    /** The cursor corresponding to the last node in edges. */
    endCursor: (Scalars['String'] | null)
    /** Whether there are more pages to fetch following the current page. */
    hasNextPage: Scalars['Boolean']
    /** Whether there are any pages prior to the current page. */
    hasPreviousPage: Scalars['Boolean']
    /** The cursor corresponding to the first node in edges. */
    startCursor: (Scalars['String'] | null)
    __typename: 'PageInfo'
}


/** The set of valid sort keys for the Page query. */
export type PageSortKeys = 'TITLE' | 'UPDATED_AT' | 'ID' | 'RELEVANCE'


/** A payment applied to a checkout. */
export interface Payment {
    /** The amount of the payment. */
    amount: MoneyV2
    /**
     * @deprecated Use `amount` instead.
     * The amount of the payment.
     */
    amountV2: MoneyV2
    /** The billing address for the payment. */
    billingAddress: (MailingAddress | null)
    /** The checkout to which the payment belongs. */
    checkout: Checkout
    /** The credit card used for the payment in the case of direct payments. */
    creditCard: (CreditCard | null)
    /** A message describing a processing error during asynchronous processing. */
    errorMessage: (Scalars['String'] | null)
    /** A globally-unique ID. */
    id: Scalars['ID']
    /**
     * A client-side generated token to identify a payment and perform idempotent operations.
     * For more information, refer to
     * [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
     * 
     */
    idempotencyKey: (Scalars['String'] | null)
    /** The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow. */
    nextActionUrl: (Scalars['URL'] | null)
    /** Whether the payment is still processing asynchronously. */
    ready: Scalars['Boolean']
    /** A flag to indicate if the payment is to be done in test mode for gateways that support it. */
    test: Scalars['Boolean']
    /** The actual transaction recorded by Shopify after having processed the payment with the gateway. */
    transaction: (Transaction | null)
    __typename: 'Payment'
}


/** Settings related to payments. */
export interface PaymentSettings {
    /** List of the card brands which the shop accepts. */
    acceptedCardBrands: CardBrand[]
    /** The url pointing to the endpoint to vault credit cards. */
    cardVaultUrl: Scalars['URL']
    /** The country where the shop is located. */
    countryCode: CountryCode
    /** The three-letter code for the shop's primary currency. */
    currencyCode: CurrencyCode
    /** A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin. */
    enabledPresentmentCurrencies: CurrencyCode[]
    /** The shop’s Shopify Payments account ID. */
    shopifyPaymentsAccountId: (Scalars['String'] | null)
    /** List of the digital wallets which the shop supports. */
    supportedDigitalWallets: DigitalWallet[]
    __typename: 'PaymentSettings'
}


/** The valid values for the types of payment token. */
export type PaymentTokenType = 'APPLE_PAY' | 'VAULT' | 'SHOPIFY_PAY' | 'GOOGLE_PAY' | 'STRIPE_VAULT_TOKEN'


/** The value of the percentage pricing object. */
export interface PricingPercentageValue {
    /** The percentage value of the object. */
    percentage: Scalars['Float']
    __typename: 'PricingPercentageValue'
}


/** The price value (fixed or percentage) for a discount application. */
export type PricingValue = (MoneyV2 | PricingPercentageValue) & { __isUnion?: true }


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface Product {
    /** Indicates if at least one product variant is available for sale. */
    availableForSale: Scalars['Boolean']
    /** List of collections a product belongs to. */
    collections: CollectionConnection
    /** The compare at price of the product across all variants. */
    compareAtPriceRange: ProductPriceRange
    /** The date and time when the product was created. */
    createdAt: Scalars['DateTime']
    /** Stripped description of the product, single line with HTML tags removed. */
    description: Scalars['String']
    /** The description of the product, complete with HTML formatting. */
    descriptionHtml: Scalars['HTML']
    /**
     * The featured image for the product.
     * 
     * This field is functionally equivalent to `images(first: 1)`.
     * 
     */
    featuredImage: (Image | null)
    /**
     * A human-friendly unique string for the Product automatically generated from its title.
     * They are used by the Liquid templating language to refer to objects.
     * 
     */
    handle: Scalars['String']
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** List of images associated with the product. */
    images: ImageConnection
    /** Whether the product is a gift card. */
    isGiftCard: Scalars['Boolean']
    /** The media associated with the product. */
    media: MediaConnection
    /** Returns a metafield found by namespace and key. */
    metafield: (Metafield | null)
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields: (Metafield | null)[]
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl: (Scalars['URL'] | null)
    /** List of product options. */
    options: ProductOption[]
    /** The price range. */
    priceRange: ProductPriceRange
    /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
    productType: Scalars['String']
    /** The date and time when the product was published to the channel. */
    publishedAt: Scalars['DateTime']
    /** Whether the product can only be purchased with a selling plan. */
    requiresSellingPlan: Scalars['Boolean']
    /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
    sellingPlanGroups: SellingPlanGroupConnection
    /** The product's SEO information. */
    seo: SEO
    /**
     * A comma separated list of tags that have been added to the product.
     * Additional access scope required for private apps: unauthenticated_read_product_tags.
     * 
     */
    tags: Scalars['String'][]
    /** The product’s title. */
    title: Scalars['String']
    /** The total quantity of inventory in stock for this Product. */
    totalInventory: (Scalars['Int'] | null)
    /**
     * The date and time when the product was last modified.
     * A product's `updatedAt` value can change for different reasons. For example, if an order
     * is placed for a product that has inventory tracking set up, then the inventory adjustment
     * is counted as an update.
     * 
     */
    updatedAt: Scalars['DateTime']
    /**
     * Find a product’s variant based on its selected options.
     * This is useful for converting a user’s selection of product options into a single matching variant.
     * If there is not a variant for the selected options, `null` will be returned.
     * 
     */
    variantBySelectedOptions: (ProductVariant | null)
    /** List of the product’s variants. */
    variants: ProductVariantConnection
    /** The product’s vendor name. */
    vendor: Scalars['String']
    __typename: 'Product'
}


/** The set of valid sort keys for the ProductCollection query. */
export type ProductCollectionSortKeys = 'TITLE' | 'PRICE' | 'BEST_SELLING' | 'CREATED' | 'ID' | 'MANUAL' | 'COLLECTION_DEFAULT' | 'RELEVANCE'


/**
 * An auto-generated type for paginating through multiple Products.
 * 
 */
export interface ProductConnection {
    /** A list of edges. */
    edges: ProductEdge[]
    /** A list of available filters. */
    filters: Filter[]
    /** A list of the nodes contained in ProductEdge. */
    nodes: Product[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'ProductConnection'
}


/**
 * An auto-generated type which holds one Product and a cursor during pagination.
 * 
 */
export interface ProductEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of ProductEdge. */
    node: Product
    __typename: 'ProductEdge'
}


/** The set of valid sort keys for the ProductImage query. */
export type ProductImageSortKeys = 'CREATED_AT' | 'POSITION' | 'ID' | 'RELEVANCE'


/** The set of valid sort keys for the ProductMedia query. */
export type ProductMediaSortKeys = 'POSITION' | 'ID' | 'RELEVANCE'


/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 * 
 */
export interface ProductOption {
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The product option’s name. */
    name: Scalars['String']
    /** The corresponding value to the product option name. */
    values: Scalars['String'][]
    __typename: 'ProductOption'
}


/** The price range of the product. */
export interface ProductPriceRange {
    /** The highest variant's price. */
    maxVariantPrice: MoneyV2
    /** The lowest variant's price. */
    minVariantPrice: MoneyV2
    __typename: 'ProductPriceRange'
}


/** The set of valid sort keys for the Product query. */
export type ProductSortKeys = 'TITLE' | 'PRODUCT_TYPE' | 'VENDOR' | 'UPDATED_AT' | 'CREATED_AT' | 'BEST_SELLING' | 'PRICE' | 'ID' | 'RELEVANCE'


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export interface ProductVariant {
    /** Indicates if the product variant is available for sale. */
    availableForSale: Scalars['Boolean']
    /** The barcode (for example, ISBN, UPC, or GTIN) associated with the variant. */
    barcode: (Scalars['String'] | null)
    /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`. */
    compareAtPrice: (MoneyV2 | null)
    /**
     * @deprecated Use `compareAtPrice` instead.
     * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.
     */
    compareAtPriceV2: (MoneyV2 | null)
    /** Whether a product is out of stock but still available for purchase (used for backorders). */
    currentlyNotInStock: Scalars['Boolean']
    /** A globally-unique ID. */
    id: Scalars['ID']
    /**
     * Image associated with the product variant. This field falls back to the product image if no image is available.
     * 
     */
    image: (Image | null)
    /** Returns a metafield found by namespace and key. */
    metafield: (Metafield | null)
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields: (Metafield | null)[]
    /** The product variant’s price. */
    price: MoneyV2
    /**
     * @deprecated Use `price` instead.
     * The product variant’s price.
     */
    priceV2: MoneyV2
    /** The product object that the product variant belongs to. */
    product: Product
    /** The total sellable quantity of the variant for online sales channels. */
    quantityAvailable: (Scalars['Int'] | null)
    /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
    requiresShipping: Scalars['Boolean']
    /** List of product options applied to the variant. */
    selectedOptions: SelectedOption[]
    /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
    sellingPlanAllocations: SellingPlanAllocationConnection
    /** The SKU (stock keeping unit) associated with the variant. */
    sku: (Scalars['String'] | null)
    /** The in-store pickup availability of this variant by location. */
    storeAvailability: StoreAvailabilityConnection
    /** The product variant’s title. */
    title: Scalars['String']
    /** The unit price value for the variant based on the variant's measurement. */
    unitPrice: (MoneyV2 | null)
    /** The unit price measurement for the variant. */
    unitPriceMeasurement: (UnitPriceMeasurement | null)
    /** The weight of the product variant in the unit system specified with `weight_unit`. */
    weight: (Scalars['Float'] | null)
    /** Unit of measurement for weight. */
    weightUnit: WeightUnit
    __typename: 'ProductVariant'
}


/**
 * An auto-generated type for paginating through multiple ProductVariants.
 * 
 */
export interface ProductVariantConnection {
    /** A list of edges. */
    edges: ProductVariantEdge[]
    /** A list of the nodes contained in ProductVariantEdge. */
    nodes: ProductVariant[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'ProductVariantConnection'
}


/**
 * An auto-generated type which holds one ProductVariant and a cursor during pagination.
 * 
 */
export interface ProductVariantEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of ProductVariantEdge. */
    node: ProductVariant
    __typename: 'ProductVariantEdge'
}


/** The set of valid sort keys for the ProductVariant query. */
export type ProductVariantSortKeys = 'TITLE' | 'SKU' | 'POSITION' | 'ID' | 'RELEVANCE'


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRoot {
    /** List of the shop's articles. */
    articles: ArticleConnection
    /** Fetch a specific `Blog` by one of its unique attributes. */
    blog: (Blog | null)
    /**
     * @deprecated Use `blog` instead.
     * Find a blog by its handle.
     */
    blogByHandle: (Blog | null)
    /** List of the shop's blogs. */
    blogs: BlogConnection
    /**
     * Retrieve a cart by its ID. For more information, refer to
     * [Manage a cart with the Storefront API](https://shopify.dev/custom-storefronts/cart/manage).
     * 
     */
    cart: (Cart | null)
    /** Fetch a specific `Collection` by one of its unique attributes. */
    collection: (Collection | null)
    /**
     * @deprecated Use `collection` instead.
     * Find a collection by its handle.
     */
    collectionByHandle: (Collection | null)
    /** List of the shop’s collections. */
    collections: CollectionConnection
    /**
     * The customer associated with the given access token. Tokens are obtained by using the
     * [`customerAccessTokenCreate` mutation](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate).
     * 
     */
    customer: (Customer | null)
    /** Returns the localized experiences configured for the shop. */
    localization: Localization
    /**
     * List of the shop's locations that support in-store pickup.
     * 
     * When sorting by distance, you must specify a location via the `near` argument.
     * 
     */
    locations: LocationConnection
    /**
     * Retrieve a [navigation menu](https://help.shopify.com/manual/online-store/menus-and-links) by its handle.
     * 
     */
    menu: (Menu | null)
    /** Fetch a specific Metaobject by one of its unique identifiers. */
    metaobject: (Metaobject | null)
    /** All active metaobjects for the shop. */
    metaobjects: MetaobjectConnection
    /** Returns a specific node by ID. */
    node: (Node | null)
    /** Returns the list of nodes with the given IDs. */
    nodes: (Node | null)[]
    /** Fetch a specific `Page` by one of its unique attributes. */
    page: (Page | null)
    /**
     * @deprecated Use `page` instead.
     * Find a page by its handle.
     */
    pageByHandle: (Page | null)
    /** List of the shop's pages. */
    pages: PageConnection
    /** Fetch a specific `Product` by one of its unique attributes. */
    product: (Product | null)
    /**
     * @deprecated Use `product` instead.
     * Find a product by its handle.
     */
    productByHandle: (Product | null)
    /**
     * Find recommended products related to a given `product_id`.
     * To learn more about how recommendations are generated, see
     * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
     * 
     */
    productRecommendations: (Product[] | null)
    /**
     * Tags added to products.
     * Additional access scope required: unauthenticated_read_product_tags.
     * 
     */
    productTags: StringConnection
    /** List of product types for the shop's products that are published to your app. */
    productTypes: StringConnection
    /** List of the shop’s products. */
    products: ProductConnection
    /** The list of public Storefront API versions, including supported, release candidate and unstable versions. */
    publicApiVersions: ApiVersion[]
    /** The shop associated with the storefront access token. */
    shop: Shop
    /** A list of redirects for a shop. */
    urlRedirects: UrlRedirectConnection
    __typename: 'QueryRoot'
}


/** SEO information. */
export interface SEO {
    /** The meta description. */
    description: (Scalars['String'] | null)
    /** The SEO title. */
    title: (Scalars['String'] | null)
    __typename: 'SEO'
}


/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 * 
 */
export interface ScriptDiscountApplication {
    /** The method by which the discount's value is allocated to its entitled items. */
    allocationMethod: DiscountApplicationAllocationMethod
    /** Which lines of targetType that the discount is allocated over. */
    targetSelection: DiscountApplicationTargetSelection
    /** The type of line that the discount is applicable towards. */
    targetType: DiscountApplicationTargetType
    /** The title of the application as defined by the Script. */
    title: Scalars['String']
    /** The value of the discount application. */
    value: PricingValue
    __typename: 'ScriptDiscountApplication'
}


/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 * 
 */
export interface SelectedOption {
    /** The product option’s name. */
    name: Scalars['String']
    /** The product option’s value. */
    value: Scalars['String']
    __typename: 'SelectedOption'
}


/** Represents how products and variants can be sold and purchased. */
export interface SellingPlan {
    /** The initial payment due for the purchase. */
    checkoutCharge: SellingPlanCheckoutCharge
    /** The description of the selling plan. */
    description: (Scalars['String'] | null)
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
    name: Scalars['String']
    /** The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing. */
    options: SellingPlanOption[]
    /** The price adjustments that a selling plan makes when a variant is purchased with a selling plan. */
    priceAdjustments: SellingPlanPriceAdjustment[]
    /** Whether purchasing the selling plan will result in multiple deliveries. */
    recurringDeliveries: Scalars['Boolean']
    __typename: 'SellingPlan'
}


/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
export interface SellingPlanAllocation {
    /** The checkout charge amount due for the purchase. */
    checkoutChargeAmount: MoneyV2
    /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it. */
    priceAdjustments: SellingPlanAllocationPriceAdjustment[]
    /** The remaining balance charge amount due for the purchase. */
    remainingBalanceChargeAmount: MoneyV2
    /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
    sellingPlan: SellingPlan
    __typename: 'SellingPlanAllocation'
}


/**
 * An auto-generated type for paginating through multiple SellingPlanAllocations.
 * 
 */
export interface SellingPlanAllocationConnection {
    /** A list of edges. */
    edges: SellingPlanAllocationEdge[]
    /** A list of the nodes contained in SellingPlanAllocationEdge. */
    nodes: SellingPlanAllocation[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'SellingPlanAllocationConnection'
}


/**
 * An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination.
 * 
 */
export interface SellingPlanAllocationEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of SellingPlanAllocationEdge. */
    node: SellingPlanAllocation
    __typename: 'SellingPlanAllocationEdge'
}


/** The resulting prices for variants when they're purchased with a specific selling plan. */
export interface SellingPlanAllocationPriceAdjustment {
    /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
    compareAtPrice: MoneyV2
    /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
    perDeliveryPrice: MoneyV2
    /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
    price: MoneyV2
    /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
    unitPrice: (MoneyV2 | null)
    __typename: 'SellingPlanAllocationPriceAdjustment'
}


/** The initial payment due for the purchase. */
export interface SellingPlanCheckoutCharge {
    /** The charge type for the checkout charge. */
    type: SellingPlanCheckoutChargeType
    /** The charge value for the checkout charge. */
    value: SellingPlanCheckoutChargeValue
    __typename: 'SellingPlanCheckoutCharge'
}


/** The percentage value of the price used for checkout charge. */
export interface SellingPlanCheckoutChargePercentageValue {
    /** The percentage value of the price used for checkout charge. */
    percentage: Scalars['Float']
    __typename: 'SellingPlanCheckoutChargePercentageValue'
}


/** The checkout charge when the full amount isn't charged at checkout. */
export type SellingPlanCheckoutChargeType = 'PERCENTAGE' | 'PRICE'


/** The portion of the price to be charged at checkout. */
export type SellingPlanCheckoutChargeValue = (MoneyV2 | SellingPlanCheckoutChargePercentageValue) & { __isUnion?: true }


/**
 * An auto-generated type for paginating through multiple SellingPlans.
 * 
 */
export interface SellingPlanConnection {
    /** A list of edges. */
    edges: SellingPlanEdge[]
    /** A list of the nodes contained in SellingPlanEdge. */
    nodes: SellingPlan[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'SellingPlanConnection'
}


/**
 * An auto-generated type which holds one SellingPlan and a cursor during pagination.
 * 
 */
export interface SellingPlanEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of SellingPlanEdge. */
    node: SellingPlan
    __typename: 'SellingPlanEdge'
}


/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
export interface SellingPlanFixedAmountPriceAdjustment {
    /** The money value of the price adjustment. */
    adjustmentAmount: MoneyV2
    __typename: 'SellingPlanFixedAmountPriceAdjustment'
}


/** A fixed price adjustment for a variant that's purchased with a selling plan. */
export interface SellingPlanFixedPriceAdjustment {
    /** A new price of the variant when it's purchased with the selling plan. */
    price: MoneyV2
    __typename: 'SellingPlanFixedPriceAdjustment'
}


/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export interface SellingPlanGroup {
    /** A display friendly name for the app that created the selling plan group. */
    appName: (Scalars['String'] | null)
    /** The name of the selling plan group. */
    name: Scalars['String']
    /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
    options: SellingPlanGroupOption[]
    /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
    sellingPlans: SellingPlanConnection
    __typename: 'SellingPlanGroup'
}


/**
 * An auto-generated type for paginating through multiple SellingPlanGroups.
 * 
 */
export interface SellingPlanGroupConnection {
    /** A list of edges. */
    edges: SellingPlanGroupEdge[]
    /** A list of the nodes contained in SellingPlanGroupEdge. */
    nodes: SellingPlanGroup[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'SellingPlanGroupConnection'
}


/**
 * An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.
 * 
 */
export interface SellingPlanGroupEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of SellingPlanGroupEdge. */
    node: SellingPlanGroup
    __typename: 'SellingPlanGroupEdge'
}


/**
 * Represents an option on a selling plan group that's available in the drop-down list in the storefront.
 * 
 * Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.
 */
export interface SellingPlanGroupOption {
    /** The name of the option. For example, 'Delivery every'. */
    name: Scalars['String']
    /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
    values: Scalars['String'][]
    __typename: 'SellingPlanGroupOption'
}


/** An option provided by a Selling Plan. */
export interface SellingPlanOption {
    /** The name of the option (ie "Delivery every"). */
    name: (Scalars['String'] | null)
    /** The value of the option (ie "Month"). */
    value: (Scalars['String'] | null)
    __typename: 'SellingPlanOption'
}


/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
export interface SellingPlanPercentagePriceAdjustment {
    /** The percentage value of the price adjustment. */
    adjustmentPercentage: Scalars['Int']
    __typename: 'SellingPlanPercentagePriceAdjustment'
}


/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price. */
export interface SellingPlanPriceAdjustment {
    /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
    adjustmentValue: SellingPlanPriceAdjustmentValue
    /** The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`. */
    orderCount: (Scalars['Int'] | null)
    __typename: 'SellingPlanPriceAdjustment'
}


/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type SellingPlanPriceAdjustmentValue = (SellingPlanFixedAmountPriceAdjustment | SellingPlanFixedPriceAdjustment | SellingPlanPercentagePriceAdjustment) & { __isUnion?: true }


/** A shipping rate to be applied to a checkout. */
export interface ShippingRate {
    /** Human-readable unique identifier for this shipping rate. */
    handle: Scalars['String']
    /** Price of this shipping rate. */
    price: MoneyV2
    /**
     * @deprecated Use `price` instead.
     * Price of this shipping rate.
     */
    priceV2: MoneyV2
    /** Title of this shipping rate. */
    title: Scalars['String']
    __typename: 'ShippingRate'
}


/** Shop represents a collection of the general settings and information about the shop. */
export interface Shop {
    /** The shop's branding configuration. */
    brand: (Brand | null)
    /** A description of the shop. */
    description: (Scalars['String'] | null)
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** Returns a metafield found by namespace and key. */
    metafield: (Metafield | null)
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields: (Metafield | null)[]
    /** A string representing the way currency is formatted when the currency isn’t specified. */
    moneyFormat: Scalars['String']
    /** The shop’s name. */
    name: Scalars['String']
    /** Settings related to payments. */
    paymentSettings: PaymentSettings
    /** The primary domain of the shop’s Online Store. */
    primaryDomain: Domain
    /** The shop’s privacy policy. */
    privacyPolicy: (ShopPolicy | null)
    /** The shop’s refund policy. */
    refundPolicy: (ShopPolicy | null)
    /** The shop’s shipping policy. */
    shippingPolicy: (ShopPolicy | null)
    /** Countries that the shop ships to. */
    shipsToCountries: CountryCode[]
    /** The shop’s subscription policy. */
    subscriptionPolicy: (ShopPolicyWithDefault | null)
    /** The shop’s terms of service. */
    termsOfService: (ShopPolicy | null)
    __typename: 'Shop'
}


/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export interface ShopPolicy {
    /** Policy text, maximum size of 64kb. */
    body: Scalars['String']
    /** Policy’s handle. */
    handle: Scalars['String']
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** Policy’s title. */
    title: Scalars['String']
    /** Public URL to the policy. */
    url: Scalars['URL']
    __typename: 'ShopPolicy'
}


/**
 * A policy for the store that comes with a default value, such as a subscription policy.
 * If the merchant hasn't configured a policy for their store, then the policy will return the default value.
 * Otherwise, the policy will return the merchant-configured value.
 * 
 */
export interface ShopPolicyWithDefault {
    /** The text of the policy. Maximum size: 64KB. */
    body: Scalars['String']
    /** The handle of the policy. */
    handle: Scalars['String']
    /** The unique ID of the policy. A default policy doesn't have an ID. */
    id: (Scalars['ID'] | null)
    /** The title of the policy. */
    title: Scalars['String']
    /** Public URL to the policy. */
    url: Scalars['URL']
    __typename: 'ShopPolicyWithDefault'
}


/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 * 
 */
export interface StoreAvailability {
    /** Whether the product variant is in-stock at this location. */
    available: Scalars['Boolean']
    /** The location where this product variant is stocked at. */
    location: Location
    /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
    pickUpTime: Scalars['String']
    __typename: 'StoreAvailability'
}


/**
 * An auto-generated type for paginating through multiple StoreAvailabilities.
 * 
 */
export interface StoreAvailabilityConnection {
    /** A list of edges. */
    edges: StoreAvailabilityEdge[]
    /** A list of the nodes contained in StoreAvailabilityEdge. */
    nodes: StoreAvailability[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'StoreAvailabilityConnection'
}


/**
 * An auto-generated type which holds one StoreAvailability and a cursor during pagination.
 * 
 */
export interface StoreAvailabilityEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of StoreAvailabilityEdge. */
    node: StoreAvailability
    __typename: 'StoreAvailabilityEdge'
}


/**
 * An auto-generated type for paginating through a list of Strings.
 * 
 */
export interface StringConnection {
    /** A list of edges. */
    edges: StringEdge[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'StringConnection'
}


/**
 * An auto-generated type which holds one String and a cursor during pagination.
 * 
 */
export interface StringEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of StringEdge. */
    node: Scalars['String']
    __typename: 'StringEdge'
}


/** An object representing exchange of money for a product or service. */
export interface Transaction {
    /** The amount of money that the transaction was for. */
    amount: MoneyV2
    /**
     * @deprecated Use `amount` instead.
     * The amount of money that the transaction was for.
     */
    amountV2: MoneyV2
    /** The kind of the transaction. */
    kind: TransactionKind
    /**
     * @deprecated Use `statusV2` instead.
     * The status of the transaction.
     */
    status: TransactionStatus
    /** The status of the transaction. */
    statusV2: (TransactionStatus | null)
    /** Whether the transaction was done in test mode or not. */
    test: Scalars['Boolean']
    __typename: 'Transaction'
}


/** The different kinds of order transactions. */
export type TransactionKind = 'SALE' | 'CAPTURE' | 'AUTHORIZATION' | 'EMV_AUTHORIZATION' | 'CHANGE'


/** Transaction statuses describe the status of a transaction. */
export type TransactionStatus = 'PENDING' | 'SUCCESS' | 'FAILURE' | 'ERROR'


/**
 * The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).
 * 
 */
export interface UnitPriceMeasurement {
    /** The type of unit of measurement for the unit price measurement. */
    measuredType: (UnitPriceMeasurementMeasuredType | null)
    /** The quantity unit for the unit price measurement. */
    quantityUnit: (UnitPriceMeasurementMeasuredUnit | null)
    /** The quantity value for the unit price measurement. */
    quantityValue: Scalars['Float']
    /** The reference unit for the unit price measurement. */
    referenceUnit: (UnitPriceMeasurementMeasuredUnit | null)
    /** The reference value for the unit price measurement. */
    referenceValue: Scalars['Int']
    __typename: 'UnitPriceMeasurement'
}


/** The accepted types of unit of measurement. */
export type UnitPriceMeasurementMeasuredType = 'VOLUME' | 'WEIGHT' | 'LENGTH' | 'AREA'


/** The valid units of measurement for a unit price measurement. */
export type UnitPriceMeasurementMeasuredUnit = 'ML' | 'CL' | 'L' | 'M3' | 'MG' | 'G' | 'KG' | 'MM' | 'CM' | 'M' | 'M2'


/** Systems of weights and measures. */
export type UnitSystem = 'IMPERIAL_SYSTEM' | 'METRIC_SYSTEM'


/** A redirect on the online store. */
export interface UrlRedirect {
    /** The ID of the URL redirect. */
    id: Scalars['ID']
    /** The old path to be redirected from. When the user visits this path, they'll be redirected to the target location. */
    path: Scalars['String']
    /** The target location where the user will be redirected to. */
    target: Scalars['String']
    __typename: 'UrlRedirect'
}


/**
 * An auto-generated type for paginating through multiple UrlRedirects.
 * 
 */
export interface UrlRedirectConnection {
    /** A list of edges. */
    edges: UrlRedirectEdge[]
    /** A list of the nodes contained in UrlRedirectEdge. */
    nodes: UrlRedirect[]
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    __typename: 'UrlRedirectConnection'
}


/**
 * An auto-generated type which holds one UrlRedirect and a cursor during pagination.
 * 
 */
export interface UrlRedirectEdge {
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    /** The item at the end of UrlRedirectEdge. */
    node: UrlRedirect
    __typename: 'UrlRedirectEdge'
}


/** Represents an error in the input of a mutation. */
export interface UserError {
    /** The path to the input field that caused the error. */
    field: (Scalars['String'][] | null)
    /** The error message. */
    message: Scalars['String']
    __typename: 'UserError'
}


/** Represents a Shopify hosted video. */
export interface Video {
    /** A word or phrase to share the nature or contents of a media. */
    alt: (Scalars['String'] | null)
    /** A globally-unique ID. */
    id: Scalars['ID']
    /** The media content type. */
    mediaContentType: MediaContentType
    /** The preview image for the media. */
    previewImage: (Image | null)
    /** The sources for a video. */
    sources: VideoSource[]
    __typename: 'Video'
}


/** Represents a source for a Shopify hosted video. */
export interface VideoSource {
    /** The format of the video source. */
    format: Scalars['String']
    /** The height of the video. */
    height: Scalars['Int']
    /** The video MIME type. */
    mimeType: Scalars['String']
    /** The URL of the video. */
    url: Scalars['String']
    /** The width of the video. */
    width: Scalars['Int']
    __typename: 'VideoSource'
}


/** Units of measurement for weight. */
export type WeightUnit = 'KILOGRAMS' | 'GRAMS' | 'POUNDS' | 'OUNCES'

export type Query = QueryRoot


/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 * 
 */
export interface ApiVersionGenqlSelection{
    /** The human-readable name of the version. */
    displayName?: boolean | number
    /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
    handle?: boolean | number
    /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
    supported?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Details about the gift card used on the checkout. */
export interface AppliedGiftCardGenqlSelection{
    /** The amount that was taken from the gift card by applying it. */
    amountUsed?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `amountUsed` instead.
     * The amount that was taken from the gift card by applying it.
     */
    amountUsedV2?: MoneyV2GenqlSelection
    /** The amount left on the gift card. */
    balance?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `balance` instead.
     * The amount left on the gift card.
     */
    balanceV2?: MoneyV2GenqlSelection
    /** A globally-unique ID. */
    id?: boolean | number
    /** The last characters of the gift card. */
    lastCharacters?: boolean | number
    /** The amount that was applied to the checkout in its currency. */
    presentmentAmountUsed?: MoneyV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An article in an online store blog. */
export interface ArticleGenqlSelection{
    /**
     * @deprecated Use `authorV2` instead.
     * The article's author.
     */
    author?: ArticleAuthorGenqlSelection
    /** The article's author. */
    authorV2?: ArticleAuthorGenqlSelection
    /** The blog that the article belongs to. */
    blog?: BlogGenqlSelection
    /** List of comments posted on the article. */
    comments?: (CommentConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** Stripped content of the article, single line with HTML tags removed. */
    content?: { __args: {
    /** Truncates string after the given length. */
    truncateAt?: (Scalars['Int'] | null)} } | boolean | number
    /** The content of the article, complete with HTML formatting. */
    contentHtml?: boolean | number
    /** Stripped excerpt of the article, single line with HTML tags removed. */
    excerpt?: { __args: {
    /** Truncates string after the given length. */
    truncateAt?: (Scalars['Int'] | null)} } | boolean | number
    /** The excerpt of the article, complete with HTML formatting. */
    excerptHtml?: boolean | number
    /**
     * A human-friendly unique string for the Article automatically generated from its title.
     * 
     */
    handle?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** The image associated with the article. */
    image?: ImageGenqlSelection
    /** Returns a metafield found by namespace and key. */
    metafield?: (MetafieldGenqlSelection & { __args: {
    /** A container for a set of metafields. */
    namespace: Scalars['String'], 
    /** The identifier for the metafield. */
    key: Scalars['String']} })
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields?: (MetafieldGenqlSelection & { __args: {
    /** The list of metafields to retrieve by namespace and key. */
    identifiers: HasMetafieldsIdentifier[]} })
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: boolean | number
    /** The date and time when the article was published. */
    publishedAt?: boolean | number
    /** The article’s SEO information. */
    seo?: SEOGenqlSelection
    /** A categorization that a article can be tagged with. */
    tags?: boolean | number
    /** The article’s name. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The author of an article. */
export interface ArticleAuthorGenqlSelection{
    /** The author's bio. */
    bio?: boolean | number
    /** The author’s email. */
    email?: boolean | number
    /** The author's first name. */
    firstName?: boolean | number
    /** The author's last name. */
    lastName?: boolean | number
    /** The author's full name. */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple Articles.
 * 
 */
export interface ArticleConnectionGenqlSelection{
    /** A list of edges. */
    edges?: ArticleEdgeGenqlSelection
    /** A list of the nodes contained in ArticleEdge. */
    nodes?: ArticleGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one Article and a cursor during pagination.
 * 
 */
export interface ArticleEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of ArticleEdge. */
    node?: ArticleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a generic custom attribute. */
export interface AttributeGenqlSelection{
    /** Key or name of the attribute. */
    key?: boolean | number
    /** Value of the attribute. */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields for an attribute. */
export interface AttributeInput {
/** Key or name of the attribute. */
key?: Scalars['String'],
/** Value of the attribute. */
value?: Scalars['String']}


/**
 * Automatic discount applications capture the intentions of a discount that was automatically applied.
 * 
 */
export interface AutomaticDiscountApplicationGenqlSelection{
    /** The method by which the discount's value is allocated to its entitled items. */
    allocationMethod?: boolean | number
    /** Which lines of targetType that the discount is allocated over. */
    targetSelection?: boolean | number
    /** The type of line that the discount is applicable towards. */
    targetType?: boolean | number
    /** The title of the application. */
    title?: boolean | number
    /** The value of the discount application. */
    value?: PricingValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A collection of available shipping rates for a checkout. */
export interface AvailableShippingRatesGenqlSelection{
    /**
     * Whether or not the shipping rates are ready.
     * The `shippingRates` field is `null` when this value is `false`.
     * This field should be polled until its value becomes `true`.
     * 
     */
    ready?: boolean | number
    /** The fetched shipping rates. `null` until the `ready` field is `true`. */
    shippingRates?: ShippingRateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An online store blog. */
export interface BlogGenqlSelection{
    /** Find an article by its handle. */
    articleByHandle?: (ArticleGenqlSelection & { __args: {
    /** The handle of the article. */
    handle: Scalars['String']} })
    /** List of the blog's articles. */
    articles?: (ArticleConnectionGenqlSelection & { __args: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (ArticleSortKeys | null), 
    /**
     * Supported filter parameters:
     *  - `author`
     *  - `blog_title`
     *  - `created_at`
     *  - `tag`
     *  - `tag_not`
     *  - `updated_at`
     * 
     * See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax)
     * for more information about using filters.
     * 
     */
    query?: (Scalars['String'] | null)} })
    /** The authors who have contributed to the blog. */
    authors?: ArticleAuthorGenqlSelection
    /**
     * A human-friendly unique string for the Blog automatically generated from its title.
     * 
     */
    handle?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** Returns a metafield found by namespace and key. */
    metafield?: (MetafieldGenqlSelection & { __args: {
    /** A container for a set of metafields. */
    namespace: Scalars['String'], 
    /** The identifier for the metafield. */
    key: Scalars['String']} })
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields?: (MetafieldGenqlSelection & { __args: {
    /** The list of metafields to retrieve by namespace and key. */
    identifiers: HasMetafieldsIdentifier[]} })
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: boolean | number
    /** The blog's SEO information. */
    seo?: SEOGenqlSelection
    /** The blogs’s title. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple Blogs.
 * 
 */
export interface BlogConnectionGenqlSelection{
    /** A list of edges. */
    edges?: BlogEdgeGenqlSelection
    /** A list of the nodes contained in BlogEdge. */
    nodes?: BlogGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one Blog and a cursor during pagination.
 * 
 */
export interface BlogEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of BlogEdge. */
    node?: BlogGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The store's [branding configuration](https://help.shopify.com/en/manual/promoting-marketing/managing-brand-assets).
 * 
 */
export interface BrandGenqlSelection{
    /** The colors of the store's brand. */
    colors?: BrandColorsGenqlSelection
    /** The store's cover image. */
    coverImage?: MediaImageGenqlSelection
    /** The store's default logo. */
    logo?: MediaImageGenqlSelection
    /** The store's short description. */
    shortDescription?: boolean | number
    /** The store's slogan. */
    slogan?: boolean | number
    /** The store's preferred logo for square UI elements. */
    squareLogo?: MediaImageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A group of related colors for the shop's brand.
 * 
 */
export interface BrandColorGroupGenqlSelection{
    /** The background color. */
    background?: boolean | number
    /** The foreground color. */
    foreground?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The colors of the shop's brand.
 * 
 */
export interface BrandColorsGenqlSelection{
    /** The shop's primary brand colors. */
    primary?: BrandColorGroupGenqlSelection
    /** The shop's secondary brand colors. */
    secondary?: BrandColorGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 * 
 */
export interface CartGenqlSelection{
    /** An attribute associated with the cart. */
    attribute?: (AttributeGenqlSelection & { __args: {
    /** The key of the attribute. */
    key: Scalars['String']} })
    /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
    attributes?: AttributeGenqlSelection
    /** Information about the buyer that is interacting with the cart. */
    buyerIdentity?: CartBuyerIdentityGenqlSelection
    /** The URL of the checkout for the cart. */
    checkoutUrl?: boolean | number
    /** The estimated costs that the buyer will pay at checkout. The costs are subject to change and changes will be reflected at checkout. The `cost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing). */
    cost?: CartCostGenqlSelection
    /** The date and time when the cart was created. */
    createdAt?: boolean | number
    /**
     * The delivery groups available for the cart, based on the buyer identity default
     * delivery address preference or the default address of the logged-in customer.
     * 
     */
    deliveryGroups?: (CartDeliveryGroupConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** The discounts that have been applied to the entire cart. */
    discountAllocations?: CartDiscountAllocationGenqlSelection
    /**
     * The case-insensitive discount codes that the customer added at checkout.
     * 
     */
    discountCodes?: CartDiscountCodeGenqlSelection
    /**
     * @deprecated Use `cost` instead.
     * The estimated costs that the buyer will pay at checkout.
     * The estimated costs are subject to change and changes will be reflected at checkout.
     * The `estimatedCost` field uses the `buyerIdentity` field to determine
     * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
     * 
     */
    estimatedCost?: CartEstimatedCostGenqlSelection
    /** A globally-unique ID. */
    id?: boolean | number
    /** A list of lines containing information about the items the customer intends to purchase. */
    lines?: (CartLineConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
    note?: boolean | number
    /** The total number of items in the cart. */
    totalQuantity?: boolean | number
    /** The date and time when the cart was updated. */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `cartAttributesUpdate` mutation. */
export interface CartAttributesUpdatePayloadGenqlSelection{
    /** The updated cart. */
    cart?: CartGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    userErrors?: CartUserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
export interface CartAutomaticDiscountAllocationGenqlSelection{
    /** The discounted amount that has been applied to the cart line. */
    discountedAmount?: MoneyV2GenqlSelection
    /** The title of the allocated discount. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents information about the buyer that is interacting with the cart. */
export interface CartBuyerIdentityGenqlSelection{
    /** The country where the buyer is located. */
    countryCode?: boolean | number
    /** The customer account associated with the cart. */
    customer?: CustomerGenqlSelection
    /**
     * An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
     * The rank of the preferences is determined by the order of the addresses in the array. Preferences
     * can be used to populate relevant fields in the checkout flow.
     * 
     */
    deliveryAddressPreferences?: DeliveryAddressGenqlSelection
    /** The email address of the buyer that is interacting with the cart. */
    email?: boolean | number
    /** The phone number of the buyer that is interacting with the cart. */
    phone?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Specifies the input fields to update the buyer information associated with a cart.
 * Buyer identity is used to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * and should match the customer's shipping address.
 * 
 */
export interface CartBuyerIdentityInput {
/** The email address of the buyer that is interacting with the cart. */
email?: (Scalars['String'] | null),
/** The phone number of the buyer that is interacting with the cart. */
phone?: (Scalars['String'] | null),
/** The country where the buyer is located. */
countryCode?: (CountryCode | null),
/** The access token used to identify the customer associated with the cart. */
customerAccessToken?: (Scalars['String'] | null),
/**
 * An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
 * The rank of the preferences is determined by the order of the addresses in the array. Preferences
 * can be used to populate relevant fields in the checkout flow.
 * 
 */
deliveryAddressPreferences?: (DeliveryAddressInput[] | null)}


/** Return type for `cartBuyerIdentityUpdate` mutation. */
export interface CartBuyerIdentityUpdatePayloadGenqlSelection{
    /** The updated cart. */
    cart?: CartGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    userErrors?: CartUserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The discount that has been applied to the cart line using a discount code. */
export interface CartCodeDiscountAllocationGenqlSelection{
    /** The code used to apply the discount. */
    code?: boolean | number
    /** The discounted amount that has been applied to the cart line. */
    discountedAmount?: MoneyV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The costs that the buyer will pay at checkout.
 * The cart cost uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
 * 
 */
export interface CartCostGenqlSelection{
    /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to `subtotalAmount`. */
    checkoutChargeAmount?: MoneyV2GenqlSelection
    /** The amount, before taxes and cart-level discounts, for the customer to pay. */
    subtotalAmount?: MoneyV2GenqlSelection
    /** Whether the subtotal amount is estimated. */
    subtotalAmountEstimated?: boolean | number
    /** The total amount for the customer to pay. */
    totalAmount?: MoneyV2GenqlSelection
    /** Whether the total amount is estimated. */
    totalAmountEstimated?: boolean | number
    /** The duty amount for the customer to pay at checkout. */
    totalDutyAmount?: MoneyV2GenqlSelection
    /** Whether the total duty amount is estimated. */
    totalDutyAmountEstimated?: boolean | number
    /** The tax amount for the customer to pay at checkout. */
    totalTaxAmount?: MoneyV2GenqlSelection
    /** Whether the total tax amount is estimated. */
    totalTaxAmountEstimated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `cartCreate` mutation. */
export interface CartCreatePayloadGenqlSelection{
    /** The new cart. */
    cart?: CartGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    userErrors?: CartUserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
export interface CartCustomDiscountAllocationGenqlSelection{
    /** The discounted amount that has been applied to the cart line. */
    discountedAmount?: MoneyV2GenqlSelection
    /** The title of the allocated discount. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Information about the options available for one or more line items to be delivered to a specific address. */
export interface CartDeliveryGroupGenqlSelection{
    /** A list of cart lines for the delivery group. */
    cartLines?: (CartLineConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** The destination address for the delivery group. */
    deliveryAddress?: MailingAddressGenqlSelection
    /** The delivery options available for the delivery group. */
    deliveryOptions?: CartDeliveryOptionGenqlSelection
    /** The ID for the delivery group. */
    id?: boolean | number
    /** The selected delivery option for the delivery group. */
    selectedDeliveryOption?: CartDeliveryOptionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple CartDeliveryGroups.
 * 
 */
export interface CartDeliveryGroupConnectionGenqlSelection{
    /** A list of edges. */
    edges?: CartDeliveryGroupEdgeGenqlSelection
    /** A list of the nodes contained in CartDeliveryGroupEdge. */
    nodes?: CartDeliveryGroupGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one CartDeliveryGroup and a cursor during pagination.
 * 
 */
export interface CartDeliveryGroupEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of CartDeliveryGroupEdge. */
    node?: CartDeliveryGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Information about a delivery option. */
export interface CartDeliveryOptionGenqlSelection{
    /** The code of the delivery option. */
    code?: boolean | number
    /** The method for the delivery option. */
    deliveryMethodType?: boolean | number
    /** The description of the delivery option. */
    description?: boolean | number
    /** The estimated cost for the delivery option. */
    estimatedCost?: MoneyV2GenqlSelection
    /** The unique identifier of the delivery option. */
    handle?: boolean | number
    /** The title of the delivery option. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The discounts that have been applied to the cart line. */
export interface CartDiscountAllocationGenqlSelection{
    /** The discounted amount that has been applied to the cart line. */
    discountedAmount?: MoneyV2GenqlSelection
    on_CartAutomaticDiscountAllocation?: CartAutomaticDiscountAllocationGenqlSelection
    on_CartCodeDiscountAllocation?: CartCodeDiscountAllocationGenqlSelection
    on_CartCustomDiscountAllocation?: CartCustomDiscountAllocationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The discount codes applied to the cart. */
export interface CartDiscountCodeGenqlSelection{
    /** Whether the discount code is applicable to the cart's current contents. */
    applicable?: boolean | number
    /** The code for the discount. */
    code?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `cartDiscountCodesUpdate` mutation. */
export interface CartDiscountCodesUpdatePayloadGenqlSelection{
    /** The updated cart. */
    cart?: CartGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    userErrors?: CartUserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The estimated costs that the buyer will pay at checkout.
 * The estimated cost uses
 * [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity)
 * to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
 * 
 */
export interface CartEstimatedCostGenqlSelection{
    /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to`subtotal_amount`. */
    checkoutChargeAmount?: MoneyV2GenqlSelection
    /** The estimated amount, before taxes and discounts, for the customer to pay. */
    subtotalAmount?: MoneyV2GenqlSelection
    /** The estimated total amount for the customer to pay. */
    totalAmount?: MoneyV2GenqlSelection
    /** The estimated duty amount for the customer to pay at checkout. */
    totalDutyAmount?: MoneyV2GenqlSelection
    /** The estimated tax amount for the customer to pay at checkout. */
    totalTaxAmount?: MoneyV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields to create a cart. */
export interface CartInput {
/** An array of key-value pairs that contains additional information about the cart. */
attributes?: (AttributeInput[] | null),
/** A list of merchandise lines to add to the cart. */
lines?: (CartLineInput[] | null),
/**
 * The case-insensitive discount codes that the customer added at checkout.
 * 
 */
discountCodes?: (Scalars['String'][] | null),
/** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
note?: (Scalars['String'] | null),
/**
 * The customer associated with the cart. Used to determine [international pricing]
 * (https://shopify.dev/custom-storefronts/internationalization/international-pricing).
 * Buyer identity should match the customer's shipping address.
 * 
 */
buyerIdentity?: (CartBuyerIdentityInput | null)}


/** Represents information about the merchandise in the cart. */
export interface CartLineGenqlSelection{
    /** An attribute associated with the cart line. */
    attribute?: (AttributeGenqlSelection & { __args: {
    /** The key of the attribute. */
    key: Scalars['String']} })
    /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
    attributes?: AttributeGenqlSelection
    /** The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout. */
    cost?: CartLineCostGenqlSelection
    /** The discounts that have been applied to the cart line. */
    discountAllocations?: CartDiscountAllocationGenqlSelection
    /**
     * @deprecated Use `cost` instead.
     * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
     */
    estimatedCost?: CartLineEstimatedCostGenqlSelection
    /** A globally-unique ID. */
    id?: boolean | number
    /** The merchandise that the buyer intends to purchase. */
    merchandise?: MerchandiseGenqlSelection
    /** The quantity of the merchandise that the customer intends to purchase. */
    quantity?: boolean | number
    /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
    sellingPlanAllocation?: SellingPlanAllocationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple CartLines.
 * 
 */
export interface CartLineConnectionGenqlSelection{
    /** A list of edges. */
    edges?: CartLineEdgeGenqlSelection
    /** A list of the nodes contained in CartLineEdge. */
    nodes?: CartLineGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The cost of the merchandise line that the buyer will pay at checkout. */
export interface CartLineCostGenqlSelection{
    /** The amount of the merchandise line. */
    amountPerQuantity?: MoneyV2GenqlSelection
    /** The compare at amount of the merchandise line. */
    compareAtAmountPerQuantity?: MoneyV2GenqlSelection
    /** The cost of the merchandise line before line-level discounts. */
    subtotalAmount?: MoneyV2GenqlSelection
    /** The total cost of the merchandise line. */
    totalAmount?: MoneyV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one CartLine and a cursor during pagination.
 * 
 */
export interface CartLineEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of CartLineEdge. */
    node?: CartLineGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The estimated cost of the merchandise line that the buyer will pay at checkout. */
export interface CartLineEstimatedCostGenqlSelection{
    /** The amount of the merchandise line. */
    amount?: MoneyV2GenqlSelection
    /** The compare at amount of the merchandise line. */
    compareAtAmount?: MoneyV2GenqlSelection
    /** The estimated cost of the merchandise line before discounts. */
    subtotalAmount?: MoneyV2GenqlSelection
    /** The estimated total cost of the merchandise line. */
    totalAmount?: MoneyV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields to create a merchandise line on a cart. */
export interface CartLineInput {
/** An array of key-value pairs that contains additional information about the merchandise line. */
attributes?: (AttributeInput[] | null),
/** The quantity of the merchandise. */
quantity?: (Scalars['Int'] | null),
/** The ID of the merchandise that the buyer intends to purchase. */
merchandiseId?: Scalars['ID'],
/** The ID of the selling plan that the merchandise is being purchased with. */
sellingPlanId?: (Scalars['ID'] | null)}


/** The input fields to update a line item on a cart. */
export interface CartLineUpdateInput {
/** The ID of the merchandise line. */
id?: Scalars['ID'],
/** The quantity of the line item. */
quantity?: (Scalars['Int'] | null),
/** The ID of the merchandise for the line item. */
merchandiseId?: (Scalars['ID'] | null),
/** An array of key-value pairs that contains additional information about the merchandise line. */
attributes?: (AttributeInput[] | null),
/** The ID of the selling plan that the merchandise is being purchased with. */
sellingPlanId?: (Scalars['ID'] | null)}


/** Return type for `cartLinesAdd` mutation. */
export interface CartLinesAddPayloadGenqlSelection{
    /** The updated cart. */
    cart?: CartGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    userErrors?: CartUserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `cartLinesRemove` mutation. */
export interface CartLinesRemovePayloadGenqlSelection{
    /** The updated cart. */
    cart?: CartGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    userErrors?: CartUserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `cartLinesUpdate` mutation. */
export interface CartLinesUpdatePayloadGenqlSelection{
    /** The updated cart. */
    cart?: CartGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    userErrors?: CartUserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `cartNoteUpdate` mutation. */
export interface CartNoteUpdatePayloadGenqlSelection{
    /** The updated cart. */
    cart?: CartGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    userErrors?: CartUserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The input fields for updating the selected delivery options for a delivery group.
 * 
 */
export interface CartSelectedDeliveryOptionInput {
/** The ID of the cart delivery group. */
deliveryGroupId?: Scalars['ID'],
/** The handle of the selected delivery option. */
deliveryOptionHandle?: Scalars['String']}


/** Return type for `cartSelectedDeliveryOptionsUpdate` mutation. */
export interface CartSelectedDeliveryOptionsUpdatePayloadGenqlSelection{
    /** The updated cart. */
    cart?: CartGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    userErrors?: CartUserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents an error that happens during execution of a cart mutation. */
export interface CartUserErrorGenqlSelection{
    /** The error code. */
    code?: boolean | number
    /** The path to the input field that caused the error. */
    field?: boolean | number
    /** The error message. */
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A container for all the information required to checkout items and pay. */
export interface CheckoutGenqlSelection{
    /** The gift cards used on the checkout. */
    appliedGiftCards?: AppliedGiftCardGenqlSelection
    /**
     * The available shipping rates for this Checkout.
     * Should only be used when checkout `requiresShipping` is `true` and
     * the shipping address is valid.
     * 
     */
    availableShippingRates?: AvailableShippingRatesGenqlSelection
    /** The identity of the customer associated with the checkout. */
    buyerIdentity?: CheckoutBuyerIdentityGenqlSelection
    /** The date and time when the checkout was completed. */
    completedAt?: boolean | number
    /** The date and time when the checkout was created. */
    createdAt?: boolean | number
    /** The currency code for the checkout. */
    currencyCode?: boolean | number
    /** A list of extra information that is added to the checkout. */
    customAttributes?: AttributeGenqlSelection
    /** Discounts that have been applied on the checkout. */
    discountApplications?: (DiscountApplicationConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** The email attached to this checkout. */
    email?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** A list of line item objects, each one containing information about an item in the checkout. */
    lineItems?: (CheckoutLineItemConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded. */
    lineItemsSubtotalPrice?: MoneyV2GenqlSelection
    /** The note associated with the checkout. */
    note?: boolean | number
    /** The resulting order from a paid checkout. */
    order?: OrderGenqlSelection
    /** The Order Status Page for this Checkout, null when checkout is not completed. */
    orderStatusUrl?: boolean | number
    /** The amount left to be paid. This is equal to the cost of the line items, taxes, and shipping, minus discounts and gift cards. */
    paymentDue?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `paymentDue` instead.
     * The amount left to be paid. This is equal to the cost of the line items, duties, taxes, and shipping, minus discounts and gift cards.
     */
    paymentDueV2?: MoneyV2GenqlSelection
    /**
     * Whether or not the Checkout is ready and can be completed. Checkouts may
     * have asynchronous operations that can take time to finish. If you want
     * to complete a checkout or ensure all the fields are populated and up to
     * date, polling is required until the value is true.
     * 
     */
    ready?: boolean | number
    /** States whether or not the fulfillment requires shipping. */
    requiresShipping?: boolean | number
    /** The shipping address to where the line items will be shipped. */
    shippingAddress?: MailingAddressGenqlSelection
    /**
     * The discounts that have been allocated onto the shipping line by discount applications.
     * 
     */
    shippingDiscountAllocations?: DiscountAllocationGenqlSelection
    /** Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object. */
    shippingLine?: ShippingRateGenqlSelection
    /** The price at checkout before shipping and taxes. */
    subtotalPrice?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `subtotalPrice` instead.
     * The price at checkout before duties, shipping, and taxes.
     */
    subtotalPriceV2?: MoneyV2GenqlSelection
    /** Whether the checkout is tax exempt. */
    taxExempt?: boolean | number
    /** Whether taxes are included in the line item and shipping line prices. */
    taxesIncluded?: boolean | number
    /** The sum of all the duties applied to the line items in the checkout. */
    totalDuties?: MoneyV2GenqlSelection
    /** The sum of all the prices of all the items in the checkout, including taxes and duties. */
    totalPrice?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `totalPrice` instead.
     * The sum of all the prices of all the items in the checkout, including taxes and duties.
     */
    totalPriceV2?: MoneyV2GenqlSelection
    /** The sum of all the taxes applied to the line items and shipping lines in the checkout. */
    totalTax?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `totalTax` instead.
     * The sum of all the taxes applied to the line items and shipping lines in the checkout.
     */
    totalTaxV2?: MoneyV2GenqlSelection
    /** The date and time when the checkout was last updated. */
    updatedAt?: boolean | number
    /** The url pointing to the checkout accessible from the web. */
    webUrl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields required to update a checkout's attributes. */
export interface CheckoutAttributesUpdateV2Input {
/** The text of an optional note that a shop owner can attach to the checkout. */
note?: (Scalars['String'] | null),
/** A list of extra information that is added to the checkout. */
customAttributes?: (AttributeInput[] | null),
/**
 * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
 * The required attributes are city, province, and country.
 * Full validation of the addresses is still done at completion time. Defaults to `false` with 
 * each operation.
 * 
 */
allowPartialAddresses?: (Scalars['Boolean'] | null)}


/** Return type for `checkoutAttributesUpdateV2` mutation. */
export interface CheckoutAttributesUpdateV2PayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The identity of the customer associated with the checkout. */
export interface CheckoutBuyerIdentityGenqlSelection{
    /** The country code for the checkout. For example, `CA`. */
    countryCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields for the identity of the customer associated with the checkout. */
export interface CheckoutBuyerIdentityInput {
/**
 * The country code of one of the shop's
 * [enabled countries](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup).
 * For example, `CA`. Including this field creates a checkout in the specified country's currency.
 * 
 */
countryCode?: CountryCode}


/** Return type for `checkoutCompleteFree` mutation. */
export interface CheckoutCompleteFreePayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutCompleteWithCreditCardV2` mutation. */
export interface CheckoutCompleteWithCreditCardV2PayloadGenqlSelection{
    /** The checkout on which the payment was applied. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /** A representation of the attempted payment. */
    payment?: PaymentGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation. */
export interface CheckoutCompleteWithTokenizedPaymentV3PayloadGenqlSelection{
    /** The checkout on which the payment was applied. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /** A representation of the attempted payment. */
    payment?: PaymentGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields required to create a checkout. */
export interface CheckoutCreateInput {
/** The email with which the customer wants to checkout. */
email?: (Scalars['String'] | null),
/** A list of line item objects, each one containing information about an item in the checkout. */
lineItems?: (CheckoutLineItemInput[] | null),
/** The shipping address to where the line items will be shipped. */
shippingAddress?: (MailingAddressInput | null),
/** The text of an optional note that a shop owner can attach to the checkout. */
note?: (Scalars['String'] | null),
/** A list of extra information that is added to the checkout. */
customAttributes?: (AttributeInput[] | null),
/**
 * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
 * The required attributes are city, province, and country.
 * Full validation of addresses is still done at completion time. Defaults to `null`.
 * 
 */
allowPartialAddresses?: (Scalars['Boolean'] | null),
/** The identity of the customer associated with the checkout. */
buyerIdentity?: (CheckoutBuyerIdentityInput | null)}


/** Return type for `checkoutCreate` mutation. */
export interface CheckoutCreatePayloadGenqlSelection{
    /** The new checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /** The checkout queue token. Available only to selected stores. */
    queueToken?: boolean | number
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutCustomerAssociateV2` mutation. */
export interface CheckoutCustomerAssociateV2PayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /** The associated customer object. */
    customer?: CustomerGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutCustomerDisassociateV2` mutation. */
export interface CheckoutCustomerDisassociateV2PayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutDiscountCodeApplyV2` mutation. */
export interface CheckoutDiscountCodeApplyV2PayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutDiscountCodeRemove` mutation. */
export interface CheckoutDiscountCodeRemovePayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutEmailUpdateV2` mutation. */
export interface CheckoutEmailUpdateV2PayloadGenqlSelection{
    /** The checkout object with the updated email. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutGiftCardRemoveV2` mutation. */
export interface CheckoutGiftCardRemoveV2PayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutGiftCardsAppend` mutation. */
export interface CheckoutGiftCardsAppendPayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single line item in the checkout, grouped by variant and attributes. */
export interface CheckoutLineItemGenqlSelection{
    /** Extra information in the form of an array of Key-Value pairs about the line item. */
    customAttributes?: AttributeGenqlSelection
    /** The discounts that have been allocated onto the checkout line item by discount applications. */
    discountAllocations?: DiscountAllocationGenqlSelection
    /** A globally-unique ID. */
    id?: boolean | number
    /** The quantity of the line item. */
    quantity?: boolean | number
    /** Title of the line item. Defaults to the product's title. */
    title?: boolean | number
    /** Unit price of the line item. */
    unitPrice?: MoneyV2GenqlSelection
    /** Product variant of the line item. */
    variant?: ProductVariantGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple CheckoutLineItems.
 * 
 */
export interface CheckoutLineItemConnectionGenqlSelection{
    /** A list of edges. */
    edges?: CheckoutLineItemEdgeGenqlSelection
    /** A list of the nodes contained in CheckoutLineItemEdge. */
    nodes?: CheckoutLineItemGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one CheckoutLineItem and a cursor during pagination.
 * 
 */
export interface CheckoutLineItemEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of CheckoutLineItemEdge. */
    node?: CheckoutLineItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields to create a line item on a checkout. */
export interface CheckoutLineItemInput {
/** Extra information in the form of an array of Key-Value pairs about the line item. */
customAttributes?: (AttributeInput[] | null),
/** The quantity of the line item. */
quantity?: Scalars['Int'],
/** The ID of the product variant for the line item. */
variantId?: Scalars['ID']}


/** The input fields to update a line item on the checkout. */
export interface CheckoutLineItemUpdateInput {
/** The ID of the line item. */
id?: (Scalars['ID'] | null),
/** The variant ID of the line item. */
variantId?: (Scalars['ID'] | null),
/** The quantity of the line item. */
quantity?: (Scalars['Int'] | null),
/** Extra information in the form of an array of Key-Value pairs about the line item. */
customAttributes?: (AttributeInput[] | null)}


/** Return type for `checkoutLineItemsAdd` mutation. */
export interface CheckoutLineItemsAddPayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutLineItemsRemove` mutation. */
export interface CheckoutLineItemsRemovePayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutLineItemsReplace` mutation. */
export interface CheckoutLineItemsReplacePayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    userErrors?: CheckoutUserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutLineItemsUpdate` mutation. */
export interface CheckoutLineItemsUpdatePayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutShippingAddressUpdateV2` mutation. */
export interface CheckoutShippingAddressUpdateV2PayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `checkoutShippingLineUpdate` mutation. */
export interface CheckoutShippingLineUpdatePayloadGenqlSelection{
    /** The updated checkout object. */
    checkout?: CheckoutGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    checkoutUserErrors?: CheckoutUserErrorGenqlSelection
    /**
     * @deprecated Use `checkoutUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents an error that happens during execution of a checkout mutation. */
export interface CheckoutUserErrorGenqlSelection{
    /** The error code. */
    code?: boolean | number
    /** The path to the input field that caused the error. */
    field?: boolean | number
    /** The error message. */
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export interface CollectionGenqlSelection{
    /** Stripped description of the collection, single line with HTML tags removed. */
    description?: { __args: {
    /** Truncates string after the given length. */
    truncateAt?: (Scalars['Int'] | null)} } | boolean | number
    /** The description of the collection, complete with HTML formatting. */
    descriptionHtml?: boolean | number
    /**
     * A human-friendly unique string for the collection automatically generated from its title.
     * Limit of 255 characters.
     * 
     */
    handle?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** Image associated with the collection. */
    image?: ImageGenqlSelection
    /** Returns a metafield found by namespace and key. */
    metafield?: (MetafieldGenqlSelection & { __args: {
    /** A container for a set of metafields. */
    namespace: Scalars['String'], 
    /** The identifier for the metafield. */
    key: Scalars['String']} })
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields?: (MetafieldGenqlSelection & { __args: {
    /** The list of metafields to retrieve by namespace and key. */
    identifiers: HasMetafieldsIdentifier[]} })
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: boolean | number
    /** List of products in the collection. */
    products?: (ProductConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (ProductCollectionSortKeys | null), 
    /** Returns a subset of products matching all product filters. */
    filters?: (ProductFilter[] | null)} })
    /** The collection's SEO information. */
    seo?: SEOGenqlSelection
    /** The collection’s name. Limit of 255 characters. */
    title?: boolean | number
    /** The date and time when the collection was last modified. */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple Collections.
 * 
 */
export interface CollectionConnectionGenqlSelection{
    /** A list of edges. */
    edges?: CollectionEdgeGenqlSelection
    /** A list of the nodes contained in CollectionEdge. */
    nodes?: CollectionGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 * 
 */
export interface CollectionEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of CollectionEdge. */
    node?: CollectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A comment on an article. */
export interface CommentGenqlSelection{
    /** The comment’s author. */
    author?: CommentAuthorGenqlSelection
    /** Stripped content of the comment, single line with HTML tags removed. */
    content?: { __args: {
    /** Truncates string after the given length. */
    truncateAt?: (Scalars['Int'] | null)} } | boolean | number
    /** The content of the comment, complete with HTML formatting. */
    contentHtml?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The author of a comment. */
export interface CommentAuthorGenqlSelection{
    /** The author's email. */
    email?: boolean | number
    /** The author’s name. */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple Comments.
 * 
 */
export interface CommentConnectionGenqlSelection{
    /** A list of edges. */
    edges?: CommentEdgeGenqlSelection
    /** A list of the nodes contained in CommentEdge. */
    nodes?: CommentGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one Comment and a cursor during pagination.
 * 
 */
export interface CommentEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of CommentEdge. */
    node?: CommentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A country. */
export interface CountryGenqlSelection{
    /** The languages available for the country. */
    availableLanguages?: LanguageGenqlSelection
    /** The currency of the country. */
    currency?: CurrencyGenqlSelection
    /** The ISO code of the country. */
    isoCode?: boolean | number
    /** The name of the country. */
    name?: boolean | number
    /** The unit system used in the country. */
    unitSystem?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Credit card information used for a payment. */
export interface CreditCardGenqlSelection{
    /** The brand of the credit card. */
    brand?: boolean | number
    /** The expiry month of the credit card. */
    expiryMonth?: boolean | number
    /** The expiry year of the credit card. */
    expiryYear?: boolean | number
    /** The credit card's BIN number. */
    firstDigits?: boolean | number
    /** The first name of the card holder. */
    firstName?: boolean | number
    /** The last 4 digits of the credit card. */
    lastDigits?: boolean | number
    /** The last name of the card holder. */
    lastName?: boolean | number
    /** The masked credit card number with only the last 4 digits displayed. */
    maskedNumber?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 * 
 */
export interface CreditCardPaymentInputV2 {
/** The amount and currency of the payment. */
paymentAmount?: MoneyInput,
/** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
idempotencyKey?: Scalars['String'],
/** The billing address for the payment. */
billingAddress?: MailingAddressInput,
/** The ID returned by Shopify's Card Vault. */
vaultId?: Scalars['String'],
/** Executes the payment in test mode if possible. Defaults to `false`. */
test?: (Scalars['Boolean'] | null)}


/** A currency. */
export interface CurrencyGenqlSelection{
    /** The ISO code of the currency. */
    isoCode?: boolean | number
    /** The name of the currency. */
    name?: boolean | number
    /** The symbol of the currency. */
    symbol?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export interface CustomerGenqlSelection{
    /** Indicates whether the customer has consented to be sent marketing material via email. */
    acceptsMarketing?: boolean | number
    /** A list of addresses for the customer. */
    addresses?: (MailingAddressConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** The date and time when the customer was created. */
    createdAt?: boolean | number
    /** The customer’s default address. */
    defaultAddress?: MailingAddressGenqlSelection
    /** The customer’s name, email or phone number. */
    displayName?: boolean | number
    /** The customer’s email address. */
    email?: boolean | number
    /** The customer’s first name. */
    firstName?: boolean | number
    /** A unique ID for the customer. */
    id?: boolean | number
    /** The customer's most recently updated, incomplete checkout. */
    lastIncompleteCheckout?: CheckoutGenqlSelection
    /** The customer’s last name. */
    lastName?: boolean | number
    /** Returns a metafield found by namespace and key. */
    metafield?: (MetafieldGenqlSelection & { __args: {
    /** A container for a set of metafields. */
    namespace: Scalars['String'], 
    /** The identifier for the metafield. */
    key: Scalars['String']} })
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields?: (MetafieldGenqlSelection & { __args: {
    /** The list of metafields to retrieve by namespace and key. */
    identifiers: HasMetafieldsIdentifier[]} })
    /** The number of orders that the customer has made at the store in their lifetime. */
    numberOfOrders?: boolean | number
    /** The orders associated with the customer. */
    orders?: (OrderConnectionGenqlSelection & { __args: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (OrderSortKeys | null), 
    /**
     * Supported filter parameters:
     *  - `processed_at`
     * 
     * See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax)
     * for more information about using filters.
     * 
     */
    query?: (Scalars['String'] | null)} })
    /** The customer’s phone number. */
    phone?: boolean | number
    /**
     * A comma separated list of tags that have been added to the customer.
     * Additional access scope required: unauthenticated_read_customer_tags.
     * 
     */
    tags?: boolean | number
    /** The date and time when the customer information was updated. */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
export interface CustomerAccessTokenGenqlSelection{
    /** The customer’s access token. */
    accessToken?: boolean | number
    /** The date and time when the customer access token expires. */
    expiresAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields required to create a customer access token. */
export interface CustomerAccessTokenCreateInput {
/** The email associated to the customer. */
email?: Scalars['String'],
/** The login password to be used by the customer. */
password?: Scalars['String']}


/** Return type for `customerAccessTokenCreate` mutation. */
export interface CustomerAccessTokenCreatePayloadGenqlSelection{
    /** The newly created customer access token object. */
    customerAccessToken?: CustomerAccessTokenGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `customerAccessTokenCreateWithMultipass` mutation. */
export interface CustomerAccessTokenCreateWithMultipassPayloadGenqlSelection{
    /** An access token object associated with the customer. */
    customerAccessToken?: CustomerAccessTokenGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `customerAccessTokenDelete` mutation. */
export interface CustomerAccessTokenDeletePayloadGenqlSelection{
    /** The destroyed access token. */
    deletedAccessToken?: boolean | number
    /** ID of the destroyed customer access token. */
    deletedCustomerAccessTokenId?: boolean | number
    /** The list of errors that occurred from executing the mutation. */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `customerAccessTokenRenew` mutation. */
export interface CustomerAccessTokenRenewPayloadGenqlSelection{
    /** The renewed customer access token object. */
    customerAccessToken?: CustomerAccessTokenGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `customerActivateByUrl` mutation. */
export interface CustomerActivateByUrlPayloadGenqlSelection{
    /** The customer that was activated. */
    customer?: CustomerGenqlSelection
    /** A new customer access token for the customer. */
    customerAccessToken?: CustomerAccessTokenGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields to activate a customer. */
export interface CustomerActivateInput {
/** The activation token required to activate the customer. */
activationToken?: Scalars['String'],
/** New password that will be set during activation. */
password?: Scalars['String']}


/** Return type for `customerActivate` mutation. */
export interface CustomerActivatePayloadGenqlSelection{
    /** The customer object. */
    customer?: CustomerGenqlSelection
    /** A newly created customer access token object for the customer. */
    customerAccessToken?: CustomerAccessTokenGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `customerAddressCreate` mutation. */
export interface CustomerAddressCreatePayloadGenqlSelection{
    /** The new customer address object. */
    customerAddress?: MailingAddressGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `customerAddressDelete` mutation. */
export interface CustomerAddressDeletePayloadGenqlSelection{
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    /** ID of the deleted customer address. */
    deletedCustomerAddressId?: boolean | number
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `customerAddressUpdate` mutation. */
export interface CustomerAddressUpdatePayloadGenqlSelection{
    /** The customer’s updated mailing address. */
    customerAddress?: MailingAddressGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields to create a new customer. */
export interface CustomerCreateInput {
/** The customer’s first name. */
firstName?: (Scalars['String'] | null),
/** The customer’s last name. */
lastName?: (Scalars['String'] | null),
/** The customer’s email. */
email?: Scalars['String'],
/**
 * A unique phone number for the customer.
 * 
 * Formatted using E.164 standard. For example, _+16135551111_.
 * 
 */
phone?: (Scalars['String'] | null),
/** The login password used by the customer. */
password?: Scalars['String'],
/** Indicates whether the customer has consented to be sent marketing material via email. */
acceptsMarketing?: (Scalars['Boolean'] | null)}


/** Return type for `customerCreate` mutation. */
export interface CustomerCreatePayloadGenqlSelection{
    /** The created customer object. */
    customer?: CustomerGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `customerDefaultAddressUpdate` mutation. */
export interface CustomerDefaultAddressUpdatePayloadGenqlSelection{
    /** The updated customer object. */
    customer?: CustomerGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `customerRecover` mutation. */
export interface CustomerRecoverPayloadGenqlSelection{
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Return type for `customerResetByUrl` mutation. */
export interface CustomerResetByUrlPayloadGenqlSelection{
    /** The customer object which was reset. */
    customer?: CustomerGenqlSelection
    /** A newly created customer access token object for the customer. */
    customerAccessToken?: CustomerAccessTokenGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields to reset a customer's password. */
export interface CustomerResetInput {
/** The reset token required to reset the customer’s password. */
resetToken?: Scalars['String'],
/** New password that will be set as part of the reset password process. */
password?: Scalars['String']}


/** Return type for `customerReset` mutation. */
export interface CustomerResetPayloadGenqlSelection{
    /** The customer object which was reset. */
    customer?: CustomerGenqlSelection
    /** A newly created customer access token object for the customer. */
    customerAccessToken?: CustomerAccessTokenGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields to update the Customer information. */
export interface CustomerUpdateInput {
/** The customer’s first name. */
firstName?: (Scalars['String'] | null),
/** The customer’s last name. */
lastName?: (Scalars['String'] | null),
/** The customer’s email. */
email?: (Scalars['String'] | null),
/**
 * A unique phone number for the customer.
 * 
 * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
 * 
 */
phone?: (Scalars['String'] | null),
/** The login password used by the customer. */
password?: (Scalars['String'] | null),
/** Indicates whether the customer has consented to be sent marketing material via email. */
acceptsMarketing?: (Scalars['Boolean'] | null)}


/** Return type for `customerUpdate` mutation. */
export interface CustomerUpdatePayloadGenqlSelection{
    /** The updated customer object. */
    customer?: CustomerGenqlSelection
    /**
     * The newly created customer access token. If the customer's password is updated, all previous access tokens
     * (including the one used to perform this mutation) become invalid, and a new token is generated.
     * 
     */
    customerAccessToken?: CustomerAccessTokenGenqlSelection
    /** The list of errors that occurred from executing the mutation. */
    customerUserErrors?: CustomerUserErrorGenqlSelection
    /**
     * @deprecated Use `customerUserErrors` instead.
     * The list of errors that occurred from executing the mutation.
     */
    userErrors?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents an error that happens during execution of a customer mutation. */
export interface CustomerUserErrorGenqlSelection{
    /** The error code. */
    code?: boolean | number
    /** The path to the input field that caused the error. */
    field?: boolean | number
    /** The error message. */
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A delivery address of the buyer that is interacting with the cart. */
export interface DeliveryAddressGenqlSelection{
    on_MailingAddress?:MailingAddressGenqlSelection,
    on_Node?: NodeGenqlSelection,
    __typename?: boolean | number
}


/**
 * The input fields for delivery address preferences.
 * 
 */
export interface DeliveryAddressInput {
/** A delivery address preference of a buyer that is interacting with the cart. */
deliveryAddress?: (MailingAddressInput | null)}


/**
 * An amount discounting the line that has been allocated by a discount.
 * 
 */
export interface DiscountAllocationGenqlSelection{
    /** Amount of discount allocated. */
    allocatedAmount?: MoneyV2GenqlSelection
    /** The discount this allocated amount originated from. */
    discountApplication?: DiscountApplicationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 * 
 */
export interface DiscountApplicationGenqlSelection{
    /** The method by which the discount's value is allocated to its entitled items. */
    allocationMethod?: boolean | number
    /** Which lines of targetType that the discount is allocated over. */
    targetSelection?: boolean | number
    /** The type of line that the discount is applicable towards. */
    targetType?: boolean | number
    /** The value of the discount application. */
    value?: PricingValueGenqlSelection
    on_AutomaticDiscountApplication?: AutomaticDiscountApplicationGenqlSelection
    on_DiscountCodeApplication?: DiscountCodeApplicationGenqlSelection
    on_ManualDiscountApplication?: ManualDiscountApplicationGenqlSelection
    on_ScriptDiscountApplication?: ScriptDiscountApplicationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple DiscountApplications.
 * 
 */
export interface DiscountApplicationConnectionGenqlSelection{
    /** A list of edges. */
    edges?: DiscountApplicationEdgeGenqlSelection
    /** A list of the nodes contained in DiscountApplicationEdge. */
    nodes?: DiscountApplicationGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one DiscountApplication and a cursor during pagination.
 * 
 */
export interface DiscountApplicationEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of DiscountApplicationEdge. */
    node?: DiscountApplicationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
 * 
 */
export interface DiscountCodeApplicationGenqlSelection{
    /** The method by which the discount's value is allocated to its entitled items. */
    allocationMethod?: boolean | number
    /** Specifies whether the discount code was applied successfully. */
    applicable?: boolean | number
    /** The string identifying the discount code that was used at the time of application. */
    code?: boolean | number
    /** Which lines of targetType that the discount is allocated over. */
    targetSelection?: boolean | number
    /** The type of line that the discount is applicable towards. */
    targetType?: boolean | number
    /** The value of the discount application. */
    value?: PricingValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents an error in the input of a mutation. */
export interface DisplayableErrorGenqlSelection{
    /** The path to the input field that caused the error. */
    field?: boolean | number
    /** The error message. */
    message?: boolean | number
    on_CartUserError?: CartUserErrorGenqlSelection
    on_CheckoutUserError?: CheckoutUserErrorGenqlSelection
    on_CustomerUserError?: CustomerUserErrorGenqlSelection
    on_UserError?: UserErrorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a web address. */
export interface DomainGenqlSelection{
    /** The host name of the domain (eg: `example.com`). */
    host?: boolean | number
    /** Whether SSL is enabled or not. */
    sslEnabled?: boolean | number
    /** The URL of the domain (eg: `https://example.com`). */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a video hosted outside of Shopify. */
export interface ExternalVideoGenqlSelection{
    /** A word or phrase to share the nature or contents of a media. */
    alt?: boolean | number
    /** The embed URL of the video for the respective host. */
    embedUrl?: boolean | number
    /**
     * @deprecated Use `originUrl` instead.
     * The URL.
     */
    embeddedUrl?: boolean | number
    /** The host of the external video. */
    host?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** The media content type. */
    mediaContentType?: boolean | number
    /** The origin URL of the video on the respective host. */
    originUrl?: boolean | number
    /** The preview image for the media. */
    previewImage?: ImageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A filter that is supported on the parent field. */
export interface FilterGenqlSelection{
    /** A unique identifier. */
    id?: boolean | number
    /** A human-friendly string for this filter. */
    label?: boolean | number
    /** An enumeration that denotes the type of data this filter represents. */
    type?: boolean | number
    /** The list of values for this filter. */
    values?: FilterValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A selectable value within a filter. */
export interface FilterValueGenqlSelection{
    /** The number of results that match this filter value. */
    count?: boolean | number
    /** A unique identifier. */
    id?: boolean | number
    /**
     * An input object that can be used to filter by this value on the parent field.
     * 
     * The value is provided as a helper for building dynamic filtering UI. For example, if you have a list of selected `FilterValue` objects, you can combine their respective `input` values to use in a subsequent query.
     * 
     */
    input?: boolean | number
    /** A human-friendly string for this filter value. */
    label?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a single fulfillment in an order. */
export interface FulfillmentGenqlSelection{
    /** List of the fulfillment's line items. */
    fulfillmentLineItems?: (FulfillmentLineItemConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** The name of the tracking company. */
    trackingCompany?: boolean | number
    /**
     * Tracking information associated with the fulfillment,
     * such as the tracking number and tracking URL.
     * 
     */
    trackingInfo?: (FulfillmentTrackingInfoGenqlSelection & { __args?: {
    /** Truncate the array result to this size. */
    first?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
export interface FulfillmentLineItemGenqlSelection{
    /** The associated order's line item. */
    lineItem?: OrderLineItemGenqlSelection
    /** The amount fulfilled in this fulfillment. */
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple FulfillmentLineItems.
 * 
 */
export interface FulfillmentLineItemConnectionGenqlSelection{
    /** A list of edges. */
    edges?: FulfillmentLineItemEdgeGenqlSelection
    /** A list of the nodes contained in FulfillmentLineItemEdge. */
    nodes?: FulfillmentLineItemGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.
 * 
 */
export interface FulfillmentLineItemEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of FulfillmentLineItemEdge. */
    node?: FulfillmentLineItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Tracking information associated with the fulfillment. */
export interface FulfillmentTrackingInfoGenqlSelection{
    /** The tracking number of the fulfillment. */
    number?: boolean | number
    /** The URL to track the fulfillment. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The generic file resource lets you manage files in a merchant’s store. Generic files include any file that doesn’t fit into a designated type such as image or video. Example: PDF, JSON. */
export interface GenericFileGenqlSelection{
    /** A word or phrase to indicate the contents of a file. */
    alt?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** The MIME type of the file. */
    mimeType?: boolean | number
    /** The size of the original file in bytes. */
    originalFileSize?: boolean | number
    /** The preview image for the file. */
    previewImage?: ImageGenqlSelection
    /** The URL of the file. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields used to specify a geographical location. */
export interface GeoCoordinateInput {
/** The coordinate's latitude value. */
latitude?: Scalars['Float'],
/** The coordinate's longitude value. */
longitude?: Scalars['Float']}


/** Represents information about the metafields associated to the specified resource. */
export interface HasMetafieldsGenqlSelection{
    /** Returns a metafield found by namespace and key. */
    metafield?: (MetafieldGenqlSelection & { __args: {
    /** A container for a set of metafields. */
    namespace: Scalars['String'], 
    /** The identifier for the metafield. */
    key: Scalars['String']} })
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields?: (MetafieldGenqlSelection & { __args: {
    /** The list of metafields to retrieve by namespace and key. */
    identifiers: HasMetafieldsIdentifier[]} })
    on_Article?: ArticleGenqlSelection
    on_Blog?: BlogGenqlSelection
    on_Collection?: CollectionGenqlSelection
    on_Customer?: CustomerGenqlSelection
    on_Order?: OrderGenqlSelection
    on_Page?: PageGenqlSelection
    on_Product?: ProductGenqlSelection
    on_ProductVariant?: ProductVariantGenqlSelection
    on_Shop?: ShopGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields to identify a metafield on an owner resource by namespace and key. */
export interface HasMetafieldsIdentifier {
/** A container for a set of metafields. */
namespace?: Scalars['String'],
/** The identifier for the metafield. */
key?: Scalars['String']}


/** Represents an image resource. */
export interface ImageGenqlSelection{
    /** A word or phrase to share the nature or contents of an image. */
    altText?: boolean | number
    /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
    height?: boolean | number
    /** A unique ID for the image. */
    id?: boolean | number
    /**
     * @deprecated Use `url` instead.
     * The location of the original image as a URL.
     * 
     * If there are any existing transformations in the original source URL, they will remain and not be stripped.
     * 
     */
    originalSrc?: boolean | number
    /**
     * @deprecated Use `url` instead.
     * The location of the image as a URL.
     */
    src?: boolean | number
    /**
     * @deprecated Use `url(transform:)` instead
     * The location of the transformed image as a URL.
     * 
     * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
     * Otherwise any transformations which an image type does not support will be ignored.
     * 
     */
    transformedSrc?: { __args: {
    /** Image width in pixels between 1 and 5760. */
    maxWidth?: (Scalars['Int'] | null), 
    /** Image height in pixels between 1 and 5760. */
    maxHeight?: (Scalars['Int'] | null), 
    /** Crops the image according to the specified region. */
    crop?: (CropRegion | null), 
    /** Image size multiplier for high-resolution retina displays. Must be between 1 and 3. */
    scale?: (Scalars['Int'] | null), 
    /** Best effort conversion of image into content type (SVG -> PNG, Anything -> JPG, Anything -> WEBP are supported). */
    preferredContentType?: (ImageContentType | null)} } | boolean | number
    /**
     * The location of the image as a URL.
     * 
     * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
     * 
     * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
     * 
     * If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).
     * 
     */
    url?: { __args: {
    /** A set of options to transform the original image. */
    transform?: (ImageTransformInput | null)} } | boolean | number
    /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple Images.
 * 
 */
export interface ImageConnectionGenqlSelection{
    /** A list of edges. */
    edges?: ImageEdgeGenqlSelection
    /** A list of the nodes contained in ImageEdge. */
    nodes?: ImageGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one Image and a cursor during pagination.
 * 
 */
export interface ImageEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of ImageEdge. */
    node?: ImageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The available options for transforming an image.
 * 
 * All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.
 * 
 */
export interface ImageTransformInput {
/**
 * The region of the image to remain after cropping.
 * Must be used in conjunction with the `maxWidth` and/or `maxHeight` fields, where the `maxWidth` and `maxHeight` aren't equal.
 * The `crop` argument should coincide with the smaller value. A smaller `maxWidth` indicates a `LEFT` or `RIGHT` crop, while
 * a smaller `maxHeight` indicates a `TOP` or `BOTTOM` crop. For example, `{ maxWidth: 5, maxHeight: 10, crop: LEFT }` will result
 * in an image with a width of 5 and height of 10, where the right side of the image is removed.
 * 
 */
crop?: (CropRegion | null),
/**
 * Image width in pixels between 1 and 5760.
 * 
 */
maxWidth?: (Scalars['Int'] | null),
/**
 * Image height in pixels between 1 and 5760.
 * 
 */
maxHeight?: (Scalars['Int'] | null),
/**
 * Image size multiplier for high-resolution retina displays. Must be within 1..3.
 * 
 */
scale?: (Scalars['Int'] | null),
/**
 * Convert the source image into the preferred content type.
 * Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.
 * 
 */
preferredContentType?: (ImageContentType | null)}


/** A language. */
export interface LanguageGenqlSelection{
    /** The name of the language in the language itself. If the language uses capitalization, it is capitalized for a mid-sentence position. */
    endonymName?: boolean | number
    /** The ISO code. */
    isoCode?: boolean | number
    /** The name of the language in the current language. */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Information about the localized experiences configured for the shop. */
export interface LocalizationGenqlSelection{
    /** The list of countries with enabled localized experiences. */
    availableCountries?: CountryGenqlSelection
    /** The list of languages available for the active country. */
    availableLanguages?: LanguageGenqlSelection
    /** The country of the active localized experience. Use the `@inContext` directive to change this value. */
    country?: CountryGenqlSelection
    /** The language of the active localized experience. Use the `@inContext` directive to change this value. */
    language?: LanguageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a location where product inventory is held. */
export interface LocationGenqlSelection{
    /** The address of the location. */
    address?: LocationAddressGenqlSelection
    /** A globally-unique ID. */
    id?: boolean | number
    /** The name of the location. */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents the address of a location.
 * 
 */
export interface LocationAddressGenqlSelection{
    /** The first line of the address for the location. */
    address1?: boolean | number
    /** The second line of the address for the location. */
    address2?: boolean | number
    /** The city of the location. */
    city?: boolean | number
    /** The country of the location. */
    country?: boolean | number
    /** The country code of the location. */
    countryCode?: boolean | number
    /** A formatted version of the address for the location. */
    formatted?: boolean | number
    /** The latitude coordinates of the location. */
    latitude?: boolean | number
    /** The longitude coordinates of the location. */
    longitude?: boolean | number
    /** The phone number of the location. */
    phone?: boolean | number
    /** The province of the location. */
    province?: boolean | number
    /**
     * The code for the province, state, or district of the address of the location.
     * 
     */
    provinceCode?: boolean | number
    /** The ZIP code of the location. */
    zip?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple Locations.
 * 
 */
export interface LocationConnectionGenqlSelection{
    /** A list of edges. */
    edges?: LocationEdgeGenqlSelection
    /** A list of the nodes contained in LocationEdge. */
    nodes?: LocationGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one Location and a cursor during pagination.
 * 
 */
export interface LocationEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of LocationEdge. */
    node?: LocationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a mailing address for customers and shipping. */
export interface MailingAddressGenqlSelection{
    /** The first line of the address. Typically the street address or PO Box number. */
    address1?: boolean | number
    /**
     * The second line of the address. Typically the number of the apartment, suite, or unit.
     * 
     */
    address2?: boolean | number
    /**
     * The name of the city, district, village, or town.
     * 
     */
    city?: boolean | number
    /**
     * The name of the customer's company or organization.
     * 
     */
    company?: boolean | number
    /**
     * The name of the country.
     * 
     */
    country?: boolean | number
    /**
     * @deprecated Use `countryCodeV2` instead.
     * The two-letter code for the country of the address.
     * 
     * For example, US.
     * 
     */
    countryCode?: boolean | number
    /**
     * The two-letter code for the country of the address.
     * 
     * For example, US.
     * 
     */
    countryCodeV2?: boolean | number
    /** The first name of the customer. */
    firstName?: boolean | number
    /** A formatted version of the address, customized by the provided arguments. */
    formatted?: { __args: {
    /** Whether to include the customer's name in the formatted address. */
    withName?: (Scalars['Boolean'] | null), 
    /** Whether to include the customer's company in the formatted address. */
    withCompany?: (Scalars['Boolean'] | null)} } | boolean | number
    /** A comma-separated list of the values for city, province, and country. */
    formattedArea?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** The last name of the customer. */
    lastName?: boolean | number
    /** The latitude coordinate of the customer address. */
    latitude?: boolean | number
    /** The longitude coordinate of the customer address. */
    longitude?: boolean | number
    /**
     * The full name of the customer, based on firstName and lastName.
     * 
     */
    name?: boolean | number
    /**
     * A unique phone number for the customer.
     * 
     * Formatted using E.164 standard. For example, _+16135551111_.
     * 
     */
    phone?: boolean | number
    /** The region of the address, such as the province, state, or district. */
    province?: boolean | number
    /**
     * The two-letter code for the region.
     * 
     * For example, ON.
     * 
     */
    provinceCode?: boolean | number
    /** The zip or postal code of the address. */
    zip?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple MailingAddresses.
 * 
 */
export interface MailingAddressConnectionGenqlSelection{
    /** A list of edges. */
    edges?: MailingAddressEdgeGenqlSelection
    /** A list of the nodes contained in MailingAddressEdge. */
    nodes?: MailingAddressGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one MailingAddress and a cursor during pagination.
 * 
 */
export interface MailingAddressEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of MailingAddressEdge. */
    node?: MailingAddressGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields to create or update a mailing address. */
export interface MailingAddressInput {
/**
 * The first line of the address. Typically the street address or PO Box number.
 * 
 */
address1?: (Scalars['String'] | null),
/**
 * The second line of the address. Typically the number of the apartment, suite, or unit.
 * 
 */
address2?: (Scalars['String'] | null),
/**
 * The name of the city, district, village, or town.
 * 
 */
city?: (Scalars['String'] | null),
/**
 * The name of the customer's company or organization.
 * 
 */
company?: (Scalars['String'] | null),
/** The name of the country. */
country?: (Scalars['String'] | null),
/** The first name of the customer. */
firstName?: (Scalars['String'] | null),
/** The last name of the customer. */
lastName?: (Scalars['String'] | null),
/**
 * A unique phone number for the customer.
 * 
 * Formatted using E.164 standard. For example, _+16135551111_.
 * 
 */
phone?: (Scalars['String'] | null),
/** The region of the address, such as the province, state, or district. */
province?: (Scalars['String'] | null),
/** The zip or postal code of the address. */
zip?: (Scalars['String'] | null)}


/**
 * Manual discount applications capture the intentions of a discount that was manually created.
 * 
 */
export interface ManualDiscountApplicationGenqlSelection{
    /** The method by which the discount's value is allocated to its entitled items. */
    allocationMethod?: boolean | number
    /** The description of the application. */
    description?: boolean | number
    /** Which lines of targetType that the discount is allocated over. */
    targetSelection?: boolean | number
    /** The type of line that the discount is applicable towards. */
    targetType?: boolean | number
    /** The title of the application. */
    title?: boolean | number
    /** The value of the discount application. */
    value?: PricingValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a media interface. */
export interface MediaGenqlSelection{
    /** A word or phrase to share the nature or contents of a media. */
    alt?: boolean | number
    /** The media content type. */
    mediaContentType?: boolean | number
    /** The preview image for the media. */
    previewImage?: ImageGenqlSelection
    on_ExternalVideo?: ExternalVideoGenqlSelection
    on_MediaImage?: MediaImageGenqlSelection
    on_Model3d?: Model3dGenqlSelection
    on_Video?: VideoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple Media.
 * 
 */
export interface MediaConnectionGenqlSelection{
    /** A list of edges. */
    edges?: MediaEdgeGenqlSelection
    /** A list of the nodes contained in MediaEdge. */
    nodes?: MediaGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one Media and a cursor during pagination.
 * 
 */
export interface MediaEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of MediaEdge. */
    node?: MediaGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a Shopify hosted image. */
export interface MediaImageGenqlSelection{
    /** A word or phrase to share the nature or contents of a media. */
    alt?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** The image for the media. */
    image?: ImageGenqlSelection
    /** The media content type. */
    mediaContentType?: boolean | number
    /** The preview image for the media. */
    previewImage?: ImageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A [navigation menu](https://help.shopify.com/manual/online-store/menus-and-links) representing a hierarchy
 * of hyperlinks (items).
 * 
 */
export interface MenuGenqlSelection{
    /** The menu's handle. */
    handle?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** The menu's child items. */
    items?: MenuItemGenqlSelection
    /** The count of items on the menu. */
    itemsCount?: boolean | number
    /** The menu's title. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A menu item within a parent menu.
 * 
 */
export interface MenuItemGenqlSelection{
    /** A globally-unique ID. */
    id?: boolean | number
    /** The menu item's child items. */
    items?: MenuItemGenqlSelection
    /** The ID of the linked resource. */
    resourceId?: boolean | number
    /** The menu item's tags to filter a collection. */
    tags?: boolean | number
    /** The menu item's title. */
    title?: boolean | number
    /** The menu item's type. */
    type?: boolean | number
    /** The menu item's URL. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The merchandise to be purchased at checkout. */
export interface MerchandiseGenqlSelection{
    on_ProductVariant?:ProductVariantGenqlSelection,
    on_HasMetafields?: HasMetafieldsGenqlSelection,
    on_Node?: NodeGenqlSelection,
    __typename?: boolean | number
}


/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 * 
 */
export interface MetafieldGenqlSelection{
    /** The date and time when the storefront metafield was created. */
    createdAt?: boolean | number
    /** The description of a metafield. */
    description?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** The unique identifier for the metafield within its namespace. */
    key?: boolean | number
    /** The container for a group of metafields that the metafield is associated with. */
    namespace?: boolean | number
    /** The type of resource that the metafield is attached to. */
    parentResource?: MetafieldParentResourceGenqlSelection
    /** Returns a reference object if the metafield's type is a resource reference. */
    reference?: MetafieldReferenceGenqlSelection
    /** A list of reference objects if the metafield's type is a resource reference list. */
    references?: (MetafieldReferenceConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null)} })
    /**
     * The type name of the metafield.
     * Refer to the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
     * 
     */
    type?: boolean | number
    /** The date and time when the metafield was last updated. */
    updatedAt?: boolean | number
    /** The data stored in the metafield. Always stored as a string, regardless of the metafield's type. */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A filter used to view a subset of products in a collection matching a specific metafield value.
 * 
 * Only the following metafield types are currently supported:
 * - `number_integer`
 * - `number_decimal`
 * - `single_line_text_field`
 * - `boolean` as of 2022-04.
 * 
 */
export interface MetafieldFilter {
/** The namespace of the metafield to filter on. */
namespace?: Scalars['String'],
/** The key of the metafield to filter on. */
key?: Scalars['String'],
/** The value of the metafield. */
value?: Scalars['String']}


/** A resource that the metafield belongs to. */
export interface MetafieldParentResourceGenqlSelection{
    on_Article?:ArticleGenqlSelection,
    on_Blog?:BlogGenqlSelection,
    on_Collection?:CollectionGenqlSelection,
    on_Customer?:CustomerGenqlSelection,
    on_Order?:OrderGenqlSelection,
    on_Page?:PageGenqlSelection,
    on_Product?:ProductGenqlSelection,
    on_ProductVariant?:ProductVariantGenqlSelection,
    on_Shop?:ShopGenqlSelection,
    on_HasMetafields?: HasMetafieldsGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_OnlineStorePublishable?: OnlineStorePublishableGenqlSelection,
    __typename?: boolean | number
}


/**
 * Returns the resource which is being referred to by a metafield.
 * 
 */
export interface MetafieldReferenceGenqlSelection{
    on_Collection?:CollectionGenqlSelection,
    on_GenericFile?:GenericFileGenqlSelection,
    on_MediaImage?:MediaImageGenqlSelection,
    on_Metaobject?:MetaobjectGenqlSelection,
    on_Page?:PageGenqlSelection,
    on_Product?:ProductGenqlSelection,
    on_ProductVariant?:ProductVariantGenqlSelection,
    on_Video?:VideoGenqlSelection,
    on_HasMetafields?: HasMetafieldsGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_OnlineStorePublishable?: OnlineStorePublishableGenqlSelection,
    on_Media?: MediaGenqlSelection,
    __typename?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple MetafieldReferences.
 * 
 */
export interface MetafieldReferenceConnectionGenqlSelection{
    /** A list of edges. */
    edges?: MetafieldReferenceEdgeGenqlSelection
    /** A list of the nodes contained in MetafieldReferenceEdge. */
    nodes?: MetafieldReferenceGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one MetafieldReference and a cursor during pagination.
 * 
 */
export interface MetafieldReferenceEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of MetafieldReferenceEdge. */
    node?: MetafieldReferenceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An instance of a user-defined model based on a MetaobjectDefinition. */
export interface MetaobjectGenqlSelection{
    /** Accesses a field of the object by key. */
    field?: (MetaobjectFieldGenqlSelection & { __args: {
    /** The key of the field. */
    key: Scalars['String']} })
    /**
     * All object fields with defined values.
     * Omitted object keys can be assumed null, and no guarantees are made about field order.
     * 
     */
    fields?: MetaobjectFieldGenqlSelection
    /** The unique handle of the metaobject. Useful as a custom ID. */
    handle?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** The type of the metaobject. Defines the namespace of its associated metafields. */
    type?: boolean | number
    /** The date and time when the metaobject was last updated. */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple Metaobjects.
 * 
 */
export interface MetaobjectConnectionGenqlSelection{
    /** A list of edges. */
    edges?: MetaobjectEdgeGenqlSelection
    /** A list of the nodes contained in MetaobjectEdge. */
    nodes?: MetaobjectGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one Metaobject and a cursor during pagination.
 * 
 */
export interface MetaobjectEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of MetaobjectEdge. */
    node?: MetaobjectGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Provides the value of a Metaobject field. */
export interface MetaobjectFieldGenqlSelection{
    /** The field key. */
    key?: boolean | number
    /** A referenced object if the field type is a resource reference. */
    reference?: MetafieldReferenceGenqlSelection
    /** A list of referenced objects if the field type is a resource reference list. */
    references?: (MetafieldReferenceConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null)} })
    /**
     * The type name of the field.
     * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
     * 
     */
    type?: boolean | number
    /** The field value. */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields used to retrieve a metaobject by handle. */
export interface MetaobjectHandleInput {
/** The handle of the metaobject. */
handle?: Scalars['String'],
/** The type of the metaobject. */
type?: Scalars['String']}


/** Represents a Shopify hosted 3D model. */
export interface Model3dGenqlSelection{
    /** A word or phrase to share the nature or contents of a media. */
    alt?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** The media content type. */
    mediaContentType?: boolean | number
    /** The preview image for the media. */
    previewImage?: ImageGenqlSelection
    /** The sources for a 3d model. */
    sources?: Model3dSourceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a source for a Shopify hosted 3d model. */
export interface Model3dSourceGenqlSelection{
    /** The filesize of the 3d model. */
    filesize?: boolean | number
    /** The format of the 3d model. */
    format?: boolean | number
    /** The MIME type of the 3d model. */
    mimeType?: boolean | number
    /** The URL of the 3d model. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields for a monetary value with currency. */
export interface MoneyInput {
/** Decimal money amount. */
amount?: Scalars['Decimal'],
/** Currency of the money. */
currencyCode?: CurrencyCode}


/**
 * A monetary value with currency.
 * 
 */
export interface MoneyV2GenqlSelection{
    /** Decimal money amount. */
    amount?: boolean | number
    /** Currency of the money. */
    currencyCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface MutationGenqlSelection{
    /** Updates the attributes on a cart. */
    cartAttributesUpdate?: (CartAttributesUpdatePayloadGenqlSelection & { __args: {
    /** An array of key-value pairs that contains additional information about the cart. */
    attributes: AttributeInput[], 
    /** The ID of the cart. */
    cartId: Scalars['ID']} })
    /**
     * Updates customer information associated with a cart.
     * Buyer identity is used to determine
     * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
     * and should match the customer's shipping address.
     * 
     */
    cartBuyerIdentityUpdate?: (CartBuyerIdentityUpdatePayloadGenqlSelection & { __args: {
    /** The ID of the cart. */
    cartId: Scalars['ID'], 
    /**
     * The customer associated with the cart. Used to determine
     * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
     * Buyer identity should match the customer's shipping address.
     * 
     */
    buyerIdentity: CartBuyerIdentityInput} })
    /** Creates a new cart. */
    cartCreate?: (CartCreatePayloadGenqlSelection & { __args?: {
    /** The fields used to create a cart. */
    input?: (CartInput | null)} })
    /** Updates the discount codes applied to the cart. */
    cartDiscountCodesUpdate?: (CartDiscountCodesUpdatePayloadGenqlSelection & { __args: {
    /** The ID of the cart. */
    cartId: Scalars['ID'], 
    /**
     * The case-insensitive discount codes that the customer added at checkout.
     * 
     */
    discountCodes?: (Scalars['String'][] | null)} })
    /** Adds a merchandise line to the cart. */
    cartLinesAdd?: (CartLinesAddPayloadGenqlSelection & { __args: {
    /** A list of merchandise lines to add to the cart. */
    lines: CartLineInput[], 
    /** The ID of the cart. */
    cartId: Scalars['ID']} })
    /** Removes one or more merchandise lines from the cart. */
    cartLinesRemove?: (CartLinesRemovePayloadGenqlSelection & { __args: {
    /** The ID of the cart. */
    cartId: Scalars['ID'], 
    /** The merchandise line IDs to remove. */
    lineIds: Scalars['ID'][]} })
    /** Updates one or more merchandise lines on a cart. */
    cartLinesUpdate?: (CartLinesUpdatePayloadGenqlSelection & { __args: {
    /** The ID of the cart. */
    cartId: Scalars['ID'], 
    /** The merchandise lines to update. */
    lines: CartLineUpdateInput[]} })
    /** Updates the note on the cart. */
    cartNoteUpdate?: (CartNoteUpdatePayloadGenqlSelection & { __args: {
    /** The ID of the cart. */
    cartId: Scalars['ID'], 
    /** The note on the cart. */
    note?: (Scalars['String'] | null)} })
    /** Update the selected delivery options for a delivery group. */
    cartSelectedDeliveryOptionsUpdate?: (CartSelectedDeliveryOptionsUpdatePayloadGenqlSelection & { __args: {
    /** The ID of the cart. */
    cartId: Scalars['ID'], 
    /** The selected delivery options. */
    selectedDeliveryOptions: CartSelectedDeliveryOptionInput[]} })
    /** Updates the attributes of a checkout if `allowPartialAddresses` is `true`. */
    checkoutAttributesUpdateV2?: (CheckoutAttributesUpdateV2PayloadGenqlSelection & { __args: {
    /** The ID of the checkout. */
    checkoutId: Scalars['ID'], 
    /** The checkout attributes to update. */
    input: CheckoutAttributesUpdateV2Input} })
    /** Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card. */
    checkoutCompleteFree?: (CheckoutCompleteFreePayloadGenqlSelection & { __args: {
    /** The ID of the checkout. */
    checkoutId: Scalars['ID']} })
    /** Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to  [_request payment processing_](https://shopify.dev/apps/channels/getting-started#request-payment-processing). */
    checkoutCompleteWithCreditCardV2?: (CheckoutCompleteWithCreditCardV2PayloadGenqlSelection & { __args: {
    /** The ID of the checkout. */
    checkoutId: Scalars['ID'], 
    /** The credit card info to apply as a payment. */
    payment: CreditCardPaymentInputV2} })
    /** Completes a checkout with a tokenized payment. */
    checkoutCompleteWithTokenizedPaymentV3?: (CheckoutCompleteWithTokenizedPaymentV3PayloadGenqlSelection & { __args: {
    /** The ID of the checkout. */
    checkoutId: Scalars['ID'], 
    /** The info to apply as a tokenized payment. */
    payment: TokenizedPaymentInputV3} })
    /** Creates a new checkout. */
    checkoutCreate?: (CheckoutCreatePayloadGenqlSelection & { __args: {
    /** The fields used to create a checkout. */
    input: CheckoutCreateInput, 
    /** The checkout queue token. Available only to selected stores. */
    queueToken?: (Scalars['String'] | null)} })
    /** Associates a customer to the checkout. */
    checkoutCustomerAssociateV2?: (CheckoutCustomerAssociateV2PayloadGenqlSelection & { __args: {
    /** The ID of the checkout. */
    checkoutId: Scalars['ID'], 
    /** The customer access token of the customer to associate. */
    customerAccessToken: Scalars['String']} })
    /** Disassociates the current checkout customer from the checkout. */
    checkoutCustomerDisassociateV2?: (CheckoutCustomerDisassociateV2PayloadGenqlSelection & { __args: {
    /** The ID of the checkout. */
    checkoutId: Scalars['ID']} })
    /** Applies a discount to an existing checkout using a discount code. */
    checkoutDiscountCodeApplyV2?: (CheckoutDiscountCodeApplyV2PayloadGenqlSelection & { __args: {
    /** The discount code to apply to the checkout. */
    discountCode: Scalars['String'], 
    /** The ID of the checkout. */
    checkoutId: Scalars['ID']} })
    /** Removes the applied discounts from an existing checkout. */
    checkoutDiscountCodeRemove?: (CheckoutDiscountCodeRemovePayloadGenqlSelection & { __args: {
    /** The ID of the checkout. */
    checkoutId: Scalars['ID']} })
    /** Updates the email on an existing checkout. */
    checkoutEmailUpdateV2?: (CheckoutEmailUpdateV2PayloadGenqlSelection & { __args: {
    /** The ID of the checkout. */
    checkoutId: Scalars['ID'], 
    /** The email to update the checkout with. */
    email: Scalars['String']} })
    /** Removes an applied gift card from the checkout. */
    checkoutGiftCardRemoveV2?: (CheckoutGiftCardRemoveV2PayloadGenqlSelection & { __args: {
    /** The ID of the Applied Gift Card to remove from the Checkout. */
    appliedGiftCardId: Scalars['ID'], 
    /** The ID of the checkout. */
    checkoutId: Scalars['ID']} })
    /** Appends gift cards to an existing checkout. */
    checkoutGiftCardsAppend?: (CheckoutGiftCardsAppendPayloadGenqlSelection & { __args: {
    /** A list of gift card codes to append to the checkout. */
    giftCardCodes: Scalars['String'][], 
    /** The ID of the checkout. */
    checkoutId: Scalars['ID']} })
    /** Adds a list of line items to a checkout. */
    checkoutLineItemsAdd?: (CheckoutLineItemsAddPayloadGenqlSelection & { __args: {
    /** A list of line item objects to add to the checkout. */
    lineItems: CheckoutLineItemInput[], 
    /** The ID of the checkout. */
    checkoutId: Scalars['ID']} })
    /** Removes line items from an existing checkout. */
    checkoutLineItemsRemove?: (CheckoutLineItemsRemovePayloadGenqlSelection & { __args: {
    /** The checkout on which to remove line items. */
    checkoutId: Scalars['ID'], 
    /** Line item ids to remove. */
    lineItemIds: Scalars['ID'][]} })
    /** Sets a list of line items to a checkout. */
    checkoutLineItemsReplace?: (CheckoutLineItemsReplacePayloadGenqlSelection & { __args: {
    /** A list of line item objects to set on the checkout. */
    lineItems: CheckoutLineItemInput[], 
    /** The ID of the checkout. */
    checkoutId: Scalars['ID']} })
    /** Updates line items on a checkout. */
    checkoutLineItemsUpdate?: (CheckoutLineItemsUpdatePayloadGenqlSelection & { __args: {
    /** The checkout on which to update line items. */
    checkoutId: Scalars['ID'], 
    /** Line items to update. */
    lineItems: CheckoutLineItemUpdateInput[]} })
    /** Updates the shipping address of an existing checkout. */
    checkoutShippingAddressUpdateV2?: (CheckoutShippingAddressUpdateV2PayloadGenqlSelection & { __args: {
    /** The shipping address to where the line items will be shipped. */
    shippingAddress: MailingAddressInput, 
    /** The ID of the checkout. */
    checkoutId: Scalars['ID']} })
    /** Updates the shipping lines on an existing checkout. */
    checkoutShippingLineUpdate?: (CheckoutShippingLineUpdatePayloadGenqlSelection & { __args: {
    /** The ID of the checkout. */
    checkoutId: Scalars['ID'], 
    /** A unique identifier to a Checkout’s shipping provider, price, and title combination, enabling the customer to select the availableShippingRates. */
    shippingRateHandle: Scalars['String']} })
    /**
     * Creates a customer access token.
     * The customer access token is required to modify the customer object in any way.
     * 
     */
    customerAccessTokenCreate?: (CustomerAccessTokenCreatePayloadGenqlSelection & { __args: {
    /** The fields used to create a customer access token. */
    input: CustomerAccessTokenCreateInput} })
    /**
     * Creates a customer access token using a
     * [multipass token](https://shopify.dev/api/multipass) instead of email and
     * password. A customer record is created if the customer doesn't exist. If a customer
     * record already exists but the record is disabled, then the customer record is enabled.
     * 
     */
    customerAccessTokenCreateWithMultipass?: (CustomerAccessTokenCreateWithMultipassPayloadGenqlSelection & { __args: {
    /** A valid [multipass token](https://shopify.dev/api/multipass) to be authenticated. */
    multipassToken: Scalars['String']} })
    /** Permanently destroys a customer access token. */
    customerAccessTokenDelete?: (CustomerAccessTokenDeletePayloadGenqlSelection & { __args: {
    /** The access token used to identify the customer. */
    customerAccessToken: Scalars['String']} })
    /**
     * Renews a customer access token.
     * 
     * Access token renewal must happen *before* a token expires.
     * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
     * 
     */
    customerAccessTokenRenew?: (CustomerAccessTokenRenewPayloadGenqlSelection & { __args: {
    /** The access token used to identify the customer. */
    customerAccessToken: Scalars['String']} })
    /** Activates a customer. */
    customerActivate?: (CustomerActivatePayloadGenqlSelection & { __args: {
    /** Specifies the customer to activate. */
    id: Scalars['ID'], 
    /** The fields used to activate a customer. */
    input: CustomerActivateInput} })
    /** Activates a customer with the activation url received from `customerCreate`. */
    customerActivateByUrl?: (CustomerActivateByUrlPayloadGenqlSelection & { __args: {
    /** The customer activation URL. */
    activationUrl: Scalars['URL'], 
    /** A new password set during activation. */
    password: Scalars['String']} })
    /** Creates a new address for a customer. */
    customerAddressCreate?: (CustomerAddressCreatePayloadGenqlSelection & { __args: {
    /** The access token used to identify the customer. */
    customerAccessToken: Scalars['String'], 
    /** The customer mailing address to create. */
    address: MailingAddressInput} })
    /** Permanently deletes the address of an existing customer. */
    customerAddressDelete?: (CustomerAddressDeletePayloadGenqlSelection & { __args: {
    /** Specifies the address to delete. */
    id: Scalars['ID'], 
    /** The access token used to identify the customer. */
    customerAccessToken: Scalars['String']} })
    /** Updates the address of an existing customer. */
    customerAddressUpdate?: (CustomerAddressUpdatePayloadGenqlSelection & { __args: {
    /** The access token used to identify the customer. */
    customerAccessToken: Scalars['String'], 
    /** Specifies the customer address to update. */
    id: Scalars['ID'], 
    /** The customer’s mailing address. */
    address: MailingAddressInput} })
    /** Creates a new customer. */
    customerCreate?: (CustomerCreatePayloadGenqlSelection & { __args: {
    /** The fields used to create a new customer. */
    input: CustomerCreateInput} })
    /** Updates the default address of an existing customer. */
    customerDefaultAddressUpdate?: (CustomerDefaultAddressUpdatePayloadGenqlSelection & { __args: {
    /** The access token used to identify the customer. */
    customerAccessToken: Scalars['String'], 
    /** ID of the address to set as the new default for the customer. */
    addressId: Scalars['ID']} })
    /**
     * Sends a reset password email to the customer. The reset password
     * email contains a reset password URL and token that you can pass to
     * the [`customerResetByUrl`](https://shopify.dev/api/storefront/latest/mutations/customerResetByUrl) or
     * [`customerReset`](https://shopify.dev/api/storefront/latest/mutations/customerReset) mutation to reset the
     * customer password.
     * 
     * This mutation is throttled by IP. With authenticated access,
     * you can provide a [`Shopify-Storefront-Buyer-IP`](https://shopify.dev/api/usage/authentication#optional-ip-header) instead of the request IP.
     * 
     * Make sure that the value provided to `Shopify-Storefront-Buyer-IP` is trusted. Unthrottled access to this
     * mutation presents a security risk.
     * 
     */
    customerRecover?: (CustomerRecoverPayloadGenqlSelection & { __args: {
    /** The email address of the customer to recover. */
    email: Scalars['String']} })
    /**
     * "Resets a customer’s password with the token received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation."
     * 
     */
    customerReset?: (CustomerResetPayloadGenqlSelection & { __args: {
    /** Specifies the customer to reset. */
    id: Scalars['ID'], 
    /** The fields used to reset a customer’s password. */
    input: CustomerResetInput} })
    /**
     * "Resets a customer’s password with the reset password URL received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation."
     * 
     */
    customerResetByUrl?: (CustomerResetByUrlPayloadGenqlSelection & { __args: {
    /** The customer's reset password url. */
    resetUrl: Scalars['URL'], 
    /** New password that will be set as part of the reset password process. */
    password: Scalars['String']} })
    /** Updates an existing customer. */
    customerUpdate?: (CustomerUpdatePayloadGenqlSelection & { __args: {
    /** The access token used to identify the customer. */
    customerAccessToken: Scalars['String'], 
    /** The customer object input. */
    customer: CustomerUpdateInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 * 
 */
export interface NodeGenqlSelection{
    /** A globally-unique ID. */
    id?: boolean | number
    on_AppliedGiftCard?: AppliedGiftCardGenqlSelection
    on_Article?: ArticleGenqlSelection
    on_Blog?: BlogGenqlSelection
    on_Cart?: CartGenqlSelection
    on_CartLine?: CartLineGenqlSelection
    on_Checkout?: CheckoutGenqlSelection
    on_CheckoutLineItem?: CheckoutLineItemGenqlSelection
    on_Collection?: CollectionGenqlSelection
    on_Comment?: CommentGenqlSelection
    on_ExternalVideo?: ExternalVideoGenqlSelection
    on_GenericFile?: GenericFileGenqlSelection
    on_Location?: LocationGenqlSelection
    on_MailingAddress?: MailingAddressGenqlSelection
    on_MediaImage?: MediaImageGenqlSelection
    on_Menu?: MenuGenqlSelection
    on_MenuItem?: MenuItemGenqlSelection
    on_Metafield?: MetafieldGenqlSelection
    on_Metaobject?: MetaobjectGenqlSelection
    on_Model3d?: Model3dGenqlSelection
    on_Order?: OrderGenqlSelection
    on_Page?: PageGenqlSelection
    on_Payment?: PaymentGenqlSelection
    on_Product?: ProductGenqlSelection
    on_ProductOption?: ProductOptionGenqlSelection
    on_ProductVariant?: ProductVariantGenqlSelection
    on_Shop?: ShopGenqlSelection
    on_ShopPolicy?: ShopPolicyGenqlSelection
    on_UrlRedirect?: UrlRedirectGenqlSelection
    on_Video?: VideoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a resource that can be published to the Online Store sales channel. */
export interface OnlineStorePublishableGenqlSelection{
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: boolean | number
    on_Article?: ArticleGenqlSelection
    on_Blog?: BlogGenqlSelection
    on_Collection?: CollectionGenqlSelection
    on_Page?: PageGenqlSelection
    on_Product?: ProductGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface OrderGenqlSelection{
    /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
    cancelReason?: boolean | number
    /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
    canceledAt?: boolean | number
    /** The code of the currency used for the payment. */
    currencyCode?: boolean | number
    /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order. */
    currentSubtotalPrice?: MoneyV2GenqlSelection
    /** The total cost of duties for the order, including refunds. */
    currentTotalDuties?: MoneyV2GenqlSelection
    /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
    currentTotalPrice?: MoneyV2GenqlSelection
    /** The total of all taxes applied to the order, excluding taxes for returned line items. */
    currentTotalTax?: MoneyV2GenqlSelection
    /** A list of the custom attributes added to the order. */
    customAttributes?: AttributeGenqlSelection
    /** The locale code in which this specific order happened. */
    customerLocale?: boolean | number
    /** The unique URL that the customer can use to access the order. */
    customerUrl?: boolean | number
    /** Discounts that have been applied on the order. */
    discountApplications?: (DiscountApplicationConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** Whether the order has had any edits applied or not. */
    edited?: boolean | number
    /** The customer's email address. */
    email?: boolean | number
    /** The financial status of the order. */
    financialStatus?: boolean | number
    /** The fulfillment status for the order. */
    fulfillmentStatus?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** List of the order’s line items. */
    lineItems?: (OrderLineItemConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** Returns a metafield found by namespace and key. */
    metafield?: (MetafieldGenqlSelection & { __args: {
    /** A container for a set of metafields. */
    namespace: Scalars['String'], 
    /** The identifier for the metafield. */
    key: Scalars['String']} })
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields?: (MetafieldGenqlSelection & { __args: {
    /** The list of metafields to retrieve by namespace and key. */
    identifiers: HasMetafieldsIdentifier[]} })
    /**
     * Unique identifier for the order that appears on the order.
     * For example, _#1000_ or _Store1001.
     * 
     */
    name?: boolean | number
    /** A unique numeric identifier for the order for use by shop owner and customer. */
    orderNumber?: boolean | number
    /** The total cost of duties charged at checkout. */
    originalTotalDuties?: MoneyV2GenqlSelection
    /** The total price of the order before any applied edits. */
    originalTotalPrice?: MoneyV2GenqlSelection
    /** The customer's phone number for receiving SMS notifications. */
    phone?: boolean | number
    /**
     * The date and time when the order was imported.
     * This value can be set to dates in the past when importing from other systems.
     * If no value is provided, it will be auto-generated based on current date and time.
     * 
     */
    processedAt?: boolean | number
    /** The address to where the order will be shipped. */
    shippingAddress?: MailingAddressGenqlSelection
    /**
     * The discounts that have been allocated onto the shipping line by discount applications.
     * 
     */
    shippingDiscountAllocations?: DiscountAllocationGenqlSelection
    /** The unique URL for the order's status page. */
    statusUrl?: boolean | number
    /** Price of the order before shipping and taxes. */
    subtotalPrice?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `subtotalPrice` instead.
     * Price of the order before duties, shipping and taxes.
     */
    subtotalPriceV2?: MoneyV2GenqlSelection
    /** List of the order’s successful fulfillments. */
    successfulFulfillments?: (FulfillmentGenqlSelection & { __args?: {
    /** Truncate the array result to this size. */
    first?: (Scalars['Int'] | null)} })
    /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
    totalPrice?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `totalPrice` instead.
     * The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).
     */
    totalPriceV2?: MoneyV2GenqlSelection
    /** The total amount that has been refunded. */
    totalRefunded?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `totalRefunded` instead.
     * The total amount that has been refunded.
     */
    totalRefundedV2?: MoneyV2GenqlSelection
    /** The total cost of shipping. */
    totalShippingPrice?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `totalShippingPrice` instead.
     * The total cost of shipping.
     */
    totalShippingPriceV2?: MoneyV2GenqlSelection
    /** The total cost of taxes. */
    totalTax?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `totalTax` instead.
     * The total cost of taxes.
     */
    totalTaxV2?: MoneyV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple Orders.
 * 
 */
export interface OrderConnectionGenqlSelection{
    /** A list of edges. */
    edges?: OrderEdgeGenqlSelection
    /** A list of the nodes contained in OrderEdge. */
    nodes?: OrderGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** The total count of Orders. */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 * 
 */
export interface OrderEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of OrderEdge. */
    node?: OrderGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a single line in an order. There is one line item for each distinct product variant. */
export interface OrderLineItemGenqlSelection{
    /** The number of entries associated to the line item minus the items that have been removed. */
    currentQuantity?: boolean | number
    /** List of custom attributes associated to the line item. */
    customAttributes?: AttributeGenqlSelection
    /** The discounts that have been allocated onto the order line item by discount applications. */
    discountAllocations?: DiscountAllocationGenqlSelection
    /** The total price of the line item, including discounts, and displayed in the presentment currency. */
    discountedTotalPrice?: MoneyV2GenqlSelection
    /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency. */
    originalTotalPrice?: MoneyV2GenqlSelection
    /** The number of products variants associated to the line item. */
    quantity?: boolean | number
    /** The title of the product combined with title of the variant. */
    title?: boolean | number
    /** The product variant object associated to the line item. */
    variant?: ProductVariantGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple OrderLineItems.
 * 
 */
export interface OrderLineItemConnectionGenqlSelection{
    /** A list of edges. */
    edges?: OrderLineItemEdgeGenqlSelection
    /** A list of the nodes contained in OrderLineItemEdge. */
    nodes?: OrderLineItemGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one OrderLineItem and a cursor during pagination.
 * 
 */
export interface OrderLineItemEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of OrderLineItemEdge. */
    node?: OrderLineItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export interface PageGenqlSelection{
    /** The description of the page, complete with HTML formatting. */
    body?: boolean | number
    /** Summary of the page body. */
    bodySummary?: boolean | number
    /** The timestamp of the page creation. */
    createdAt?: boolean | number
    /** A human-friendly unique string for the page automatically generated from its title. */
    handle?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** Returns a metafield found by namespace and key. */
    metafield?: (MetafieldGenqlSelection & { __args: {
    /** A container for a set of metafields. */
    namespace: Scalars['String'], 
    /** The identifier for the metafield. */
    key: Scalars['String']} })
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields?: (MetafieldGenqlSelection & { __args: {
    /** The list of metafields to retrieve by namespace and key. */
    identifiers: HasMetafieldsIdentifier[]} })
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: boolean | number
    /** The page's SEO information. */
    seo?: SEOGenqlSelection
    /** The title of the page. */
    title?: boolean | number
    /** The timestamp of the latest page update. */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple Pages.
 * 
 */
export interface PageConnectionGenqlSelection{
    /** A list of edges. */
    edges?: PageEdgeGenqlSelection
    /** A list of the nodes contained in PageEdge. */
    nodes?: PageGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one Page and a cursor during pagination.
 * 
 */
export interface PageEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of PageEdge. */
    node?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 * For more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).
 * 
 */
export interface PageInfoGenqlSelection{
    /** The cursor corresponding to the last node in edges. */
    endCursor?: boolean | number
    /** Whether there are more pages to fetch following the current page. */
    hasNextPage?: boolean | number
    /** Whether there are any pages prior to the current page. */
    hasPreviousPage?: boolean | number
    /** The cursor corresponding to the first node in edges. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A payment applied to a checkout. */
export interface PaymentGenqlSelection{
    /** The amount of the payment. */
    amount?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `amount` instead.
     * The amount of the payment.
     */
    amountV2?: MoneyV2GenqlSelection
    /** The billing address for the payment. */
    billingAddress?: MailingAddressGenqlSelection
    /** The checkout to which the payment belongs. */
    checkout?: CheckoutGenqlSelection
    /** The credit card used for the payment in the case of direct payments. */
    creditCard?: CreditCardGenqlSelection
    /** A message describing a processing error during asynchronous processing. */
    errorMessage?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /**
     * A client-side generated token to identify a payment and perform idempotent operations.
     * For more information, refer to
     * [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
     * 
     */
    idempotencyKey?: boolean | number
    /** The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow. */
    nextActionUrl?: boolean | number
    /** Whether the payment is still processing asynchronously. */
    ready?: boolean | number
    /** A flag to indicate if the payment is to be done in test mode for gateways that support it. */
    test?: boolean | number
    /** The actual transaction recorded by Shopify after having processed the payment with the gateway. */
    transaction?: TransactionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Settings related to payments. */
export interface PaymentSettingsGenqlSelection{
    /** List of the card brands which the shop accepts. */
    acceptedCardBrands?: boolean | number
    /** The url pointing to the endpoint to vault credit cards. */
    cardVaultUrl?: boolean | number
    /** The country where the shop is located. */
    countryCode?: boolean | number
    /** The three-letter code for the shop's primary currency. */
    currencyCode?: boolean | number
    /** A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin. */
    enabledPresentmentCurrencies?: boolean | number
    /** The shop’s Shopify Payments account ID. */
    shopifyPaymentsAccountId?: boolean | number
    /** List of the digital wallets which the shop supports. */
    supportedDigitalWallets?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The input fields for a filter used to view a subset of products in a collection matching a specific price range.
 * 
 */
export interface PriceRangeFilter {
/** The minimum price in the range. Defaults to zero. */
min?: (Scalars['Float'] | null),
/** The maximum price in the range. Empty indicates no max price. */
max?: (Scalars['Float'] | null)}


/** The value of the percentage pricing object. */
export interface PricingPercentageValueGenqlSelection{
    /** The percentage value of the object. */
    percentage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The price value (fixed or percentage) for a discount application. */
export interface PricingValueGenqlSelection{
    on_MoneyV2?:MoneyV2GenqlSelection,
    on_PricingPercentageValue?:PricingPercentageValueGenqlSelection,
    __typename?: boolean | number
}


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface ProductGenqlSelection{
    /** Indicates if at least one product variant is available for sale. */
    availableForSale?: boolean | number
    /** List of collections a product belongs to. */
    collections?: (CollectionConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** The compare at price of the product across all variants. */
    compareAtPriceRange?: ProductPriceRangeGenqlSelection
    /** The date and time when the product was created. */
    createdAt?: boolean | number
    /** Stripped description of the product, single line with HTML tags removed. */
    description?: { __args: {
    /** Truncates string after the given length. */
    truncateAt?: (Scalars['Int'] | null)} } | boolean | number
    /** The description of the product, complete with HTML formatting. */
    descriptionHtml?: boolean | number
    /**
     * The featured image for the product.
     * 
     * This field is functionally equivalent to `images(first: 1)`.
     * 
     */
    featuredImage?: ImageGenqlSelection
    /**
     * A human-friendly unique string for the Product automatically generated from its title.
     * They are used by the Liquid templating language to refer to objects.
     * 
     */
    handle?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** List of images associated with the product. */
    images?: (ImageConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (ProductImageSortKeys | null)} })
    /** Whether the product is a gift card. */
    isGiftCard?: boolean | number
    /** The media associated with the product. */
    media?: (MediaConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (ProductMediaSortKeys | null)} })
    /** Returns a metafield found by namespace and key. */
    metafield?: (MetafieldGenqlSelection & { __args: {
    /** A container for a set of metafields. */
    namespace: Scalars['String'], 
    /** The identifier for the metafield. */
    key: Scalars['String']} })
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields?: (MetafieldGenqlSelection & { __args: {
    /** The list of metafields to retrieve by namespace and key. */
    identifiers: HasMetafieldsIdentifier[]} })
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: boolean | number
    /** List of product options. */
    options?: (ProductOptionGenqlSelection & { __args?: {
    /** Truncate the array result to this size. */
    first?: (Scalars['Int'] | null)} })
    /** The price range. */
    priceRange?: ProductPriceRangeGenqlSelection
    /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
    productType?: boolean | number
    /** The date and time when the product was published to the channel. */
    publishedAt?: boolean | number
    /** Whether the product can only be purchased with a selling plan. */
    requiresSellingPlan?: boolean | number
    /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
    sellingPlanGroups?: (SellingPlanGroupConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** The product's SEO information. */
    seo?: SEOGenqlSelection
    /**
     * A comma separated list of tags that have been added to the product.
     * Additional access scope required for private apps: unauthenticated_read_product_tags.
     * 
     */
    tags?: boolean | number
    /** The product’s title. */
    title?: boolean | number
    /** The total quantity of inventory in stock for this Product. */
    totalInventory?: boolean | number
    /**
     * The date and time when the product was last modified.
     * A product's `updatedAt` value can change for different reasons. For example, if an order
     * is placed for a product that has inventory tracking set up, then the inventory adjustment
     * is counted as an update.
     * 
     */
    updatedAt?: boolean | number
    /**
     * Find a product’s variant based on its selected options.
     * This is useful for converting a user’s selection of product options into a single matching variant.
     * If there is not a variant for the selected options, `null` will be returned.
     * 
     */
    variantBySelectedOptions?: (ProductVariantGenqlSelection & { __args: {
    /** The input fields used for a selected option. */
    selectedOptions: SelectedOptionInput[]} })
    /** List of the product’s variants. */
    variants?: (ProductVariantConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (ProductVariantSortKeys | null)} })
    /** The product’s vendor name. */
    vendor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple Products.
 * 
 */
export interface ProductConnectionGenqlSelection{
    /** A list of edges. */
    edges?: ProductEdgeGenqlSelection
    /** A list of available filters. */
    filters?: FilterGenqlSelection
    /** A list of the nodes contained in ProductEdge. */
    nodes?: ProductGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one Product and a cursor during pagination.
 * 
 */
export interface ProductEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of ProductEdge. */
    node?: ProductGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The input fields for a filter used to view a subset of products in a collection.
 * By default, the `available` and `price` filters are enabled. Filters are customized with the Shopify Search & Discovery app.
 * Learn more about [customizing storefront filtering](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).
 * 
 */
export interface ProductFilter {
/** Filter on if the product is available for sale. */
available?: (Scalars['Boolean'] | null),
/** A variant option to filter on. */
variantOption?: (VariantOptionFilter | null),
/** The product type to filter on. */
productType?: (Scalars['String'] | null),
/** The product vendor to filter on. */
productVendor?: (Scalars['String'] | null),
/** A range of prices to filter with-in. */
price?: (PriceRangeFilter | null),
/** A product metafield to filter on. */
productMetafield?: (MetafieldFilter | null),
/** A variant metafield to filter on. */
variantMetafield?: (MetafieldFilter | null),
/** A product tag to filter on. */
tag?: (Scalars['String'] | null)}


/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 * 
 */
export interface ProductOptionGenqlSelection{
    /** A globally-unique ID. */
    id?: boolean | number
    /** The product option’s name. */
    name?: boolean | number
    /** The corresponding value to the product option name. */
    values?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The price range of the product. */
export interface ProductPriceRangeGenqlSelection{
    /** The highest variant's price. */
    maxVariantPrice?: MoneyV2GenqlSelection
    /** The lowest variant's price. */
    minVariantPrice?: MoneyV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export interface ProductVariantGenqlSelection{
    /** Indicates if the product variant is available for sale. */
    availableForSale?: boolean | number
    /** The barcode (for example, ISBN, UPC, or GTIN) associated with the variant. */
    barcode?: boolean | number
    /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`. */
    compareAtPrice?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `compareAtPrice` instead.
     * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.
     */
    compareAtPriceV2?: MoneyV2GenqlSelection
    /** Whether a product is out of stock but still available for purchase (used for backorders). */
    currentlyNotInStock?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /**
     * Image associated with the product variant. This field falls back to the product image if no image is available.
     * 
     */
    image?: ImageGenqlSelection
    /** Returns a metafield found by namespace and key. */
    metafield?: (MetafieldGenqlSelection & { __args: {
    /** A container for a set of metafields. */
    namespace: Scalars['String'], 
    /** The identifier for the metafield. */
    key: Scalars['String']} })
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields?: (MetafieldGenqlSelection & { __args: {
    /** The list of metafields to retrieve by namespace and key. */
    identifiers: HasMetafieldsIdentifier[]} })
    /** The product variant’s price. */
    price?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `price` instead.
     * The product variant’s price.
     */
    priceV2?: MoneyV2GenqlSelection
    /** The product object that the product variant belongs to. */
    product?: ProductGenqlSelection
    /** The total sellable quantity of the variant for online sales channels. */
    quantityAvailable?: boolean | number
    /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
    requiresShipping?: boolean | number
    /** List of product options applied to the variant. */
    selectedOptions?: SelectedOptionGenqlSelection
    /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
    sellingPlanAllocations?: (SellingPlanAllocationConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** The SKU (stock keeping unit) associated with the variant. */
    sku?: boolean | number
    /** The in-store pickup availability of this variant by location. */
    storeAvailability?: (StoreAvailabilityConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Used to sort results based on proximity to the provided location. */
    near?: (GeoCoordinateInput | null)} })
    /** The product variant’s title. */
    title?: boolean | number
    /** The unit price value for the variant based on the variant's measurement. */
    unitPrice?: MoneyV2GenqlSelection
    /** The unit price measurement for the variant. */
    unitPriceMeasurement?: UnitPriceMeasurementGenqlSelection
    /** The weight of the product variant in the unit system specified with `weight_unit`. */
    weight?: boolean | number
    /** Unit of measurement for weight. */
    weightUnit?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple ProductVariants.
 * 
 */
export interface ProductVariantConnectionGenqlSelection{
    /** A list of edges. */
    edges?: ProductVariantEdgeGenqlSelection
    /** A list of the nodes contained in ProductVariantEdge. */
    nodes?: ProductVariantGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one ProductVariant and a cursor during pagination.
 * 
 */
export interface ProductVariantEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of ProductVariantEdge. */
    node?: ProductVariantGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface QueryRootGenqlSelection{
    /** List of the shop's articles. */
    articles?: (ArticleConnectionGenqlSelection & { __args: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (ArticleSortKeys | null), 
    /**
     * Supported filter parameters:
     *  - `author`
     *  - `blog_title`
     *  - `created_at`
     *  - `tag`
     *  - `tag_not`
     *  - `updated_at`
     * 
     * See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax)
     * for more information about using filters.
     * 
     */
    query?: (Scalars['String'] | null)} })
    /** Fetch a specific `Blog` by one of its unique attributes. */
    blog?: (BlogGenqlSelection & { __args?: {
    /** The ID of the `Blog`. */
    id?: (Scalars['ID'] | null), 
    /** The handle of the `Blog`. */
    handle?: (Scalars['String'] | null)} })
    /**
     * @deprecated Use `blog` instead.
     * Find a blog by its handle.
     */
    blogByHandle?: (BlogGenqlSelection & { __args: {
    /** The handle of the blog. */
    handle: Scalars['String']} })
    /** List of the shop's blogs. */
    blogs?: (BlogConnectionGenqlSelection & { __args: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (BlogSortKeys | null), 
    /**
     * Supported filter parameters:
     *  - `created_at`
     *  - `handle`
     *  - `title`
     *  - `updated_at`
     * 
     * See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax)
     * for more information about using filters.
     * 
     */
    query?: (Scalars['String'] | null)} })
    /**
     * Retrieve a cart by its ID. For more information, refer to
     * [Manage a cart with the Storefront API](https://shopify.dev/custom-storefronts/cart/manage).
     * 
     */
    cart?: (CartGenqlSelection & { __args: {
    /** The ID of the cart. */
    id: Scalars['ID']} })
    /** Fetch a specific `Collection` by one of its unique attributes. */
    collection?: (CollectionGenqlSelection & { __args?: {
    /** The ID of the `Collection`. */
    id?: (Scalars['ID'] | null), 
    /** The handle of the `Collection`. */
    handle?: (Scalars['String'] | null)} })
    /**
     * @deprecated Use `collection` instead.
     * Find a collection by its handle.
     */
    collectionByHandle?: (CollectionGenqlSelection & { __args: {
    /** The handle of the collection. */
    handle: Scalars['String']} })
    /** List of the shop’s collections. */
    collections?: (CollectionConnectionGenqlSelection & { __args: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (CollectionSortKeys | null), 
    /**
     * Supported filter parameters:
     *  - `collection_type`
     *  - `title`
     *  - `updated_at`
     * 
     * See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax)
     * for more information about using filters.
     * 
     */
    query?: (Scalars['String'] | null)} })
    /**
     * The customer associated with the given access token. Tokens are obtained by using the
     * [`customerAccessTokenCreate` mutation](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate).
     * 
     */
    customer?: (CustomerGenqlSelection & { __args: {
    /** The customer access token. */
    customerAccessToken: Scalars['String']} })
    /** Returns the localized experiences configured for the shop. */
    localization?: LocalizationGenqlSelection
    /**
     * List of the shop's locations that support in-store pickup.
     * 
     * When sorting by distance, you must specify a location via the `near` argument.
     * 
     */
    locations?: (LocationConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (LocationSortKeys | null), 
    /** Used to sort results based on proximity to the provided location. */
    near?: (GeoCoordinateInput | null)} })
    /**
     * Retrieve a [navigation menu](https://help.shopify.com/manual/online-store/menus-and-links) by its handle.
     * 
     */
    menu?: (MenuGenqlSelection & { __args: {
    /** The navigation menu's handle. */
    handle: Scalars['String']} })
    /** Fetch a specific Metaobject by one of its unique identifiers. */
    metaobject?: (MetaobjectGenqlSelection & { __args?: {
    /** The ID of the metaobject. */
    id?: (Scalars['ID'] | null), 
    /** The handle and type of the metaobject. */
    handle?: (MetaobjectHandleInput | null)} })
    /** All active metaobjects for the shop. */
    metaobjects?: (MetaobjectConnectionGenqlSelection & { __args: {
    /** The type of metaobject to retrieve. */
    type: Scalars['String'], 
    /** The key of a field to sort with. Supports "id" and "updated_at". */
    sortKey?: (Scalars['String'] | null), 
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    /** Returns a specific node by ID. */
    node?: (NodeGenqlSelection & { __args: {
    /** The ID of the Node to return. */
    id: Scalars['ID']} })
    /** Returns the list of nodes with the given IDs. */
    nodes?: (NodeGenqlSelection & { __args: {
    /** The IDs of the Nodes to return. */
    ids: Scalars['ID'][]} })
    /** Fetch a specific `Page` by one of its unique attributes. */
    page?: (PageGenqlSelection & { __args?: {
    /** The ID of the `Page`. */
    id?: (Scalars['ID'] | null), 
    /** The handle of the `Page`. */
    handle?: (Scalars['String'] | null)} })
    /**
     * @deprecated Use `page` instead.
     * Find a page by its handle.
     */
    pageByHandle?: (PageGenqlSelection & { __args: {
    /** The handle of the page. */
    handle: Scalars['String']} })
    /** List of the shop's pages. */
    pages?: (PageConnectionGenqlSelection & { __args: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (PageSortKeys | null), 
    /**
     * Supported filter parameters:
     *  - `created_at`
     *  - `handle`
     *  - `title`
     *  - `updated_at`
     * 
     * See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax)
     * for more information about using filters.
     * 
     */
    query?: (Scalars['String'] | null)} })
    /** Fetch a specific `Product` by one of its unique attributes. */
    product?: (ProductGenqlSelection & { __args?: {
    /** The ID of the `Product`. */
    id?: (Scalars['ID'] | null), 
    /** The handle of the `Product`. */
    handle?: (Scalars['String'] | null)} })
    /**
     * @deprecated Use `product` instead.
     * Find a product by its handle.
     */
    productByHandle?: (ProductGenqlSelection & { __args: {
    /** A unique string that identifies the product. Handles are automatically generated based on the product's title, and are always lowercase. Whitespace and special characters are replaced with a hyphen: `-`. If there are multiple consecutive whitespace or special characters, then they're replaced with a single hyphen. Whitespace or special characters at the beginning are removed. If a duplicate product title is used, then the handle is auto-incremented by one. For example, if you had two products called `Potion`, then their handles would be `potion` and `potion-1`. After a product has been created, changing the product title doesn't update the handle. */
    handle: Scalars['String']} })
    /**
     * Find recommended products related to a given `product_id`.
     * To learn more about how recommendations are generated, see
     * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
     * 
     */
    productRecommendations?: (ProductGenqlSelection & { __args: {
    /** The id of the product. */
    productId: Scalars['ID']} })
    /**
     * Tags added to products.
     * Additional access scope required: unauthenticated_read_product_tags.
     * 
     */
    productTags?: (StringConnectionGenqlSelection & { __args: {
    /** Returns up to the first `n` elements from the list. */
    first: Scalars['Int']} })
    /** List of product types for the shop's products that are published to your app. */
    productTypes?: (StringConnectionGenqlSelection & { __args: {
    /** Returns up to the first `n` elements from the list. */
    first: Scalars['Int']} })
    /** List of the shop’s products. */
    products?: (ProductConnectionGenqlSelection & { __args: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (ProductSortKeys | null), 
    /**
     * Supported filter parameters:
     *  - `available_for_sale`
     *  - `created_at`
     *  - `product_type`
     *  - `tag`
     *  - `tag_not`
     *  - `title`
     *  - `updated_at`
     *  - `variants.price`
     *  - `vendor`
     * 
     * See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax)
     * for more information about using filters.
     * 
     */
    query?: (Scalars['String'] | null)} })
    /** The list of public Storefront API versions, including supported, release candidate and unstable versions. */
    publicApiVersions?: ApiVersionGenqlSelection
    /** The shop associated with the storefront access token. */
    shop?: ShopGenqlSelection
    /** A list of redirects for a shop. */
    urlRedirects?: (UrlRedirectConnectionGenqlSelection & { __args: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /**
     * Supported filter parameters:
     *  - `created_at`
     *  - `path`
     *  - `target`
     * 
     * See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax)
     * for more information about using filters.
     * 
     */
    query?: (Scalars['String'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** SEO information. */
export interface SEOGenqlSelection{
    /** The meta description. */
    description?: boolean | number
    /** The SEO title. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 * 
 */
export interface ScriptDiscountApplicationGenqlSelection{
    /** The method by which the discount's value is allocated to its entitled items. */
    allocationMethod?: boolean | number
    /** Which lines of targetType that the discount is allocated over. */
    targetSelection?: boolean | number
    /** The type of line that the discount is applicable towards. */
    targetType?: boolean | number
    /** The title of the application as defined by the Script. */
    title?: boolean | number
    /** The value of the discount application. */
    value?: PricingValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 * 
 */
export interface SelectedOptionGenqlSelection{
    /** The product option’s name. */
    name?: boolean | number
    /** The product option’s value. */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The input fields required for a selected option. */
export interface SelectedOptionInput {
/** The product option’s name. */
name?: Scalars['String'],
/** The product option’s value. */
value?: Scalars['String']}


/** Represents how products and variants can be sold and purchased. */
export interface SellingPlanGenqlSelection{
    /** The initial payment due for the purchase. */
    checkoutCharge?: SellingPlanCheckoutChargeGenqlSelection
    /** The description of the selling plan. */
    description?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
    name?: boolean | number
    /** The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing. */
    options?: SellingPlanOptionGenqlSelection
    /** The price adjustments that a selling plan makes when a variant is purchased with a selling plan. */
    priceAdjustments?: SellingPlanPriceAdjustmentGenqlSelection
    /** Whether purchasing the selling plan will result in multiple deliveries. */
    recurringDeliveries?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
export interface SellingPlanAllocationGenqlSelection{
    /** The checkout charge amount due for the purchase. */
    checkoutChargeAmount?: MoneyV2GenqlSelection
    /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it. */
    priceAdjustments?: SellingPlanAllocationPriceAdjustmentGenqlSelection
    /** The remaining balance charge amount due for the purchase. */
    remainingBalanceChargeAmount?: MoneyV2GenqlSelection
    /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
    sellingPlan?: SellingPlanGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple SellingPlanAllocations.
 * 
 */
export interface SellingPlanAllocationConnectionGenqlSelection{
    /** A list of edges. */
    edges?: SellingPlanAllocationEdgeGenqlSelection
    /** A list of the nodes contained in SellingPlanAllocationEdge. */
    nodes?: SellingPlanAllocationGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination.
 * 
 */
export interface SellingPlanAllocationEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of SellingPlanAllocationEdge. */
    node?: SellingPlanAllocationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The resulting prices for variants when they're purchased with a specific selling plan. */
export interface SellingPlanAllocationPriceAdjustmentGenqlSelection{
    /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
    compareAtPrice?: MoneyV2GenqlSelection
    /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
    perDeliveryPrice?: MoneyV2GenqlSelection
    /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
    price?: MoneyV2GenqlSelection
    /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
    unitPrice?: MoneyV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The initial payment due for the purchase. */
export interface SellingPlanCheckoutChargeGenqlSelection{
    /** The charge type for the checkout charge. */
    type?: boolean | number
    /** The charge value for the checkout charge. */
    value?: SellingPlanCheckoutChargeValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The percentage value of the price used for checkout charge. */
export interface SellingPlanCheckoutChargePercentageValueGenqlSelection{
    /** The percentage value of the price used for checkout charge. */
    percentage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The portion of the price to be charged at checkout. */
export interface SellingPlanCheckoutChargeValueGenqlSelection{
    on_MoneyV2?:MoneyV2GenqlSelection,
    on_SellingPlanCheckoutChargePercentageValue?:SellingPlanCheckoutChargePercentageValueGenqlSelection,
    __typename?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple SellingPlans.
 * 
 */
export interface SellingPlanConnectionGenqlSelection{
    /** A list of edges. */
    edges?: SellingPlanEdgeGenqlSelection
    /** A list of the nodes contained in SellingPlanEdge. */
    nodes?: SellingPlanGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one SellingPlan and a cursor during pagination.
 * 
 */
export interface SellingPlanEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of SellingPlanEdge. */
    node?: SellingPlanGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
export interface SellingPlanFixedAmountPriceAdjustmentGenqlSelection{
    /** The money value of the price adjustment. */
    adjustmentAmount?: MoneyV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A fixed price adjustment for a variant that's purchased with a selling plan. */
export interface SellingPlanFixedPriceAdjustmentGenqlSelection{
    /** A new price of the variant when it's purchased with the selling plan. */
    price?: MoneyV2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export interface SellingPlanGroupGenqlSelection{
    /** A display friendly name for the app that created the selling plan group. */
    appName?: boolean | number
    /** The name of the selling plan group. */
    name?: boolean | number
    /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
    options?: SellingPlanGroupOptionGenqlSelection
    /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
    sellingPlans?: (SellingPlanConnectionGenqlSelection & { __args?: {
    /** Returns up to the first `n` elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['String'] | null), 
    /** Returns up to the last `n` elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['String'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple SellingPlanGroups.
 * 
 */
export interface SellingPlanGroupConnectionGenqlSelection{
    /** A list of edges. */
    edges?: SellingPlanGroupEdgeGenqlSelection
    /** A list of the nodes contained in SellingPlanGroupEdge. */
    nodes?: SellingPlanGroupGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.
 * 
 */
export interface SellingPlanGroupEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of SellingPlanGroupEdge. */
    node?: SellingPlanGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Represents an option on a selling plan group that's available in the drop-down list in the storefront.
 * 
 * Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.
 */
export interface SellingPlanGroupOptionGenqlSelection{
    /** The name of the option. For example, 'Delivery every'. */
    name?: boolean | number
    /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
    values?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An option provided by a Selling Plan. */
export interface SellingPlanOptionGenqlSelection{
    /** The name of the option (ie "Delivery every"). */
    name?: boolean | number
    /** The value of the option (ie "Month"). */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
export interface SellingPlanPercentagePriceAdjustmentGenqlSelection{
    /** The percentage value of the price adjustment. */
    adjustmentPercentage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price. */
export interface SellingPlanPriceAdjustmentGenqlSelection{
    /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
    adjustmentValue?: SellingPlanPriceAdjustmentValueGenqlSelection
    /** The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`. */
    orderCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export interface SellingPlanPriceAdjustmentValueGenqlSelection{
    on_SellingPlanFixedAmountPriceAdjustment?:SellingPlanFixedAmountPriceAdjustmentGenqlSelection,
    on_SellingPlanFixedPriceAdjustment?:SellingPlanFixedPriceAdjustmentGenqlSelection,
    on_SellingPlanPercentagePriceAdjustment?:SellingPlanPercentagePriceAdjustmentGenqlSelection,
    __typename?: boolean | number
}


/** A shipping rate to be applied to a checkout. */
export interface ShippingRateGenqlSelection{
    /** Human-readable unique identifier for this shipping rate. */
    handle?: boolean | number
    /** Price of this shipping rate. */
    price?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `price` instead.
     * Price of this shipping rate.
     */
    priceV2?: MoneyV2GenqlSelection
    /** Title of this shipping rate. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Shop represents a collection of the general settings and information about the shop. */
export interface ShopGenqlSelection{
    /** The shop's branding configuration. */
    brand?: BrandGenqlSelection
    /** A description of the shop. */
    description?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** Returns a metafield found by namespace and key. */
    metafield?: (MetafieldGenqlSelection & { __args: {
    /** A container for a set of metafields. */
    namespace: Scalars['String'], 
    /** The identifier for the metafield. */
    key: Scalars['String']} })
    /**
     * The metafields associated with the resource matching the supplied list of namespaces and keys.
     * 
     */
    metafields?: (MetafieldGenqlSelection & { __args: {
    /** The list of metafields to retrieve by namespace and key. */
    identifiers: HasMetafieldsIdentifier[]} })
    /** A string representing the way currency is formatted when the currency isn’t specified. */
    moneyFormat?: boolean | number
    /** The shop’s name. */
    name?: boolean | number
    /** Settings related to payments. */
    paymentSettings?: PaymentSettingsGenqlSelection
    /** The primary domain of the shop’s Online Store. */
    primaryDomain?: DomainGenqlSelection
    /** The shop’s privacy policy. */
    privacyPolicy?: ShopPolicyGenqlSelection
    /** The shop’s refund policy. */
    refundPolicy?: ShopPolicyGenqlSelection
    /** The shop’s shipping policy. */
    shippingPolicy?: ShopPolicyGenqlSelection
    /** Countries that the shop ships to. */
    shipsToCountries?: boolean | number
    /** The shop’s subscription policy. */
    subscriptionPolicy?: ShopPolicyWithDefaultGenqlSelection
    /** The shop’s terms of service. */
    termsOfService?: ShopPolicyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export interface ShopPolicyGenqlSelection{
    /** Policy text, maximum size of 64kb. */
    body?: boolean | number
    /** Policy’s handle. */
    handle?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** Policy’s title. */
    title?: boolean | number
    /** Public URL to the policy. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * A policy for the store that comes with a default value, such as a subscription policy.
 * If the merchant hasn't configured a policy for their store, then the policy will return the default value.
 * Otherwise, the policy will return the merchant-configured value.
 * 
 */
export interface ShopPolicyWithDefaultGenqlSelection{
    /** The text of the policy. Maximum size: 64KB. */
    body?: boolean | number
    /** The handle of the policy. */
    handle?: boolean | number
    /** The unique ID of the policy. A default policy doesn't have an ID. */
    id?: boolean | number
    /** The title of the policy. */
    title?: boolean | number
    /** Public URL to the policy. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 * 
 */
export interface StoreAvailabilityGenqlSelection{
    /** Whether the product variant is in-stock at this location. */
    available?: boolean | number
    /** The location where this product variant is stocked at. */
    location?: LocationGenqlSelection
    /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
    pickUpTime?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple StoreAvailabilities.
 * 
 */
export interface StoreAvailabilityConnectionGenqlSelection{
    /** A list of edges. */
    edges?: StoreAvailabilityEdgeGenqlSelection
    /** A list of the nodes contained in StoreAvailabilityEdge. */
    nodes?: StoreAvailabilityGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one StoreAvailability and a cursor during pagination.
 * 
 */
export interface StoreAvailabilityEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of StoreAvailabilityEdge. */
    node?: StoreAvailabilityGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through a list of Strings.
 * 
 */
export interface StringConnectionGenqlSelection{
    /** A list of edges. */
    edges?: StringEdgeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one String and a cursor during pagination.
 * 
 */
export interface StringEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of StringEdge. */
    node?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 * 
 */
export interface TokenizedPaymentInputV3 {
/** The amount and currency of the payment. */
paymentAmount?: MoneyInput,
/** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
idempotencyKey?: Scalars['String'],
/** The billing address for the payment. */
billingAddress?: MailingAddressInput,
/** A simple string or JSON containing the required payment data for the tokenized payment. */
paymentData?: Scalars['String'],
/** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
test?: (Scalars['Boolean'] | null),
/** Public Hash Key used for AndroidPay payments only. */
identifier?: (Scalars['String'] | null),
/** The type of payment token. */
type?: PaymentTokenType}


/** An object representing exchange of money for a product or service. */
export interface TransactionGenqlSelection{
    /** The amount of money that the transaction was for. */
    amount?: MoneyV2GenqlSelection
    /**
     * @deprecated Use `amount` instead.
     * The amount of money that the transaction was for.
     */
    amountV2?: MoneyV2GenqlSelection
    /** The kind of the transaction. */
    kind?: boolean | number
    /**
     * @deprecated Use `statusV2` instead.
     * The status of the transaction.
     */
    status?: boolean | number
    /** The status of the transaction. */
    statusV2?: boolean | number
    /** Whether the transaction was done in test mode or not. */
    test?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).
 * 
 */
export interface UnitPriceMeasurementGenqlSelection{
    /** The type of unit of measurement for the unit price measurement. */
    measuredType?: boolean | number
    /** The quantity unit for the unit price measurement. */
    quantityUnit?: boolean | number
    /** The quantity value for the unit price measurement. */
    quantityValue?: boolean | number
    /** The reference unit for the unit price measurement. */
    referenceUnit?: boolean | number
    /** The reference value for the unit price measurement. */
    referenceValue?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A redirect on the online store. */
export interface UrlRedirectGenqlSelection{
    /** The ID of the URL redirect. */
    id?: boolean | number
    /** The old path to be redirected from. When the user visits this path, they'll be redirected to the target location. */
    path?: boolean | number
    /** The target location where the user will be redirected to. */
    target?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type for paginating through multiple UrlRedirects.
 * 
 */
export interface UrlRedirectConnectionGenqlSelection{
    /** A list of edges. */
    edges?: UrlRedirectEdgeGenqlSelection
    /** A list of the nodes contained in UrlRedirectEdge. */
    nodes?: UrlRedirectGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An auto-generated type which holds one UrlRedirect and a cursor during pagination.
 * 
 */
export interface UrlRedirectEdgeGenqlSelection{
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    /** The item at the end of UrlRedirectEdge. */
    node?: UrlRedirectGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents an error in the input of a mutation. */
export interface UserErrorGenqlSelection{
    /** The path to the input field that caused the error. */
    field?: boolean | number
    /** The error message. */
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The input fields for a filter used to view a subset of products in a collection matching a specific variant option.
 * 
 */
export interface VariantOptionFilter {
/** The name of the variant option to filter on. */
name?: Scalars['String'],
/** The value of the variant option to filter on. */
value?: Scalars['String']}


/** Represents a Shopify hosted video. */
export interface VideoGenqlSelection{
    /** A word or phrase to share the nature or contents of a media. */
    alt?: boolean | number
    /** A globally-unique ID. */
    id?: boolean | number
    /** The media content type. */
    mediaContentType?: boolean | number
    /** The preview image for the media. */
    previewImage?: ImageGenqlSelection
    /** The sources for a video. */
    sources?: VideoSourceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Represents a source for a Shopify hosted video. */
export interface VideoSourceGenqlSelection{
    /** The format of the video source. */
    format?: boolean | number
    /** The height of the video. */
    height?: boolean | number
    /** The video MIME type. */
    mimeType?: boolean | number
    /** The URL of the video. */
    url?: boolean | number
    /** The width of the video. */
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export type QueryGenqlSelection = QueryRootGenqlSelection


    const ApiVersion_possibleTypes: string[] = ['ApiVersion']
    export const isApiVersion = (obj?: { __typename?: any } | null): obj is ApiVersion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiVersion"')
      return ApiVersion_possibleTypes.includes(obj.__typename)
    }
    


    const AppliedGiftCard_possibleTypes: string[] = ['AppliedGiftCard']
    export const isAppliedGiftCard = (obj?: { __typename?: any } | null): obj is AppliedGiftCard => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAppliedGiftCard"')
      return AppliedGiftCard_possibleTypes.includes(obj.__typename)
    }
    


    const Article_possibleTypes: string[] = ['Article']
    export const isArticle = (obj?: { __typename?: any } | null): obj is Article => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isArticle"')
      return Article_possibleTypes.includes(obj.__typename)
    }
    


    const ArticleAuthor_possibleTypes: string[] = ['ArticleAuthor']
    export const isArticleAuthor = (obj?: { __typename?: any } | null): obj is ArticleAuthor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isArticleAuthor"')
      return ArticleAuthor_possibleTypes.includes(obj.__typename)
    }
    


    const ArticleConnection_possibleTypes: string[] = ['ArticleConnection']
    export const isArticleConnection = (obj?: { __typename?: any } | null): obj is ArticleConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isArticleConnection"')
      return ArticleConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ArticleEdge_possibleTypes: string[] = ['ArticleEdge']
    export const isArticleEdge = (obj?: { __typename?: any } | null): obj is ArticleEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isArticleEdge"')
      return ArticleEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Attribute_possibleTypes: string[] = ['Attribute']
    export const isAttribute = (obj?: { __typename?: any } | null): obj is Attribute => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAttribute"')
      return Attribute_possibleTypes.includes(obj.__typename)
    }
    


    const AutomaticDiscountApplication_possibleTypes: string[] = ['AutomaticDiscountApplication']
    export const isAutomaticDiscountApplication = (obj?: { __typename?: any } | null): obj is AutomaticDiscountApplication => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAutomaticDiscountApplication"')
      return AutomaticDiscountApplication_possibleTypes.includes(obj.__typename)
    }
    


    const AvailableShippingRates_possibleTypes: string[] = ['AvailableShippingRates']
    export const isAvailableShippingRates = (obj?: { __typename?: any } | null): obj is AvailableShippingRates => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAvailableShippingRates"')
      return AvailableShippingRates_possibleTypes.includes(obj.__typename)
    }
    


    const Blog_possibleTypes: string[] = ['Blog']
    export const isBlog = (obj?: { __typename?: any } | null): obj is Blog => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlog"')
      return Blog_possibleTypes.includes(obj.__typename)
    }
    


    const BlogConnection_possibleTypes: string[] = ['BlogConnection']
    export const isBlogConnection = (obj?: { __typename?: any } | null): obj is BlogConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogConnection"')
      return BlogConnection_possibleTypes.includes(obj.__typename)
    }
    


    const BlogEdge_possibleTypes: string[] = ['BlogEdge']
    export const isBlogEdge = (obj?: { __typename?: any } | null): obj is BlogEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogEdge"')
      return BlogEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Brand_possibleTypes: string[] = ['Brand']
    export const isBrand = (obj?: { __typename?: any } | null): obj is Brand => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBrand"')
      return Brand_possibleTypes.includes(obj.__typename)
    }
    


    const BrandColorGroup_possibleTypes: string[] = ['BrandColorGroup']
    export const isBrandColorGroup = (obj?: { __typename?: any } | null): obj is BrandColorGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBrandColorGroup"')
      return BrandColorGroup_possibleTypes.includes(obj.__typename)
    }
    


    const BrandColors_possibleTypes: string[] = ['BrandColors']
    export const isBrandColors = (obj?: { __typename?: any } | null): obj is BrandColors => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBrandColors"')
      return BrandColors_possibleTypes.includes(obj.__typename)
    }
    


    const Cart_possibleTypes: string[] = ['Cart']
    export const isCart = (obj?: { __typename?: any } | null): obj is Cart => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCart"')
      return Cart_possibleTypes.includes(obj.__typename)
    }
    


    const CartAttributesUpdatePayload_possibleTypes: string[] = ['CartAttributesUpdatePayload']
    export const isCartAttributesUpdatePayload = (obj?: { __typename?: any } | null): obj is CartAttributesUpdatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartAttributesUpdatePayload"')
      return CartAttributesUpdatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CartAutomaticDiscountAllocation_possibleTypes: string[] = ['CartAutomaticDiscountAllocation']
    export const isCartAutomaticDiscountAllocation = (obj?: { __typename?: any } | null): obj is CartAutomaticDiscountAllocation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartAutomaticDiscountAllocation"')
      return CartAutomaticDiscountAllocation_possibleTypes.includes(obj.__typename)
    }
    


    const CartBuyerIdentity_possibleTypes: string[] = ['CartBuyerIdentity']
    export const isCartBuyerIdentity = (obj?: { __typename?: any } | null): obj is CartBuyerIdentity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartBuyerIdentity"')
      return CartBuyerIdentity_possibleTypes.includes(obj.__typename)
    }
    


    const CartBuyerIdentityUpdatePayload_possibleTypes: string[] = ['CartBuyerIdentityUpdatePayload']
    export const isCartBuyerIdentityUpdatePayload = (obj?: { __typename?: any } | null): obj is CartBuyerIdentityUpdatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartBuyerIdentityUpdatePayload"')
      return CartBuyerIdentityUpdatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CartCodeDiscountAllocation_possibleTypes: string[] = ['CartCodeDiscountAllocation']
    export const isCartCodeDiscountAllocation = (obj?: { __typename?: any } | null): obj is CartCodeDiscountAllocation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartCodeDiscountAllocation"')
      return CartCodeDiscountAllocation_possibleTypes.includes(obj.__typename)
    }
    


    const CartCost_possibleTypes: string[] = ['CartCost']
    export const isCartCost = (obj?: { __typename?: any } | null): obj is CartCost => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartCost"')
      return CartCost_possibleTypes.includes(obj.__typename)
    }
    


    const CartCreatePayload_possibleTypes: string[] = ['CartCreatePayload']
    export const isCartCreatePayload = (obj?: { __typename?: any } | null): obj is CartCreatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartCreatePayload"')
      return CartCreatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CartCustomDiscountAllocation_possibleTypes: string[] = ['CartCustomDiscountAllocation']
    export const isCartCustomDiscountAllocation = (obj?: { __typename?: any } | null): obj is CartCustomDiscountAllocation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartCustomDiscountAllocation"')
      return CartCustomDiscountAllocation_possibleTypes.includes(obj.__typename)
    }
    


    const CartDeliveryGroup_possibleTypes: string[] = ['CartDeliveryGroup']
    export const isCartDeliveryGroup = (obj?: { __typename?: any } | null): obj is CartDeliveryGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartDeliveryGroup"')
      return CartDeliveryGroup_possibleTypes.includes(obj.__typename)
    }
    


    const CartDeliveryGroupConnection_possibleTypes: string[] = ['CartDeliveryGroupConnection']
    export const isCartDeliveryGroupConnection = (obj?: { __typename?: any } | null): obj is CartDeliveryGroupConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartDeliveryGroupConnection"')
      return CartDeliveryGroupConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CartDeliveryGroupEdge_possibleTypes: string[] = ['CartDeliveryGroupEdge']
    export const isCartDeliveryGroupEdge = (obj?: { __typename?: any } | null): obj is CartDeliveryGroupEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartDeliveryGroupEdge"')
      return CartDeliveryGroupEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CartDeliveryOption_possibleTypes: string[] = ['CartDeliveryOption']
    export const isCartDeliveryOption = (obj?: { __typename?: any } | null): obj is CartDeliveryOption => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartDeliveryOption"')
      return CartDeliveryOption_possibleTypes.includes(obj.__typename)
    }
    


    const CartDiscountAllocation_possibleTypes: string[] = ['CartAutomaticDiscountAllocation','CartCodeDiscountAllocation','CartCustomDiscountAllocation']
    export const isCartDiscountAllocation = (obj?: { __typename?: any } | null): obj is CartDiscountAllocation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartDiscountAllocation"')
      return CartDiscountAllocation_possibleTypes.includes(obj.__typename)
    }
    


    const CartDiscountCode_possibleTypes: string[] = ['CartDiscountCode']
    export const isCartDiscountCode = (obj?: { __typename?: any } | null): obj is CartDiscountCode => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartDiscountCode"')
      return CartDiscountCode_possibleTypes.includes(obj.__typename)
    }
    


    const CartDiscountCodesUpdatePayload_possibleTypes: string[] = ['CartDiscountCodesUpdatePayload']
    export const isCartDiscountCodesUpdatePayload = (obj?: { __typename?: any } | null): obj is CartDiscountCodesUpdatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartDiscountCodesUpdatePayload"')
      return CartDiscountCodesUpdatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CartEstimatedCost_possibleTypes: string[] = ['CartEstimatedCost']
    export const isCartEstimatedCost = (obj?: { __typename?: any } | null): obj is CartEstimatedCost => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartEstimatedCost"')
      return CartEstimatedCost_possibleTypes.includes(obj.__typename)
    }
    


    const CartLine_possibleTypes: string[] = ['CartLine']
    export const isCartLine = (obj?: { __typename?: any } | null): obj is CartLine => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartLine"')
      return CartLine_possibleTypes.includes(obj.__typename)
    }
    


    const CartLineConnection_possibleTypes: string[] = ['CartLineConnection']
    export const isCartLineConnection = (obj?: { __typename?: any } | null): obj is CartLineConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartLineConnection"')
      return CartLineConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CartLineCost_possibleTypes: string[] = ['CartLineCost']
    export const isCartLineCost = (obj?: { __typename?: any } | null): obj is CartLineCost => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartLineCost"')
      return CartLineCost_possibleTypes.includes(obj.__typename)
    }
    


    const CartLineEdge_possibleTypes: string[] = ['CartLineEdge']
    export const isCartLineEdge = (obj?: { __typename?: any } | null): obj is CartLineEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartLineEdge"')
      return CartLineEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CartLineEstimatedCost_possibleTypes: string[] = ['CartLineEstimatedCost']
    export const isCartLineEstimatedCost = (obj?: { __typename?: any } | null): obj is CartLineEstimatedCost => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartLineEstimatedCost"')
      return CartLineEstimatedCost_possibleTypes.includes(obj.__typename)
    }
    


    const CartLinesAddPayload_possibleTypes: string[] = ['CartLinesAddPayload']
    export const isCartLinesAddPayload = (obj?: { __typename?: any } | null): obj is CartLinesAddPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartLinesAddPayload"')
      return CartLinesAddPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CartLinesRemovePayload_possibleTypes: string[] = ['CartLinesRemovePayload']
    export const isCartLinesRemovePayload = (obj?: { __typename?: any } | null): obj is CartLinesRemovePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartLinesRemovePayload"')
      return CartLinesRemovePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CartLinesUpdatePayload_possibleTypes: string[] = ['CartLinesUpdatePayload']
    export const isCartLinesUpdatePayload = (obj?: { __typename?: any } | null): obj is CartLinesUpdatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartLinesUpdatePayload"')
      return CartLinesUpdatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CartNoteUpdatePayload_possibleTypes: string[] = ['CartNoteUpdatePayload']
    export const isCartNoteUpdatePayload = (obj?: { __typename?: any } | null): obj is CartNoteUpdatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartNoteUpdatePayload"')
      return CartNoteUpdatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CartSelectedDeliveryOptionsUpdatePayload_possibleTypes: string[] = ['CartSelectedDeliveryOptionsUpdatePayload']
    export const isCartSelectedDeliveryOptionsUpdatePayload = (obj?: { __typename?: any } | null): obj is CartSelectedDeliveryOptionsUpdatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartSelectedDeliveryOptionsUpdatePayload"')
      return CartSelectedDeliveryOptionsUpdatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CartUserError_possibleTypes: string[] = ['CartUserError']
    export const isCartUserError = (obj?: { __typename?: any } | null): obj is CartUserError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCartUserError"')
      return CartUserError_possibleTypes.includes(obj.__typename)
    }
    


    const Checkout_possibleTypes: string[] = ['Checkout']
    export const isCheckout = (obj?: { __typename?: any } | null): obj is Checkout => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckout"')
      return Checkout_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutAttributesUpdateV2Payload_possibleTypes: string[] = ['CheckoutAttributesUpdateV2Payload']
    export const isCheckoutAttributesUpdateV2Payload = (obj?: { __typename?: any } | null): obj is CheckoutAttributesUpdateV2Payload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutAttributesUpdateV2Payload"')
      return CheckoutAttributesUpdateV2Payload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutBuyerIdentity_possibleTypes: string[] = ['CheckoutBuyerIdentity']
    export const isCheckoutBuyerIdentity = (obj?: { __typename?: any } | null): obj is CheckoutBuyerIdentity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutBuyerIdentity"')
      return CheckoutBuyerIdentity_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutCompleteFreePayload_possibleTypes: string[] = ['CheckoutCompleteFreePayload']
    export const isCheckoutCompleteFreePayload = (obj?: { __typename?: any } | null): obj is CheckoutCompleteFreePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutCompleteFreePayload"')
      return CheckoutCompleteFreePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutCompleteWithCreditCardV2Payload_possibleTypes: string[] = ['CheckoutCompleteWithCreditCardV2Payload']
    export const isCheckoutCompleteWithCreditCardV2Payload = (obj?: { __typename?: any } | null): obj is CheckoutCompleteWithCreditCardV2Payload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutCompleteWithCreditCardV2Payload"')
      return CheckoutCompleteWithCreditCardV2Payload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutCompleteWithTokenizedPaymentV3Payload_possibleTypes: string[] = ['CheckoutCompleteWithTokenizedPaymentV3Payload']
    export const isCheckoutCompleteWithTokenizedPaymentV3Payload = (obj?: { __typename?: any } | null): obj is CheckoutCompleteWithTokenizedPaymentV3Payload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutCompleteWithTokenizedPaymentV3Payload"')
      return CheckoutCompleteWithTokenizedPaymentV3Payload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutCreatePayload_possibleTypes: string[] = ['CheckoutCreatePayload']
    export const isCheckoutCreatePayload = (obj?: { __typename?: any } | null): obj is CheckoutCreatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutCreatePayload"')
      return CheckoutCreatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutCustomerAssociateV2Payload_possibleTypes: string[] = ['CheckoutCustomerAssociateV2Payload']
    export const isCheckoutCustomerAssociateV2Payload = (obj?: { __typename?: any } | null): obj is CheckoutCustomerAssociateV2Payload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutCustomerAssociateV2Payload"')
      return CheckoutCustomerAssociateV2Payload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutCustomerDisassociateV2Payload_possibleTypes: string[] = ['CheckoutCustomerDisassociateV2Payload']
    export const isCheckoutCustomerDisassociateV2Payload = (obj?: { __typename?: any } | null): obj is CheckoutCustomerDisassociateV2Payload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutCustomerDisassociateV2Payload"')
      return CheckoutCustomerDisassociateV2Payload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutDiscountCodeApplyV2Payload_possibleTypes: string[] = ['CheckoutDiscountCodeApplyV2Payload']
    export const isCheckoutDiscountCodeApplyV2Payload = (obj?: { __typename?: any } | null): obj is CheckoutDiscountCodeApplyV2Payload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutDiscountCodeApplyV2Payload"')
      return CheckoutDiscountCodeApplyV2Payload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutDiscountCodeRemovePayload_possibleTypes: string[] = ['CheckoutDiscountCodeRemovePayload']
    export const isCheckoutDiscountCodeRemovePayload = (obj?: { __typename?: any } | null): obj is CheckoutDiscountCodeRemovePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutDiscountCodeRemovePayload"')
      return CheckoutDiscountCodeRemovePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutEmailUpdateV2Payload_possibleTypes: string[] = ['CheckoutEmailUpdateV2Payload']
    export const isCheckoutEmailUpdateV2Payload = (obj?: { __typename?: any } | null): obj is CheckoutEmailUpdateV2Payload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutEmailUpdateV2Payload"')
      return CheckoutEmailUpdateV2Payload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutGiftCardRemoveV2Payload_possibleTypes: string[] = ['CheckoutGiftCardRemoveV2Payload']
    export const isCheckoutGiftCardRemoveV2Payload = (obj?: { __typename?: any } | null): obj is CheckoutGiftCardRemoveV2Payload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutGiftCardRemoveV2Payload"')
      return CheckoutGiftCardRemoveV2Payload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutGiftCardsAppendPayload_possibleTypes: string[] = ['CheckoutGiftCardsAppendPayload']
    export const isCheckoutGiftCardsAppendPayload = (obj?: { __typename?: any } | null): obj is CheckoutGiftCardsAppendPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutGiftCardsAppendPayload"')
      return CheckoutGiftCardsAppendPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutLineItem_possibleTypes: string[] = ['CheckoutLineItem']
    export const isCheckoutLineItem = (obj?: { __typename?: any } | null): obj is CheckoutLineItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutLineItem"')
      return CheckoutLineItem_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutLineItemConnection_possibleTypes: string[] = ['CheckoutLineItemConnection']
    export const isCheckoutLineItemConnection = (obj?: { __typename?: any } | null): obj is CheckoutLineItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutLineItemConnection"')
      return CheckoutLineItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutLineItemEdge_possibleTypes: string[] = ['CheckoutLineItemEdge']
    export const isCheckoutLineItemEdge = (obj?: { __typename?: any } | null): obj is CheckoutLineItemEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutLineItemEdge"')
      return CheckoutLineItemEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutLineItemsAddPayload_possibleTypes: string[] = ['CheckoutLineItemsAddPayload']
    export const isCheckoutLineItemsAddPayload = (obj?: { __typename?: any } | null): obj is CheckoutLineItemsAddPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutLineItemsAddPayload"')
      return CheckoutLineItemsAddPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutLineItemsRemovePayload_possibleTypes: string[] = ['CheckoutLineItemsRemovePayload']
    export const isCheckoutLineItemsRemovePayload = (obj?: { __typename?: any } | null): obj is CheckoutLineItemsRemovePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutLineItemsRemovePayload"')
      return CheckoutLineItemsRemovePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutLineItemsReplacePayload_possibleTypes: string[] = ['CheckoutLineItemsReplacePayload']
    export const isCheckoutLineItemsReplacePayload = (obj?: { __typename?: any } | null): obj is CheckoutLineItemsReplacePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutLineItemsReplacePayload"')
      return CheckoutLineItemsReplacePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutLineItemsUpdatePayload_possibleTypes: string[] = ['CheckoutLineItemsUpdatePayload']
    export const isCheckoutLineItemsUpdatePayload = (obj?: { __typename?: any } | null): obj is CheckoutLineItemsUpdatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutLineItemsUpdatePayload"')
      return CheckoutLineItemsUpdatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutShippingAddressUpdateV2Payload_possibleTypes: string[] = ['CheckoutShippingAddressUpdateV2Payload']
    export const isCheckoutShippingAddressUpdateV2Payload = (obj?: { __typename?: any } | null): obj is CheckoutShippingAddressUpdateV2Payload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutShippingAddressUpdateV2Payload"')
      return CheckoutShippingAddressUpdateV2Payload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutShippingLineUpdatePayload_possibleTypes: string[] = ['CheckoutShippingLineUpdatePayload']
    export const isCheckoutShippingLineUpdatePayload = (obj?: { __typename?: any } | null): obj is CheckoutShippingLineUpdatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutShippingLineUpdatePayload"')
      return CheckoutShippingLineUpdatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CheckoutUserError_possibleTypes: string[] = ['CheckoutUserError']
    export const isCheckoutUserError = (obj?: { __typename?: any } | null): obj is CheckoutUserError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCheckoutUserError"')
      return CheckoutUserError_possibleTypes.includes(obj.__typename)
    }
    


    const Collection_possibleTypes: string[] = ['Collection']
    export const isCollection = (obj?: { __typename?: any } | null): obj is Collection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollection"')
      return Collection_possibleTypes.includes(obj.__typename)
    }
    


    const CollectionConnection_possibleTypes: string[] = ['CollectionConnection']
    export const isCollectionConnection = (obj?: { __typename?: any } | null): obj is CollectionConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectionConnection"')
      return CollectionConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CollectionEdge_possibleTypes: string[] = ['CollectionEdge']
    export const isCollectionEdge = (obj?: { __typename?: any } | null): obj is CollectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollectionEdge"')
      return CollectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Comment_possibleTypes: string[] = ['Comment']
    export const isComment = (obj?: { __typename?: any } | null): obj is Comment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComment"')
      return Comment_possibleTypes.includes(obj.__typename)
    }
    


    const CommentAuthor_possibleTypes: string[] = ['CommentAuthor']
    export const isCommentAuthor = (obj?: { __typename?: any } | null): obj is CommentAuthor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentAuthor"')
      return CommentAuthor_possibleTypes.includes(obj.__typename)
    }
    


    const CommentConnection_possibleTypes: string[] = ['CommentConnection']
    export const isCommentConnection = (obj?: { __typename?: any } | null): obj is CommentConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentConnection"')
      return CommentConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CommentEdge_possibleTypes: string[] = ['CommentEdge']
    export const isCommentEdge = (obj?: { __typename?: any } | null): obj is CommentEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentEdge"')
      return CommentEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Country_possibleTypes: string[] = ['Country']
    export const isCountry = (obj?: { __typename?: any } | null): obj is Country => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCountry"')
      return Country_possibleTypes.includes(obj.__typename)
    }
    


    const CreditCard_possibleTypes: string[] = ['CreditCard']
    export const isCreditCard = (obj?: { __typename?: any } | null): obj is CreditCard => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreditCard"')
      return CreditCard_possibleTypes.includes(obj.__typename)
    }
    


    const Currency_possibleTypes: string[] = ['Currency']
    export const isCurrency = (obj?: { __typename?: any } | null): obj is Currency => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCurrency"')
      return Currency_possibleTypes.includes(obj.__typename)
    }
    


    const Customer_possibleTypes: string[] = ['Customer']
    export const isCustomer = (obj?: { __typename?: any } | null): obj is Customer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomer"')
      return Customer_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerAccessToken_possibleTypes: string[] = ['CustomerAccessToken']
    export const isCustomerAccessToken = (obj?: { __typename?: any } | null): obj is CustomerAccessToken => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerAccessToken"')
      return CustomerAccessToken_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerAccessTokenCreatePayload_possibleTypes: string[] = ['CustomerAccessTokenCreatePayload']
    export const isCustomerAccessTokenCreatePayload = (obj?: { __typename?: any } | null): obj is CustomerAccessTokenCreatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerAccessTokenCreatePayload"')
      return CustomerAccessTokenCreatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerAccessTokenCreateWithMultipassPayload_possibleTypes: string[] = ['CustomerAccessTokenCreateWithMultipassPayload']
    export const isCustomerAccessTokenCreateWithMultipassPayload = (obj?: { __typename?: any } | null): obj is CustomerAccessTokenCreateWithMultipassPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerAccessTokenCreateWithMultipassPayload"')
      return CustomerAccessTokenCreateWithMultipassPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerAccessTokenDeletePayload_possibleTypes: string[] = ['CustomerAccessTokenDeletePayload']
    export const isCustomerAccessTokenDeletePayload = (obj?: { __typename?: any } | null): obj is CustomerAccessTokenDeletePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerAccessTokenDeletePayload"')
      return CustomerAccessTokenDeletePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerAccessTokenRenewPayload_possibleTypes: string[] = ['CustomerAccessTokenRenewPayload']
    export const isCustomerAccessTokenRenewPayload = (obj?: { __typename?: any } | null): obj is CustomerAccessTokenRenewPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerAccessTokenRenewPayload"')
      return CustomerAccessTokenRenewPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerActivateByUrlPayload_possibleTypes: string[] = ['CustomerActivateByUrlPayload']
    export const isCustomerActivateByUrlPayload = (obj?: { __typename?: any } | null): obj is CustomerActivateByUrlPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerActivateByUrlPayload"')
      return CustomerActivateByUrlPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerActivatePayload_possibleTypes: string[] = ['CustomerActivatePayload']
    export const isCustomerActivatePayload = (obj?: { __typename?: any } | null): obj is CustomerActivatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerActivatePayload"')
      return CustomerActivatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerAddressCreatePayload_possibleTypes: string[] = ['CustomerAddressCreatePayload']
    export const isCustomerAddressCreatePayload = (obj?: { __typename?: any } | null): obj is CustomerAddressCreatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerAddressCreatePayload"')
      return CustomerAddressCreatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerAddressDeletePayload_possibleTypes: string[] = ['CustomerAddressDeletePayload']
    export const isCustomerAddressDeletePayload = (obj?: { __typename?: any } | null): obj is CustomerAddressDeletePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerAddressDeletePayload"')
      return CustomerAddressDeletePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerAddressUpdatePayload_possibleTypes: string[] = ['CustomerAddressUpdatePayload']
    export const isCustomerAddressUpdatePayload = (obj?: { __typename?: any } | null): obj is CustomerAddressUpdatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerAddressUpdatePayload"')
      return CustomerAddressUpdatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerCreatePayload_possibleTypes: string[] = ['CustomerCreatePayload']
    export const isCustomerCreatePayload = (obj?: { __typename?: any } | null): obj is CustomerCreatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerCreatePayload"')
      return CustomerCreatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerDefaultAddressUpdatePayload_possibleTypes: string[] = ['CustomerDefaultAddressUpdatePayload']
    export const isCustomerDefaultAddressUpdatePayload = (obj?: { __typename?: any } | null): obj is CustomerDefaultAddressUpdatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerDefaultAddressUpdatePayload"')
      return CustomerDefaultAddressUpdatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerRecoverPayload_possibleTypes: string[] = ['CustomerRecoverPayload']
    export const isCustomerRecoverPayload = (obj?: { __typename?: any } | null): obj is CustomerRecoverPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerRecoverPayload"')
      return CustomerRecoverPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerResetByUrlPayload_possibleTypes: string[] = ['CustomerResetByUrlPayload']
    export const isCustomerResetByUrlPayload = (obj?: { __typename?: any } | null): obj is CustomerResetByUrlPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerResetByUrlPayload"')
      return CustomerResetByUrlPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerResetPayload_possibleTypes: string[] = ['CustomerResetPayload']
    export const isCustomerResetPayload = (obj?: { __typename?: any } | null): obj is CustomerResetPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerResetPayload"')
      return CustomerResetPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerUpdatePayload_possibleTypes: string[] = ['CustomerUpdatePayload']
    export const isCustomerUpdatePayload = (obj?: { __typename?: any } | null): obj is CustomerUpdatePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerUpdatePayload"')
      return CustomerUpdatePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerUserError_possibleTypes: string[] = ['CustomerUserError']
    export const isCustomerUserError = (obj?: { __typename?: any } | null): obj is CustomerUserError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerUserError"')
      return CustomerUserError_possibleTypes.includes(obj.__typename)
    }
    


    const DeliveryAddress_possibleTypes: string[] = ['MailingAddress']
    export const isDeliveryAddress = (obj?: { __typename?: any } | null): obj is DeliveryAddress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeliveryAddress"')
      return DeliveryAddress_possibleTypes.includes(obj.__typename)
    }
    


    const DiscountAllocation_possibleTypes: string[] = ['DiscountAllocation']
    export const isDiscountAllocation = (obj?: { __typename?: any } | null): obj is DiscountAllocation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDiscountAllocation"')
      return DiscountAllocation_possibleTypes.includes(obj.__typename)
    }
    


    const DiscountApplication_possibleTypes: string[] = ['AutomaticDiscountApplication','DiscountCodeApplication','ManualDiscountApplication','ScriptDiscountApplication']
    export const isDiscountApplication = (obj?: { __typename?: any } | null): obj is DiscountApplication => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDiscountApplication"')
      return DiscountApplication_possibleTypes.includes(obj.__typename)
    }
    


    const DiscountApplicationConnection_possibleTypes: string[] = ['DiscountApplicationConnection']
    export const isDiscountApplicationConnection = (obj?: { __typename?: any } | null): obj is DiscountApplicationConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDiscountApplicationConnection"')
      return DiscountApplicationConnection_possibleTypes.includes(obj.__typename)
    }
    


    const DiscountApplicationEdge_possibleTypes: string[] = ['DiscountApplicationEdge']
    export const isDiscountApplicationEdge = (obj?: { __typename?: any } | null): obj is DiscountApplicationEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDiscountApplicationEdge"')
      return DiscountApplicationEdge_possibleTypes.includes(obj.__typename)
    }
    


    const DiscountCodeApplication_possibleTypes: string[] = ['DiscountCodeApplication']
    export const isDiscountCodeApplication = (obj?: { __typename?: any } | null): obj is DiscountCodeApplication => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDiscountCodeApplication"')
      return DiscountCodeApplication_possibleTypes.includes(obj.__typename)
    }
    


    const DisplayableError_possibleTypes: string[] = ['CartUserError','CheckoutUserError','CustomerUserError','UserError']
    export const isDisplayableError = (obj?: { __typename?: any } | null): obj is DisplayableError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDisplayableError"')
      return DisplayableError_possibleTypes.includes(obj.__typename)
    }
    


    const Domain_possibleTypes: string[] = ['Domain']
    export const isDomain = (obj?: { __typename?: any } | null): obj is Domain => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDomain"')
      return Domain_possibleTypes.includes(obj.__typename)
    }
    


    const ExternalVideo_possibleTypes: string[] = ['ExternalVideo']
    export const isExternalVideo = (obj?: { __typename?: any } | null): obj is ExternalVideo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isExternalVideo"')
      return ExternalVideo_possibleTypes.includes(obj.__typename)
    }
    


    const Filter_possibleTypes: string[] = ['Filter']
    export const isFilter = (obj?: { __typename?: any } | null): obj is Filter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFilter"')
      return Filter_possibleTypes.includes(obj.__typename)
    }
    


    const FilterValue_possibleTypes: string[] = ['FilterValue']
    export const isFilterValue = (obj?: { __typename?: any } | null): obj is FilterValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFilterValue"')
      return FilterValue_possibleTypes.includes(obj.__typename)
    }
    


    const Fulfillment_possibleTypes: string[] = ['Fulfillment']
    export const isFulfillment = (obj?: { __typename?: any } | null): obj is Fulfillment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFulfillment"')
      return Fulfillment_possibleTypes.includes(obj.__typename)
    }
    


    const FulfillmentLineItem_possibleTypes: string[] = ['FulfillmentLineItem']
    export const isFulfillmentLineItem = (obj?: { __typename?: any } | null): obj is FulfillmentLineItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFulfillmentLineItem"')
      return FulfillmentLineItem_possibleTypes.includes(obj.__typename)
    }
    


    const FulfillmentLineItemConnection_possibleTypes: string[] = ['FulfillmentLineItemConnection']
    export const isFulfillmentLineItemConnection = (obj?: { __typename?: any } | null): obj is FulfillmentLineItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFulfillmentLineItemConnection"')
      return FulfillmentLineItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const FulfillmentLineItemEdge_possibleTypes: string[] = ['FulfillmentLineItemEdge']
    export const isFulfillmentLineItemEdge = (obj?: { __typename?: any } | null): obj is FulfillmentLineItemEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFulfillmentLineItemEdge"')
      return FulfillmentLineItemEdge_possibleTypes.includes(obj.__typename)
    }
    


    const FulfillmentTrackingInfo_possibleTypes: string[] = ['FulfillmentTrackingInfo']
    export const isFulfillmentTrackingInfo = (obj?: { __typename?: any } | null): obj is FulfillmentTrackingInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFulfillmentTrackingInfo"')
      return FulfillmentTrackingInfo_possibleTypes.includes(obj.__typename)
    }
    


    const GenericFile_possibleTypes: string[] = ['GenericFile']
    export const isGenericFile = (obj?: { __typename?: any } | null): obj is GenericFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGenericFile"')
      return GenericFile_possibleTypes.includes(obj.__typename)
    }
    


    const HasMetafields_possibleTypes: string[] = ['Article','Blog','Collection','Customer','Order','Page','Product','ProductVariant','Shop']
    export const isHasMetafields = (obj?: { __typename?: any } | null): obj is HasMetafields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHasMetafields"')
      return HasMetafields_possibleTypes.includes(obj.__typename)
    }
    


    const Image_possibleTypes: string[] = ['Image']
    export const isImage = (obj?: { __typename?: any } | null): obj is Image => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImage"')
      return Image_possibleTypes.includes(obj.__typename)
    }
    


    const ImageConnection_possibleTypes: string[] = ['ImageConnection']
    export const isImageConnection = (obj?: { __typename?: any } | null): obj is ImageConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImageConnection"')
      return ImageConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ImageEdge_possibleTypes: string[] = ['ImageEdge']
    export const isImageEdge = (obj?: { __typename?: any } | null): obj is ImageEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImageEdge"')
      return ImageEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Language_possibleTypes: string[] = ['Language']
    export const isLanguage = (obj?: { __typename?: any } | null): obj is Language => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLanguage"')
      return Language_possibleTypes.includes(obj.__typename)
    }
    


    const Localization_possibleTypes: string[] = ['Localization']
    export const isLocalization = (obj?: { __typename?: any } | null): obj is Localization => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLocalization"')
      return Localization_possibleTypes.includes(obj.__typename)
    }
    


    const Location_possibleTypes: string[] = ['Location']
    export const isLocation = (obj?: { __typename?: any } | null): obj is Location => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLocation"')
      return Location_possibleTypes.includes(obj.__typename)
    }
    


    const LocationAddress_possibleTypes: string[] = ['LocationAddress']
    export const isLocationAddress = (obj?: { __typename?: any } | null): obj is LocationAddress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLocationAddress"')
      return LocationAddress_possibleTypes.includes(obj.__typename)
    }
    


    const LocationConnection_possibleTypes: string[] = ['LocationConnection']
    export const isLocationConnection = (obj?: { __typename?: any } | null): obj is LocationConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLocationConnection"')
      return LocationConnection_possibleTypes.includes(obj.__typename)
    }
    


    const LocationEdge_possibleTypes: string[] = ['LocationEdge']
    export const isLocationEdge = (obj?: { __typename?: any } | null): obj is LocationEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLocationEdge"')
      return LocationEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MailingAddress_possibleTypes: string[] = ['MailingAddress']
    export const isMailingAddress = (obj?: { __typename?: any } | null): obj is MailingAddress => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMailingAddress"')
      return MailingAddress_possibleTypes.includes(obj.__typename)
    }
    


    const MailingAddressConnection_possibleTypes: string[] = ['MailingAddressConnection']
    export const isMailingAddressConnection = (obj?: { __typename?: any } | null): obj is MailingAddressConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMailingAddressConnection"')
      return MailingAddressConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MailingAddressEdge_possibleTypes: string[] = ['MailingAddressEdge']
    export const isMailingAddressEdge = (obj?: { __typename?: any } | null): obj is MailingAddressEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMailingAddressEdge"')
      return MailingAddressEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ManualDiscountApplication_possibleTypes: string[] = ['ManualDiscountApplication']
    export const isManualDiscountApplication = (obj?: { __typename?: any } | null): obj is ManualDiscountApplication => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isManualDiscountApplication"')
      return ManualDiscountApplication_possibleTypes.includes(obj.__typename)
    }
    


    const Media_possibleTypes: string[] = ['ExternalVideo','MediaImage','Model3d','Video']
    export const isMedia = (obj?: { __typename?: any } | null): obj is Media => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMedia"')
      return Media_possibleTypes.includes(obj.__typename)
    }
    


    const MediaConnection_possibleTypes: string[] = ['MediaConnection']
    export const isMediaConnection = (obj?: { __typename?: any } | null): obj is MediaConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaConnection"')
      return MediaConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MediaEdge_possibleTypes: string[] = ['MediaEdge']
    export const isMediaEdge = (obj?: { __typename?: any } | null): obj is MediaEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaEdge"')
      return MediaEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MediaImage_possibleTypes: string[] = ['MediaImage']
    export const isMediaImage = (obj?: { __typename?: any } | null): obj is MediaImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaImage"')
      return MediaImage_possibleTypes.includes(obj.__typename)
    }
    


    const Menu_possibleTypes: string[] = ['Menu']
    export const isMenu = (obj?: { __typename?: any } | null): obj is Menu => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenu"')
      return Menu_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItem_possibleTypes: string[] = ['MenuItem']
    export const isMenuItem = (obj?: { __typename?: any } | null): obj is MenuItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItem"')
      return MenuItem_possibleTypes.includes(obj.__typename)
    }
    


    const Merchandise_possibleTypes: string[] = ['ProductVariant']
    export const isMerchandise = (obj?: { __typename?: any } | null): obj is Merchandise => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMerchandise"')
      return Merchandise_possibleTypes.includes(obj.__typename)
    }
    


    const Metafield_possibleTypes: string[] = ['Metafield']
    export const isMetafield = (obj?: { __typename?: any } | null): obj is Metafield => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetafield"')
      return Metafield_possibleTypes.includes(obj.__typename)
    }
    


    const MetafieldParentResource_possibleTypes: string[] = ['Article','Blog','Collection','Customer','Order','Page','Product','ProductVariant','Shop']
    export const isMetafieldParentResource = (obj?: { __typename?: any } | null): obj is MetafieldParentResource => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetafieldParentResource"')
      return MetafieldParentResource_possibleTypes.includes(obj.__typename)
    }
    


    const MetafieldReference_possibleTypes: string[] = ['Collection','GenericFile','MediaImage','Metaobject','Page','Product','ProductVariant','Video']
    export const isMetafieldReference = (obj?: { __typename?: any } | null): obj is MetafieldReference => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetafieldReference"')
      return MetafieldReference_possibleTypes.includes(obj.__typename)
    }
    


    const MetafieldReferenceConnection_possibleTypes: string[] = ['MetafieldReferenceConnection']
    export const isMetafieldReferenceConnection = (obj?: { __typename?: any } | null): obj is MetafieldReferenceConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetafieldReferenceConnection"')
      return MetafieldReferenceConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MetafieldReferenceEdge_possibleTypes: string[] = ['MetafieldReferenceEdge']
    export const isMetafieldReferenceEdge = (obj?: { __typename?: any } | null): obj is MetafieldReferenceEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetafieldReferenceEdge"')
      return MetafieldReferenceEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Metaobject_possibleTypes: string[] = ['Metaobject']
    export const isMetaobject = (obj?: { __typename?: any } | null): obj is Metaobject => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaobject"')
      return Metaobject_possibleTypes.includes(obj.__typename)
    }
    


    const MetaobjectConnection_possibleTypes: string[] = ['MetaobjectConnection']
    export const isMetaobjectConnection = (obj?: { __typename?: any } | null): obj is MetaobjectConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaobjectConnection"')
      return MetaobjectConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MetaobjectEdge_possibleTypes: string[] = ['MetaobjectEdge']
    export const isMetaobjectEdge = (obj?: { __typename?: any } | null): obj is MetaobjectEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaobjectEdge"')
      return MetaobjectEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MetaobjectField_possibleTypes: string[] = ['MetaobjectField']
    export const isMetaobjectField = (obj?: { __typename?: any } | null): obj is MetaobjectField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaobjectField"')
      return MetaobjectField_possibleTypes.includes(obj.__typename)
    }
    


    const Model3d_possibleTypes: string[] = ['Model3d']
    export const isModel3d = (obj?: { __typename?: any } | null): obj is Model3d => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isModel3d"')
      return Model3d_possibleTypes.includes(obj.__typename)
    }
    


    const Model3dSource_possibleTypes: string[] = ['Model3dSource']
    export const isModel3dSource = (obj?: { __typename?: any } | null): obj is Model3dSource => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isModel3dSource"')
      return Model3dSource_possibleTypes.includes(obj.__typename)
    }
    


    const MoneyV2_possibleTypes: string[] = ['MoneyV2']
    export const isMoneyV2 = (obj?: { __typename?: any } | null): obj is MoneyV2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMoneyV2"')
      return MoneyV2_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['AppliedGiftCard','Article','Blog','Cart','CartLine','Checkout','CheckoutLineItem','Collection','Comment','ExternalVideo','GenericFile','Location','MailingAddress','MediaImage','Menu','MenuItem','Metafield','Metaobject','Model3d','Order','Page','Payment','Product','ProductOption','ProductVariant','Shop','ShopPolicy','UrlRedirect','Video']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const OnlineStorePublishable_possibleTypes: string[] = ['Article','Blog','Collection','Page','Product']
    export const isOnlineStorePublishable = (obj?: { __typename?: any } | null): obj is OnlineStorePublishable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOnlineStorePublishable"')
      return OnlineStorePublishable_possibleTypes.includes(obj.__typename)
    }
    


    const Order_possibleTypes: string[] = ['Order']
    export const isOrder = (obj?: { __typename?: any } | null): obj is Order => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrder"')
      return Order_possibleTypes.includes(obj.__typename)
    }
    


    const OrderConnection_possibleTypes: string[] = ['OrderConnection']
    export const isOrderConnection = (obj?: { __typename?: any } | null): obj is OrderConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrderConnection"')
      return OrderConnection_possibleTypes.includes(obj.__typename)
    }
    


    const OrderEdge_possibleTypes: string[] = ['OrderEdge']
    export const isOrderEdge = (obj?: { __typename?: any } | null): obj is OrderEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrderEdge"')
      return OrderEdge_possibleTypes.includes(obj.__typename)
    }
    


    const OrderLineItem_possibleTypes: string[] = ['OrderLineItem']
    export const isOrderLineItem = (obj?: { __typename?: any } | null): obj is OrderLineItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrderLineItem"')
      return OrderLineItem_possibleTypes.includes(obj.__typename)
    }
    


    const OrderLineItemConnection_possibleTypes: string[] = ['OrderLineItemConnection']
    export const isOrderLineItemConnection = (obj?: { __typename?: any } | null): obj is OrderLineItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrderLineItemConnection"')
      return OrderLineItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const OrderLineItemEdge_possibleTypes: string[] = ['OrderLineItemEdge']
    export const isOrderLineItemEdge = (obj?: { __typename?: any } | null): obj is OrderLineItemEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOrderLineItemEdge"')
      return OrderLineItemEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Page_possibleTypes: string[] = ['Page']
    export const isPage = (obj?: { __typename?: any } | null): obj is Page => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPage"')
      return Page_possibleTypes.includes(obj.__typename)
    }
    


    const PageConnection_possibleTypes: string[] = ['PageConnection']
    export const isPageConnection = (obj?: { __typename?: any } | null): obj is PageConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageConnection"')
      return PageConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PageEdge_possibleTypes: string[] = ['PageEdge']
    export const isPageEdge = (obj?: { __typename?: any } | null): obj is PageEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageEdge"')
      return PageEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const Payment_possibleTypes: string[] = ['Payment']
    export const isPayment = (obj?: { __typename?: any } | null): obj is Payment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPayment"')
      return Payment_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentSettings_possibleTypes: string[] = ['PaymentSettings']
    export const isPaymentSettings = (obj?: { __typename?: any } | null): obj is PaymentSettings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentSettings"')
      return PaymentSettings_possibleTypes.includes(obj.__typename)
    }
    


    const PricingPercentageValue_possibleTypes: string[] = ['PricingPercentageValue']
    export const isPricingPercentageValue = (obj?: { __typename?: any } | null): obj is PricingPercentageValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPricingPercentageValue"')
      return PricingPercentageValue_possibleTypes.includes(obj.__typename)
    }
    


    const PricingValue_possibleTypes: string[] = ['MoneyV2','PricingPercentageValue']
    export const isPricingValue = (obj?: { __typename?: any } | null): obj is PricingValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPricingValue"')
      return PricingValue_possibleTypes.includes(obj.__typename)
    }
    


    const Product_possibleTypes: string[] = ['Product']
    export const isProduct = (obj?: { __typename?: any } | null): obj is Product => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProduct"')
      return Product_possibleTypes.includes(obj.__typename)
    }
    


    const ProductConnection_possibleTypes: string[] = ['ProductConnection']
    export const isProductConnection = (obj?: { __typename?: any } | null): obj is ProductConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductConnection"')
      return ProductConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ProductEdge_possibleTypes: string[] = ['ProductEdge']
    export const isProductEdge = (obj?: { __typename?: any } | null): obj is ProductEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductEdge"')
      return ProductEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ProductOption_possibleTypes: string[] = ['ProductOption']
    export const isProductOption = (obj?: { __typename?: any } | null): obj is ProductOption => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductOption"')
      return ProductOption_possibleTypes.includes(obj.__typename)
    }
    


    const ProductPriceRange_possibleTypes: string[] = ['ProductPriceRange']
    export const isProductPriceRange = (obj?: { __typename?: any } | null): obj is ProductPriceRange => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductPriceRange"')
      return ProductPriceRange_possibleTypes.includes(obj.__typename)
    }
    


    const ProductVariant_possibleTypes: string[] = ['ProductVariant']
    export const isProductVariant = (obj?: { __typename?: any } | null): obj is ProductVariant => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductVariant"')
      return ProductVariant_possibleTypes.includes(obj.__typename)
    }
    


    const ProductVariantConnection_possibleTypes: string[] = ['ProductVariantConnection']
    export const isProductVariantConnection = (obj?: { __typename?: any } | null): obj is ProductVariantConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductVariantConnection"')
      return ProductVariantConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ProductVariantEdge_possibleTypes: string[] = ['ProductVariantEdge']
    export const isProductVariantEdge = (obj?: { __typename?: any } | null): obj is ProductVariantEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProductVariantEdge"')
      return ProductVariantEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryRoot_possibleTypes: string[] = ['QueryRoot']
    export const isQueryRoot = (obj?: { __typename?: any } | null): obj is QueryRoot => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryRoot"')
      return QueryRoot_possibleTypes.includes(obj.__typename)
    }
    


    const SEO_possibleTypes: string[] = ['SEO']
    export const isSEO = (obj?: { __typename?: any } | null): obj is SEO => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSEO"')
      return SEO_possibleTypes.includes(obj.__typename)
    }
    


    const ScriptDiscountApplication_possibleTypes: string[] = ['ScriptDiscountApplication']
    export const isScriptDiscountApplication = (obj?: { __typename?: any } | null): obj is ScriptDiscountApplication => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScriptDiscountApplication"')
      return ScriptDiscountApplication_possibleTypes.includes(obj.__typename)
    }
    


    const SelectedOption_possibleTypes: string[] = ['SelectedOption']
    export const isSelectedOption = (obj?: { __typename?: any } | null): obj is SelectedOption => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSelectedOption"')
      return SelectedOption_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlan_possibleTypes: string[] = ['SellingPlan']
    export const isSellingPlan = (obj?: { __typename?: any } | null): obj is SellingPlan => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlan"')
      return SellingPlan_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanAllocation_possibleTypes: string[] = ['SellingPlanAllocation']
    export const isSellingPlanAllocation = (obj?: { __typename?: any } | null): obj is SellingPlanAllocation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanAllocation"')
      return SellingPlanAllocation_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanAllocationConnection_possibleTypes: string[] = ['SellingPlanAllocationConnection']
    export const isSellingPlanAllocationConnection = (obj?: { __typename?: any } | null): obj is SellingPlanAllocationConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanAllocationConnection"')
      return SellingPlanAllocationConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanAllocationEdge_possibleTypes: string[] = ['SellingPlanAllocationEdge']
    export const isSellingPlanAllocationEdge = (obj?: { __typename?: any } | null): obj is SellingPlanAllocationEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanAllocationEdge"')
      return SellingPlanAllocationEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanAllocationPriceAdjustment_possibleTypes: string[] = ['SellingPlanAllocationPriceAdjustment']
    export const isSellingPlanAllocationPriceAdjustment = (obj?: { __typename?: any } | null): obj is SellingPlanAllocationPriceAdjustment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanAllocationPriceAdjustment"')
      return SellingPlanAllocationPriceAdjustment_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanCheckoutCharge_possibleTypes: string[] = ['SellingPlanCheckoutCharge']
    export const isSellingPlanCheckoutCharge = (obj?: { __typename?: any } | null): obj is SellingPlanCheckoutCharge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanCheckoutCharge"')
      return SellingPlanCheckoutCharge_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanCheckoutChargePercentageValue_possibleTypes: string[] = ['SellingPlanCheckoutChargePercentageValue']
    export const isSellingPlanCheckoutChargePercentageValue = (obj?: { __typename?: any } | null): obj is SellingPlanCheckoutChargePercentageValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanCheckoutChargePercentageValue"')
      return SellingPlanCheckoutChargePercentageValue_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanCheckoutChargeValue_possibleTypes: string[] = ['MoneyV2','SellingPlanCheckoutChargePercentageValue']
    export const isSellingPlanCheckoutChargeValue = (obj?: { __typename?: any } | null): obj is SellingPlanCheckoutChargeValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanCheckoutChargeValue"')
      return SellingPlanCheckoutChargeValue_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanConnection_possibleTypes: string[] = ['SellingPlanConnection']
    export const isSellingPlanConnection = (obj?: { __typename?: any } | null): obj is SellingPlanConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanConnection"')
      return SellingPlanConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanEdge_possibleTypes: string[] = ['SellingPlanEdge']
    export const isSellingPlanEdge = (obj?: { __typename?: any } | null): obj is SellingPlanEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanEdge"')
      return SellingPlanEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanFixedAmountPriceAdjustment_possibleTypes: string[] = ['SellingPlanFixedAmountPriceAdjustment']
    export const isSellingPlanFixedAmountPriceAdjustment = (obj?: { __typename?: any } | null): obj is SellingPlanFixedAmountPriceAdjustment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanFixedAmountPriceAdjustment"')
      return SellingPlanFixedAmountPriceAdjustment_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanFixedPriceAdjustment_possibleTypes: string[] = ['SellingPlanFixedPriceAdjustment']
    export const isSellingPlanFixedPriceAdjustment = (obj?: { __typename?: any } | null): obj is SellingPlanFixedPriceAdjustment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanFixedPriceAdjustment"')
      return SellingPlanFixedPriceAdjustment_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanGroup_possibleTypes: string[] = ['SellingPlanGroup']
    export const isSellingPlanGroup = (obj?: { __typename?: any } | null): obj is SellingPlanGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanGroup"')
      return SellingPlanGroup_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanGroupConnection_possibleTypes: string[] = ['SellingPlanGroupConnection']
    export const isSellingPlanGroupConnection = (obj?: { __typename?: any } | null): obj is SellingPlanGroupConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanGroupConnection"')
      return SellingPlanGroupConnection_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanGroupEdge_possibleTypes: string[] = ['SellingPlanGroupEdge']
    export const isSellingPlanGroupEdge = (obj?: { __typename?: any } | null): obj is SellingPlanGroupEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanGroupEdge"')
      return SellingPlanGroupEdge_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanGroupOption_possibleTypes: string[] = ['SellingPlanGroupOption']
    export const isSellingPlanGroupOption = (obj?: { __typename?: any } | null): obj is SellingPlanGroupOption => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanGroupOption"')
      return SellingPlanGroupOption_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanOption_possibleTypes: string[] = ['SellingPlanOption']
    export const isSellingPlanOption = (obj?: { __typename?: any } | null): obj is SellingPlanOption => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanOption"')
      return SellingPlanOption_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanPercentagePriceAdjustment_possibleTypes: string[] = ['SellingPlanPercentagePriceAdjustment']
    export const isSellingPlanPercentagePriceAdjustment = (obj?: { __typename?: any } | null): obj is SellingPlanPercentagePriceAdjustment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanPercentagePriceAdjustment"')
      return SellingPlanPercentagePriceAdjustment_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanPriceAdjustment_possibleTypes: string[] = ['SellingPlanPriceAdjustment']
    export const isSellingPlanPriceAdjustment = (obj?: { __typename?: any } | null): obj is SellingPlanPriceAdjustment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanPriceAdjustment"')
      return SellingPlanPriceAdjustment_possibleTypes.includes(obj.__typename)
    }
    


    const SellingPlanPriceAdjustmentValue_possibleTypes: string[] = ['SellingPlanFixedAmountPriceAdjustment','SellingPlanFixedPriceAdjustment','SellingPlanPercentagePriceAdjustment']
    export const isSellingPlanPriceAdjustmentValue = (obj?: { __typename?: any } | null): obj is SellingPlanPriceAdjustmentValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSellingPlanPriceAdjustmentValue"')
      return SellingPlanPriceAdjustmentValue_possibleTypes.includes(obj.__typename)
    }
    


    const ShippingRate_possibleTypes: string[] = ['ShippingRate']
    export const isShippingRate = (obj?: { __typename?: any } | null): obj is ShippingRate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShippingRate"')
      return ShippingRate_possibleTypes.includes(obj.__typename)
    }
    


    const Shop_possibleTypes: string[] = ['Shop']
    export const isShop = (obj?: { __typename?: any } | null): obj is Shop => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShop"')
      return Shop_possibleTypes.includes(obj.__typename)
    }
    


    const ShopPolicy_possibleTypes: string[] = ['ShopPolicy']
    export const isShopPolicy = (obj?: { __typename?: any } | null): obj is ShopPolicy => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopPolicy"')
      return ShopPolicy_possibleTypes.includes(obj.__typename)
    }
    


    const ShopPolicyWithDefault_possibleTypes: string[] = ['ShopPolicyWithDefault']
    export const isShopPolicyWithDefault = (obj?: { __typename?: any } | null): obj is ShopPolicyWithDefault => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShopPolicyWithDefault"')
      return ShopPolicyWithDefault_possibleTypes.includes(obj.__typename)
    }
    


    const StoreAvailability_possibleTypes: string[] = ['StoreAvailability']
    export const isStoreAvailability = (obj?: { __typename?: any } | null): obj is StoreAvailability => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStoreAvailability"')
      return StoreAvailability_possibleTypes.includes(obj.__typename)
    }
    


    const StoreAvailabilityConnection_possibleTypes: string[] = ['StoreAvailabilityConnection']
    export const isStoreAvailabilityConnection = (obj?: { __typename?: any } | null): obj is StoreAvailabilityConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStoreAvailabilityConnection"')
      return StoreAvailabilityConnection_possibleTypes.includes(obj.__typename)
    }
    


    const StoreAvailabilityEdge_possibleTypes: string[] = ['StoreAvailabilityEdge']
    export const isStoreAvailabilityEdge = (obj?: { __typename?: any } | null): obj is StoreAvailabilityEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStoreAvailabilityEdge"')
      return StoreAvailabilityEdge_possibleTypes.includes(obj.__typename)
    }
    


    const StringConnection_possibleTypes: string[] = ['StringConnection']
    export const isStringConnection = (obj?: { __typename?: any } | null): obj is StringConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStringConnection"')
      return StringConnection_possibleTypes.includes(obj.__typename)
    }
    


    const StringEdge_possibleTypes: string[] = ['StringEdge']
    export const isStringEdge = (obj?: { __typename?: any } | null): obj is StringEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStringEdge"')
      return StringEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Transaction_possibleTypes: string[] = ['Transaction']
    export const isTransaction = (obj?: { __typename?: any } | null): obj is Transaction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTransaction"')
      return Transaction_possibleTypes.includes(obj.__typename)
    }
    


    const UnitPriceMeasurement_possibleTypes: string[] = ['UnitPriceMeasurement']
    export const isUnitPriceMeasurement = (obj?: { __typename?: any } | null): obj is UnitPriceMeasurement => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnitPriceMeasurement"')
      return UnitPriceMeasurement_possibleTypes.includes(obj.__typename)
    }
    


    const UrlRedirect_possibleTypes: string[] = ['UrlRedirect']
    export const isUrlRedirect = (obj?: { __typename?: any } | null): obj is UrlRedirect => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUrlRedirect"')
      return UrlRedirect_possibleTypes.includes(obj.__typename)
    }
    


    const UrlRedirectConnection_possibleTypes: string[] = ['UrlRedirectConnection']
    export const isUrlRedirectConnection = (obj?: { __typename?: any } | null): obj is UrlRedirectConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUrlRedirectConnection"')
      return UrlRedirectConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UrlRedirectEdge_possibleTypes: string[] = ['UrlRedirectEdge']
    export const isUrlRedirectEdge = (obj?: { __typename?: any } | null): obj is UrlRedirectEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUrlRedirectEdge"')
      return UrlRedirectEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserError_possibleTypes: string[] = ['UserError']
    export const isUserError = (obj?: { __typename?: any } | null): obj is UserError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserError"')
      return UserError_possibleTypes.includes(obj.__typename)
    }
    


    const Video_possibleTypes: string[] = ['Video']
    export const isVideo = (obj?: { __typename?: any } | null): obj is Video => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVideo"')
      return Video_possibleTypes.includes(obj.__typename)
    }
    


    const VideoSource_possibleTypes: string[] = ['VideoSource']
    export const isVideoSource = (obj?: { __typename?: any } | null): obj is VideoSource => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVideoSource"')
      return VideoSource_possibleTypes.includes(obj.__typename)
    }
    

export const enumArticleSortKeys = {
   TITLE: 'TITLE' as const,
   BLOG_TITLE: 'BLOG_TITLE' as const,
   AUTHOR: 'AUTHOR' as const,
   UPDATED_AT: 'UPDATED_AT' as const,
   PUBLISHED_AT: 'PUBLISHED_AT' as const,
   ID: 'ID' as const,
   RELEVANCE: 'RELEVANCE' as const
}

export const enumBlogSortKeys = {
   HANDLE: 'HANDLE' as const,
   TITLE: 'TITLE' as const,
   ID: 'ID' as const,
   RELEVANCE: 'RELEVANCE' as const
}

export const enumCardBrand = {
   VISA: 'VISA' as const,
   MASTERCARD: 'MASTERCARD' as const,
   DISCOVER: 'DISCOVER' as const,
   AMERICAN_EXPRESS: 'AMERICAN_EXPRESS' as const,
   DINERS_CLUB: 'DINERS_CLUB' as const,
   JCB: 'JCB' as const
}

export const enumCartErrorCode = {
   INVALID: 'INVALID' as const,
   LESS_THAN: 'LESS_THAN' as const,
   INVALID_MERCHANDISE_LINE: 'INVALID_MERCHANDISE_LINE' as const,
   MISSING_DISCOUNT_CODE: 'MISSING_DISCOUNT_CODE' as const,
   MISSING_NOTE: 'MISSING_NOTE' as const
}

export const enumCheckoutErrorCode = {
   BLANK: 'BLANK' as const,
   INVALID: 'INVALID' as const,
   TOO_LONG: 'TOO_LONG' as const,
   PRESENT: 'PRESENT' as const,
   LESS_THAN: 'LESS_THAN' as const,
   GREATER_THAN_OR_EQUAL_TO: 'GREATER_THAN_OR_EQUAL_TO' as const,
   LESS_THAN_OR_EQUAL_TO: 'LESS_THAN_OR_EQUAL_TO' as const,
   ALREADY_COMPLETED: 'ALREADY_COMPLETED' as const,
   LOCKED: 'LOCKED' as const,
   NOT_SUPPORTED: 'NOT_SUPPORTED' as const,
   BAD_DOMAIN: 'BAD_DOMAIN' as const,
   INVALID_FOR_COUNTRY: 'INVALID_FOR_COUNTRY' as const,
   INVALID_FOR_COUNTRY_AND_PROVINCE: 'INVALID_FOR_COUNTRY_AND_PROVINCE' as const,
   INVALID_STATE_IN_COUNTRY: 'INVALID_STATE_IN_COUNTRY' as const,
   INVALID_PROVINCE_IN_COUNTRY: 'INVALID_PROVINCE_IN_COUNTRY' as const,
   INVALID_REGION_IN_COUNTRY: 'INVALID_REGION_IN_COUNTRY' as const,
   SHIPPING_RATE_EXPIRED: 'SHIPPING_RATE_EXPIRED' as const,
   GIFT_CARD_UNUSABLE: 'GIFT_CARD_UNUSABLE' as const,
   GIFT_CARD_DISABLED: 'GIFT_CARD_DISABLED' as const,
   GIFT_CARD_CODE_INVALID: 'GIFT_CARD_CODE_INVALID' as const,
   GIFT_CARD_ALREADY_APPLIED: 'GIFT_CARD_ALREADY_APPLIED' as const,
   GIFT_CARD_CURRENCY_MISMATCH: 'GIFT_CARD_CURRENCY_MISMATCH' as const,
   GIFT_CARD_EXPIRED: 'GIFT_CARD_EXPIRED' as const,
   GIFT_CARD_DEPLETED: 'GIFT_CARD_DEPLETED' as const,
   GIFT_CARD_NOT_FOUND: 'GIFT_CARD_NOT_FOUND' as const,
   CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE: 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE' as const,
   DISCOUNT_EXPIRED: 'DISCOUNT_EXPIRED' as const,
   DISCOUNT_DISABLED: 'DISCOUNT_DISABLED' as const,
   DISCOUNT_LIMIT_REACHED: 'DISCOUNT_LIMIT_REACHED' as const,
   HIGHER_VALUE_DISCOUNT_APPLIED: 'HIGHER_VALUE_DISCOUNT_APPLIED' as const,
   MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED: 'MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED' as const,
   DISCOUNT_NOT_FOUND: 'DISCOUNT_NOT_FOUND' as const,
   CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE: 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE' as const,
   DISCOUNT_CODE_APPLICATION_FAILED: 'DISCOUNT_CODE_APPLICATION_FAILED' as const,
   EMPTY: 'EMPTY' as const,
   NOT_ENOUGH_IN_STOCK: 'NOT_ENOUGH_IN_STOCK' as const,
   MISSING_PAYMENT_INPUT: 'MISSING_PAYMENT_INPUT' as const,
   TOTAL_PRICE_MISMATCH: 'TOTAL_PRICE_MISMATCH' as const,
   LINE_ITEM_NOT_FOUND: 'LINE_ITEM_NOT_FOUND' as const,
   UNABLE_TO_APPLY: 'UNABLE_TO_APPLY' as const,
   DISCOUNT_ALREADY_APPLIED: 'DISCOUNT_ALREADY_APPLIED' as const,
   THROTTLED_DURING_CHECKOUT: 'THROTTLED_DURING_CHECKOUT' as const,
   EXPIRED_QUEUE_TOKEN: 'EXPIRED_QUEUE_TOKEN' as const,
   INVALID_QUEUE_TOKEN: 'INVALID_QUEUE_TOKEN' as const,
   INVALID_COUNTRY_AND_CURRENCY: 'INVALID_COUNTRY_AND_CURRENCY' as const
}

export const enumCollectionSortKeys = {
   TITLE: 'TITLE' as const,
   UPDATED_AT: 'UPDATED_AT' as const,
   ID: 'ID' as const,
   RELEVANCE: 'RELEVANCE' as const
}

export const enumCountryCode = {
   AF: 'AF' as const,
   AX: 'AX' as const,
   AL: 'AL' as const,
   DZ: 'DZ' as const,
   AD: 'AD' as const,
   AO: 'AO' as const,
   AI: 'AI' as const,
   AG: 'AG' as const,
   AR: 'AR' as const,
   AM: 'AM' as const,
   AW: 'AW' as const,
   AC: 'AC' as const,
   AU: 'AU' as const,
   AT: 'AT' as const,
   AZ: 'AZ' as const,
   BS: 'BS' as const,
   BH: 'BH' as const,
   BD: 'BD' as const,
   BB: 'BB' as const,
   BY: 'BY' as const,
   BE: 'BE' as const,
   BZ: 'BZ' as const,
   BJ: 'BJ' as const,
   BM: 'BM' as const,
   BT: 'BT' as const,
   BO: 'BO' as const,
   BA: 'BA' as const,
   BW: 'BW' as const,
   BV: 'BV' as const,
   BR: 'BR' as const,
   IO: 'IO' as const,
   BN: 'BN' as const,
   BG: 'BG' as const,
   BF: 'BF' as const,
   BI: 'BI' as const,
   KH: 'KH' as const,
   CA: 'CA' as const,
   CV: 'CV' as const,
   BQ: 'BQ' as const,
   KY: 'KY' as const,
   CF: 'CF' as const,
   TD: 'TD' as const,
   CL: 'CL' as const,
   CN: 'CN' as const,
   CX: 'CX' as const,
   CC: 'CC' as const,
   CO: 'CO' as const,
   KM: 'KM' as const,
   CG: 'CG' as const,
   CD: 'CD' as const,
   CK: 'CK' as const,
   CR: 'CR' as const,
   HR: 'HR' as const,
   CU: 'CU' as const,
   CW: 'CW' as const,
   CY: 'CY' as const,
   CZ: 'CZ' as const,
   CI: 'CI' as const,
   DK: 'DK' as const,
   DJ: 'DJ' as const,
   DM: 'DM' as const,
   DO: 'DO' as const,
   EC: 'EC' as const,
   EG: 'EG' as const,
   SV: 'SV' as const,
   GQ: 'GQ' as const,
   ER: 'ER' as const,
   EE: 'EE' as const,
   SZ: 'SZ' as const,
   ET: 'ET' as const,
   FK: 'FK' as const,
   FO: 'FO' as const,
   FJ: 'FJ' as const,
   FI: 'FI' as const,
   FR: 'FR' as const,
   GF: 'GF' as const,
   PF: 'PF' as const,
   TF: 'TF' as const,
   GA: 'GA' as const,
   GM: 'GM' as const,
   GE: 'GE' as const,
   DE: 'DE' as const,
   GH: 'GH' as const,
   GI: 'GI' as const,
   GR: 'GR' as const,
   GL: 'GL' as const,
   GD: 'GD' as const,
   GP: 'GP' as const,
   GT: 'GT' as const,
   GG: 'GG' as const,
   GN: 'GN' as const,
   GW: 'GW' as const,
   GY: 'GY' as const,
   HT: 'HT' as const,
   HM: 'HM' as const,
   VA: 'VA' as const,
   HN: 'HN' as const,
   HK: 'HK' as const,
   HU: 'HU' as const,
   IS: 'IS' as const,
   IN: 'IN' as const,
   ID: 'ID' as const,
   IR: 'IR' as const,
   IQ: 'IQ' as const,
   IE: 'IE' as const,
   IM: 'IM' as const,
   IL: 'IL' as const,
   IT: 'IT' as const,
   JM: 'JM' as const,
   JP: 'JP' as const,
   JE: 'JE' as const,
   JO: 'JO' as const,
   KZ: 'KZ' as const,
   KE: 'KE' as const,
   KI: 'KI' as const,
   KP: 'KP' as const,
   XK: 'XK' as const,
   KW: 'KW' as const,
   KG: 'KG' as const,
   LA: 'LA' as const,
   LV: 'LV' as const,
   LB: 'LB' as const,
   LS: 'LS' as const,
   LR: 'LR' as const,
   LY: 'LY' as const,
   LI: 'LI' as const,
   LT: 'LT' as const,
   LU: 'LU' as const,
   MO: 'MO' as const,
   MG: 'MG' as const,
   MW: 'MW' as const,
   MY: 'MY' as const,
   MV: 'MV' as const,
   ML: 'ML' as const,
   MT: 'MT' as const,
   MQ: 'MQ' as const,
   MR: 'MR' as const,
   MU: 'MU' as const,
   YT: 'YT' as const,
   MX: 'MX' as const,
   MD: 'MD' as const,
   MC: 'MC' as const,
   MN: 'MN' as const,
   ME: 'ME' as const,
   MS: 'MS' as const,
   MA: 'MA' as const,
   MZ: 'MZ' as const,
   MM: 'MM' as const,
   NA: 'NA' as const,
   NR: 'NR' as const,
   NP: 'NP' as const,
   NL: 'NL' as const,
   AN: 'AN' as const,
   NC: 'NC' as const,
   NZ: 'NZ' as const,
   NI: 'NI' as const,
   NE: 'NE' as const,
   NG: 'NG' as const,
   NU: 'NU' as const,
   NF: 'NF' as const,
   MK: 'MK' as const,
   NO: 'NO' as const,
   OM: 'OM' as const,
   PK: 'PK' as const,
   PS: 'PS' as const,
   PA: 'PA' as const,
   PG: 'PG' as const,
   PY: 'PY' as const,
   PE: 'PE' as const,
   PH: 'PH' as const,
   PN: 'PN' as const,
   PL: 'PL' as const,
   PT: 'PT' as const,
   QA: 'QA' as const,
   CM: 'CM' as const,
   RE: 'RE' as const,
   RO: 'RO' as const,
   RU: 'RU' as const,
   RW: 'RW' as const,
   BL: 'BL' as const,
   SH: 'SH' as const,
   KN: 'KN' as const,
   LC: 'LC' as const,
   MF: 'MF' as const,
   PM: 'PM' as const,
   WS: 'WS' as const,
   SM: 'SM' as const,
   ST: 'ST' as const,
   SA: 'SA' as const,
   SN: 'SN' as const,
   RS: 'RS' as const,
   SC: 'SC' as const,
   SL: 'SL' as const,
   SG: 'SG' as const,
   SX: 'SX' as const,
   SK: 'SK' as const,
   SI: 'SI' as const,
   SB: 'SB' as const,
   SO: 'SO' as const,
   ZA: 'ZA' as const,
   GS: 'GS' as const,
   KR: 'KR' as const,
   SS: 'SS' as const,
   ES: 'ES' as const,
   LK: 'LK' as const,
   VC: 'VC' as const,
   SD: 'SD' as const,
   SR: 'SR' as const,
   SJ: 'SJ' as const,
   SE: 'SE' as const,
   CH: 'CH' as const,
   SY: 'SY' as const,
   TW: 'TW' as const,
   TJ: 'TJ' as const,
   TZ: 'TZ' as const,
   TH: 'TH' as const,
   TL: 'TL' as const,
   TG: 'TG' as const,
   TK: 'TK' as const,
   TO: 'TO' as const,
   TT: 'TT' as const,
   TA: 'TA' as const,
   TN: 'TN' as const,
   TR: 'TR' as const,
   TM: 'TM' as const,
   TC: 'TC' as const,
   TV: 'TV' as const,
   UG: 'UG' as const,
   UA: 'UA' as const,
   AE: 'AE' as const,
   GB: 'GB' as const,
   US: 'US' as const,
   UM: 'UM' as const,
   UY: 'UY' as const,
   UZ: 'UZ' as const,
   VU: 'VU' as const,
   VE: 'VE' as const,
   VN: 'VN' as const,
   VG: 'VG' as const,
   WF: 'WF' as const,
   EH: 'EH' as const,
   YE: 'YE' as const,
   ZM: 'ZM' as const,
   ZW: 'ZW' as const,
   ZZ: 'ZZ' as const
}

export const enumCropRegion = {
   CENTER: 'CENTER' as const,
   TOP: 'TOP' as const,
   BOTTOM: 'BOTTOM' as const,
   LEFT: 'LEFT' as const,
   RIGHT: 'RIGHT' as const
}

export const enumCurrencyCode = {
   USD: 'USD' as const,
   EUR: 'EUR' as const,
   GBP: 'GBP' as const,
   CAD: 'CAD' as const,
   AFN: 'AFN' as const,
   ALL: 'ALL' as const,
   DZD: 'DZD' as const,
   AOA: 'AOA' as const,
   ARS: 'ARS' as const,
   AMD: 'AMD' as const,
   AWG: 'AWG' as const,
   AUD: 'AUD' as const,
   BBD: 'BBD' as const,
   AZN: 'AZN' as const,
   BDT: 'BDT' as const,
   BSD: 'BSD' as const,
   BHD: 'BHD' as const,
   BIF: 'BIF' as const,
   BZD: 'BZD' as const,
   BMD: 'BMD' as const,
   BTN: 'BTN' as const,
   BAM: 'BAM' as const,
   BRL: 'BRL' as const,
   BOB: 'BOB' as const,
   BWP: 'BWP' as const,
   BND: 'BND' as const,
   BGN: 'BGN' as const,
   MMK: 'MMK' as const,
   KHR: 'KHR' as const,
   CVE: 'CVE' as const,
   KYD: 'KYD' as const,
   XAF: 'XAF' as const,
   CLP: 'CLP' as const,
   CNY: 'CNY' as const,
   COP: 'COP' as const,
   KMF: 'KMF' as const,
   CDF: 'CDF' as const,
   CRC: 'CRC' as const,
   HRK: 'HRK' as const,
   CZK: 'CZK' as const,
   DKK: 'DKK' as const,
   DOP: 'DOP' as const,
   XCD: 'XCD' as const,
   EGP: 'EGP' as const,
   ETB: 'ETB' as const,
   XPF: 'XPF' as const,
   FJD: 'FJD' as const,
   GMD: 'GMD' as const,
   GHS: 'GHS' as const,
   GTQ: 'GTQ' as const,
   GYD: 'GYD' as const,
   GEL: 'GEL' as const,
   HTG: 'HTG' as const,
   HNL: 'HNL' as const,
   HKD: 'HKD' as const,
   HUF: 'HUF' as const,
   ISK: 'ISK' as const,
   INR: 'INR' as const,
   IDR: 'IDR' as const,
   ILS: 'ILS' as const,
   IQD: 'IQD' as const,
   JMD: 'JMD' as const,
   JPY: 'JPY' as const,
   JEP: 'JEP' as const,
   JOD: 'JOD' as const,
   KZT: 'KZT' as const,
   KES: 'KES' as const,
   KWD: 'KWD' as const,
   KGS: 'KGS' as const,
   LAK: 'LAK' as const,
   LVL: 'LVL' as const,
   LBP: 'LBP' as const,
   LSL: 'LSL' as const,
   LRD: 'LRD' as const,
   LTL: 'LTL' as const,
   MGA: 'MGA' as const,
   MKD: 'MKD' as const,
   MOP: 'MOP' as const,
   MWK: 'MWK' as const,
   MVR: 'MVR' as const,
   MXN: 'MXN' as const,
   MYR: 'MYR' as const,
   MUR: 'MUR' as const,
   MDL: 'MDL' as const,
   MAD: 'MAD' as const,
   MNT: 'MNT' as const,
   MZN: 'MZN' as const,
   NAD: 'NAD' as const,
   NPR: 'NPR' as const,
   ANG: 'ANG' as const,
   NZD: 'NZD' as const,
   NIO: 'NIO' as const,
   NGN: 'NGN' as const,
   NOK: 'NOK' as const,
   OMR: 'OMR' as const,
   PAB: 'PAB' as const,
   PKR: 'PKR' as const,
   PGK: 'PGK' as const,
   PYG: 'PYG' as const,
   PEN: 'PEN' as const,
   PHP: 'PHP' as const,
   PLN: 'PLN' as const,
   QAR: 'QAR' as const,
   RON: 'RON' as const,
   RUB: 'RUB' as const,
   RWF: 'RWF' as const,
   WST: 'WST' as const,
   SAR: 'SAR' as const,
   RSD: 'RSD' as const,
   SCR: 'SCR' as const,
   SGD: 'SGD' as const,
   SDG: 'SDG' as const,
   SYP: 'SYP' as const,
   ZAR: 'ZAR' as const,
   KRW: 'KRW' as const,
   SSP: 'SSP' as const,
   SBD: 'SBD' as const,
   LKR: 'LKR' as const,
   SRD: 'SRD' as const,
   SZL: 'SZL' as const,
   SEK: 'SEK' as const,
   CHF: 'CHF' as const,
   TWD: 'TWD' as const,
   THB: 'THB' as const,
   TZS: 'TZS' as const,
   TTD: 'TTD' as const,
   TND: 'TND' as const,
   TRY: 'TRY' as const,
   TMT: 'TMT' as const,
   UGX: 'UGX' as const,
   UAH: 'UAH' as const,
   AED: 'AED' as const,
   UYU: 'UYU' as const,
   UZS: 'UZS' as const,
   VUV: 'VUV' as const,
   VND: 'VND' as const,
   XOF: 'XOF' as const,
   YER: 'YER' as const,
   ZMW: 'ZMW' as const,
   BYN: 'BYN' as const,
   BYR: 'BYR' as const,
   DJF: 'DJF' as const,
   ERN: 'ERN' as const,
   FKP: 'FKP' as const,
   GIP: 'GIP' as const,
   GNF: 'GNF' as const,
   IRR: 'IRR' as const,
   KID: 'KID' as const,
   LYD: 'LYD' as const,
   MRU: 'MRU' as const,
   SLL: 'SLL' as const,
   SHP: 'SHP' as const,
   SOS: 'SOS' as const,
   STD: 'STD' as const,
   STN: 'STN' as const,
   TJS: 'TJS' as const,
   TOP: 'TOP' as const,
   VED: 'VED' as const,
   VEF: 'VEF' as const,
   VES: 'VES' as const,
   XXX: 'XXX' as const
}

export const enumCustomerErrorCode = {
   BLANK: 'BLANK' as const,
   INVALID: 'INVALID' as const,
   TAKEN: 'TAKEN' as const,
   TOO_LONG: 'TOO_LONG' as const,
   TOO_SHORT: 'TOO_SHORT' as const,
   UNIDENTIFIED_CUSTOMER: 'UNIDENTIFIED_CUSTOMER' as const,
   CUSTOMER_DISABLED: 'CUSTOMER_DISABLED' as const,
   PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE: 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE' as const,
   CONTAINS_HTML_TAGS: 'CONTAINS_HTML_TAGS' as const,
   CONTAINS_URL: 'CONTAINS_URL' as const,
   TOKEN_INVALID: 'TOKEN_INVALID' as const,
   ALREADY_ENABLED: 'ALREADY_ENABLED' as const,
   NOT_FOUND: 'NOT_FOUND' as const,
   BAD_DOMAIN: 'BAD_DOMAIN' as const,
   INVALID_MULTIPASS_REQUEST: 'INVALID_MULTIPASS_REQUEST' as const
}

export const enumDeliveryMethodType = {
   SHIPPING: 'SHIPPING' as const,
   PICK_UP: 'PICK_UP' as const,
   RETAIL: 'RETAIL' as const,
   LOCAL: 'LOCAL' as const,
   PICKUP_POINT: 'PICKUP_POINT' as const,
   NONE: 'NONE' as const
}

export const enumDigitalWallet = {
   APPLE_PAY: 'APPLE_PAY' as const,
   ANDROID_PAY: 'ANDROID_PAY' as const,
   GOOGLE_PAY: 'GOOGLE_PAY' as const,
   SHOPIFY_PAY: 'SHOPIFY_PAY' as const
}

export const enumDiscountApplicationAllocationMethod = {
   ACROSS: 'ACROSS' as const,
   EACH: 'EACH' as const,
   ONE: 'ONE' as const
}

export const enumDiscountApplicationTargetSelection = {
   ALL: 'ALL' as const,
   ENTITLED: 'ENTITLED' as const,
   EXPLICIT: 'EXPLICIT' as const
}

export const enumDiscountApplicationTargetType = {
   LINE_ITEM: 'LINE_ITEM' as const,
   SHIPPING_LINE: 'SHIPPING_LINE' as const
}

export const enumFilterType = {
   LIST: 'LIST' as const,
   PRICE_RANGE: 'PRICE_RANGE' as const,
   BOOLEAN: 'BOOLEAN' as const
}

export const enumImageContentType = {
   PNG: 'PNG' as const,
   JPG: 'JPG' as const,
   WEBP: 'WEBP' as const
}

export const enumLanguageCode = {
   AF: 'AF' as const,
   AK: 'AK' as const,
   AM: 'AM' as const,
   AR: 'AR' as const,
   AS: 'AS' as const,
   AZ: 'AZ' as const,
   BE: 'BE' as const,
   BG: 'BG' as const,
   BM: 'BM' as const,
   BN: 'BN' as const,
   BO: 'BO' as const,
   BR: 'BR' as const,
   BS: 'BS' as const,
   CA: 'CA' as const,
   CE: 'CE' as const,
   CS: 'CS' as const,
   CY: 'CY' as const,
   DA: 'DA' as const,
   DE: 'DE' as const,
   DZ: 'DZ' as const,
   EE: 'EE' as const,
   EL: 'EL' as const,
   EN: 'EN' as const,
   EO: 'EO' as const,
   ES: 'ES' as const,
   ET: 'ET' as const,
   EU: 'EU' as const,
   FA: 'FA' as const,
   FF: 'FF' as const,
   FI: 'FI' as const,
   FO: 'FO' as const,
   FR: 'FR' as const,
   FY: 'FY' as const,
   GA: 'GA' as const,
   GD: 'GD' as const,
   GL: 'GL' as const,
   GU: 'GU' as const,
   GV: 'GV' as const,
   HA: 'HA' as const,
   HE: 'HE' as const,
   HI: 'HI' as const,
   HR: 'HR' as const,
   HU: 'HU' as const,
   HY: 'HY' as const,
   IA: 'IA' as const,
   ID: 'ID' as const,
   IG: 'IG' as const,
   II: 'II' as const,
   IS: 'IS' as const,
   IT: 'IT' as const,
   JA: 'JA' as const,
   JV: 'JV' as const,
   KA: 'KA' as const,
   KI: 'KI' as const,
   KK: 'KK' as const,
   KL: 'KL' as const,
   KM: 'KM' as const,
   KN: 'KN' as const,
   KO: 'KO' as const,
   KS: 'KS' as const,
   KU: 'KU' as const,
   KW: 'KW' as const,
   KY: 'KY' as const,
   LB: 'LB' as const,
   LG: 'LG' as const,
   LN: 'LN' as const,
   LO: 'LO' as const,
   LT: 'LT' as const,
   LU: 'LU' as const,
   LV: 'LV' as const,
   MG: 'MG' as const,
   MI: 'MI' as const,
   MK: 'MK' as const,
   ML: 'ML' as const,
   MN: 'MN' as const,
   MR: 'MR' as const,
   MS: 'MS' as const,
   MT: 'MT' as const,
   MY: 'MY' as const,
   NB: 'NB' as const,
   ND: 'ND' as const,
   NE: 'NE' as const,
   NL: 'NL' as const,
   NN: 'NN' as const,
   NO: 'NO' as const,
   OM: 'OM' as const,
   OR: 'OR' as const,
   OS: 'OS' as const,
   PA: 'PA' as const,
   PL: 'PL' as const,
   PS: 'PS' as const,
   PT_BR: 'PT_BR' as const,
   PT_PT: 'PT_PT' as const,
   QU: 'QU' as const,
   RM: 'RM' as const,
   RN: 'RN' as const,
   RO: 'RO' as const,
   RU: 'RU' as const,
   RW: 'RW' as const,
   SD: 'SD' as const,
   SE: 'SE' as const,
   SG: 'SG' as const,
   SI: 'SI' as const,
   SK: 'SK' as const,
   SL: 'SL' as const,
   SN: 'SN' as const,
   SO: 'SO' as const,
   SQ: 'SQ' as const,
   SR: 'SR' as const,
   SU: 'SU' as const,
   SV: 'SV' as const,
   SW: 'SW' as const,
   TA: 'TA' as const,
   TE: 'TE' as const,
   TG: 'TG' as const,
   TH: 'TH' as const,
   TI: 'TI' as const,
   TK: 'TK' as const,
   TO: 'TO' as const,
   TR: 'TR' as const,
   TT: 'TT' as const,
   UG: 'UG' as const,
   UK: 'UK' as const,
   UR: 'UR' as const,
   UZ: 'UZ' as const,
   VI: 'VI' as const,
   WO: 'WO' as const,
   XH: 'XH' as const,
   YI: 'YI' as const,
   YO: 'YO' as const,
   ZH_CN: 'ZH_CN' as const,
   ZH_TW: 'ZH_TW' as const,
   ZU: 'ZU' as const,
   ZH: 'ZH' as const,
   PT: 'PT' as const,
   CU: 'CU' as const,
   VO: 'VO' as const
}

export const enumLocationSortKeys = {
   ID: 'ID' as const,
   NAME: 'NAME' as const,
   CITY: 'CITY' as const,
   DISTANCE: 'DISTANCE' as const
}

export const enumMediaContentType = {
   EXTERNAL_VIDEO: 'EXTERNAL_VIDEO' as const,
   IMAGE: 'IMAGE' as const,
   MODEL_3D: 'MODEL_3D' as const,
   VIDEO: 'VIDEO' as const
}

export const enumMediaHost = {
   YOUTUBE: 'YOUTUBE' as const,
   VIMEO: 'VIMEO' as const
}

export const enumMenuItemType = {
   FRONTPAGE: 'FRONTPAGE' as const,
   COLLECTION: 'COLLECTION' as const,
   COLLECTIONS: 'COLLECTIONS' as const,
   PRODUCT: 'PRODUCT' as const,
   CATALOG: 'CATALOG' as const,
   PAGE: 'PAGE' as const,
   BLOG: 'BLOG' as const,
   ARTICLE: 'ARTICLE' as const,
   SEARCH: 'SEARCH' as const,
   SHOP_POLICY: 'SHOP_POLICY' as const,
   HTTP: 'HTTP' as const
}

export const enumOrderCancelReason = {
   CUSTOMER: 'CUSTOMER' as const,
   DECLINED: 'DECLINED' as const,
   FRAUD: 'FRAUD' as const,
   INVENTORY: 'INVENTORY' as const,
   OTHER: 'OTHER' as const
}

export const enumOrderFinancialStatus = {
   PENDING: 'PENDING' as const,
   AUTHORIZED: 'AUTHORIZED' as const,
   PARTIALLY_PAID: 'PARTIALLY_PAID' as const,
   PARTIALLY_REFUNDED: 'PARTIALLY_REFUNDED' as const,
   VOIDED: 'VOIDED' as const,
   PAID: 'PAID' as const,
   REFUNDED: 'REFUNDED' as const
}

export const enumOrderFulfillmentStatus = {
   UNFULFILLED: 'UNFULFILLED' as const,
   PARTIALLY_FULFILLED: 'PARTIALLY_FULFILLED' as const,
   FULFILLED: 'FULFILLED' as const,
   RESTOCKED: 'RESTOCKED' as const,
   PENDING_FULFILLMENT: 'PENDING_FULFILLMENT' as const,
   OPEN: 'OPEN' as const,
   IN_PROGRESS: 'IN_PROGRESS' as const,
   ON_HOLD: 'ON_HOLD' as const,
   SCHEDULED: 'SCHEDULED' as const
}

export const enumOrderSortKeys = {
   PROCESSED_AT: 'PROCESSED_AT' as const,
   TOTAL_PRICE: 'TOTAL_PRICE' as const,
   ID: 'ID' as const,
   RELEVANCE: 'RELEVANCE' as const
}

export const enumPageSortKeys = {
   TITLE: 'TITLE' as const,
   UPDATED_AT: 'UPDATED_AT' as const,
   ID: 'ID' as const,
   RELEVANCE: 'RELEVANCE' as const
}

export const enumPaymentTokenType = {
   APPLE_PAY: 'APPLE_PAY' as const,
   VAULT: 'VAULT' as const,
   SHOPIFY_PAY: 'SHOPIFY_PAY' as const,
   GOOGLE_PAY: 'GOOGLE_PAY' as const,
   STRIPE_VAULT_TOKEN: 'STRIPE_VAULT_TOKEN' as const
}

export const enumProductCollectionSortKeys = {
   TITLE: 'TITLE' as const,
   PRICE: 'PRICE' as const,
   BEST_SELLING: 'BEST_SELLING' as const,
   CREATED: 'CREATED' as const,
   ID: 'ID' as const,
   MANUAL: 'MANUAL' as const,
   COLLECTION_DEFAULT: 'COLLECTION_DEFAULT' as const,
   RELEVANCE: 'RELEVANCE' as const
}

export const enumProductImageSortKeys = {
   CREATED_AT: 'CREATED_AT' as const,
   POSITION: 'POSITION' as const,
   ID: 'ID' as const,
   RELEVANCE: 'RELEVANCE' as const
}

export const enumProductMediaSortKeys = {
   POSITION: 'POSITION' as const,
   ID: 'ID' as const,
   RELEVANCE: 'RELEVANCE' as const
}

export const enumProductSortKeys = {
   TITLE: 'TITLE' as const,
   PRODUCT_TYPE: 'PRODUCT_TYPE' as const,
   VENDOR: 'VENDOR' as const,
   UPDATED_AT: 'UPDATED_AT' as const,
   CREATED_AT: 'CREATED_AT' as const,
   BEST_SELLING: 'BEST_SELLING' as const,
   PRICE: 'PRICE' as const,
   ID: 'ID' as const,
   RELEVANCE: 'RELEVANCE' as const
}

export const enumProductVariantSortKeys = {
   TITLE: 'TITLE' as const,
   SKU: 'SKU' as const,
   POSITION: 'POSITION' as const,
   ID: 'ID' as const,
   RELEVANCE: 'RELEVANCE' as const
}

export const enumSellingPlanCheckoutChargeType = {
   PERCENTAGE: 'PERCENTAGE' as const,
   PRICE: 'PRICE' as const
}

export const enumTransactionKind = {
   SALE: 'SALE' as const,
   CAPTURE: 'CAPTURE' as const,
   AUTHORIZATION: 'AUTHORIZATION' as const,
   EMV_AUTHORIZATION: 'EMV_AUTHORIZATION' as const,
   CHANGE: 'CHANGE' as const
}

export const enumTransactionStatus = {
   PENDING: 'PENDING' as const,
   SUCCESS: 'SUCCESS' as const,
   FAILURE: 'FAILURE' as const,
   ERROR: 'ERROR' as const
}

export const enumUnitPriceMeasurementMeasuredType = {
   VOLUME: 'VOLUME' as const,
   WEIGHT: 'WEIGHT' as const,
   LENGTH: 'LENGTH' as const,
   AREA: 'AREA' as const
}

export const enumUnitPriceMeasurementMeasuredUnit = {
   ML: 'ML' as const,
   CL: 'CL' as const,
   L: 'L' as const,
   M3: 'M3' as const,
   MG: 'MG' as const,
   G: 'G' as const,
   KG: 'KG' as const,
   MM: 'MM' as const,
   CM: 'CM' as const,
   M: 'M' as const,
   M2: 'M2' as const
}

export const enumUnitSystem = {
   IMPERIAL_SYSTEM: 'IMPERIAL_SYSTEM' as const,
   METRIC_SYSTEM: 'METRIC_SYSTEM' as const
}

export const enumWeightUnit = {
   KILOGRAMS: 'KILOGRAMS' as const,
   GRAMS: 'GRAMS' as const,
   POUNDS: 'POUNDS' as const,
   OUNCES: 'OUNCES' as const
}
