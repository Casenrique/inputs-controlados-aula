import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")

  const onChangeName = (event) => {
    console.log("Mudei o input nome")
    console.log(event.target.value)
    setNome(event.target.value)
  }
  const onChangeIdade = (event) => {
    console.log("Mudei o input idade")
    console.log(event.target.value)
    setIdade(event.target.value)
  }
  const onChangeEmail = (event) => {
    console.log("Mudei o input email")
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  const enviarDados = () => {
    let dadosUsuario = {nome: nome, idade: idade, email: email}
    console.log(dadosUsuario)
    setNome("");
    setIdade("");
    setEmail("");
  }

  const apagarDados = () => {
    setNome("");
    setIdade("");
    setEmail("");
  }
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input type="text" onChange={onChangeName} value={nome} />
        </label>
        <label>
          Idade:
          <Input type="number" onChange={onChangeIdade} value={idade}/>
        </label>
        <label>
          E-mail:
          <Input type="email" onChange={onChangeEmail} value={email} />
        </label>
      <button onClick={enviarDados}>Enviar dados</button>
      <button onClick={apagarDados}>Limpar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage