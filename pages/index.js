/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
 
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Buton';


/*const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;*/

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>PHP Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>#PHP Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <h1>Teste os seus conhecimentos sobre a linguagem PHP e divirta-se!</h1>

              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome para jogar"
                value={name}
              />
              <br />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>

            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão React fez:</p>

            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');
                  
                return (
                  <li key={linkExterno}>
                    <Widget.Topic 
                      href={linkExterno} 
                      target="blank"
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/nath4ns" />
    </QuizBackground>
  );
}
