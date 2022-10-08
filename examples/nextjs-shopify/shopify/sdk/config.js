/**
 * @type {import("@bsmnt/sdk-gen").Config}
 */
module.exports = {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  endpoint: process.env.STOREFRONT_API_ENDPOINT,
  headers: {
    "x-shopify-storefront-access-token":
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      process.env.STOREFRONT_API_ACCESS_TOKEN,
  },
};
