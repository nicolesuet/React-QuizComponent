import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      incorrectAnswer : false
    }
  }
  

  handleClick (buttonText) {
    if(buttonText == this.props.quiz_question.answer){
      this.setState({
        incorrectAnswer : false
      })
      this.props.showNextQuestionHandler()
    }
    else {
      this.setState({
        incorrectAnswer : true
      })
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
        <p className="error">{ this.state.incorrectAnswer ? "Sorry, that's not right" : null}</p>
      </main>

    )
  }
}

export default QuizQuestion;