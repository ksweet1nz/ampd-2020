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
          title: projectTitle
          level: studentLevel
          name: studentName
          id: contentful_id
          desc: shortDescription {
            shortDescription
          }
          abstract {
            abstract
          }
          mainImg: projectMainImage {
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
