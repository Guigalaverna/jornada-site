import React from "react"
import { Grid, Row, Column } from "carbon-components-react"

const Footer = () => (
  <footer className="footer-main">
    <Grid>
      <Row>
        <Column>
          © 2020-{new Date().getFullYear()}, Feito com ❤ por{" "}
          <a href="https://egermano.com">Bruno Germano</a> e muitas outras{" "}
          <a href="https://github.com/obg-lab/jornada-site">pessoas legais</a>
          {` `}
          usando
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Column>
      </Row>
    </Grid>
  </footer>
)

export default Footer
