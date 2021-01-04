import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignupForm from "./sections/index/signupForm"

// Sections
import SectionAbout from "./sections/index/about"
import SectionHero from "./sections/index/hero"

const IndexPage = () => {
  const [email, setEmail] = useState("")
  const onSubmit = e => setEmail(e) // email from component

  return (
    <Layout className="home">
      <SEO title="Home" />
      <SectionHero formSubmit={onSubmit}></SectionHero>
      <SectionAbout></SectionAbout>
      <SignupForm email={email}></SignupForm>
    </Layout>
  )
}

export default IndexPage
