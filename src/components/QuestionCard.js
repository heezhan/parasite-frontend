import React from 'react';

class QuestionCard extends React.Component {
    render() {
        return (
            <div>
                {this.props.prompt.question}
                <br/>
                {this.props.prompt.description}
            </div>
        )
    }
}

export default QuestionCard