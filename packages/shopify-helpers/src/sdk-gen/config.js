const version = "2022-07";

/**
 * @type {import("@bsmnt/sdk-gen").Config & {version: string}} version is not needed, but we use it internally to build this package
 */
module.exports = {
  version,
  endpoint: `https://react-dropify.myshopify.com/api/${version}/graphql`,
  headers: {
    "x-shopify-storefront-access-token": "9deca4de8e0365aa69919db9f48dfc4e",
  },
};
