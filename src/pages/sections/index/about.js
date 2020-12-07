import React from "react"
import { Grid, Row, Column } from "carbon-components-react"

const SectionAbout = () => (
  <section className="section section-about">
    <Grid>
      <Row>
        <Column>
          <div>
            <h2>Sobre o projeto</h2>
            <p>explicar melhor sobre o projeto</p>
          </div>
          <div>
            <h2>Acreditamos que..</h2>
            <p>
              Explicar no que acreditamos e como esse projeto pode resolver a
              jornada de aprendizado de programação.
            </p>
          </div>
        </Column>
      </Row>
    </Grid>
  </section>
)

export default SectionAbout
