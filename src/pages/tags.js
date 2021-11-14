import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import setupTags from "../utils/setupTags"
import slug from "slugify"
import SEO from "../components/SEO"

const tags = ({ data }) => {
  const tags = data.allContentfulRecipe.nodes
  const newTags = setupTags(tags)
  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map(([text, value], index) => (
            <Link
              key={index}
              to={`/tags/${slug(text, { lower: true })}`}
              className="tag"
            >
              <h5>{text}</h5>
              <p>{value} recipe</p>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default tags
