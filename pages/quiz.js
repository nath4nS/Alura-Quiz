import React from 'react';
import { QuizContainer } from '.';
import db from '../db.json';

import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';

export default function QuizPage() {
    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <Widget>
                    <Widget.Header>
                        <h1>PHP</h1>
                    </Widget.Header>
                    <Widget.Content>
                        <p> Projeto em desenvolvimento.</p>
                    </Widget.Content>
            </Widget>
            <Footer />
        </QuizContainer>
        </QuizBackground>
    )
}