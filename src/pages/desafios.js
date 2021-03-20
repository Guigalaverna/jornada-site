import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Column, Grid, Row, Tag } from "carbon-components-react"
import LevelIndicator from "../components/level-indicator"

const ChallengesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date, frontmatter___level] }
      ) {
        group(field: frontmatter___level) {
          nodes {
            frontmatter {
              title
              slug
              date
              level
              levelTitle
              tags
            }
          }
        }
      }
    }
  `)

  const {
    allMarkdownRemark: { group },
  } = data

  const challenges = group
    .sort((a, b) => a.nodes[0].frontmatter.level - b.nodes[0].frontmatter.level)
    .map(({ nodes }) => (
      <div>
        <h2>Nível: {nodes[0].frontmatter.levelTitle}</h2>
        {nodes.map(node => (
          <div className="challenge">
            <h3 className="no-margin">
              <Link to={node.frontmatter.slug} style={{textDecoration: 'none'}}>{node.frontmatter.title}</Link>
            </h3>
            <p>
              <strong>Tags: </strong>
              {node.frontmatter.tags.split(",").map(tag => (
                <Tag type="cool-gray" title="Clear Filter">
                  {tag.toString().trim()}
                </Tag>
              ))}
            </p>
          </div>
        ))}
      </div>
    ))

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
