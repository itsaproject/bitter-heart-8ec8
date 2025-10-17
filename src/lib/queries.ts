// List page URIs for static path generation
export const PAGES_LIST = /* GraphQL */ `
  query PagesList($first:Int!) {
    pages(first:$first, where:{orderby:{field:MENU_ORDER,order:ASC}}) {
      nodes { uri }
    }
  }
`;

// Fetch a single page by its full URI (supports nested pages)
export const PAGE_BY_URI = /* GraphQL */ `
  query PageByUri($uri: ID!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title
        content
        featuredImage { node { sourceUrl altText width height } }
        # If you use Yoast + WPGraphQL Yoast later, we can read these:
        # seo { title metaDesc }
      }
    }
  }
`;
