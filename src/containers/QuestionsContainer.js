import React from 'react';
import data from '../db';
import QuestionCard from '../components/QuestionCard';

const QuestionsContainer = () => {
    return (
        <div>
            {data.map(prompt => <QuestionCard prompt={prompt}/>)}
        </div>

    )
}

export default QuestionsContainer