/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';

import { Container } from './styles';
import story1 from '../../assets/story.gif';
import story2 from '../../assets/story2.gif';

function Stories() {
  const arrayStories = [story1, story2];
  const [story, setStory] = useState('');
  const [count, setCount] = useState(10);
  const [pos, setPos] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(count - 1);
      if (count === 0) {
        setPos(0);
        setCount(10);
      } else {
        setPos(pos + 1);
      }
    }, 10000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setStory(arrayStories[pos]);
    console.log('oi');
  }, [pos]);

  return (
    <Container>
      <img src={story} alt="story" />
    </Container>
  );
}

export default Stories;
