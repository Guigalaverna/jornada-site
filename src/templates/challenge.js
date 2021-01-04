import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Column, Grid, Row } from "carbon-components-react"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout className="challenge-template">
      <SEO title="Home" />
      <section className="challenge-template-container">
        <Grid>
          <Row>
            <Column>
              <span class="challenge-template-title">Desafio:</span>
              <h1>{frontmatter.title}</h1>
              <div
                className="challenge-template-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </Column>
          </Row>
        </Grid>
      </section>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
