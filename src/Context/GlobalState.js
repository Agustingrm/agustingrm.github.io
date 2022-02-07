import PortfolioContext from "./PortfolioContext";

import { useEffect, useState } from "react";

const gql = String.raw;

function GlobalState({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  // Use a side effect to fetch he data from the graphql endpoint
  useEffect(function () {
    fetch("https://idug9s1o.api.sanity.io/v1/graphql/production/default", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: gql`
          query {
            SiteSettings(id: "default") {
              projects {
                name
                image {
                  asset {
                    url
                  }
                }
                dynamicImage {
                  asset {
                    url
                  }
                }
                technologiesEmployed {
                  name
                  image {
                    asset {
                      url
                    }
                  }
                }
                codeLink
                previewLink
              }
              frontend {
                name
                image {
                  asset {
                    url
                  }
                }
              }
              backend {
                name
                image {
                  asset {
                    url
                  }
                }
              }
              miscellaneous {
                name
                image {
                  asset {
                    url
                  }
                }
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // set the data to state
        setData(res.data.SiteSettings);
        setLoading(false);
      });
  }, []);

  return <PortfolioContext.Provider value={{ data, loading }}>{children}</PortfolioContext.Provider>;
}

export default GlobalState;
