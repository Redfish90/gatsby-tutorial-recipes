import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstData {
    site {
      info: siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        simpleData
        title
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: { info },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>Hello from fetch data</h1>
    </div>
  )
}

export default FetchData
