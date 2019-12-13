import React from 'react'
import Projects from '../components/Projects/Projects'
import { graphql } from 'gatsby'

const projects = ({ data }) => {
  return (
    <div>
      <Projects projects={data.projects.edges} />
    </div>
  )
}

export const getProjects = graphql`
  query {
    projects: allContentfulProject {
      edges {
        node {
          projectTitle
          studentLevel
          studentName
          id: contentful_id
          shortDescription {
            shortDescription
          }
          abstract {
            abstract
          }
          projectMainImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default projects
