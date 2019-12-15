import React from 'react'
import SingleProject from './SingleProject'
import styled from 'styled-components'

const Projects = ({ projects }) => {
  console.log(projects)

  return (
    <ProjectSection>
      {projects.map(({ node }) => {
        return <SingleProject key={node.id} project={node} />
      })}
    </ProjectSection>
  )
}

const ProjectSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-template-rows: auto;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
`

export default Projects
