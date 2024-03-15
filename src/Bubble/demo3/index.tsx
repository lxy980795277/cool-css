import React, { useEffect } from 'react';
import './index.less';

const Demo3: React.FC = () => {

  const getRandomBubble = (): void => {
    const bubbleNumber = 5;
    const bubbleContainer = document.getElementsByClassName('bubble-demo3-footer')?.[0];
    const width = bubbleContainer.clientWidth;
    for (let i = 0; i < bubbleNumber; i++) {
      const newBubble = document.createElement('div');
      newBubble.className = 'bubble-demo3-element';
      const diameter = Math.random() * (150 - 40) + 40;
      const left = Math.random() * (width - diameter);
      const animationTime = Math.random() + 1;

      newBubble.style.setProperty('--bubble-demo3-diameter', `${diameter}px`);
      newBubble.style.setProperty('--bubble-demo3-left', `${left}px`);
      newBubble.style.setProperty('--bubble-demo3-animation-time', `${animationTime}s`);
      bubbleContainer.appendChild(newBubble);
    }
  }

  useEffect(() => {
    const interval = setInterval(getRandomBubble, 1500);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className='bubble-demo3-container'>
      <div className='bubble-demo3-footer'>
        <div className='bubble-demo3-element'></div>
      </div>
    </div >
  )


};

export default Demo3;

