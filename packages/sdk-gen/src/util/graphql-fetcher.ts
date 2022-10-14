// todo — a light fetcher that doesnt depend on the graphql library.

type ClientOptions = {
  noThrowOnErrors?: boolean;
};

export type GraphQLFetcher<C = {}, E = unknown> = <R, V>(
  doc: string,
  vars?: V,
  options?: C
) => Promise<R> | AsyncIterable<R>;

export function createGraphQLFetcher({
  endpoint,
  headers,
  defaultOptions,
}: {
  endpoint: string;
  headers?: Record<string, string>;
  defaultOptions?: ClientOptions;
}) {
  const graphqlFetcher: GraphQLFetcher = async (
    doc,
    vars,
    options?: ClientOptions
  ) => {
    const allClientOptions = { ...defaultOptions, ...options };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify({
        query: doc,
        variables: vars,
      }),
    });
    const json = await response.json();
    const { errors, data } = json;

    const hasErrors = errors && Array.isArray(errors) && errors.length > 0;

    if (hasErrors && !allClientOptions?.noThrowOnErrors) {
      const message = `GraphQL fetch errors:

      ${errors.map((e: any, idx: number) => `${idx}. ${e.message}`).join("\n")}
      
      ——————

      Doc:
      ${doc}
      
      Vars:
      ${vars}
      `;

      throw new Error(message);
    }

    return { ...data, ...(hasErrors ? { errors } : {}) };
  };

  return graphqlFetcher;
}
