import React from 'react'
import styled from 'styled-components'

const SingleProject = ({ project }) => {
  const { title, level, name, mainImg } = project
  const projImage = mainImg.fluid
  return (
    <article>
      <h2>{title}</h2>
      <h3>{name}</h3>
      <h4>{level}</h4>
    </article>
  )
}

export default styled(SingleProject)`
  background-image: url(${projImage});
  padding: 2rem;
  &:hover {
    background: rebeccapurple;
  }
  .proj-image {
    width: 100%;
  }
`
