import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

const TimerBidule = props => {
  const {Timing, Max, STYLE} = props;

  const [timerCount, setTimerCount] = useState(Max);
  const [activator, setActivator] = useState(Math.random());

  useEffect(() => {
    let interval;

    if (Timing) {
      interval = setInterval(() => {
        if (timerCount > 0) {
          setTimerCount(lastTimer => {
            lastTimer <= 1 && clearInterval(interval);
            return lastTimer - 1;
          });
        }
      }, 2000);
    }

    return () => {
      if (Timing) {
        clearInterval(interval);
      }
    };
  }, [activator]);

  return <Text style={STYLE}>{timerCount}</Text>;
};

export default TimerBidule;
