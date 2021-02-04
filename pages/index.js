import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
 
import InputBase from '../src/Input'
import db from '../db.json';
import Widget from '../src/Widget';
import QuizBackground from '../src/QuizBackground';
import Footer from '../src/Footer';
import GitHubCorner from '../src/GitHubCorner';
import Button from '../src/Button';

// const BackgroundImage = styled.div `
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

const QuizContainer = styled.div `
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`


export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('')

  const PageRouting = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura quiz - Modelo base</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
              <h1>Pokemon Generation</h1>
          </Widget.Header>
          <Widget.Content>
          <form onSubmit={PageRouting} >
            <InputBase
              name="nomeDoUsuario"
              placeholer='Digite seu nome aqui'
              onChange={(event) => {setName(event.target.value)}}
              value={name}
            />
            <Button type='submit' disabled={ name.length === 0 }>
              {`Jogar ${name}`}
            </Button>
          </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <ul>
              {db.external.map((linkExterno)=> {
                const [projetName, gitHubUser] = linkExterno
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic href={linkExterno}>
                      {`${gitHubUser}/${projetName}`}
                    </Widget.Topic>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget>
      <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  )
}
