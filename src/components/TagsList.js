import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slug from "slugify"

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map(([text, value], index) => (
          <Link to={`/tags/${slug(text, { lower: true })}`} key={index}>
            {text} ({value})
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TagsList
