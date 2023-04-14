export default {
    "scalars": [
        6,
        14,
        15,
        19,
        37,
        69,
        87,
        88,
        94,
        97,
        99,
        116,
        124,
        125,
        128,
        129,
        132,
        135,
        136,
        142,
        144,
        152,
        155,
        158,
        161,
        162,
        164,
        170,
        178,
        180,
        184,
        205,
        208,
        209,
        213,
        218,
        221,
        226,
        230,
        231,
        234,
        238,
        250,
        271,
        276,
        277,
        278,
        280,
        281,
        282,
        283,
        291
    ],
    "types": {
        "ApiVersion": {
            "displayName": [
                271
            ],
            "handle": [
                271
            ],
            "supported": [
                15
            ],
            "__typename": [
                271
            ]
        },
        "AppliedGiftCard": {
            "amountUsed": [
                200
            ],
            "amountUsedV2": [
                200
            ],
            "balance": [
                200
            ],
            "balanceV2": [
                200
            ],
            "id": [
                155
            ],
            "lastCharacters": [
                271
            ],
            "presentmentAmountUsed": [
                200
            ],
            "__typename": [
                271
            ]
        },
        "Article": {
            "author": [
                3
            ],
            "authorV2": [
                3
            ],
            "blog": [
                11
            ],
            "comments": [
                91,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "content": [
                271,
                {
                    "truncateAt": [
                        161
                    ]
                }
            ],
            "contentHtml": [
                152
            ],
            "excerpt": [
                271,
                {
                    "truncateAt": [
                        161
                    ]
                }
            ],
            "excerptHtml": [
                152
            ],
            "handle": [
                271
            ],
            "id": [
                155
            ],
            "image": [
                156
            ],
            "metafield": [
                186,
                {
                    "namespace": [
                        271,
                        "String!"
                    ],
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                186,
                {
                    "identifiers": [
                        154,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                278
            ],
            "publishedAt": [
                124
            ],
            "seo": [
                239
            ],
            "tags": [
                271
            ],
            "title": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "ArticleAuthor": {
            "bio": [
                271
            ],
            "email": [
                271
            ],
            "firstName": [
                271
            ],
            "lastName": [
                271
            ],
            "name": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "ArticleConnection": {
            "edges": [
                5
            ],
            "nodes": [
                2
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "ArticleEdge": {
            "cursor": [
                271
            ],
            "node": [
                2
            ],
            "__typename": [
                271
            ]
        },
        "ArticleSortKeys": {},
        "Attribute": {
            "key": [
                271
            ],
            "value": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "AttributeInput": {
            "key": [
                271
            ],
            "value": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "AutomaticDiscountApplication": {
            "allocationMethod": [
                132
            ],
            "targetSelection": [
                135
            ],
            "targetType": [
                136
            ],
            "title": [
                271
            ],
            "value": [
                224
            ],
            "__typename": [
                271
            ]
        },
        "AvailableShippingRates": {
            "ready": [
                15
            ],
            "shippingRates": [
                264
            ],
            "__typename": [
                271
            ]
        },
        "Blog": {
            "articleByHandle": [
                2,
                {
                    "handle": [
                        271,
                        "String!"
                    ]
                }
            ],
            "articles": [
                4,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "sortKey": [
                        6
                    ],
                    "query": [
                        271
                    ]
                }
            ],
            "authors": [
                3
            ],
            "handle": [
                271
            ],
            "id": [
                155
            ],
            "metafield": [
                186,
                {
                    "namespace": [
                        271,
                        "String!"
                    ],
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                186,
                {
                    "identifiers": [
                        154,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                278
            ],
            "seo": [
                239
            ],
            "title": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "BlogConnection": {
            "edges": [
                13
            ],
            "nodes": [
                11
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "BlogEdge": {
            "cursor": [
                271
            ],
            "node": [
                11
            ],
            "__typename": [
                271
            ]
        },
        "BlogSortKeys": {},
        "Boolean": {},
        "Brand": {
            "colors": [
                18
            ],
            "coverImage": [
                181
            ],
            "logo": [
                181
            ],
            "shortDescription": [
                271
            ],
            "slogan": [
                271
            ],
            "squareLogo": [
                181
            ],
            "__typename": [
                271
            ]
        },
        "BrandColorGroup": {
            "background": [
                88
            ],
            "foreground": [
                88
            ],
            "__typename": [
                271
            ]
        },
        "BrandColors": {
            "primary": [
                17
            ],
            "secondary": [
                17
            ],
            "__typename": [
                271
            ]
        },
        "CardBrand": {},
        "Cart": {
            "attribute": [
                7,
                {
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "attributes": [
                7
            ],
            "buyerIdentity": [
                23
            ],
            "checkoutUrl": [
                278
            ],
            "cost": [
                27
            ],
            "createdAt": [
                124
            ],
            "deliveryGroups": [
                31,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "discountAllocations": [
                34
            ],
            "discountCodes": [
                35
            ],
            "estimatedCost": [
                38
            ],
            "id": [
                155
            ],
            "lines": [
                41,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "note": [
                271
            ],
            "totalQuantity": [
                161
            ],
            "updatedAt": [
                124
            ],
            "__typename": [
                271
            ]
        },
        "CartAttributesUpdatePayload": {
            "cart": [
                20
            ],
            "userErrors": [
                53
            ],
            "__typename": [
                271
            ]
        },
        "CartAutomaticDiscountAllocation": {
            "discountedAmount": [
                200
            ],
            "title": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "CartBuyerIdentity": {
            "countryCode": [
                94
            ],
            "customer": [
                100
            ],
            "deliveryAddressPreferences": [
                126
            ],
            "email": [
                271
            ],
            "phone": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "CartBuyerIdentityInput": {
            "email": [
                271
            ],
            "phone": [
                271
            ],
            "countryCode": [
                94
            ],
            "customerAccessToken": [
                271
            ],
            "deliveryAddressPreferences": [
                127
            ],
            "__typename": [
                271
            ]
        },
        "CartBuyerIdentityUpdatePayload": {
            "cart": [
                20
            ],
            "userErrors": [
                53
            ],
            "__typename": [
                271
            ]
        },
        "CartCodeDiscountAllocation": {
            "code": [
                271
            ],
            "discountedAmount": [
                200
            ],
            "__typename": [
                271
            ]
        },
        "CartCost": {
            "checkoutChargeAmount": [
                200
            ],
            "subtotalAmount": [
                200
            ],
            "subtotalAmountEstimated": [
                15
            ],
            "totalAmount": [
                200
            ],
            "totalAmountEstimated": [
                15
            ],
            "totalDutyAmount": [
                200
            ],
            "totalDutyAmountEstimated": [
                15
            ],
            "totalTaxAmount": [
                200
            ],
            "totalTaxAmountEstimated": [
                15
            ],
            "__typename": [
                271
            ]
        },
        "CartCreatePayload": {
            "cart": [
                20
            ],
            "userErrors": [
                53
            ],
            "__typename": [
                271
            ]
        },
        "CartCustomDiscountAllocation": {
            "discountedAmount": [
                200
            ],
            "title": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "CartDeliveryGroup": {
            "cartLines": [
                41,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "deliveryAddress": [
                171
            ],
            "deliveryOptions": [
                33
            ],
            "id": [
                155
            ],
            "selectedDeliveryOption": [
                33
            ],
            "__typename": [
                271
            ]
        },
        "CartDeliveryGroupConnection": {
            "edges": [
                32
            ],
            "nodes": [
                30
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "CartDeliveryGroupEdge": {
            "cursor": [
                271
            ],
            "node": [
                30
            ],
            "__typename": [
                271
            ]
        },
        "CartDeliveryOption": {
            "code": [
                271
            ],
            "deliveryMethodType": [
                128
            ],
            "description": [
                271
            ],
            "estimatedCost": [
                200
            ],
            "handle": [
                271
            ],
            "title": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "CartDiscountAllocation": {
            "discountedAmount": [
                200
            ],
            "on_CartAutomaticDiscountAllocation": [
                22
            ],
            "on_CartCodeDiscountAllocation": [
                26
            ],
            "on_CartCustomDiscountAllocation": [
                29
            ],
            "__typename": [
                271
            ]
        },
        "CartDiscountCode": {
            "applicable": [
                15
            ],
            "code": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "CartDiscountCodesUpdatePayload": {
            "cart": [
                20
            ],
            "userErrors": [
                53
            ],
            "__typename": [
                271
            ]
        },
        "CartErrorCode": {},
        "CartEstimatedCost": {
            "checkoutChargeAmount": [
                200
            ],
            "subtotalAmount": [
                200
            ],
            "totalAmount": [
                200
            ],
            "totalDutyAmount": [
                200
            ],
            "totalTaxAmount": [
                200
            ],
            "__typename": [
                271
            ]
        },
        "CartInput": {
            "attributes": [
                8
            ],
            "lines": [
                45
            ],
            "discountCodes": [
                271
            ],
            "note": [
                271
            ],
            "buyerIdentity": [
                24
            ],
            "__typename": [
                271
            ]
        },
        "CartLine": {
            "attribute": [
                7,
                {
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "attributes": [
                7
            ],
            "cost": [
                42
            ],
            "discountAllocations": [
                34
            ],
            "estimatedCost": [
                44
            ],
            "id": [
                155
            ],
            "merchandise": [
                185
            ],
            "quantity": [
                161
            ],
            "sellingPlanAllocation": [
                244
            ],
            "__typename": [
                271
            ]
        },
        "CartLineConnection": {
            "edges": [
                43
            ],
            "nodes": [
                40
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "CartLineCost": {
            "amountPerQuantity": [
                200
            ],
            "compareAtAmountPerQuantity": [
                200
            ],
            "subtotalAmount": [
                200
            ],
            "totalAmount": [
                200
            ],
            "__typename": [
                271
            ]
        },
        "CartLineEdge": {
            "cursor": [
                271
            ],
            "node": [
                40
            ],
            "__typename": [
                271
            ]
        },
        "CartLineEstimatedCost": {
            "amount": [
                200
            ],
            "compareAtAmount": [
                200
            ],
            "subtotalAmount": [
                200
            ],
            "totalAmount": [
                200
            ],
            "__typename": [
                271
            ]
        },
        "CartLineInput": {
            "attributes": [
                8
            ],
            "quantity": [
                161
            ],
            "merchandiseId": [
                155
            ],
            "sellingPlanId": [
                155
            ],
            "__typename": [
                271
            ]
        },
        "CartLineUpdateInput": {
            "id": [
                155
            ],
            "quantity": [
                161
            ],
            "merchandiseId": [
                155
            ],
            "attributes": [
                8
            ],
            "sellingPlanId": [
                155
            ],
            "__typename": [
                271
            ]
        },
        "CartLinesAddPayload": {
            "cart": [
                20
            ],
            "userErrors": [
                53
            ],
            "__typename": [
                271
            ]
        },
        "CartLinesRemovePayload": {
            "cart": [
                20
            ],
            "userErrors": [
                53
            ],
            "__typename": [
                271
            ]
        },
        "CartLinesUpdatePayload": {
            "cart": [
                20
            ],
            "userErrors": [
                53
            ],
            "__typename": [
                271
            ]
        },
        "CartNoteUpdatePayload": {
            "cart": [
                20
            ],
            "userErrors": [
                53
            ],
            "__typename": [
                271
            ]
        },
        "CartSelectedDeliveryOptionInput": {
            "deliveryGroupId": [
                155
            ],
            "deliveryOptionHandle": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "CartSelectedDeliveryOptionsUpdatePayload": {
            "cart": [
                20
            ],
            "userErrors": [
                53
            ],
            "__typename": [
                271
            ]
        },
        "CartUserError": {
            "code": [
                37
            ],
            "field": [
                271
            ],
            "message": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "Checkout": {
            "appliedGiftCards": [
                1
            ],
            "availableShippingRates": [
                10
            ],
            "buyerIdentity": [
                57
            ],
            "completedAt": [
                124
            ],
            "createdAt": [
                124
            ],
            "currencyCode": [
                99
            ],
            "customAttributes": [
                7
            ],
            "discountApplications": [
                133,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "email": [
                271
            ],
            "id": [
                155
            ],
            "lineItems": [
                73,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "lineItemsSubtotalPrice": [
                200
            ],
            "note": [
                271
            ],
            "order": [
                204
            ],
            "orderStatusUrl": [
                278
            ],
            "paymentDue": [
                200
            ],
            "paymentDueV2": [
                200
            ],
            "ready": [
                15
            ],
            "requiresShipping": [
                15
            ],
            "shippingAddress": [
                171
            ],
            "shippingDiscountAllocations": [
                130
            ],
            "shippingLine": [
                264
            ],
            "subtotalPrice": [
                200
            ],
            "subtotalPriceV2": [
                200
            ],
            "taxExempt": [
                15
            ],
            "taxesIncluded": [
                15
            ],
            "totalDuties": [
                200
            ],
            "totalPrice": [
                200
            ],
            "totalPriceV2": [
                200
            ],
            "totalTax": [
                200
            ],
            "totalTaxV2": [
                200
            ],
            "updatedAt": [
                124
            ],
            "webUrl": [
                278
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutAttributesUpdateV2Input": {
            "note": [
                271
            ],
            "customAttributes": [
                8
            ],
            "allowPartialAddresses": [
                15
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutAttributesUpdateV2Payload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutBuyerIdentity": {
            "countryCode": [
                94
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutBuyerIdentityInput": {
            "countryCode": [
                94
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutCompleteFreePayload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutCompleteWithCreditCardV2Payload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "payment": [
                219
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutCompleteWithTokenizedPaymentV3Payload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "payment": [
                219
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutCreateInput": {
            "email": [
                271
            ],
            "lineItems": [
                75
            ],
            "shippingAddress": [
                174
            ],
            "note": [
                271
            ],
            "customAttributes": [
                8
            ],
            "allowPartialAddresses": [
                15
            ],
            "buyerIdentity": [
                58
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutCreatePayload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "queueToken": [
                271
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutCustomerAssociateV2Payload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "customer": [
                100
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutCustomerDisassociateV2Payload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutDiscountCodeApplyV2Payload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutDiscountCodeRemovePayload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutEmailUpdateV2Payload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutErrorCode": {},
        "CheckoutGiftCardRemoveV2Payload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutGiftCardsAppendPayload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutLineItem": {
            "customAttributes": [
                7
            ],
            "discountAllocations": [
                130
            ],
            "id": [
                155
            ],
            "quantity": [
                161
            ],
            "title": [
                271
            ],
            "unitPrice": [
                200
            ],
            "variant": [
                235
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutLineItemConnection": {
            "edges": [
                74
            ],
            "nodes": [
                72
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutLineItemEdge": {
            "cursor": [
                271
            ],
            "node": [
                72
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutLineItemInput": {
            "customAttributes": [
                8
            ],
            "quantity": [
                161
            ],
            "variantId": [
                155
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutLineItemUpdateInput": {
            "id": [
                155
            ],
            "variantId": [
                155
            ],
            "quantity": [
                161
            ],
            "customAttributes": [
                8
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutLineItemsAddPayload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutLineItemsRemovePayload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutLineItemsReplacePayload": {
            "checkout": [
                54
            ],
            "userErrors": [
                83
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutLineItemsUpdatePayload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutShippingAddressUpdateV2Payload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutShippingLineUpdatePayload": {
            "checkout": [
                54
            ],
            "checkoutUserErrors": [
                83
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CheckoutUserError": {
            "code": [
                69
            ],
            "field": [
                271
            ],
            "message": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "Collection": {
            "description": [
                271,
                {
                    "truncateAt": [
                        161
                    ]
                }
            ],
            "descriptionHtml": [
                152
            ],
            "handle": [
                271
            ],
            "id": [
                155
            ],
            "image": [
                156
            ],
            "metafield": [
                186,
                {
                    "namespace": [
                        271,
                        "String!"
                    ],
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                186,
                {
                    "identifiers": [
                        154,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                278
            ],
            "products": [
                227,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "sortKey": [
                        226
                    ],
                    "filters": [
                        229,
                        "[ProductFilter!]"
                    ]
                }
            ],
            "seo": [
                239
            ],
            "title": [
                271
            ],
            "updatedAt": [
                124
            ],
            "__typename": [
                271
            ]
        },
        "CollectionConnection": {
            "edges": [
                86
            ],
            "nodes": [
                84
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "CollectionEdge": {
            "cursor": [
                271
            ],
            "node": [
                84
            ],
            "__typename": [
                271
            ]
        },
        "CollectionSortKeys": {},
        "Color": {},
        "Comment": {
            "author": [
                90
            ],
            "content": [
                271,
                {
                    "truncateAt": [
                        161
                    ]
                }
            ],
            "contentHtml": [
                152
            ],
            "id": [
                155
            ],
            "__typename": [
                271
            ]
        },
        "CommentAuthor": {
            "email": [
                271
            ],
            "name": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "CommentConnection": {
            "edges": [
                92
            ],
            "nodes": [
                89
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "CommentEdge": {
            "cursor": [
                271
            ],
            "node": [
                89
            ],
            "__typename": [
                271
            ]
        },
        "Country": {
            "availableLanguages": [
                163
            ],
            "currency": [
                98
            ],
            "isoCode": [
                94
            ],
            "name": [
                271
            ],
            "unitSystem": [
                282
            ],
            "__typename": [
                271
            ]
        },
        "CountryCode": {},
        "CreditCard": {
            "brand": [
                271
            ],
            "expiryMonth": [
                161
            ],
            "expiryYear": [
                161
            ],
            "firstDigits": [
                271
            ],
            "firstName": [
                271
            ],
            "lastDigits": [
                271
            ],
            "lastName": [
                271
            ],
            "maskedNumber": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "CreditCardPaymentInputV2": {
            "paymentAmount": [
                199
            ],
            "idempotencyKey": [
                271
            ],
            "billingAddress": [
                174
            ],
            "vaultId": [
                271
            ],
            "test": [
                15
            ],
            "__typename": [
                271
            ]
        },
        "CropRegion": {},
        "Currency": {
            "isoCode": [
                99
            ],
            "name": [
                271
            ],
            "symbol": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "CurrencyCode": {},
        "Customer": {
            "acceptsMarketing": [
                15
            ],
            "addresses": [
                172,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "createdAt": [
                124
            ],
            "defaultAddress": [
                171
            ],
            "displayName": [
                271
            ],
            "email": [
                271
            ],
            "firstName": [
                271
            ],
            "id": [
                155
            ],
            "lastIncompleteCheckout": [
                54
            ],
            "lastName": [
                271
            ],
            "metafield": [
                186,
                {
                    "namespace": [
                        271,
                        "String!"
                    ],
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                186,
                {
                    "identifiers": [
                        154,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "numberOfOrders": [
                283
            ],
            "orders": [
                206,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "sortKey": [
                        213
                    ],
                    "query": [
                        271
                    ]
                }
            ],
            "phone": [
                271
            ],
            "tags": [
                271
            ],
            "updatedAt": [
                124
            ],
            "__typename": [
                271
            ]
        },
        "CustomerAccessToken": {
            "accessToken": [
                271
            ],
            "expiresAt": [
                124
            ],
            "__typename": [
                271
            ]
        },
        "CustomerAccessTokenCreateInput": {
            "email": [
                271
            ],
            "password": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "CustomerAccessTokenCreatePayload": {
            "customerAccessToken": [
                101
            ],
            "customerUserErrors": [
                123
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerAccessTokenCreateWithMultipassPayload": {
            "customerAccessToken": [
                101
            ],
            "customerUserErrors": [
                123
            ],
            "__typename": [
                271
            ]
        },
        "CustomerAccessTokenDeletePayload": {
            "deletedAccessToken": [
                271
            ],
            "deletedCustomerAccessTokenId": [
                271
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerAccessTokenRenewPayload": {
            "customerAccessToken": [
                101
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerActivateByUrlPayload": {
            "customer": [
                100
            ],
            "customerAccessToken": [
                101
            ],
            "customerUserErrors": [
                123
            ],
            "__typename": [
                271
            ]
        },
        "CustomerActivateInput": {
            "activationToken": [
                271
            ],
            "password": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "CustomerActivatePayload": {
            "customer": [
                100
            ],
            "customerAccessToken": [
                101
            ],
            "customerUserErrors": [
                123
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerAddressCreatePayload": {
            "customerAddress": [
                171
            ],
            "customerUserErrors": [
                123
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerAddressDeletePayload": {
            "customerUserErrors": [
                123
            ],
            "deletedCustomerAddressId": [
                271
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerAddressUpdatePayload": {
            "customerAddress": [
                171
            ],
            "customerUserErrors": [
                123
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerCreateInput": {
            "firstName": [
                271
            ],
            "lastName": [
                271
            ],
            "email": [
                271
            ],
            "phone": [
                271
            ],
            "password": [
                271
            ],
            "acceptsMarketing": [
                15
            ],
            "__typename": [
                271
            ]
        },
        "CustomerCreatePayload": {
            "customer": [
                100
            ],
            "customerUserErrors": [
                123
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerDefaultAddressUpdatePayload": {
            "customer": [
                100
            ],
            "customerUserErrors": [
                123
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerErrorCode": {},
        "CustomerRecoverPayload": {
            "customerUserErrors": [
                123
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerResetByUrlPayload": {
            "customer": [
                100
            ],
            "customerAccessToken": [
                101
            ],
            "customerUserErrors": [
                123
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerResetInput": {
            "resetToken": [
                271
            ],
            "password": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "CustomerResetPayload": {
            "customer": [
                100
            ],
            "customerAccessToken": [
                101
            ],
            "customerUserErrors": [
                123
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerUpdateInput": {
            "firstName": [
                271
            ],
            "lastName": [
                271
            ],
            "email": [
                271
            ],
            "phone": [
                271
            ],
            "password": [
                271
            ],
            "acceptsMarketing": [
                15
            ],
            "__typename": [
                271
            ]
        },
        "CustomerUpdatePayload": {
            "customer": [
                100
            ],
            "customerAccessToken": [
                101
            ],
            "customerUserErrors": [
                123
            ],
            "userErrors": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "CustomerUserError": {
            "code": [
                116
            ],
            "field": [
                271
            ],
            "message": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "DateTime": {},
        "Decimal": {},
        "DeliveryAddress": {
            "on_MailingAddress": [
                171
            ],
            "on_Node": [
                202
            ],
            "__typename": [
                271
            ]
        },
        "DeliveryAddressInput": {
            "deliveryAddress": [
                174
            ],
            "__typename": [
                271
            ]
        },
        "DeliveryMethodType": {},
        "DigitalWallet": {},
        "DiscountAllocation": {
            "allocatedAmount": [
                200
            ],
            "discountApplication": [
                131
            ],
            "__typename": [
                271
            ]
        },
        "DiscountApplication": {
            "allocationMethod": [
                132
            ],
            "targetSelection": [
                135
            ],
            "targetType": [
                136
            ],
            "value": [
                224
            ],
            "on_AutomaticDiscountApplication": [
                9
            ],
            "on_DiscountCodeApplication": [
                137
            ],
            "on_ManualDiscountApplication": [
                175
            ],
            "on_ScriptDiscountApplication": [
                240
            ],
            "__typename": [
                271
            ]
        },
        "DiscountApplicationAllocationMethod": {},
        "DiscountApplicationConnection": {
            "edges": [
                134
            ],
            "nodes": [
                131
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "DiscountApplicationEdge": {
            "cursor": [
                271
            ],
            "node": [
                131
            ],
            "__typename": [
                271
            ]
        },
        "DiscountApplicationTargetSelection": {},
        "DiscountApplicationTargetType": {},
        "DiscountCodeApplication": {
            "allocationMethod": [
                132
            ],
            "applicable": [
                15
            ],
            "code": [
                271
            ],
            "targetSelection": [
                135
            ],
            "targetType": [
                136
            ],
            "value": [
                224
            ],
            "__typename": [
                271
            ]
        },
        "DisplayableError": {
            "field": [
                271
            ],
            "message": [
                271
            ],
            "on_CartUserError": [
                53
            ],
            "on_CheckoutUserError": [
                83
            ],
            "on_CustomerUserError": [
                123
            ],
            "on_UserError": [
                287
            ],
            "__typename": [
                271
            ]
        },
        "Domain": {
            "host": [
                271
            ],
            "sslEnabled": [
                15
            ],
            "url": [
                278
            ],
            "__typename": [
                271
            ]
        },
        "ExternalVideo": {
            "alt": [
                271
            ],
            "embedUrl": [
                278
            ],
            "embeddedUrl": [
                278
            ],
            "host": [
                180
            ],
            "id": [
                155
            ],
            "mediaContentType": [
                178
            ],
            "originUrl": [
                278
            ],
            "previewImage": [
                156
            ],
            "__typename": [
                271
            ]
        },
        "Filter": {
            "id": [
                271
            ],
            "label": [
                271
            ],
            "type": [
                142
            ],
            "values": [
                143
            ],
            "__typename": [
                271
            ]
        },
        "FilterType": {},
        "FilterValue": {
            "count": [
                161
            ],
            "id": [
                271
            ],
            "input": [
                162
            ],
            "label": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "Float": {},
        "Fulfillment": {
            "fulfillmentLineItems": [
                147,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "trackingCompany": [
                271
            ],
            "trackingInfo": [
                149,
                {
                    "first": [
                        161
                    ]
                }
            ],
            "__typename": [
                271
            ]
        },
        "FulfillmentLineItem": {
            "lineItem": [
                210
            ],
            "quantity": [
                161
            ],
            "__typename": [
                271
            ]
        },
        "FulfillmentLineItemConnection": {
            "edges": [
                148
            ],
            "nodes": [
                146
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "FulfillmentLineItemEdge": {
            "cursor": [
                271
            ],
            "node": [
                146
            ],
            "__typename": [
                271
            ]
        },
        "FulfillmentTrackingInfo": {
            "number": [
                271
            ],
            "url": [
                278
            ],
            "__typename": [
                271
            ]
        },
        "GenericFile": {
            "alt": [
                271
            ],
            "id": [
                155
            ],
            "mimeType": [
                271
            ],
            "originalFileSize": [
                161
            ],
            "previewImage": [
                156
            ],
            "url": [
                278
            ],
            "__typename": [
                271
            ]
        },
        "GeoCoordinateInput": {
            "latitude": [
                144
            ],
            "longitude": [
                144
            ],
            "__typename": [
                271
            ]
        },
        "HTML": {},
        "HasMetafields": {
            "metafield": [
                186,
                {
                    "namespace": [
                        271,
                        "String!"
                    ],
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                186,
                {
                    "identifiers": [
                        154,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "on_Article": [
                2
            ],
            "on_Blog": [
                11
            ],
            "on_Collection": [
                84
            ],
            "on_Customer": [
                100
            ],
            "on_Order": [
                204
            ],
            "on_Page": [
                214
            ],
            "on_Product": [
                225
            ],
            "on_ProductVariant": [
                235
            ],
            "on_Shop": [
                265
            ],
            "__typename": [
                271
            ]
        },
        "HasMetafieldsIdentifier": {
            "namespace": [
                271
            ],
            "key": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "ID": {},
        "Image": {
            "altText": [
                271
            ],
            "height": [
                161
            ],
            "id": [
                155
            ],
            "originalSrc": [
                278
            ],
            "src": [
                278
            ],
            "transformedSrc": [
                278,
                {
                    "maxWidth": [
                        161
                    ],
                    "maxHeight": [
                        161
                    ],
                    "crop": [
                        97
                    ],
                    "scale": [
                        161
                    ],
                    "preferredContentType": [
                        158
                    ]
                }
            ],
            "url": [
                278,
                {
                    "transform": [
                        160
                    ]
                }
            ],
            "width": [
                161
            ],
            "__typename": [
                271
            ]
        },
        "ImageConnection": {
            "edges": [
                159
            ],
            "nodes": [
                156
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "ImageContentType": {},
        "ImageEdge": {
            "cursor": [
                271
            ],
            "node": [
                156
            ],
            "__typename": [
                271
            ]
        },
        "ImageTransformInput": {
            "crop": [
                97
            ],
            "maxWidth": [
                161
            ],
            "maxHeight": [
                161
            ],
            "scale": [
                161
            ],
            "preferredContentType": [
                158
            ],
            "__typename": [
                271
            ]
        },
        "Int": {},
        "JSON": {},
        "Language": {
            "endonymName": [
                271
            ],
            "isoCode": [
                164
            ],
            "name": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "LanguageCode": {},
        "Localization": {
            "availableCountries": [
                93
            ],
            "availableLanguages": [
                163
            ],
            "country": [
                93
            ],
            "language": [
                163
            ],
            "__typename": [
                271
            ]
        },
        "Location": {
            "address": [
                167
            ],
            "id": [
                155
            ],
            "name": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "LocationAddress": {
            "address1": [
                271
            ],
            "address2": [
                271
            ],
            "city": [
                271
            ],
            "country": [
                271
            ],
            "countryCode": [
                271
            ],
            "formatted": [
                271
            ],
            "latitude": [
                144
            ],
            "longitude": [
                144
            ],
            "phone": [
                271
            ],
            "province": [
                271
            ],
            "provinceCode": [
                271
            ],
            "zip": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "LocationConnection": {
            "edges": [
                169
            ],
            "nodes": [
                166
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "LocationEdge": {
            "cursor": [
                271
            ],
            "node": [
                166
            ],
            "__typename": [
                271
            ]
        },
        "LocationSortKeys": {},
        "MailingAddress": {
            "address1": [
                271
            ],
            "address2": [
                271
            ],
            "city": [
                271
            ],
            "company": [
                271
            ],
            "country": [
                271
            ],
            "countryCode": [
                271
            ],
            "countryCodeV2": [
                94
            ],
            "firstName": [
                271
            ],
            "formatted": [
                271,
                {
                    "withName": [
                        15
                    ],
                    "withCompany": [
                        15
                    ]
                }
            ],
            "formattedArea": [
                271
            ],
            "id": [
                155
            ],
            "lastName": [
                271
            ],
            "latitude": [
                144
            ],
            "longitude": [
                144
            ],
            "name": [
                271
            ],
            "phone": [
                271
            ],
            "province": [
                271
            ],
            "provinceCode": [
                271
            ],
            "zip": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "MailingAddressConnection": {
            "edges": [
                173
            ],
            "nodes": [
                171
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "MailingAddressEdge": {
            "cursor": [
                271
            ],
            "node": [
                171
            ],
            "__typename": [
                271
            ]
        },
        "MailingAddressInput": {
            "address1": [
                271
            ],
            "address2": [
                271
            ],
            "city": [
                271
            ],
            "company": [
                271
            ],
            "country": [
                271
            ],
            "firstName": [
                271
            ],
            "lastName": [
                271
            ],
            "phone": [
                271
            ],
            "province": [
                271
            ],
            "zip": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "ManualDiscountApplication": {
            "allocationMethod": [
                132
            ],
            "description": [
                271
            ],
            "targetSelection": [
                135
            ],
            "targetType": [
                136
            ],
            "title": [
                271
            ],
            "value": [
                224
            ],
            "__typename": [
                271
            ]
        },
        "Media": {
            "alt": [
                271
            ],
            "mediaContentType": [
                178
            ],
            "previewImage": [
                156
            ],
            "on_ExternalVideo": [
                140
            ],
            "on_MediaImage": [
                181
            ],
            "on_Model3d": [
                197
            ],
            "on_Video": [
                289
            ],
            "__typename": [
                271
            ]
        },
        "MediaConnection": {
            "edges": [
                179
            ],
            "nodes": [
                176
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "MediaContentType": {},
        "MediaEdge": {
            "cursor": [
                271
            ],
            "node": [
                176
            ],
            "__typename": [
                271
            ]
        },
        "MediaHost": {},
        "MediaImage": {
            "alt": [
                271
            ],
            "id": [
                155
            ],
            "image": [
                156
            ],
            "mediaContentType": [
                178
            ],
            "previewImage": [
                156
            ],
            "__typename": [
                271
            ]
        },
        "Menu": {
            "handle": [
                271
            ],
            "id": [
                155
            ],
            "items": [
                183
            ],
            "itemsCount": [
                161
            ],
            "title": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "MenuItem": {
            "id": [
                155
            ],
            "items": [
                183
            ],
            "resourceId": [
                155
            ],
            "tags": [
                271
            ],
            "title": [
                271
            ],
            "type": [
                184
            ],
            "url": [
                278
            ],
            "__typename": [
                271
            ]
        },
        "MenuItemType": {},
        "Merchandise": {
            "on_ProductVariant": [
                235
            ],
            "on_HasMetafields": [
                153
            ],
            "on_Node": [
                202
            ],
            "__typename": [
                271
            ]
        },
        "Metafield": {
            "createdAt": [
                124
            ],
            "description": [
                271
            ],
            "id": [
                155
            ],
            "key": [
                271
            ],
            "namespace": [
                271
            ],
            "parentResource": [
                188
            ],
            "reference": [
                189
            ],
            "references": [
                190,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ]
                }
            ],
            "type": [
                271
            ],
            "updatedAt": [
                124
            ],
            "value": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "MetafieldFilter": {
            "namespace": [
                271
            ],
            "key": [
                271
            ],
            "value": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "MetafieldParentResource": {
            "on_Article": [
                2
            ],
            "on_Blog": [
                11
            ],
            "on_Collection": [
                84
            ],
            "on_Customer": [
                100
            ],
            "on_Order": [
                204
            ],
            "on_Page": [
                214
            ],
            "on_Product": [
                225
            ],
            "on_ProductVariant": [
                235
            ],
            "on_Shop": [
                265
            ],
            "on_HasMetafields": [
                153
            ],
            "on_Node": [
                202
            ],
            "on_OnlineStorePublishable": [
                203
            ],
            "__typename": [
                271
            ]
        },
        "MetafieldReference": {
            "on_Collection": [
                84
            ],
            "on_GenericFile": [
                150
            ],
            "on_MediaImage": [
                181
            ],
            "on_Metaobject": [
                192
            ],
            "on_Page": [
                214
            ],
            "on_Product": [
                225
            ],
            "on_ProductVariant": [
                235
            ],
            "on_Video": [
                289
            ],
            "on_HasMetafields": [
                153
            ],
            "on_Node": [
                202
            ],
            "on_OnlineStorePublishable": [
                203
            ],
            "on_Media": [
                176
            ],
            "__typename": [
                271
            ]
        },
        "MetafieldReferenceConnection": {
            "edges": [
                191
            ],
            "nodes": [
                189
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "MetafieldReferenceEdge": {
            "cursor": [
                271
            ],
            "node": [
                189
            ],
            "__typename": [
                271
            ]
        },
        "Metaobject": {
            "field": [
                195,
                {
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "fields": [
                195
            ],
            "handle": [
                271
            ],
            "id": [
                155
            ],
            "type": [
                271
            ],
            "updatedAt": [
                124
            ],
            "__typename": [
                271
            ]
        },
        "MetaobjectConnection": {
            "edges": [
                194
            ],
            "nodes": [
                192
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "MetaobjectEdge": {
            "cursor": [
                271
            ],
            "node": [
                192
            ],
            "__typename": [
                271
            ]
        },
        "MetaobjectField": {
            "key": [
                271
            ],
            "reference": [
                189
            ],
            "references": [
                190,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ]
                }
            ],
            "type": [
                271
            ],
            "value": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "MetaobjectHandleInput": {
            "handle": [
                271
            ],
            "type": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "Model3d": {
            "alt": [
                271
            ],
            "id": [
                155
            ],
            "mediaContentType": [
                178
            ],
            "previewImage": [
                156
            ],
            "sources": [
                198
            ],
            "__typename": [
                271
            ]
        },
        "Model3dSource": {
            "filesize": [
                161
            ],
            "format": [
                271
            ],
            "mimeType": [
                271
            ],
            "url": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "MoneyInput": {
            "amount": [
                125
            ],
            "currencyCode": [
                99
            ],
            "__typename": [
                271
            ]
        },
        "MoneyV2": {
            "amount": [
                125
            ],
            "currencyCode": [
                99
            ],
            "__typename": [
                271
            ]
        },
        "Mutation": {
            "cartAttributesUpdate": [
                21,
                {
                    "attributes": [
                        8,
                        "[AttributeInput!]!"
                    ],
                    "cartId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "cartBuyerIdentityUpdate": [
                25,
                {
                    "cartId": [
                        155,
                        "ID!"
                    ],
                    "buyerIdentity": [
                        24,
                        "CartBuyerIdentityInput!"
                    ]
                }
            ],
            "cartCreate": [
                28,
                {
                    "input": [
                        39
                    ]
                }
            ],
            "cartDiscountCodesUpdate": [
                36,
                {
                    "cartId": [
                        155,
                        "ID!"
                    ],
                    "discountCodes": [
                        271,
                        "[String!]"
                    ]
                }
            ],
            "cartLinesAdd": [
                47,
                {
                    "lines": [
                        45,
                        "[CartLineInput!]!"
                    ],
                    "cartId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "cartLinesRemove": [
                48,
                {
                    "cartId": [
                        155,
                        "ID!"
                    ],
                    "lineIds": [
                        155,
                        "[ID!]!"
                    ]
                }
            ],
            "cartLinesUpdate": [
                49,
                {
                    "cartId": [
                        155,
                        "ID!"
                    ],
                    "lines": [
                        46,
                        "[CartLineUpdateInput!]!"
                    ]
                }
            ],
            "cartNoteUpdate": [
                50,
                {
                    "cartId": [
                        155,
                        "ID!"
                    ],
                    "note": [
                        271
                    ]
                }
            ],
            "cartSelectedDeliveryOptionsUpdate": [
                52,
                {
                    "cartId": [
                        155,
                        "ID!"
                    ],
                    "selectedDeliveryOptions": [
                        51,
                        "[CartSelectedDeliveryOptionInput!]!"
                    ]
                }
            ],
            "checkoutAttributesUpdateV2": [
                56,
                {
                    "checkoutId": [
                        155,
                        "ID!"
                    ],
                    "input": [
                        55,
                        "CheckoutAttributesUpdateV2Input!"
                    ]
                }
            ],
            "checkoutCompleteFree": [
                59,
                {
                    "checkoutId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "checkoutCompleteWithCreditCardV2": [
                60,
                {
                    "checkoutId": [
                        155,
                        "ID!"
                    ],
                    "payment": [
                        96,
                        "CreditCardPaymentInputV2!"
                    ]
                }
            ],
            "checkoutCompleteWithTokenizedPaymentV3": [
                61,
                {
                    "checkoutId": [
                        155,
                        "ID!"
                    ],
                    "payment": [
                        274,
                        "TokenizedPaymentInputV3!"
                    ]
                }
            ],
            "checkoutCreate": [
                63,
                {
                    "input": [
                        62,
                        "CheckoutCreateInput!"
                    ],
                    "queueToken": [
                        271
                    ]
                }
            ],
            "checkoutCustomerAssociateV2": [
                64,
                {
                    "checkoutId": [
                        155,
                        "ID!"
                    ],
                    "customerAccessToken": [
                        271,
                        "String!"
                    ]
                }
            ],
            "checkoutCustomerDisassociateV2": [
                65,
                {
                    "checkoutId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "checkoutDiscountCodeApplyV2": [
                66,
                {
                    "discountCode": [
                        271,
                        "String!"
                    ],
                    "checkoutId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "checkoutDiscountCodeRemove": [
                67,
                {
                    "checkoutId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "checkoutEmailUpdateV2": [
                68,
                {
                    "checkoutId": [
                        155,
                        "ID!"
                    ],
                    "email": [
                        271,
                        "String!"
                    ]
                }
            ],
            "checkoutGiftCardRemoveV2": [
                70,
                {
                    "appliedGiftCardId": [
                        155,
                        "ID!"
                    ],
                    "checkoutId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "checkoutGiftCardsAppend": [
                71,
                {
                    "giftCardCodes": [
                        271,
                        "[String!]!"
                    ],
                    "checkoutId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "checkoutLineItemsAdd": [
                77,
                {
                    "lineItems": [
                        75,
                        "[CheckoutLineItemInput!]!"
                    ],
                    "checkoutId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "checkoutLineItemsRemove": [
                78,
                {
                    "checkoutId": [
                        155,
                        "ID!"
                    ],
                    "lineItemIds": [
                        155,
                        "[ID!]!"
                    ]
                }
            ],
            "checkoutLineItemsReplace": [
                79,
                {
                    "lineItems": [
                        75,
                        "[CheckoutLineItemInput!]!"
                    ],
                    "checkoutId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "checkoutLineItemsUpdate": [
                80,
                {
                    "checkoutId": [
                        155,
                        "ID!"
                    ],
                    "lineItems": [
                        76,
                        "[CheckoutLineItemUpdateInput!]!"
                    ]
                }
            ],
            "checkoutShippingAddressUpdateV2": [
                81,
                {
                    "shippingAddress": [
                        174,
                        "MailingAddressInput!"
                    ],
                    "checkoutId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "checkoutShippingLineUpdate": [
                82,
                {
                    "checkoutId": [
                        155,
                        "ID!"
                    ],
                    "shippingRateHandle": [
                        271,
                        "String!"
                    ]
                }
            ],
            "customerAccessTokenCreate": [
                103,
                {
                    "input": [
                        102,
                        "CustomerAccessTokenCreateInput!"
                    ]
                }
            ],
            "customerAccessTokenCreateWithMultipass": [
                104,
                {
                    "multipassToken": [
                        271,
                        "String!"
                    ]
                }
            ],
            "customerAccessTokenDelete": [
                105,
                {
                    "customerAccessToken": [
                        271,
                        "String!"
                    ]
                }
            ],
            "customerAccessTokenRenew": [
                106,
                {
                    "customerAccessToken": [
                        271,
                        "String!"
                    ]
                }
            ],
            "customerActivate": [
                109,
                {
                    "id": [
                        155,
                        "ID!"
                    ],
                    "input": [
                        108,
                        "CustomerActivateInput!"
                    ]
                }
            ],
            "customerActivateByUrl": [
                107,
                {
                    "activationUrl": [
                        278,
                        "URL!"
                    ],
                    "password": [
                        271,
                        "String!"
                    ]
                }
            ],
            "customerAddressCreate": [
                110,
                {
                    "customerAccessToken": [
                        271,
                        "String!"
                    ],
                    "address": [
                        174,
                        "MailingAddressInput!"
                    ]
                }
            ],
            "customerAddressDelete": [
                111,
                {
                    "id": [
                        155,
                        "ID!"
                    ],
                    "customerAccessToken": [
                        271,
                        "String!"
                    ]
                }
            ],
            "customerAddressUpdate": [
                112,
                {
                    "customerAccessToken": [
                        271,
                        "String!"
                    ],
                    "id": [
                        155,
                        "ID!"
                    ],
                    "address": [
                        174,
                        "MailingAddressInput!"
                    ]
                }
            ],
            "customerCreate": [
                114,
                {
                    "input": [
                        113,
                        "CustomerCreateInput!"
                    ]
                }
            ],
            "customerDefaultAddressUpdate": [
                115,
                {
                    "customerAccessToken": [
                        271,
                        "String!"
                    ],
                    "addressId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "customerRecover": [
                117,
                {
                    "email": [
                        271,
                        "String!"
                    ]
                }
            ],
            "customerReset": [
                120,
                {
                    "id": [
                        155,
                        "ID!"
                    ],
                    "input": [
                        119,
                        "CustomerResetInput!"
                    ]
                }
            ],
            "customerResetByUrl": [
                118,
                {
                    "resetUrl": [
                        278,
                        "URL!"
                    ],
                    "password": [
                        271,
                        "String!"
                    ]
                }
            ],
            "customerUpdate": [
                122,
                {
                    "customerAccessToken": [
                        271,
                        "String!"
                    ],
                    "customer": [
                        121,
                        "CustomerUpdateInput!"
                    ]
                }
            ],
            "__typename": [
                271
            ]
        },
        "Node": {
            "id": [
                155
            ],
            "on_AppliedGiftCard": [
                1
            ],
            "on_Article": [
                2
            ],
            "on_Blog": [
                11
            ],
            "on_Cart": [
                20
            ],
            "on_CartLine": [
                40
            ],
            "on_Checkout": [
                54
            ],
            "on_CheckoutLineItem": [
                72
            ],
            "on_Collection": [
                84
            ],
            "on_Comment": [
                89
            ],
            "on_ExternalVideo": [
                140
            ],
            "on_GenericFile": [
                150
            ],
            "on_Location": [
                166
            ],
            "on_MailingAddress": [
                171
            ],
            "on_MediaImage": [
                181
            ],
            "on_Menu": [
                182
            ],
            "on_MenuItem": [
                183
            ],
            "on_Metafield": [
                186
            ],
            "on_Metaobject": [
                192
            ],
            "on_Model3d": [
                197
            ],
            "on_Order": [
                204
            ],
            "on_Page": [
                214
            ],
            "on_Payment": [
                219
            ],
            "on_Product": [
                225
            ],
            "on_ProductOption": [
                232
            ],
            "on_ProductVariant": [
                235
            ],
            "on_Shop": [
                265
            ],
            "on_ShopPolicy": [
                266
            ],
            "on_UrlRedirect": [
                284
            ],
            "on_Video": [
                289
            ],
            "__typename": [
                271
            ]
        },
        "OnlineStorePublishable": {
            "onlineStoreUrl": [
                278
            ],
            "on_Article": [
                2
            ],
            "on_Blog": [
                11
            ],
            "on_Collection": [
                84
            ],
            "on_Page": [
                214
            ],
            "on_Product": [
                225
            ],
            "__typename": [
                271
            ]
        },
        "Order": {
            "cancelReason": [
                205
            ],
            "canceledAt": [
                124
            ],
            "currencyCode": [
                99
            ],
            "currentSubtotalPrice": [
                200
            ],
            "currentTotalDuties": [
                200
            ],
            "currentTotalPrice": [
                200
            ],
            "currentTotalTax": [
                200
            ],
            "customAttributes": [
                7
            ],
            "customerLocale": [
                271
            ],
            "customerUrl": [
                278
            ],
            "discountApplications": [
                133,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "edited": [
                15
            ],
            "email": [
                271
            ],
            "financialStatus": [
                208
            ],
            "fulfillmentStatus": [
                209
            ],
            "id": [
                155
            ],
            "lineItems": [
                211,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "metafield": [
                186,
                {
                    "namespace": [
                        271,
                        "String!"
                    ],
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                186,
                {
                    "identifiers": [
                        154,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "name": [
                271
            ],
            "orderNumber": [
                161
            ],
            "originalTotalDuties": [
                200
            ],
            "originalTotalPrice": [
                200
            ],
            "phone": [
                271
            ],
            "processedAt": [
                124
            ],
            "shippingAddress": [
                171
            ],
            "shippingDiscountAllocations": [
                130
            ],
            "statusUrl": [
                278
            ],
            "subtotalPrice": [
                200
            ],
            "subtotalPriceV2": [
                200
            ],
            "successfulFulfillments": [
                145,
                {
                    "first": [
                        161
                    ]
                }
            ],
            "totalPrice": [
                200
            ],
            "totalPriceV2": [
                200
            ],
            "totalRefunded": [
                200
            ],
            "totalRefundedV2": [
                200
            ],
            "totalShippingPrice": [
                200
            ],
            "totalShippingPriceV2": [
                200
            ],
            "totalTax": [
                200
            ],
            "totalTaxV2": [
                200
            ],
            "__typename": [
                271
            ]
        },
        "OrderCancelReason": {},
        "OrderConnection": {
            "edges": [
                207
            ],
            "nodes": [
                204
            ],
            "pageInfo": [
                217
            ],
            "totalCount": [
                283
            ],
            "__typename": [
                271
            ]
        },
        "OrderEdge": {
            "cursor": [
                271
            ],
            "node": [
                204
            ],
            "__typename": [
                271
            ]
        },
        "OrderFinancialStatus": {},
        "OrderFulfillmentStatus": {},
        "OrderLineItem": {
            "currentQuantity": [
                161
            ],
            "customAttributes": [
                7
            ],
            "discountAllocations": [
                130
            ],
            "discountedTotalPrice": [
                200
            ],
            "originalTotalPrice": [
                200
            ],
            "quantity": [
                161
            ],
            "title": [
                271
            ],
            "variant": [
                235
            ],
            "__typename": [
                271
            ]
        },
        "OrderLineItemConnection": {
            "edges": [
                212
            ],
            "nodes": [
                210
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "OrderLineItemEdge": {
            "cursor": [
                271
            ],
            "node": [
                210
            ],
            "__typename": [
                271
            ]
        },
        "OrderSortKeys": {},
        "Page": {
            "body": [
                152
            ],
            "bodySummary": [
                271
            ],
            "createdAt": [
                124
            ],
            "handle": [
                271
            ],
            "id": [
                155
            ],
            "metafield": [
                186,
                {
                    "namespace": [
                        271,
                        "String!"
                    ],
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                186,
                {
                    "identifiers": [
                        154,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                278
            ],
            "seo": [
                239
            ],
            "title": [
                271
            ],
            "updatedAt": [
                124
            ],
            "__typename": [
                271
            ]
        },
        "PageConnection": {
            "edges": [
                216
            ],
            "nodes": [
                214
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "PageEdge": {
            "cursor": [
                271
            ],
            "node": [
                214
            ],
            "__typename": [
                271
            ]
        },
        "PageInfo": {
            "endCursor": [
                271
            ],
            "hasNextPage": [
                15
            ],
            "hasPreviousPage": [
                15
            ],
            "startCursor": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "PageSortKeys": {},
        "Payment": {
            "amount": [
                200
            ],
            "amountV2": [
                200
            ],
            "billingAddress": [
                171
            ],
            "checkout": [
                54
            ],
            "creditCard": [
                95
            ],
            "errorMessage": [
                271
            ],
            "id": [
                155
            ],
            "idempotencyKey": [
                271
            ],
            "nextActionUrl": [
                278
            ],
            "ready": [
                15
            ],
            "test": [
                15
            ],
            "transaction": [
                275
            ],
            "__typename": [
                271
            ]
        },
        "PaymentSettings": {
            "acceptedCardBrands": [
                19
            ],
            "cardVaultUrl": [
                278
            ],
            "countryCode": [
                94
            ],
            "currencyCode": [
                99
            ],
            "enabledPresentmentCurrencies": [
                99
            ],
            "shopifyPaymentsAccountId": [
                271
            ],
            "supportedDigitalWallets": [
                129
            ],
            "__typename": [
                271
            ]
        },
        "PaymentTokenType": {},
        "PriceRangeFilter": {
            "min": [
                144
            ],
            "max": [
                144
            ],
            "__typename": [
                271
            ]
        },
        "PricingPercentageValue": {
            "percentage": [
                144
            ],
            "__typename": [
                271
            ]
        },
        "PricingValue": {
            "on_MoneyV2": [
                200
            ],
            "on_PricingPercentageValue": [
                223
            ],
            "__typename": [
                271
            ]
        },
        "Product": {
            "availableForSale": [
                15
            ],
            "collections": [
                85,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "compareAtPriceRange": [
                233
            ],
            "createdAt": [
                124
            ],
            "description": [
                271,
                {
                    "truncateAt": [
                        161
                    ]
                }
            ],
            "descriptionHtml": [
                152
            ],
            "featuredImage": [
                156
            ],
            "handle": [
                271
            ],
            "id": [
                155
            ],
            "images": [
                157,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "sortKey": [
                        230
                    ]
                }
            ],
            "isGiftCard": [
                15
            ],
            "media": [
                177,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "sortKey": [
                        231
                    ]
                }
            ],
            "metafield": [
                186,
                {
                    "namespace": [
                        271,
                        "String!"
                    ],
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                186,
                {
                    "identifiers": [
                        154,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "onlineStoreUrl": [
                278
            ],
            "options": [
                232,
                {
                    "first": [
                        161
                    ]
                }
            ],
            "priceRange": [
                233
            ],
            "productType": [
                271
            ],
            "publishedAt": [
                124
            ],
            "requiresSellingPlan": [
                15
            ],
            "sellingPlanGroups": [
                257,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "seo": [
                239
            ],
            "tags": [
                271
            ],
            "title": [
                271
            ],
            "totalInventory": [
                161
            ],
            "updatedAt": [
                124
            ],
            "variantBySelectedOptions": [
                235,
                {
                    "selectedOptions": [
                        242,
                        "[SelectedOptionInput!]!"
                    ]
                }
            ],
            "variants": [
                236,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "sortKey": [
                        238
                    ]
                }
            ],
            "vendor": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "ProductCollectionSortKeys": {},
        "ProductConnection": {
            "edges": [
                228
            ],
            "filters": [
                141
            ],
            "nodes": [
                225
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "ProductEdge": {
            "cursor": [
                271
            ],
            "node": [
                225
            ],
            "__typename": [
                271
            ]
        },
        "ProductFilter": {
            "available": [
                15
            ],
            "variantOption": [
                288
            ],
            "productType": [
                271
            ],
            "productVendor": [
                271
            ],
            "price": [
                222
            ],
            "productMetafield": [
                187
            ],
            "variantMetafield": [
                187
            ],
            "tag": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "ProductImageSortKeys": {},
        "ProductMediaSortKeys": {},
        "ProductOption": {
            "id": [
                155
            ],
            "name": [
                271
            ],
            "values": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "ProductPriceRange": {
            "maxVariantPrice": [
                200
            ],
            "minVariantPrice": [
                200
            ],
            "__typename": [
                271
            ]
        },
        "ProductSortKeys": {},
        "ProductVariant": {
            "availableForSale": [
                15
            ],
            "barcode": [
                271
            ],
            "compareAtPrice": [
                200
            ],
            "compareAtPriceV2": [
                200
            ],
            "currentlyNotInStock": [
                15
            ],
            "id": [
                155
            ],
            "image": [
                156
            ],
            "metafield": [
                186,
                {
                    "namespace": [
                        271,
                        "String!"
                    ],
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                186,
                {
                    "identifiers": [
                        154,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "price": [
                200
            ],
            "priceV2": [
                200
            ],
            "product": [
                225
            ],
            "quantityAvailable": [
                161
            ],
            "requiresShipping": [
                15
            ],
            "selectedOptions": [
                241
            ],
            "sellingPlanAllocations": [
                245,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "sku": [
                271
            ],
            "storeAvailability": [
                269,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "near": [
                        151
                    ]
                }
            ],
            "title": [
                271
            ],
            "unitPrice": [
                200
            ],
            "unitPriceMeasurement": [
                279
            ],
            "weight": [
                144
            ],
            "weightUnit": [
                291
            ],
            "__typename": [
                271
            ]
        },
        "ProductVariantConnection": {
            "edges": [
                237
            ],
            "nodes": [
                235
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "ProductVariantEdge": {
            "cursor": [
                271
            ],
            "node": [
                235
            ],
            "__typename": [
                271
            ]
        },
        "ProductVariantSortKeys": {},
        "SEO": {
            "description": [
                271
            ],
            "title": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "ScriptDiscountApplication": {
            "allocationMethod": [
                132
            ],
            "targetSelection": [
                135
            ],
            "targetType": [
                136
            ],
            "title": [
                271
            ],
            "value": [
                224
            ],
            "__typename": [
                271
            ]
        },
        "SelectedOption": {
            "name": [
                271
            ],
            "value": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "SelectedOptionInput": {
            "name": [
                271
            ],
            "value": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlan": {
            "checkoutCharge": [
                248
            ],
            "description": [
                271
            ],
            "id": [
                155
            ],
            "name": [
                271
            ],
            "options": [
                260
            ],
            "priceAdjustments": [
                262
            ],
            "recurringDeliveries": [
                15
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanAllocation": {
            "checkoutChargeAmount": [
                200
            ],
            "priceAdjustments": [
                247
            ],
            "remainingBalanceChargeAmount": [
                200
            ],
            "sellingPlan": [
                243
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanAllocationConnection": {
            "edges": [
                246
            ],
            "nodes": [
                244
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanAllocationEdge": {
            "cursor": [
                271
            ],
            "node": [
                244
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanAllocationPriceAdjustment": {
            "compareAtPrice": [
                200
            ],
            "perDeliveryPrice": [
                200
            ],
            "price": [
                200
            ],
            "unitPrice": [
                200
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanCheckoutCharge": {
            "type": [
                250
            ],
            "value": [
                251
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanCheckoutChargePercentageValue": {
            "percentage": [
                144
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanCheckoutChargeType": {},
        "SellingPlanCheckoutChargeValue": {
            "on_MoneyV2": [
                200
            ],
            "on_SellingPlanCheckoutChargePercentageValue": [
                249
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanConnection": {
            "edges": [
                253
            ],
            "nodes": [
                243
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanEdge": {
            "cursor": [
                271
            ],
            "node": [
                243
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanFixedAmountPriceAdjustment": {
            "adjustmentAmount": [
                200
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanFixedPriceAdjustment": {
            "price": [
                200
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanGroup": {
            "appName": [
                271
            ],
            "name": [
                271
            ],
            "options": [
                259
            ],
            "sellingPlans": [
                252,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanGroupConnection": {
            "edges": [
                258
            ],
            "nodes": [
                256
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanGroupEdge": {
            "cursor": [
                271
            ],
            "node": [
                256
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanGroupOption": {
            "name": [
                271
            ],
            "values": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanOption": {
            "name": [
                271
            ],
            "value": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanPercentagePriceAdjustment": {
            "adjustmentPercentage": [
                161
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanPriceAdjustment": {
            "adjustmentValue": [
                263
            ],
            "orderCount": [
                161
            ],
            "__typename": [
                271
            ]
        },
        "SellingPlanPriceAdjustmentValue": {
            "on_SellingPlanFixedAmountPriceAdjustment": [
                254
            ],
            "on_SellingPlanFixedPriceAdjustment": [
                255
            ],
            "on_SellingPlanPercentagePriceAdjustment": [
                261
            ],
            "__typename": [
                271
            ]
        },
        "ShippingRate": {
            "handle": [
                271
            ],
            "price": [
                200
            ],
            "priceV2": [
                200
            ],
            "title": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "Shop": {
            "brand": [
                16
            ],
            "description": [
                271
            ],
            "id": [
                155
            ],
            "metafield": [
                186,
                {
                    "namespace": [
                        271,
                        "String!"
                    ],
                    "key": [
                        271,
                        "String!"
                    ]
                }
            ],
            "metafields": [
                186,
                {
                    "identifiers": [
                        154,
                        "[HasMetafieldsIdentifier!]!"
                    ]
                }
            ],
            "moneyFormat": [
                271
            ],
            "name": [
                271
            ],
            "paymentSettings": [
                220
            ],
            "primaryDomain": [
                139
            ],
            "privacyPolicy": [
                266
            ],
            "refundPolicy": [
                266
            ],
            "shippingPolicy": [
                266
            ],
            "shipsToCountries": [
                94
            ],
            "subscriptionPolicy": [
                267
            ],
            "termsOfService": [
                266
            ],
            "__typename": [
                271
            ]
        },
        "ShopPolicy": {
            "body": [
                271
            ],
            "handle": [
                271
            ],
            "id": [
                155
            ],
            "title": [
                271
            ],
            "url": [
                278
            ],
            "__typename": [
                271
            ]
        },
        "ShopPolicyWithDefault": {
            "body": [
                271
            ],
            "handle": [
                271
            ],
            "id": [
                155
            ],
            "title": [
                271
            ],
            "url": [
                278
            ],
            "__typename": [
                271
            ]
        },
        "StoreAvailability": {
            "available": [
                15
            ],
            "location": [
                166
            ],
            "pickUpTime": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "StoreAvailabilityConnection": {
            "edges": [
                270
            ],
            "nodes": [
                268
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "StoreAvailabilityEdge": {
            "cursor": [
                271
            ],
            "node": [
                268
            ],
            "__typename": [
                271
            ]
        },
        "String": {},
        "StringConnection": {
            "edges": [
                273
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "StringEdge": {
            "cursor": [
                271
            ],
            "node": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "TokenizedPaymentInputV3": {
            "paymentAmount": [
                199
            ],
            "idempotencyKey": [
                271
            ],
            "billingAddress": [
                174
            ],
            "paymentData": [
                271
            ],
            "test": [
                15
            ],
            "identifier": [
                271
            ],
            "type": [
                221
            ],
            "__typename": [
                271
            ]
        },
        "Transaction": {
            "amount": [
                200
            ],
            "amountV2": [
                200
            ],
            "kind": [
                276
            ],
            "status": [
                277
            ],
            "statusV2": [
                277
            ],
            "test": [
                15
            ],
            "__typename": [
                271
            ]
        },
        "TransactionKind": {},
        "TransactionStatus": {},
        "URL": {},
        "UnitPriceMeasurement": {
            "measuredType": [
                280
            ],
            "quantityUnit": [
                281
            ],
            "quantityValue": [
                144
            ],
            "referenceUnit": [
                281
            ],
            "referenceValue": [
                161
            ],
            "__typename": [
                271
            ]
        },
        "UnitPriceMeasurementMeasuredType": {},
        "UnitPriceMeasurementMeasuredUnit": {},
        "UnitSystem": {},
        "UnsignedInt64": {},
        "UrlRedirect": {
            "id": [
                155
            ],
            "path": [
                271
            ],
            "target": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "UrlRedirectConnection": {
            "edges": [
                286
            ],
            "nodes": [
                284
            ],
            "pageInfo": [
                217
            ],
            "__typename": [
                271
            ]
        },
        "UrlRedirectEdge": {
            "cursor": [
                271
            ],
            "node": [
                284
            ],
            "__typename": [
                271
            ]
        },
        "UserError": {
            "field": [
                271
            ],
            "message": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "VariantOptionFilter": {
            "name": [
                271
            ],
            "value": [
                271
            ],
            "__typename": [
                271
            ]
        },
        "Video": {
            "alt": [
                271
            ],
            "id": [
                155
            ],
            "mediaContentType": [
                178
            ],
            "previewImage": [
                156
            ],
            "sources": [
                290
            ],
            "__typename": [
                271
            ]
        },
        "VideoSource": {
            "format": [
                271
            ],
            "height": [
                161
            ],
            "mimeType": [
                271
            ],
            "url": [
                271
            ],
            "width": [
                161
            ],
            "__typename": [
                271
            ]
        },
        "WeightUnit": {},
        "Query": {
            "articles": [
                4,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "sortKey": [
                        6
                    ],
                    "query": [
                        271
                    ]
                }
            ],
            "blog": [
                11,
                {
                    "id": [
                        155
                    ],
                    "handle": [
                        271
                    ]
                }
            ],
            "blogByHandle": [
                11,
                {
                    "handle": [
                        271,
                        "String!"
                    ]
                }
            ],
            "blogs": [
                12,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "sortKey": [
                        14
                    ],
                    "query": [
                        271
                    ]
                }
            ],
            "cart": [
                20,
                {
                    "id": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "collection": [
                84,
                {
                    "id": [
                        155
                    ],
                    "handle": [
                        271
                    ]
                }
            ],
            "collectionByHandle": [
                84,
                {
                    "handle": [
                        271,
                        "String!"
                    ]
                }
            ],
            "collections": [
                85,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "sortKey": [
                        87
                    ],
                    "query": [
                        271
                    ]
                }
            ],
            "customer": [
                100,
                {
                    "customerAccessToken": [
                        271,
                        "String!"
                    ]
                }
            ],
            "localization": [
                165
            ],
            "locations": [
                168,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "sortKey": [
                        170
                    ],
                    "near": [
                        151
                    ]
                }
            ],
            "menu": [
                182,
                {
                    "handle": [
                        271,
                        "String!"
                    ]
                }
            ],
            "metaobject": [
                192,
                {
                    "id": [
                        155
                    ],
                    "handle": [
                        196
                    ]
                }
            ],
            "metaobjects": [
                193,
                {
                    "type": [
                        271,
                        "String!"
                    ],
                    "sortKey": [
                        271
                    ],
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ]
                }
            ],
            "node": [
                202,
                {
                    "id": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                202,
                {
                    "ids": [
                        155,
                        "[ID!]!"
                    ]
                }
            ],
            "page": [
                214,
                {
                    "id": [
                        155
                    ],
                    "handle": [
                        271
                    ]
                }
            ],
            "pageByHandle": [
                214,
                {
                    "handle": [
                        271,
                        "String!"
                    ]
                }
            ],
            "pages": [
                215,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "sortKey": [
                        218
                    ],
                    "query": [
                        271
                    ]
                }
            ],
            "product": [
                225,
                {
                    "id": [
                        155
                    ],
                    "handle": [
                        271
                    ]
                }
            ],
            "productByHandle": [
                225,
                {
                    "handle": [
                        271,
                        "String!"
                    ]
                }
            ],
            "productRecommendations": [
                225,
                {
                    "productId": [
                        155,
                        "ID!"
                    ]
                }
            ],
            "productTags": [
                272,
                {
                    "first": [
                        161,
                        "Int!"
                    ]
                }
            ],
            "productTypes": [
                272,
                {
                    "first": [
                        161,
                        "Int!"
                    ]
                }
            ],
            "products": [
                227,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "sortKey": [
                        234
                    ],
                    "query": [
                        271
                    ]
                }
            ],
            "publicApiVersions": [
                0
            ],
            "shop": [
                265
            ],
            "urlRedirects": [
                285,
                {
                    "first": [
                        161
                    ],
                    "after": [
                        271
                    ],
                    "last": [
                        161
                    ],
                    "before": [
                        271
                    ],
                    "reverse": [
                        15
                    ],
                    "query": [
                        271
                    ]
                }
            ],
            "__typename": [
                271
            ]
        }
    }
}