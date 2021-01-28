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

// const BackgroundImage = styled.div `
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

export const QuizContainer = styled.div `
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
          <p>lorem ipsum dolor sit amet...</p>
          <form onSubmit={PageRouting} >
            <InputBase 
              placeholder='Digite seu nome aqui'
              onChange={function (event) {
                setName(event.target.value)
              }}
            />
            <button type='submit' disabled={ name.length === 0 }>
              Jogar
               {name}
            </button>
          </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
          <h1>Quizez da galera</h1>

          <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
      <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  )
}
