/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Button from '../src/components/Buton';

function LoadingWidget() {
    return (
      <Widget>
        <Widget.Header>
          Carregando...
        </Widget.Header>
  
        <Widget.Content>
          [Desafio do Loading]
        </Widget.Content>
      </Widget>
    );
  }

function QuestionWidget({ 
    question, 
    totalQuestions,
    questionIndex,
}) {
    return (
        <Widget>
            <Widget.Header>
                <h3>
                    {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
                </h3>
            </Widget.Header>
            
            <img 
                alt="Descrição"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                }}
                src={question.image}
            />

            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>

                <form>
                    {question.alternatives.forEach((alternative, alternativeIndex) => {
                        const alternativeId = `alternative_${alternativeIndex}`;
                        return (
                            <label
                                htmlFor={alternativeId}
                            >
                                {alternative}
                                <input
                                    id={alternativeId}
                                    type="radio"
                                />
                            </label>
                        );
                    })}

                    {/* <pre>
                        {JSON.stringify(question, null, 4)} 
                    </pre> */}

                    <Button type="submit">
                        Confirmar
                    </Button>
                </form>
            </Widget.Content>
        </Widget>
    );
}

export default function QuizPage() {
  console.log('Perguntas', db.questions);
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        
        <QuestionWidget 
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
        />
        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}
