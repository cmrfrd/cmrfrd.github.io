/* eslint-disable */

// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js

const GatsbyFluid_withWebp = `
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
`;

module.exports.local = {
  posts: `{
    posts: allPost(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          slug
          secret
          title
          author
          date(formatString: "MMMM Do, YYYY")
          dateForSEO: date
          timeToRead
          canonical_url
          excerpt
          body
          hero {
            full: childImageSharp {
              fluid(maxWidth: 944, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            regular: childImageSharp {
              fluid(maxWidth: 653, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            narrow: childImageSharp {
              fluid(maxWidth: 457, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            seo: childImageSharp {
              fixed(width: 1200, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  }`,
  home: `{
    home: allHomeYaml {
      edges {
        node {
          home {
            postsHeadingText
            morePostsText
            numberOfPosts
          }
        }
      }
    }
  }`,
  about: `{
    about: aboutYaml {
      name
      about {
        title {
          author
          authors
          about
        }
        about
      }
    }
  }`,
  search: `{
    search: allSearchYaml {
      edges {
        node {
          search {
            heading
            pageLength
            placeholder
          }
        }
      }
    }
  }`,
  post: `{
    post: allPostYaml {
      edges {
        node {
          post {
            nextPostText
          }
        }
      }
    }
  }`,
  notFound: `{
    notFound: allNotFoundYaml {
      edges {
        node {
          name
          messages {
            emoji
            message
          }
        }
      }
    }
  }`,
  authors: `{
    authors: allAuthor {
      edges {
        node {
          id
          name
          bio
          featured
          social {
            url
          }
          slug
          avatar {
            small: childImageSharp {
              fluid(maxWidth: 50, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            medium: childImageSharp {
              fluid(maxWidth: 100, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
            large: childImageSharp {
              fluid(maxWidth: 328, quality: 100) {
                ${GatsbyFluid_withWebp}
              }
            }
          }
        }
      }
    }
  }`
};
