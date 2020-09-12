import React from "react"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Feito com ❤ por{" "}
    <a href="https://egermano.com">Bruno Germano</a> e muitas outras{" "}
    <a href="https://github.com/obg-lab/jornada-site">pessoas legais</a>
    {` `}
    usando
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)


export default Footer;