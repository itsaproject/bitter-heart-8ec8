const WP_GRAPHQL_ENDPOINT = 'https://viprva.com/graphql';

type GqlOptions = {
  query: string;
  variables?: Record<string, unknown>;
};

export async function wpGraphQL<T>({ query, variables }: GqlOptions): Promise<T> {
  const res = await fetch(WP_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`WPGraphQL error: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}
