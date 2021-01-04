import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Column, Grid, Row } from "carbon-components-react"

const ChallengesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
            }
          }
        }
      }
    }
  `)

  const challenges = data.allMarkdownRemark.edges.map(
    ({ node }) => (
      <div className="challenge">
        <h2 className="no-margin">
          <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
        </h2>
        <small>{node.frontmatter.date}</small>
      </div>
    )
  )

  return (
    <Layout className="challenges">
      <SEO title="Desafios" />

      <section className="section section-hero">
        <Grid>
          <Row>
            <Column>
              <h1 className="no-margin">DESAFIOS</h1>

              <p>Escolha o seu desafio.</p>
            </Column>
          </Row>
        </Grid>
      </section>

      <section className="section section-challenges">
        <Grid>
          <Row>
            <Column>{challenges}</Column>
          </Row>
        </Grid>
      </section>
    </Layout>
  )
}

export default ChallengesPage
