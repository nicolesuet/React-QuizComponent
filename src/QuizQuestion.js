import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

  handleClick (buttonText) {
    if(buttonText == this.props.quiz_question.answer){
      this.props.showNextQuestionHandler()
    }
  }

  render() {

    const answers = this.props.quiz_question.answer_options.map((answer, key) =>
      <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key= {key} button_text={answer}/>
    );

    return (
        <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {answers}
          </ul>
        </section>
      </main>

    )
  }
}

export default QuizQuestion;