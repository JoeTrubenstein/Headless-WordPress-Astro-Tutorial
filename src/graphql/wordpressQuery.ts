interface WPGraphQLParams {
    query: string;
    variables?: object;
  }
  
  export async function wpquery({ query, variables = {} }: WPGraphQLParams) {
    const res = await fetch(import.meta.env.GRAPHQL_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",

        // optional authorization headers
        "Authorization" : import.meta.env.GRAPHQL_PASSWORD
      },
      
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!res.ok) {
      console.error(res);
      return {};
    }

    const { data } = await res.json();
    return data;
  }