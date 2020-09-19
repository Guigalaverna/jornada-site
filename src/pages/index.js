import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import SignupForm from "../components/signupForm";

const IndexPage = () => (
  <Layout className="home">
    <SEO title="Home" />
    <section className="hero">
      <h1>Jornada Dev</h1>
      <p>
        Criando jornadas de aprendizados de ciências da computação e
        programação.
      </p>
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
    <SignupForm></SignupForm>
  </Layout>
)

export default IndexPage
