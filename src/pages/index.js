import {
  Button,
  Form,
  TextInput,
  Grid,
  Row,
  Column,
} from "carbon-components-react"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignupForm from "../components/signupForm"
import CodeMinimap from "../components/code-minimap"

const IndexPage = () => {
  const [email, setEmail] = useState("")
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    setEmail(data.textEmail)
    console.log("submit", data)
  }

  return (
    <Layout className="home">
      <SEO title="Home" />
      <section className="hero">
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
      <section className="about">
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
      </section>
      <SignupForm email={email}></SignupForm>
    </Layout>
  )
}

export default IndexPage
