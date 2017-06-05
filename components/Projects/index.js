import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

const defaultNumberOfPosts = 6

const Projects = (props, { collection }) => {
  const projects = enhanceCollection(collection, {
    filter: { layout: "post" },
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
      <PagesList pages={ projects } />
    </div>
  )
}

Projects.propTypes = {
  numberOfPosts: PropTypes.number,
}

Projects.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Projects
