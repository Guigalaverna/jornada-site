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

const SectionHero = ({formSubmit}) => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    formSubmit(data.textEmail)
    console.log("submit", data)
  }

  return (
    <section className="section section-hero hero">
      <Grid>
        <Row>
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
              Entre em uma jornada de desafios para se tornar um melhor
              desenvolvedora ou desenvolvedor.
            </p>
            <p>Você não precisa pagar nada! 100% gratuito.</p>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Grid>
                <Row condensed>
                  <Column>
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
                  </Column>
                  <Column>
                    <Button
                      kind="primary"
                      size="field"
                      tabIndex={0}
                      type="submit"
                    >
                      Iniciar jornada
                    </Button>
                  </Column>
                </Row>
              </Grid>
            </Form>
          </Column>
        </Row>
      </Grid>
    </section>
  )
}

export default SectionHero
