import React from 'react'
import SingleProject from './SingleProject'

const Projects = ({ projects }) => {
  console.log(projects)

  return (
    <div>
      <h1>Main Project Page</h1>
      <SingleProject />
    </div>
  )
}

export default Projects
