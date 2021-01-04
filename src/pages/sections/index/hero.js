import React from "react"
import { useForm } from "react-hook-form"
import {
  Button,
  Form,
  TextInput,
  Grid,
  Row,
  Column,
} from "carbon-components-react"
import CodeMinimap from "../../../components/code-minimap"

const SectionHero = ({ formSubmit }) => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    formSubmit(data.textEmail)
    console.log("submit", data)
  }

  return (
    <section className="section section-hero hero">
      <Grid>
        <Row condensed>
          <Column>
            <div
              className=""
              style={{
                maxWidth: "300px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <CodeMinimap></CodeMinimap>
            </div>
          </Column>
          <Column>
            <h1>Jornada Dev</h1>

            <p>
              Entre em uma jornada de desafios para aprender ou aprimorar seus
              conhecimentos de programação e ciências da computação.
            </p>

            <p style={{ fontStyle: "italic" }}>
              Você não precisa pagar nada! 100% gratuito.
            </p>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ display: "flex" }}>
                <TextInput
                  id="textEmail"
                  name="textEmail"
                  type="email"
                  labelText=""
                  invalidText="Você precisa informar o seu nome."
                  placeholder="Seu email"
                  ref={register({
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  })}
                  invalid={errors.textEmail}
                />
                <Button
                  kind="primary"
                  size="field"
                  tabIndex={0}
                  type="submit"
                  style={{ "max-height": "2.5rem" }}
                >
                  Iniciar jornada
                </Button>
              </div>
            </Form>
          </Column>
        </Row>
      </Grid>
    </section>
  )
}

export default SectionHero
