import { useState } from 'react';
import React from 'react';
import 'modern-normalize';
import Statistics from '../StatisticsFeedback/Statistics';
import FeedbackOptions from '../FeedbackOptionsFolder/FeedbackOptions';
import Section from '../SectionFolder/Section';
import Notification from '../NotificationFolder/Notification';
import { Wrap } from './App.Styled';




export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0); 

 const onFeedbackAction = type => {
  
    switch(type){
      case 'good':
      return setGood(prevState => prevState + 1);   
       case 'neutral':
      return  setNeutral(prevState => prevState + 1);    
      case 'bad':
      return setBad(prevState => prevState + 1);   
      default:
        return
    }
}

    
  const countTotalFeedback = () => {
        const values = Object.values([good,neutral, bad]);
        return values.reduce((acc, value) => acc + value, 0);
     }
    
  const countPositiveFeedbackPercentage = (total, good) => {
  const percentage = Math.round((good / total) * 100);
    return percentage;
  };
  
    const total =  countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage(total, good);
    const options = ['good', 'neutral', 'bad'];
   
    return (
      <>
        <Wrap>
          <Section  title="Please leave feedback">
            <FeedbackOptions options={options} onLeaveFeedback={onFeedbackAction}></FeedbackOptions>
          </Section>
          <Section title="Statistics">
            { countTotalFeedback() ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} percentage={positivePercentage} />)
              : (<Notification message="There is no feedback"></Notification>)}            
          </Section>
       </Wrap>
    </>
  );
}

 

