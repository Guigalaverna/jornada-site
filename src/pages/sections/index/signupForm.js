import React, { useState } from "react"
import {
  Button,
  Checkbox,
  Form,
  FormGroup,
  FormLabel,
  MultiSelect,
  Select,
  SelectItem,
  TextInput,
  ToastNotification,
  Grid,
  Row,
  Column,
} from "carbon-components-react"
import { useForm } from "react-hook-form"
import Axios from "axios"

const items = [
  {
    id: "php",
    label: "PHP",
  },
  {
    id: "javascript",
    label: "Javascript",
  },
  {
    id: "react",
    label: "React",
  },
  {
    id: "html",
    label: "HTML",
  },
  {
    id: "css",
    label: "CSS",
  },
  {
    id: "sass",
    label: "SASS",
  },
  {
    id: "gatsbyjs",
    label: "Gatsby.js",
  },
  {
    id: "deno",
    label: "Deno",
  },
  {
    id: "nodejs",
    label: "Nodejs",
  },
  {
    id: "java",
    label: "Java",
  },
  {
    id: "django",
    label: "Django",
  },
  {
    id: "nextjs",
    label: "NextJS",
  },
  {
    id: "electron",
    label: "Electron",
  },
  {
    id: "spring",
    label: "Spring",
  },
  {
    id: "c#",
    label: "C#",
  },
  {
    id: "c",
    label: "C",
  },
  {
    id: "c++",
    label: "C++",
  },
  {
    id: "kotlin",
    label: "Kotlin",
  },
  {
    id: "scala",
    label: "Scala",
  },
  {
    id: "ruby",
    label: "Ruby",
  },
  {
    id: "typescript",
    label: "Typescript",
  },
]

export default function SignupForm({ email }) {
  const { register, handleSubmit, errors, setValue } = useForm()
  const [submitError, setSubmitError] = useState(false)
  const onSubmit = async data => {
    console.log("submit", data)

    const [name, ...lastName] = data.textName.split(" ")

    const formData = Object.entries({
      "mauticform[nome]": name,
      "mauticform[sobrenome]": lastName.join(" "),
      "mauticform[email]": data.textEmail,
      "mauticform[nivel_da_jornada]": data.selectLevel,
      "mauticform[optin][]": data.checkNewsletter ? "newsletter" : "",
      "mauticform[formId]": 6,
      "mauticform[return]": "",
      "mauticform[formName]": "jornadadev",
      "mauticform[messenger]": "1",

      // TODO: o multiselect não esta funcionando, possivelmente um conflito com o component do carbon
      // 'mauticform[tecnologias]': data.selectTechnologies,
    })
      .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
      .join("&")

    try {
      await Axios.post(
        "https://marketing.obrunogermano.com/index.php/form/submit?formId=6",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      )
    } catch (err) {
      setSubmitError(true)
      console.error(err)
    }
  }

  if (email) {
    setValue("textEmail", email, {
      shouldValidate: true,
      shouldDirty: true,
    })
  }

  return (
    <section className="section section-signup">
      <Grid>
        <Row>
          <Column>
            <h2>Aprenda ou evolua suas habilidades</h2>
            <p>
              Se junte a programadoras e programadores que estão
              melhorando seus conhecimentos de ciências da computação e
              programação através de pequenos desafios.
            </p>
          </Column>
        </Row>
        <Row>
          <Column>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Column>
                  <FormGroup legendText="">
                    <TextInput
                      id="textName"
                      name="textName"
                      invalidText="Você precisa informar o seu nome."
                      labelText="Nome"
                      placeholder="Maria Silva"
                      ref={register({ required: true })}
                      invalid={errors.textName}
                    />
                  </FormGroup>
                </Column>
                <Column>
                  <FormGroup legendText="">
                    <TextInput
                      id="textEmail"
                      name="textEmail"
                      type="email"
                      invalidText="Você precisa informar o seu melhor e-mail."
                      labelText="E-mail"
                      placeholder="maria.silva@email.com.br"
                      ref={register({
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      })}
                      invalid={errors.textEmail}
                    />
                  </FormGroup>
                </Column>
              </Row>
              <Row>
                <Column>
                  <FormGroup legendText="">
                    <Select
                      id="selectLevel"
                      name="selectLevel"
                      invalidText="Selecione o nível da sua jornada."
                      labelText="Nível da Jornada"
                      helperText="Qual o nível dos desafios que você quer receber na sua jornada de aprendizado de prorgamação."
                      ref={register({ required: true })}
                      invalid={errors.selectLevel}
                    >
                      <SelectItem text="" value="" />
                      <SelectItem text="Iniciante" value="iniciante" />
                      <SelectItem text="Intermediário" value="intemediario" />
                      <SelectItem text="Avançado" value="avancado" />
                    </Select>
                  </FormGroup>
                </Column>
                <Column>
                  <FormGroup legendText="">
                    <MultiSelect
                      id="selectTechnologies"
                      name="selectTechnologies"
                      items={items}
                      label="Quais tecnologias você já conhece?"
                      titleText="Suas tecnologias"
                      helperText="Selecione as tecnologias que você já conhece não importa o seu nível de experiência."
                      ref={register}
                      invalidText="Selecione os suas tecnologias."
                      invalid={errors.selectTechnologies}
                    />
                  </FormGroup>
                </Column>
              </Row>

              <FormGroup legendText="">
                <fieldset className="bx--fieldset">
                  <Checkbox
                    defaultChecked
                    labelText="Quero receber novidades e dicas por email"
                    id="checkNewsletter"
                    name="checkNewsletter"
                    ref={register}
                  />
                  <Checkbox
                    labelText="Concordo com a Políticas de Privacidade"
                    id="checkPrivacyPolices"
                    name="checkPrivacyPolices"
                    ref={register({ required: true })}
                  />
                  {errors.checkPrivacyPolices && (
                    <FormLabel className="label--error">
                      Para prosseqguir concorde com as nossas políticas
                    </FormLabel>
                  )}
                </fieldset>
              </FormGroup>

              <Button kind="primary" tabIndex={0} type="submit">
                Começar
              </Button>
            </Form>
          </Column>
        </Row>
      </Grid>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
      >
        {submitError ? (
          <ToastNotification
            caption=""
            kind="error"
            hideCloseButton={true}
            subtitle={
              <span>Ocorreu um erro no servidor ao enviar os seus dados.</span>
            }
            timeout={20 * 1000}
            title="Erro inesperado"
          />
        ) : (
          ""
        )}
      </div>
    </section>
  )
}
