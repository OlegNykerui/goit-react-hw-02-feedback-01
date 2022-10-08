import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import {
  Wrapper,
  Section,
  Title,
} from './FeedbackOptions/FeedbackOptions.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  onLeaveFeedback = e => {
    this.setState(prevState => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positivePercentage = total
      ? Math.round((this.state.good / total) * 100)
      : 0;
    return positivePercentage;
  }

  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    const feedback = Object.keys(this.state);
    const positivePerc = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Title>Feedback book</Title>
        <Wrapper>
          <Section title="Please leave a feedback">
            <FeedbackOptions
              options={feedback}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          <section title="Statistics">
            {!total ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePerc}
              />
            )}
          </section>
        </Wrapper>
      </>
    );
  }
}
