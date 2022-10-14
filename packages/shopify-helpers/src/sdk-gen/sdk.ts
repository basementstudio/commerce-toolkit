import config from "./config";
import { createSdk } from "./generated";

export const createStandardShopifyStorefrontSdk = ({
  storeDomain,
  storefrontAccessToken,
}: {
  storeDomain: string;
  storefrontAccessToken: string;
}) => {
  return createSdk({
    endpoint: `https://${storeDomain}/api/${config.version}/graphql.json`,
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
  });
};
