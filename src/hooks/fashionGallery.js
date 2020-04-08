import { useStaticQuery, graphql } from 'gatsby'
const FashionGallery = () => {
  const data = useStaticQuery(graphql`
    query Images {
      Fashion: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          childImageSharp {
            id
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      Portrait: allFile(filter: { relativeDirectory: { eq: "Portraits" } }) {
        nodes {
          childImageSharp {
            id
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  //
  // const arr = Object.keys(obj)
  //   .filter(v => obj[v] != null)
  //   .map(key => ({ [key]: obj[key] }))

  console.log(data)
  return data
}

export default FashionGallery
