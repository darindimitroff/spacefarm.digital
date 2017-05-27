import React, { PropTypes } from 'react'
import Project from '../../components/myComponents/molecules/Project'

const PagesList = ({ pages }) => {
  return (
    <div>
      {
      pages.length
      ? (
        <ul>
          {
          pages.map((page) => (
            <li key={ page.title }>
              <Project title={ page.title } text={ page.description } color={ page.color }/>
            </li>
          ))
        }
        </ul>
      )
      : 'No posts yet.'
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList